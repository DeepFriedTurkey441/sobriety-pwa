"use client";

import { useState } from "react";

export default function ReflectPage() {
  const [mood, setMood] = useState(3);
  const [energy, setEnergy] = useState(3);
  const [craving, setCraving] = useState(3);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState<string | null>(null);

  function handleSave() {
    const entry = {
      date: new Date().toISOString().slice(0, 10),
      mood,
      energy,
      craving,
      note: note.trim() || null,
      created_at: new Date().toISOString(),
    };
    // Local-only stub for now; later we'll sync to Supabase
    const key = "reflect.local.entries";
    const prev = JSON.parse(localStorage.getItem(key) || "[]");
    prev.unshift(entry);
    localStorage.setItem(key, JSON.stringify(prev).slice(0, 50000));
    setSaved("Saved locally. Sync coming next.");
    setTimeout(() => setSaved(null), 2500);
  }

  return (
    <div style={{ padding: 24, maxWidth: 720 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Reflect</h1>

      <label style={{ display: "block", marginBottom: 8 }}>Mood: {mood}</label>
      <input
        type="range"
        min={1}
        max={5}
        value={mood}
        onChange={(e) => setMood(Number(e.target.value))}
        style={{ width: "100%", marginBottom: 16 }}
      />

      <label style={{ display: "block", marginBottom: 8 }}>Energy: {energy}</label>
      <input
        type="range"
        min={1}
        max={5}
        value={energy}
        onChange={(e) => setEnergy(Number(e.target.value))}
        style={{ width: "100%", marginBottom: 16 }}
      />

      <label style={{ display: "block", marginBottom: 8 }}>Craving: {craving}</label>
      <input
        type="range"
        min={1}
        max={5}
        value={craving}
        onChange={(e) => setCraving(Number(e.target.value))}
        style={{ width: "100%", marginBottom: 16 }}
      />

      <label style={{ display: "block", marginBottom: 8 }}>Note (optional)</label>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={4}
        style={{ width: "100%", marginBottom: 16 }}
      />

      <button
        onClick={handleSave}
        style={{
          padding: "10px 16px",
          borderRadius: 8,
          border: "1px solid #e5e7eb",
          background: "#111827",
          color: "white",
          fontWeight: 600,
        }}
      >
        Save reflection (local)
      </button>

      {saved ? (
        <div style={{ marginTop: 12, color: "#065f46" }}>{saved}</div>
      ) : null}
    </div>
  );
}


