/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';
import React, {
  AppRegistry,
   Component,
   Image,
   ListView,
   StyleSheet,
   Text,
   View,
   TouchableHighlight,
} from 'react-native';

var SoundsView = require('./SoundsView')

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class FischeBoxApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'EpiBox',
          component: SoundsView,
        }}/>
    );
  }
}

AppRegistry.registerComponent('ReactTest', () => FischeBoxApp);
