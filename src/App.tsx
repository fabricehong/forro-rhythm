import { useState, useCallback } from 'react'
import Header from './components/Header'
import RhythmSelector from './components/RhythmSelector'
import OctagonVisualizer from './components/OctagonVisualizer'
import FooterControls from './components/PlaybackControls'
import RhythmExplanation from './components/RhythmExplanation'
import './App.css'
import { useRythmicPlayer } from './hooks/useRythmicPlayer'
import type { Frappe } from './hooks/useRythmicPlayer'
import { rythmesData } from './components/OctagonVisualizer'

function App() {
  const [rythme, setRythme] = useState('Xote')
  const [isPlaying, setIsPlaying] = useState(false)
  const [tempo, setTempo] = useState(100)
  const [currentStep, setCurrentStep] = useState(0)
  const [showLegend, setShowLegend] = useState(false)
  const [showDescription, setShowDescription] = useState(false)

  const handleStep = useCallback((step: number) => {
    setCurrentStep(step)
  }, [])

  const frappes: Frappe[][] = rythmesData[rythme] || Array(8).fill([])

  useRythmicPlayer({
    rythme: frappes,
    tempo,
    isPlaying,
    onStep: handleStep,
  })

  const handlePlayPause = () => setIsPlaying(p => !p)
  const handleStop = () => { setIsPlaying(false); setCurrentStep(0); }
  const handleTempoChange = (t: number) => setTempo(t)

  return (
    <div className="app-root">
      <Header />
      <RhythmSelector selected={rythme} onChange={setRythme} />
      <OctagonVisualizer rythme={rythme} currentStep={isPlaying ? currentStep : null} showLegend={showLegend} />
      <div className="mobile-toggles">
        <button onClick={() => setShowLegend(l => !l)} className="toggle-btn">{showLegend ? 'Cacher' : 'Légende'}</button>
        <button onClick={() => setShowDescription(d => !d)} className="toggle-btn">{showDescription ? 'Cacher' : 'Description'}</button>
      </div>
      {showDescription && <RhythmExplanation rythme={rythme} />}
      <div className="tempo-bar">
        <label htmlFor="tempo" style={{ marginRight: 8 }}>Tempo</label>
        <input
          id="tempo"
          type="range"
          min={40}
          max={160}
          value={tempo}
          onChange={e => handleTempoChange(Number(e.target.value))}
        />
        <span style={{ marginLeft: 8 }}>{tempo} BPM</span>
      </div>
      <FooterControls
        isPlaying={isPlaying}
        tempo={tempo}
        onPlayPause={handlePlayPause}
        onStop={handleStop}
        onTempoChange={handleTempoChange}
      />
    </div>
  )
}

export default App
