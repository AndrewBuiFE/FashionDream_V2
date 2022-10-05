import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
export default function WebViewDemo() {
  return (
    <View style={{width: 200, height: 200, backgroundColor: 'red'}}>
      <WebView source={{uri: 'https://infinite.red'}} style={{marginTop: 20}} />
    </View>
  );
}
