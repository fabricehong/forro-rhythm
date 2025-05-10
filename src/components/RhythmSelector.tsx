import React from 'react';

const RhythmSelector: React.FC<{ selected: string; onChange: (r: string) => void }> = ({ selected, onChange }) => {
  const rythmes = ['Xote', 'Baião', 'Forró/Rojão', 'Xaxado', 'Arrastapé'];
  return (
    <div style={{ textAlign: 'center', margin: '1rem 0' }}>
      <label htmlFor="rythme-select">Choisis un rythme : </label>
      <select id="rythme-select" value={selected} onChange={e => onChange(e.target.value)}>
        {rythmes.map(r => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>
    </div>
  );
};

export default RhythmSelector; 