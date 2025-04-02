import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text testID="counterText">Count: {count}</Text>
      <Button testID="incrementButton" title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default CounterScreen;
