import React, { useEffect, useRef, useState } from 'react';
import { Renderer, Stave, StaveNote, Voice, Formatter, Articulation, Beam } from 'vexflow';
import { motion } from 'framer-motion';

export default function ScoreSection({ data, currentTime }) {
  const containerRef = useRef();
<<<<<<< HEAD
  const scrollRef = useRef();
  const [notePositions, setNotePositions] = useState([]);
  const [scoreHeight, setScoreHeight] = useState(500);

  useEffect(() => {
    if (!data || !data.timeline || !Array.isArray(data.timeline)) return;

    try {
      if (containerRef.current) containerRef.current.innerHTML = '';

      const renderer = new Renderer(containerRef.current, Renderer.Backends.SVG);
      
      // CONFIGURATION FOR "BIG" LOOK
      const pageWidth = 1000; // Matches standard document width
      const measureWidth = 230; 
      const measuresPerLine = 4;
      const rowHeight = 150;
      const totalLines = Math.ceil(data.timeline.length / measuresPerLine);
      const totalHeight = (totalLines * rowHeight) + 150;
      
      setScoreHeight(totalHeight);
      renderer.resize(pageWidth, totalHeight);
      const context = renderer.getContext();
      context.scale(1.2, 1.2); // Scale up the notation to make it "Big"
      
      const positions = [];

      data.timeline.forEach((measure, mIdx) => {
        // Calculate Row and Column for wrapping
        const lineNr = Math.floor(mIdx / measuresPerLine);
        const colNr = mIdx % measuresPerLine;
        
        const x = 50 + (colNr * measureWidth);
        const y = 80 + (lineNr * rowHeight);

        const stave = new Stave(x, y, measureWidth);
        
        // Add Clef and Time only at the start of each line
        if (colNr === 0) {
          stave.addClef('percussion');
          if (lineNr === 0) stave.addTimeSignature('4/4');
        }
=======
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
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
        
        stave.setContext(context).draw();

        const notes = [];
        for (let i = 0; i < 16; i++) {
          const keys = [];
          let isOpen = false;

<<<<<<< HEAD
          if (measure.CYMB?.[i]) keys.push('a/5/x2');
          if (measure["O-HAT"]?.[i]) { keys.push('g/5/x'); isOpen = true; }
=======
          // Mapping logic
          if (measure.CYMB?.[i]) keys.push('a/5/x2');
          if (measure["O-HAT"]?.[i]) { keys.push('g/5/x'); isOpen = True; }
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
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
        
<<<<<<< HEAD
        const beams = Beam.generateBeams(notes);
        beams.forEach((b) => b.setContext(context).draw());

        // Save Coordinates for the Playhead
        notes.forEach((n, nIdx) => {
          const beatDuration = 60 / data.bpm;
          const stepDuration = (beatDuration * 4) / 16;

          positions.push({
            x: (n.getAbsoluteX() * 1.2), // Adjust for scaling
            y: (y * 1.2),               // Adjust for scaling
            time: (mIdx * beatDuration * 4) + (nIdx * stepDuration)
=======
        // Generate Beams (The horizontal lines)
        const beams = Beam.generateBeams(notes);
        beams.forEach((b) => b.setContext(context).draw());

        // Save X-coordinates for the playhead
        notes.forEach((n, nIdx) => {
          positions.push({
            x: n.getAbsoluteX(),
            time: (mIdx * (60 / data.bpm) * 4) + (nIdx * (60 / data.bpm / 4))
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
          });
        });
      });

      setNotePositions(positions);
    } catch (err) {
      console.error("VexFlow Render Error:", err);
    }
  }, [data]);

<<<<<<< HEAD
  // Playhead coordinate logic
  const getPlayheadPos = () => {
    if (notePositions.length === 0) return { x: -100, y: 0 };
    const closest = notePositions.reduce((prev, curr) => 
      Math.abs(curr.time - currentTime) < Math.abs(prev.time - currentTime) ? curr : prev
    );
    return { x: closest.x, y: closest.y };
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* DOCUMENT PAPER */}
      <div 
        ref={scrollRef}
        className="relative w-full max-w-[1100px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500"
        style={{ minHeight: '600px' }}
      >
        {/* SONG TITLE - BIG LIKE IN PHOTO */}
        <div className="pt-16 pb-10 text-center border-b border-gray-100 mx-20">
          <h2 className="text-4xl font-light tracking-tight text-black normal-case">
            {data.file_name || "Neural Transcription"}
          </h2>
          <p className="text-gray-400 text-[10px] mt-4 tracking-[0.5em] font-bold">KICKR AI // SCORE_OUTPUT</p>
        </div>

        <div className="p-10 flex justify-center">
          <div ref={containerRef} className="relative" />
        </div>

        {/* DYNAMIC PLAYHEAD BOX (The yellow cursor) */}
        <motion.div 
          animate={{ x: getPlayheadPos().x, y: getPlayheadPos().y }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          className="absolute w-8 h-24 bg-yellow-500/20 border-x-2 border-yellow-500 pointer-events-none z-10"
          style={{ top: 0, left: 0, marginTop: '75px', transformOrigin: 'center' }}
        />
      </div>
=======
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
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
    </div>
  );
}