import {Dimensions} from 'react-native';

export const slides = [
  {
    color: '#F2A1AD',
    title: 'Dessert Recipes',
    description:
      'Hot or cold, our dessert recipes can turn an average meal into a memorable event',
    picture:
      'https://res.cloudinary.com/dzh1db41l/image/upload/v1633453093/assets/1_brafsh.png',
  },
  {
    color: '#0090D6',
    title: 'Healthy Foods',
    description:
      'Discover healthy recipes that are easy to do with detailed cooking instructions from top chefs',
    picture:
      'https://res.cloudinary.com/dzh1db41l/image/upload/v1633453093/assets/5_fnnfc2.png',
  },
  {
    color: '#69C743',
    title: 'Easy Meal Ideas',
    description:
      'explore recipes by food type, preparation method, cuisine, country and more',
    picture:
      'https://res.cloudinary.com/dzh1db41l/image/upload/v1633453093/assets/4_yndtuc.png',
  },
  {
    color: '#FB3A4D',
    title: '10000+ Recipes',
    description:
      'Browse thousands of curated recipes from top chefs, each with detailled cooking instructions',
    picture:
      'https://res.cloudinary.com/dzh1db41l/image/upload/v1633453093/assets/2_svkff4.png',
  },
  {
    color: '#F2AD62',
    title: 'Video Tutorials',
    description:
      'Browse our best themed recipes, cooking tips, and how-to food video & photos',
    picture:
      'https://res.cloudinary.com/dzh1db41l/image/upload/v1633453093/assets/3_zakr0i.png',
  },
];

export const MIN_LEDGE = 45;
export const MARGIN_WIDTH = MIN_LEDGE + 50;
export const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
export const Side = {
  LEFT: 1,
  RIGHT: 2,
  NONE: 0,
};
