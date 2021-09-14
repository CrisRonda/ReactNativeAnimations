import React from 'react';
import Container from '@components/SwipeContainer';
import Text from '@components/Text';
import Typography from './components/Typography';
import Switches from './components/Swithces';
import Avartars from './components/Avatars';
import Cards from './components/Cards';

const Title = ({children}) => (
  <Text variant="h1" color="primary.main" mb={16}>
    {children}
  </Text>
);
const ScreenMain = () => (
  <Container>
    <Title>Avatars</Title>
    <Avartars />
    <Title>Cards</Title>
    <Cards />
    <Title>Typography</Title>
    <Typography />
    <Title>Switches</Title>
    <Switches />
  </Container>
);
export default ScreenMain;
