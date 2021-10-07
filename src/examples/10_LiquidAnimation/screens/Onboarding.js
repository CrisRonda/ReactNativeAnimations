import React, {useState} from 'react';
import Slider from '../components/Slider';
import {HEIGHT, Side, slides} from '../lib';
import Slide from '../components/Slide';
import {useVector} from 'react-native-redash';
import {useSharedValue} from 'react-native-reanimated';

const Onboarding = () => {
  const activeSlide = useSharedValue(Side.NONE);

  const left = useVector(0, HEIGHT / 2);
  const right = useVector(0, HEIGHT / 2);
  const [index, setIndex] = useState(0);
  const prev = slides[index - 1];
  const next = slides[index + 1];

  return (
    <Slider
      index={index}
      left={left}
      right={right}
      activeSlide={activeSlide}
      setIndex={setIndex}
      prev={prev && <Slide slide={prev} />}
      next={next && <Slide slide={next} />}>
      <Slide slide={slides[index]} />
    </Slider>
  );
};

export default Onboarding;
