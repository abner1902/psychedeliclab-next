import React from 'react'
import * as s from './style'

const Playlist = () => {
  return (
    <s.Playlist>
      <div className="container">
        <div className="blockblack">
          <div id="playlist" className="spacer">
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <h3><span className="glyphicon glyphicon-list"></span>Sons da nossa família!</h3>
                <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1173630205&color=%236a2c95&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                {/* <div style={{font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100}}> */}
                <a href="https://soundcloud.com/agyasounds" title="Agya Sounds (OFICIAL)" target="_blank" style={{ color: 'cccccc', textDecoration: 'none' }}>Agya Sounds (OFICIAL)</a> · <a href="https://soundcloud.com/agyasounds/sets/psychedelic-lab-hall-of-fame" title="PSYCHEDELIC LAB - HALL OF FAME" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>PSYCHEDELIC LAB - HALL OF FAME</a></div>          </div>
          </div>
        </div>
      </div>
    </s.Playlist>
  )
}

export default Playlist
