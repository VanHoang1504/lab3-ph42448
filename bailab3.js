import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const Labbai1 = () => {
  const position = useRef(new Animated.ValueXY()).current; //lay vi tri hien tai
  const windowHeight = Dimensions.get('window').height; //lay chieu cao
  useEffect(() => {
    // console.log("Window height: ", windowHeight);
    // startAnimation();
  }, []);
  const startAnimation = () => {
    const randomY = Math.floor(Math.random() * windowHeight); //vi tri bat ky theo Y
    Animated.timing(position, {
      toValue: {x: 0, y: randomY},
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      startAnimation();
    });
  };

  const handleMovePress = () => {
    startAnimation();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: '#33CCFF',
          width: 50,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleMovePress}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Move</Text>
      </TouchableOpacity>

      <Animated.View
        style={[styles.box, {transform: position.getTranslateTransform()}]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
export default Labbai1;
