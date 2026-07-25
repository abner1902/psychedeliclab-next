import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"

// Componente individual para gerenciar cada track de forma isolada e segura no cliente
const AudioPlayerCard = ({ title, subtitle, audioUrl, onPlay, shouldPause }) => {
  const containerRef = useRef(null)
  const wavesurferRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Carrega dinamicamente o WaveSurfer apenas no navegador
    const initWaveSurfer = async () => {
      try {
        const WaveSurfer = (await import("wavesurfer.js")).default
        
        if (containerRef.current && !wavesurferRef.current) {
          wavesurferRef.current = WaveSurfer.create({
            container: containerRef.current,
            height: 100,
            waveColor: "rgba(255, 255, 255, 0.2)",
            progressColor: "#facc15",
            cursorColor: "transparent",
            barWidth: 3,
            barGap: 2,
            barRadius: 2,
            url: audioUrl,
            normalize: true,
          })

          wavesurferRef.current.on("ready", () => {
            setIsLoaded(true)
          })

          wavesurferRef.current.on("error", (err) => {
            console.error("WaveSurfer ERROR para", audioUrl, ":", err)
          })

          wavesurferRef.current.on("play", () => {
            setIsPlaying(true)
            if (onPlay) onPlay()
          })
          wavesurferRef.current.on("pause", () => setIsPlaying(false))
          wavesurferRef.current.on("finish", () => setIsPlaying(false))
        }
      } catch (error) {
        console.error("Erro ao carregar o WaveSurfer:", error)
      }
    }

    initWaveSurfer()

    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy()
        wavesurferRef.current = null
      }
    }
  }, [audioUrl])

  useEffect(() => {
    if (shouldPause && wavesurferRef.current && isPlaying) {
      wavesurferRef.current.pause()
    }
  }, [shouldPause])

  const handlePlayPause = (e) => {
    e.stopPropagation() // Evita eventos duplicados de clique
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause()
    }
  }

  return (
    <AudioCard>
      <WaveformBox onClick={handlePlayPause}>
        {/* Container onde a onda REAL será injetada */}
        <WaveContainer ref={containerRef} />
        
        {/* Mostra um feedback visual caso o áudio ainda esteja carregando */}
        {!isLoaded && <LoadingText>Carregando waveform...</LoadingText>}

        <PlayButtonOverlay animate={{ scale: isPlaying ? 1.1 : 1 }}>
          {isPlaying ? <Pause size={32} /> : <Play size={32} style={{ marginLeft: "4px" }} />}
        </PlayButtonOverlay>
      </WaveformBox>
      <AudioDescription>
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </AudioDescription>
    </AudioCard>
  )
}

// Componente Principal
const AntesDepois = () => {
  const [playingId, setPlayingId] = useState(null)

  return (
    <SectionWrapper id="ouvir">
      <MainBox>
        <SectionHeader>
          <p className="section-eyebrow">RESULTADOS QUE VOCÊ SENTE</p>
          <h2 className="section-title">ANTES & DEPOIS</h2>
        </SectionHeader>

        <CardsGrid>
          <AudioPlayerCard 
            title="Via Axis & Yebah - Shamanic Psychedelia Axis Mix 2026"
            subtitle="(-6db) NO MASTER"
            audioUrl="/audio/antes-mix.mp3"
            onPlay={() => setPlayingId("antes")}
            shouldPause={playingId === "depois"}
          />

          <AudioPlayerCard 
            title="Via Axis & Yebah - Shamanic Psychedelia Axis Mix 2026"
            subtitle="Mastered by ABSYCHO (Psychedelic Lab)"
            audioUrl="/audio/depois-master.mp3"
            onPlay={() => setPlayingId("depois")}
            shouldPause={playingId === "antes"}
          />
        </CardsGrid>
      </MainBox>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  padding: 0 16px;
`

const MainBox = styled.div`
  width: 100%;
  max-width: 1278px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 30px;
  border: 1px solid rgba(250, 204, 21, 0.4);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  padding: 50px 40px;

  @media (max-width: 991px) {
    padding: 30px 16px;
  }
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  .section-eyebrow {
    font-size: 1rem;
    font-weight: 500;
    color: #facc15;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 14px;
    font-family: 'Metropolis', sans-serif;
    @media (max-width: 767px) {
      font-size: 0.85rem;
      letter-spacing: 2px;
    }
  }

  .section-title {
    font-size: 2.618rem;
    font-weight: 900;
    color: #ffffff;
    letter-spacing: -1px;
    max-width: 900px;
    margin: 0 auto;
    font-family: 'Metropolis', sans-serif;
    @media (max-width: 767px) {
      font-size: 1.618rem;
    }
  }
`

const CardsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`

const AudioCard = styled.div`
  background: rgba(24, 24, 27, 0.5);
  border: 1px solid rgba(250, 204, 21, 0.3);
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const WaveformBox = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(250, 204, 21, 0.6);
  }
`

const WaveContainer = styled.div`
  width: 100%;
  height: 100px;
  z-index: 2;
`

const LoadingText = styled.span`
  position: absolute;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 1px;
`

const PlayButtonOverlay = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: rgba(250, 204, 21, 0.85);
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  z-index: 10;
  pointer-events: none;
`

const AudioDescription = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;

  strong {
    color: #ffffff;
    font-size: 0.95rem;
    font-weight: 500;
  }

  span {
    color: #facc15;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`

export default AntesDepois