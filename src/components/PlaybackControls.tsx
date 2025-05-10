import React from 'react';

interface PlaybackControlsProps {
  isPlaying: boolean;
  tempo: number;
  onPlayPause: () => void;
  onStop: () => void;
  onTempoChange: (t: number) => void;
}

const PlaybackControls: React.FC<PlaybackControlsProps> = ({ isPlaying, tempo, onPlayPause, onStop, onTempoChange }) => (
  <div style={{ textAlign: 'center', margin: '1rem 0' }}>
    <button onClick={onPlayPause}>{isPlaying ? 'Pause' : 'Lecture'}</button>
    <button onClick={onStop} style={{ marginLeft: '1rem' }}>Stop</button>
    <div style={{ marginTop: '1rem' }}>
      <label htmlFor="tempo">Tempo : </label>
      <input
        id="tempo"
        type="range"
        min={60}
        max={180}
        value={tempo}
        onChange={e => onTempoChange(Number(e.target.value))}
      />
      <span style={{ marginLeft: '0.5rem' }}>{tempo} BPM</span>
    </div>
  </div>
);

export default PlaybackControls; 