import React, { useState } from 'react';

const Daw = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<{ tempo: number, key: number } | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setFile(selected);

    const formData = new FormData();
    formData.append("file", selected);

    const res = await fetch("http://localhost:8000/vocals/analyze", {
      method: "POST",
      body: formData,
    });

    const json = await res.json();
    setAnalysis(json);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🎛️ Garcias Studio DAW</h1>

      <input type="file" accept="audio/*" onChange={handleFileChange} />
      
      {analysis && (
        <div style={{ marginTop: "1rem" }}>
          <p><strong>Tempo:</strong> {analysis.tempo} BPM</p>
          <p><strong>Key:</strong> {analysis.key}</p>
        </div>
      )}

      {/* Future: waveform canvas, track editor, FX mixer */}
    </div>
  );
};

export default Daw;
