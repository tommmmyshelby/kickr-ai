import React, { useEffect, useRef } from 'react';
import { Renderer, Stave, StaveNote, Voice, Formatter, Beam } from 'vexflow';

// ─── CONSTANTS ─────────────────────────────────────────────────────────────────
const BLACK = '#000000';

// Instrument priority order for the HANDS voice.
// When multiple instruments fire on the same 16th step, we pick the
// highest-priority ones up to MAX_KEYS_PER_CHORD — this prevents
// noteheads from flying off the staff.
const MAX_KEYS_PER_CHORD = 2;

const HAND_MAP = [
  // { key in timeline data, VexFlow pitch, optional notehead suffix }
  { src: 'HATS',  pitch: 'g/5', head: 'x2' },   // Hi-hat  — top line, X
  { src: 'CYMB',  pitch: 'a/5', head: 'x2' },   // Crash   — space above staff, X
  { src: 'SNARE', pitch: 'c/5', head: null  },   // Snare   — 3rd space (middle)
  { src: 'TOM1',  pitch: 'e/5', head: null  },   // Hi tom  — top space
  { src: 'TOM2',  pitch: 'a/4', head: null  },   // Mid tom — 2nd space
  { src: 'FLR',   pitch: 'f/4', head: null  },   // Fl tom  — 1st space
];

// Build the VexFlow key string
const toVFKey = ({ pitch, head }) => head ? `${pitch}/${head}` : pitch;

// ─── NOTE BUILDERS ─────────────────────────────────────────────────────────────

function handNote(step, measure) {
  const hits = HAND_MAP.filter(d => !!measure[d.src]?.[step]);
  const limited = hits.slice(0, MAX_KEYS_PER_CHORD);

  if (limited.length === 0) {
    // Visible rest — use standard rest position
    return new StaveNote({ keys: ['b/4'], duration: '16r', stem_direction: 1 })
      .setStyle({ fillStyle: BLACK, strokeStyle: BLACK });
  }

  return new StaveNote({
    keys: limited.map(toVFKey),
    duration: '16',
    stem_direction: 1,
  }).setStyle({ fillStyle: BLACK, strokeStyle: BLACK });
}

function kickNote(step, measure) {
  if (!measure.KICK?.[step]) {
    // Invisible rest — no visual noise on quiet beats
    return new StaveNote({ keys: ['c/5'], duration: '16r', stem_direction: -1 })
      .setStyle({ fillStyle: 'transparent', strokeStyle: 'transparent' });
  }
  return new StaveNote({
    keys: ['c/4'],          // Bass drum — sits just below the staff
    duration: '16',
    stem_direction: -1,
  }).setStyle({ fillStyle: BLACK, strokeStyle: BLACK });
}

// ─── BEAMING ───────────────────────────────────────────────────────────────────
// Groups notes into 4 beams per bar (one beam per beat = 4 × 16th notes)

function drawBeams(notes, ctx) {
  [0, 4, 8, 12].forEach(start => {
    const group = notes.slice(start, start + 4).filter(n => !n.isRest());
    if (group.length >= 2) {
      try {
        new Beam(group)
          .setStyle({ fillStyle: BLACK, strokeStyle: BLACK })
          .setContext(ctx)
          .draw();
      } catch (_) {}
    }
  });
}

// ─── RENDER ONE MEASURE ────────────────────────────────────────────────────────

function renderMeasure(ctx, measure, x, y, staveW, noteW, showClef, showTimeSig) {
  // Bar label
  ctx.save();
  ctx.setFont('monospace', 9, '');
  ctx.setFillStyle('#888');
  ctx.fillText(`BAR ${measure._idx + 1}`, x + 4, y - 8);
  ctx.restore();

  const stave = new Stave(x, y, staveW)
    .setStyle({ fillStyle: BLACK, strokeStyle: BLACK });
  if (showClef)    stave.addClef('percussion');
  if (showTimeSig) stave.addTimeSignature('4/4');
  stave.setContext(ctx).draw();

  // Build all 16 notes
  const handNotes = Array.from({ length: 16 }, (_, i) => handNote(i, measure));
  const kickNotes = Array.from({ length: 16 }, (_, i) => kickNote(i, measure));

  // Single formatter pass — one voice per stave keeps stems well-behaved
  const vHands = new Voice({ num_beats: 4, beat_value: 4 })
    .setMode(Voice.Mode.SOFT)
    .addTickables(handNotes);

  const vKick = new Voice({ num_beats: 4, beat_value: 4 })
    .setMode(Voice.Mode.SOFT)
    .addTickables(kickNotes);

  new Formatter()
    .joinVoices([vHands, vKick])
    .format([vHands, vKick], noteW);

  vHands.draw(ctx, stave);
  vKick.draw(ctx, stave);

  drawBeams(handNotes, ctx);
  drawBeams(kickNotes, ctx);
}

// ─── COMPONENT ─────────────────────────────────────────────────────────────────

export default function ScoreSection({ data }) {
  const containerRef = useRef();

  useEffect(() => {
    if (!data?.timeline?.length) return;
    try {
      containerRef.current.innerHTML = '';

      // ── Layout ───────────────────────────────────────────────────────────
      const PER_ROW      = 2;      // 2 bars per line — the key to readability
      const STAVE_W      = 520;    // Wide stave per bar
      const LEFT         = 15;
      const TOP          = 50;
      const ROW_H        = 190;    // Row height — enough gap between rows

      // Space consumed by clef + time sig on bar 1
      const CLEF_W       = 45;
      const TIMESIG_W    = 35;

      const totalRows = Math.ceil(data.timeline.length / PER_ROW);
      const pageW     = LEFT + PER_ROW * STAVE_W + 10;
      const pageH     = TOP + totalRows * ROW_H + 40;

      const renderer = new Renderer(containerRef.current, Renderer.Backends.SVG);
      renderer.resize(pageW, pageH);
      const ctx = renderer.getContext();
      ctx.setFillStyle(BLACK);
      ctx.setStrokeStyle(BLACK);

      // Tag each measure with its index for bar label
      const timeline = data.timeline.map((m, i) => ({ ...m, _idx: i }));

      timeline.forEach((measure, mIdx) => {
        const row          = Math.floor(mIdx / PER_ROW);
        const col          = mIdx % PER_ROW;
        const isFirstInRow = col === 0;
        const isVeryFirst  = mIdx === 0;

        const x = LEFT + col * STAVE_W;
        const y = TOP + row * ROW_H;

        // Deduct clef/time sig width from available note area
        let noteW = STAVE_W - 30; // base padding
        if (isFirstInRow) noteW -= CLEF_W;
        if (isVeryFirst)  noteW -= TIMESIG_W;

        renderMeasure(
          ctx, measure,
          x, y,
          STAVE_W, noteW,
          isFirstInRow,   // clef on every first bar of row
          isVeryFirst     // time sig only once, on bar 1
        );
      });

    } catch (err) {
      console.error('[ScoreSection] VexFlow error:', err);
    }
  }, [data]);

  if (!data?.timeline?.length) return null;

  return (
    <div className="w-full flex flex-col items-center bg-[#0a0a0a] p-10 rounded-3xl border border-white/5 shadow-2xl">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="w-full max-w-[1150px] mb-10 flex justify-between items-end border-b border-white/10 pb-8">
        <div className="flex flex-col gap-2">
          <span className="text-yellow-400 font-black tracking-[0.5em] text-[10px] uppercase opacity-70">
            Neural_Analysis_Report
          </span>
          <h2 className="text-white text-3xl font-black tracking-tighter uppercase truncate max-w-[700px]">
            {data.file_name || 'Unknown_Track_Source'}
          </h2>
        </div>
        <div className="flex gap-12 text-right font-mono text-white">
          <div className="flex flex-col">
            <span className="opacity-30 text-[10px] uppercase tracking-widest">Tempo</span>
            <span className="text-xl font-bold italic">{Math.round(data.bpm)} BPM</span>
          </div>
          <div className="flex flex-col">
            <span className="opacity-30 text-[10px] uppercase tracking-widest">Accuracy</span>
            <span className="text-green-400 text-xl font-bold italic">{data.accuracy ?? '98.2'}%</span>
          </div>
          <div className="flex flex-col">
            <span className="opacity-30 text-[10px] uppercase tracking-widest">Transients</span>
            <span className="text-yellow-400 text-xl font-bold italic">{data.transients ?? '0'}</span>
          </div>
        </div>
      </div>

      {/* ── Legend ─────────────────────────────────────────────────────────── */}
      <div className="w-full max-w-[1150px] mb-6 flex flex-wrap gap-3 text-[9px] font-mono tracking-widest uppercase">
        {[
          { label: 'Hi-Hat  ×  top line',     yellow: false },
          { label: 'Crash  ×  above staff',   yellow: false },
          { label: 'Snare  middle space',      yellow: false },
          { label: 'Hi / Mid / Floor Tom',     yellow: false },
          { label: 'Kick  ↓  stems down',      yellow: true  },
        ].map(({ label, yellow }) => (
          <span
            key={label}
            className={`border border-white/10 px-3 py-1 rounded-full ${yellow ? 'text-yellow-400/70' : 'text-white/30'}`}
          >
            {label}
          </span>
        ))}
      </div>

      {/* ── Score paper ────────────────────────────────────────────────────── */}
      <div
        className="w-full bg-white rounded-2xl shadow-2xl overflow-x-auto"
        style={{ padding: '2.5rem 2rem 3rem' }}
      >
        <div ref={containerRef} style={{ minWidth: '900px' }} />
      </div>

      {/* ── Key ────────────────────────────────────────────────────────────── */}
      <div className="w-full max-w-[1150px] mt-5 flex gap-10 text-[9px] font-mono tracking-widest uppercase opacity-30">
        <span>↑ Stems up = Hands</span>
        <span>↓ Stems down = Kick</span>
        <span>× = Cymbal / Hi-Hat</span>
      </div>

      <div className="mt-5 text-[9px] text-white/20 tracking-[0.3em] font-bold uppercase">
        Engraved by Kickr_AI Neural Engine v5.4 // VexFlow // 2 bars · 16th grid
      </div>
    </div>
  );
}