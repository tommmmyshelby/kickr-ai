import React, { useEffect, useRef, useState } from 'react';
import { Renderer, Stave, StaveNote, Voice, Formatter, Articulation, Beam } from 'vexflow';
import { motion } from 'framer-motion';

export default function ScoreSection({ data, currentTime }) {
  const containerRef = useRef();
  const [notePositions, setNotePositions] = useState([]);

  useEffect(() => {
    // 1. SAFETY CHECK: If no data or timeline, do nothing
    if (!data || !data.timeline || !Array.isArray(data.timeline)) return;

    try {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }

      const renderer = new Renderer(containerRef.current, Renderer.Backends.SVG);
      const measureWidth = 280;
      const totalWidth = data.timeline.length * measureWidth + 100;
      
      renderer.resize(totalWidth, 200);
      const context = renderer.getContext();
      const positions = [];

      data.timeline.forEach((measure, mIdx) => {
        const stave = new Stave(10 + (mIdx * measureWidth), 40, measureWidth);
        
        // Add Clef and Time only to the first measure
        if (mIdx === 0) stave.addClef('percussion').addTimeSignature('4/4');
        
        stave.setContext(context).draw();

        const notes = [];
        for (let i = 0; i < 16; i++) {
          const keys = [];
          let isOpen = false;

          // Mapping logic
          if (measure.CYMB?.[i]) keys.push('a/5/x2');
          if (measure["O-HAT"]?.[i]) { keys.push('g/5/x'); isOpen = True; }
          if (measure.HATS?.[i] && !isOpen) keys.push('g/5/x');
          if (measure.SNARE?.[i]) keys.push('c/5');
          if (measure.TOMS?.[i]) keys.push('e/5');
          if (measure.KICK?.[i]) keys.push('f/4');

          const isRest = keys.length === 0;
          const note = new StaveNote({
            clef: 'percussion',
            keys: isRest ? ['b/4'] : keys,
            duration: isRest ? '16r' : '16',
          });

          if (isOpen) note.addModifier(new Articulation('ao').setPosition(3), 0);
          notes.push(note);
        }

        const voice = new Voice({ num_beats: 4, beat_value: 4 }).setMode(Voice.Mode.SOFT);
        voice.addTickables(notes);
        new Formatter().joinVoices([voice]).format([voice], measureWidth - 50);
        voice.draw(context, stave);
        
        // Generate Beams (The horizontal lines)
        const beams = Beam.generateBeams(notes);
        beams.forEach((b) => b.setContext(context).draw());

        // Save X-coordinates for the playhead
        notes.forEach((n, nIdx) => {
          positions.push({
            x: n.getAbsoluteX(),
            time: (mIdx * (60 / data.bpm) * 4) + (nIdx * (60 / data.bpm / 4))
          });
        });
      });

      setNotePositions(positions);
    } catch (err) {
      console.error("VexFlow Render Error:", err);
    }
  }, [data]);

  // Find the X position of the current time in the song
  const getPlayheadX = () => {
    if (notePositions.length === 0) return -100;
    const closest = notePositions.reduce((prev, curr) => 
      Math.abs(curr.time - currentTime) < Math.abs(prev.time - currentTime) ? curr : prev
    );
    return closest.x;
  };

  return (
    <div className="relative w-full overflow-x-auto bg-white p-10 rounded-[2.5rem] border-4 border-yellow-400 min-h-[250px] custom-scrollbar shadow-2xl">
      <div ref={containerRef} className="relative" />
      
      {/* THE MOVING PLAYHEAD (VERTICAL LINE) */}
      <motion.div 
        animate={{ x: getPlayheadX() }}
        transition={{ duration: 0.1, ease: "linear" }}
        className="absolute top-0 bottom-0 w-1 bg-yellow-500/40 border-x border-yellow-600 z-10 pointer-events-none"
        style={{ left: 0 }}
      />
    </div>
  );
}