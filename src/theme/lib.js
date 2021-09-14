import {PixelRatio} from 'react-native';

const pixelRatio = PixelRatio.get();
export function pxToDp(pixelValue) {
  return pixelValue / pixelRatio;
}
