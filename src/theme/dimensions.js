import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

const useDimensions = () => {
  const [dimensions, setState] = useState(Dimensions.get('window'));
  useEffect(() => {
    const unsubscribe = Dimensions.addEventListener('change', event => {
      setState(event.window);
    });
    return () => unsubscribe;
  }, []);
  return {dimensions};
};

export default useDimensions;
