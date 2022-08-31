import React from 'react';
const {View} = require('react-native');
export default function Modalheader(props) {
  return (
    <View
      style={{
        borderRadius: 3,
        height: 6,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        marginTop: 14,
        width: '100%',
      }}>
      <View
        style={{
          backgroundColor: '#ABB4BD',
          borderRadius: 3,
          height: 6,
          width: 60,
        }}
      />
    </View>
  );
}
