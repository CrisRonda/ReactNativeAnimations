import {defineAnimation} from 'react-native-redash';

const VELOCITY = 150;

export const withBouncing = (lowerBound, upperBound, onBounce) => {
  'worklet';
  // defineAnimation we can create a custom animation with redash
  // It consists of two main events onFrame -> animation in each frame and onStart -> animation at startup
  // and support a callback when finished it
  return defineAnimation(() => {
    'worklet';
    // start the custom animation state, value (_) and now timestamp
    const onStart = (state, _, now) => {
      // save timestamp
      state.lastTimestamp = now;
      // save the current position Vm+ n*VM
      state.current = lowerBound + Math.random() * upperBound;
      // direction initial state
      state.direction = 1;
    };
    /*
    From onStart we have
    state:{
      lastTimestamp: number;
      elapsed: number;
      current: number;
      direction: number;
    }
    now: number;
    */
    const onFrame = (state, now) => {
      const {lastTimestamp, direction} = state;
      // console.log({lastTimestamp, now});
      // calculate delta time to move the Logo from start and now
      const dt = now - lastTimestamp;
      // update current Xf= V * t * direction (right|left) or (up|down)
      // ==> this is value in animation
      state.current += VELOCITY * (dt / 1000) * direction;
      // change direction when touch the edge of the screen
      if (state.current > upperBound || state.current < lowerBound) {
        state.direction *= -1;
        onBounce?.();
      }
      // console.log(state);
      // update lastTimestamp
      state.lastTimestamp = now;
      return false;
    };

    return {
      onFrame,
      onStart,
    };
  });
};
