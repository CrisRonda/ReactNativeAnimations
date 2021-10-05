import React from 'react';
import Container from '@components/Container';
import RNBigList from 'react-native-big-list';
import CardList from './CardList';
import usePexels from './hooks/usePexels';
import {CARD_HEIGHT} from './lib';

const BigList = () => {
  const {data} = usePexels();

  return (
    <Container>
      <RNBigList
        data={data}
        itemHeight={CARD_HEIGHT}
        renderItem={({item, index}) => <CardList index={index} {...item} />}
      />
    </Container>
  );
};

export default BigList;
