// import 'aframe';
import 'aframe-animation-component';
import 'aframe-layout-component';
import 'aframe-particle-system-component';
import './aframe-frequency-bars-component';
import './aframe-key-events-component';
import './aframe-audioanalyser-component';
import './aframe-audioanalyser-levels-scale-component';
import './aframe-audio-player-component';
import './aframe-audio-metadata-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react';

class Paris extends Component {
  render() {
    const particles = {
      preset: 'snow',
      particleCount: 3000,
      size: 0.1,
    };
    return (
      <Scene
        id='scene-container'
        audio-player='audio: #visualizer-audio; autoplay: true'
      >
        <a-assets>
          <a-mixin
            id='bar'
            geometry='primitive: box'
            material='color: #C3383B'
          ></a-mixin>
          <audio
            id='visualizer-audio'
            className='visualizer__audio'
            src='/paris.mp3'
            crossOrigin='anonymous'
          ></audio>
        </a-assets>

        <Entity primitive='a-sky' color='#000' />
        <Entity particle-system={particles} />
        <Entity primitive='a-light' type='ambient' color='#333'/>

        <Entity
          id='audio-analyser'
          audioanalyser='src: #visualizer-audio; smoothingTimeConstant: 0.9'
          audioanalyser-levels-scale='max: 100; multiplier: 0.04'
          frequency-bars='mixin: bar'
          layout='type: circle; radius: 15'
          rotation='90 180 0'
        />

        <Entity
          primitive='a-light'
          type='point'
          intensity='1'
          position='0 1 0'
        />
      </Scene>
    );
  }

}

export default Paris;
