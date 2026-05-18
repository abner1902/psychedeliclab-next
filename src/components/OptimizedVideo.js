import React from 'react';
import dynamic from 'next/dynamic';

const OptimizedVideo = ({ videoId, title }) => {
  const [isClient, setIsClient] = React.useState(false);
  
  React.useEffect(() => {
    setIsClient(true);
    import('@justinribeiro/lite-youtube');
  }, []);
  
  if (!isClient) {
    return (
      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        background: '#000',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }}>
        🎬 Carregando vídeo...
      </div>
    );
  }
  
  return React.createElement('lite-youtube', {
    videoid: videoId,
    videotitle: title,
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '12px'
    }
  });
};

export default OptimizedVideo;