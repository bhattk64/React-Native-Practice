import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const UseEffectHookUpdatingPhase = () => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(20);
  // useEffect(()=>{
  //     console.log('I am a use effect hook')

  // },[counter])
  return (
    <View>
      <Text style={{fontSize: 30, marginBottom: 10}}>
        UseEffectHookUpdatingPhase
      </Text>
      <Text style={{fontSize: 30, marginBottom: 10}}>counter:{counter}</Text>
      <Text style={{fontSize: 30, marginBottom: 10}}>score:{score}</Text>
      <Button title="counter" onPress={() => setCounter(counter + 1)} />
      <Button title="score" onPress={() => setScore(score + 10)} />
      <InfoDetails count={counter} points={score} />
    </View>
  );
};

const InfoDetails = ({count, points}) => {
  useEffect(() => {
    console.log('I am child componenets');
  }, [count]);
  return (
    <View>
      <Text style={{fontSize: 30, marginTop: 10}}>Infodetails</Text>
      <Text style={{fontSize: 30, marginTop: 10}}>count:{count}</Text>
      <Text style={{fontSize: 30, marginTop: 10}}>points:{points}</Text>
    </View>
  );
};
export default UseEffectHookUpdatingPhase;
