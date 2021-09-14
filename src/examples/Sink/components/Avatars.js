import React from 'react';
import Avatar from '@components/Avatar';
import AvatarGroup from '@components/AvatarGroup';
import {View, StyleSheet} from 'react-native';
import Icon from '@components/Icon';

const FAKE = [
  {
    id: 36950,
    imageUrl: 'https://randomuser.me/api/portraits/med/men/5.jpg',
    title: 'Howard Cassin',
  },
  {
    id: 44400,
    imageUrl: 'https://randomuser.me/api/portraits/med/women/44.jpg',
    title: 'Jackie Terry',
  },
  {
    id: 39815,
    imageUrl: 'https://randomuser.me/api/portraits/med/men/63.jpg',
    title: 'Francis Bogan',
  },
  {
    id: 5725,
    imageUrl: 'https://randomuser.me/api/portraits/med/women/4.jpg',
    title: 'Brandi Schaden MD',
  },
];
const Avartars = () => {
  return (
    <>
      <View style={style.row}>
        <Avatar variant="small" title="Cristian Ronda" enableRandomColor />
        <Avatar title="Cristian Ronda" enableRandomColor />
        <Avatar variant="large" title="Cristian Ronda" enableRandomColor />
      </View>
      <View style={style.row}>
        <Avatar variant="small">
          <Icon name="back" size={56} color="white" />
        </Avatar>
        <Avatar>
          <Icon name="home" size={64} color="white" />
        </Avatar>
        <Avatar variant="large">
          <Icon name="camera" size={72} color="white" />
        </Avatar>
      </View>
      <View style={style.row}>
        <Avatar
          variant="small"
          imageURL="https://randomuser.me/api/portraits/med/men/75.jpg"
        />
        <Avatar imageURL="https://randomuser.me/api/portraits/med/men/75.jpg" />
        <Avatar
          variant="large"
          imageURL="https://randomuser.me/api/portraits/med/men/75.jpg"
        />
      </View>
      <View style={style.row}>
        <AvatarGroup data={FAKE} variant="small" />
      </View>
      <View style={style.row}>
        <AvatarGroup data={FAKE} />
      </View>
      <View style={style.row}>
        <AvatarGroup data={FAKE} variant="large" />
      </View>
    </>
  );
};
export default Avartars;

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
});
