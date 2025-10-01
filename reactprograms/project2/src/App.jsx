import React from 'react'
import './App.css'
const App = () => {
  return (
    <div>
        <div className="sidebar">
      <div className="sidebar-link">
        <img src="/home.svg" />
        <div>Home</div>
      </div>
      <div className="sidebar-link">
        <img src="/explore.svg" />
        <div>Explore</div>
      </div>
      <div className="sidebar-link">
        <img src="/subscriptions.svg" />
        <div>Subscriptions</div>
      </div>
      <div className="sidebar-link">
        <img src="/originals.svg" />
        <div>Originals</div>
      </div>
      <div className="sidebar-link">
        <img src="/youtube-music.svg" />
        <div>Youtube Music</div>
      </div>
      <div className="sidebar-link">
        <img src="/library.svg" />
        <div>Library</div>
      </div>
    </div>

     <div className="header">

            <div className="left-section">
                   
            </div>

            <div className="mid-section">
                   
            </div>

            <div className="right-section">
                  
            </div>

            
    </div>
    <div className="video-grid">
        <div className="video-card">
            <div className="thumbnail-row">
                    <img className="thumbnail-image" src="/thumbnail-1.webp" />
                    <p className="video-time">14:20</p>
            </div>
            <div className="video-info-row">
                    <div className="channel-picture">
                        <img className="channel-image" src="/channel-1.jpeg" />   
                    </div>
                    <div className="video-details">
                        <p id="video-title">Talking Tech and AI with Google CEO Sundar Pichai!</p>
                        <p id="author">Umar Solanki &check;</p>
                        <p id="views">3.4 M Views &bull; 6 Months Ago</p>
                    </div>

            </div>
        </div>

        <div className="video-card">
            <div className="thumbnail-row">
                    <img className="thumbnail-image" src="/thumbnail-1.webp" />
                    <p className="video-time">54:20</p>
            </div>
            <div className="video-info-row">
                    <div className="channel-picture">
                        <img className="channel-image" src="/channel-1.jpeg" />   
                    </div>
                    <div className="video-details">
                        <p id="video-title">Talking Tech and AI with Google CEO Sundar Pichai!</p>
                        <p id="author">Umar Solanki &check;</p>
                        <p id="views">3.4 M Views &bull; 6 Months Ago</p>
                    </div>

            </div>
        </div>

        <div className="video-card">
            <div className="thumbnail-row">
                    <img className="thumbnail-image" src="/thumbnail-1.webp" />
                    <p className="video-time">45:20</p>
            </div>
            <div className="video-info-row">
                    <div className="channel-picture">
                        <img className="channel-image" src="/channel-1.jpeg" />   
                    </div>
                    <div className="video-details">
                        <p id="video-title">Talking Tech and AI with Google CEO Sundar Pichai!</p>
                        <p id="author">Umar Solanki &check;</p>
                        <p id="views">3.4 M Views &bull; 6 Months Ago</p>
                    </div>

            </div>
        </div>


        <div className="video-card">
            <div className="thumbnail-row">
                    <img className="thumbnail-image" src="/thumbnail-1.webp" />
                    <p className="video-time">14:20</p>
            </div>
            <div className="video-info-row">
                    <div className="channel-picture">
                        <img className="channel-image" src="/channel-1.jpeg" />   
                    </div>
                    <div className="video-details">
                        <p id="video-title">Talking Tech and AI with Google CEO Sundar Pichai!</p>
                        <p id="author">Umar Solanki &check;</p>
                        <p id="views">3.4 M Views &bull; 6 Months Ago</p>
                    </div>

            </div>
        </div>

        <div className="video-card">
            <div className="thumbnail-row">
                    <img className="thumbnail-image" src="/thumbnail-1.webp" />
                    <p className="video-time">41:20</p>
            </div>
            <div className="video-info-row">
                    <div className="channel-picture">
                        <img className="channel-image" src="/channel-1.jpeg" />   
                    </div>
                    <div className="video-details">
                        <p id="video-title">Talking Tech and AI with Google CEO Sundar Pichai!</p>
                        <p id="author">Umar Solanki &check;</p>
                        <p id="views">3.4 M Views &bull; 6 Months Ago</p>
                    </div>

            </div>
        </div>

    </div>

    </div>
  )
}

export default App