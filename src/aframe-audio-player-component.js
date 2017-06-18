/* global AFRAME */

AFRAME.registerComponent('audio-player', {
  schema: {
    audio: {
      type: 'selector',
    },
    autoplay: {
      type: 'boolean',
      default: false,
    },
    events: {
      type: 'array',
      default: ['keydown'],
    },
  },

  init: function () {
    this.attachEventListeners = this.attachEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.eventHandler = this.eventHandler.bind(this);
    this.resolvePlayState = this.resolvePlayState.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
  },

  play: function () {
    if (this.data.autoplay) {
      this.playAudio();
    }
    this.attachEventListeners();
  },

  pause: function () {
    this.removeEventListeners();
  },

  attachEventListeners: function () {
    const { events } = this.data;
    if (!events) { return; }

    for (var i = 0; i < events.length; ++i) {
      window.addEventListener(events[i], this.eventHandler, false);
    }
  },

  removeEventListeners: function () {
    const { events } = this.data;
    if (!events) { return; }

    for (var i = 0; i < events.length; ++i) {
      window.removeEventListener(events[i], this.eventHandler);
    }
  },

  eventHandler: function (evt) {
    if (evt.key === ' ') {
      this.resolvePlayState();
    }
  },

  resolvePlayState: function () {
    const { audio } = this.data;
    if (!audio) { return; }

    if (audio.paused) {
      this.playAudio();
    } else {
      this.pauseAudio();
    }
  },

  playAudio: function () {
    const { audio } = this.data;
    if (audio) {
      audio.play();
    }
  },

  pauseAudio: function () {
    const { audio } = this.data;
    if (audio) {
      audio.pause();
    }
  },

});
