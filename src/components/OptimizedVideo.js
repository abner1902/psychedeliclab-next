import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa'

const OptimizedVideo = ({ videoId, title }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  if (!isLoaded) {
    // Fallback: se thumbnail não carregar, mostra fundo preto
    const bgImage = !imgError 
      ? `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`
      : 'black';
    
    return (
      <div 
        onClick={() => setIsLoaded(true)}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          cursor: 'pointer',
          background: `${bgImage} center/cover`,
          backgroundColor: '#000',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {imgError && (
         <div style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            Clique para carregar vídeo
          </div>
        )}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0,0,0,0.7)',
          borderRadius: '50%',
          padding: '20px',
          transition: 'all 0.3s'
        }}>
          <FaPlay size={48} color="#FFD700" />
        </div>
        <img 
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          style={{ display: 'none' }}
          onError={() => setImgError(true)}
          alt=""
        />
      </div>
    )
  }

  return (
    <iframe
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default OptimizedVideo
