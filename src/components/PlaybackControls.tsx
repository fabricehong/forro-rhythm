import React from 'react';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

interface FooterControlsProps {
  isPlaying: boolean;
  tempo: number;
  onPlayPause: () => void;
  onStop: () => void;
  onTempoChange: (t: number) => void;
}

const FooterControls: React.FC<FooterControlsProps> = ({ isPlaying, onPlayPause, onStop }) => (
  <footer className="footer-controls">
    <button onClick={onPlayPause} title={isPlaying ? 'Pause' : 'Lecture'}>
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>
    <button onClick={onStop} title="Stop">
      <FaStop />
    </button>
  </footer>
);

export default FooterControls; 