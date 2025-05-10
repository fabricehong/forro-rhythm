import React from 'react';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

interface PlaybackControlsProps {
  isPlaying: boolean;
  tempo: number;
  onPlayPause: () => void;
  onStop: () => void;
  onTempoChange: (t: number) => void;
}

const PlaybackControls: React.FC<PlaybackControlsProps> = ({ isPlaying, tempo, onPlayPause, onStop, onTempoChange }) => (
  <div style={{ textAlign: 'center', margin: '1rem 0' }}>
    <button onClick={onPlayPause} title={isPlaying ? 'Pause' : 'Lecture'} style={{ fontSize: 22, padding: '0.5em 1em' }}>
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>
    <button onClick={onStop} title="Stop" style={{ marginLeft: '1rem', fontSize: 22, padding: '0.5em 1em' }}>
      <FaStop />
    </button>
    <div style={{ marginTop: '1rem' }}>
      <label htmlFor="tempo">Tempo : </label>
      <input
        id="tempo"
        type="range"
        min={40}
        max={160}
        value={tempo}
        onChange={e => onTempoChange(Number(e.target.value))}
      />
      <span style={{ marginLeft: '0.5rem' }}>{tempo} BPM</span>
    </div>
  </div>
);

export default PlaybackControls; 