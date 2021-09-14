import React from 'react';
import Container from '@components/SwipeContainer';
import Text from '@components/Text';
import Typography from './components/Typography';
import Switches from './components/Swithces';

const Title = ({children}) => (
  <Text variant="h1" color="primary.main" mb={16}>
    {children}
  </Text>
);
const ScreenMain = () => (
  <Container>
    <Title>Typography</Title>
    <Typography />
    <Title>Switches</Title>
    <Switches />
  </Container>
);
export default ScreenMain;
