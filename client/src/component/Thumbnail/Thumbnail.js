import React, { useState, useEffect, createRef } from 'react';
import loadscript from 'load-script';
// import './Thumbnail.css';
import './style.css';

import testImage from './test-image.jpg';
// SoundCloud widget API
//  https://developers.soundcloud.com/docs/api/html5-widget

function Thumbnail(props) {
  // state

  // used to communicate between SC widget and React
  const [isPlaying, setIsPlaying] = useState(false);
  // const [playlistIndex, setPlaylistIndex] = useState(0);

  // populated once SoundCloud Widget API is loaded and initialized
  const [player, setPlayer] = useState(false);

  // ref for iframe element - https://reactjs.org/docs/refs-and-the-dom.html
  const iframeRef = createRef();

  // initialization - load soundcloud widget API and set SC event listeners

  useEffect(() => {
    // use load-script module to load SC Widget API
    loadscript('https://w.soundcloud.com/player/api.js', () => {
      // initialize player and store reference in state

      const player = window.SC.Widget(iframeRef.current);
      setPlayer(player);

      const { PLAY, PLAY_PROGRESS, PAUSE, FINISH, ERROR } =
        window.SC.Widget.Events;

      // NOTE: closures created - cannot access react state or props from within and SC callback functions!!

      player.bind(PLAY, () => {
        // update state to playing
        setIsPlaying(true);

        // check to see if song has changed - if so update state with next index
        // player.getCurrentSoundIndex((playerPlaylistIndex) => {
        //   setPlaylistIndex(playerPlaylistIndex);
        // });
      });

      player.bind(PAUSE, () => {
        // update state if player has paused - must double check isPaused since false positives
        player.isPaused((playerIsPaused) => {
          if (playerIsPaused) setIsPlaying(false);
        });
      });
    });
  }, []);

  // integration - update SC player based on new state (e.g. play button in React section was click)

  // adjust playback in SC player to match isPlaying state
  useEffect(() => {
    if (!player) return; // player loaded async - make sure available
    let minutes = props.startm;
    let seconds = props.starts;
    let miliseconds = (minutes * 60 + seconds) * 1000;

    player.isPaused((playerIsPaused) => {
      if (isPlaying && playerIsPaused) {
        player.seekTo(miliseconds);
        player.play();
      } else if (!isPlaying && !playerIsPaused) {
        player.seekTo(miliseconds);
        player.pause();
      }
    });
  }, [isPlaying]);

  const onMouseOverPlay = () => {
    setIsPlaying(true);
  };

  const onMouseLeavePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="App">
      <div className="App-container">
        <div
          className="circle"
          onMouseOver={onMouseOverPlay}
          onMouseLeave={onMouseLeavePause}
        >
          <div className="middle">
            <div className="center"></div>
          </div>
        </div>
        {/* 여기 코드 추가 */}
        <div>
          {isPlaying ? 'Pause' : 'Play'}

          <div className="soundcloud-section">
            <iframe
              title="thumbnail"
              ref={iframeRef}
              id="sound-cloud-player"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=` + props.url}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
