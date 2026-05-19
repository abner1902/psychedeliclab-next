import React from 'react'
import * as s from './style'

const Playlist = () => {
  return (
    <s.Playlist>
      <div className="container">
        <div className="blockblack">
          <div id="playlist" className="spacer">
            <div className="row">
              <div className="col-12">
                <h2>PLAYLIST</h2>
                <h3><span className="glyphicon glyphicon-list"></span> <strong>SONS DA NOSSA FAMÍLIA!</strong></h3>
                <iframe 
                  loading="lazy" 
                  width="100%" 
                  height="450" 
                  scrolling="no" 
                  frameBorder="no" 
                  allow="autoplay" 
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1173630205&color=%236a2c95&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" 
                  title="Player do SoundCloud - Playlist Psychedelic Lab">
                </iframe>
                <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', fontWeight: 100 }}>
                  <a href="https://soundcloud.com/psychedeliclab" aria-label="SoundCloud Psychedelic Lab" title="Psychedelic Lab (OFICIAL)" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Psychedelic Lab (OFICIAL)</a> · 
                  <a href="https://soundcloud.com/psychedeliclab" aria-label="SoundCloud Playlist" title="PSYCHEDELIC LAB - HALL OF FAME" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}> PSYCHEDELIC LAB - HALL OF FAME</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </s.Playlist>
  )
}

export default Playlist