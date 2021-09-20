import {useEffect} from 'react';
import {
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const useSpringTransition = state => {
  const animatedTransition = useSharedValue(0);
  useEffect(() => {
    animatedTransition.value = state ? 1 : 0;
  }, [state, animatedTransition]);
  const transition = useDerivedValue(() => {
    return withSpring(animatedTransition.value);
  });
  return transition;
};

export default useSpringTransition;
