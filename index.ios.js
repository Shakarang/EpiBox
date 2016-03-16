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

// var MOCKED_MOVIES_DATA = [
//   {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
// ];
// var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
//
// var soundsData = require('./sounds.json');
// var SoundPlayer = require('react-native-sound');
//
// class ReactTest extends Component {
//   constructor(props) {
//     super(props)
//     console.log(soundsData[0].name);
//       this.state = {
//      dataSource: new ListView.DataSource({
//        rowHasChanged: (row1, row2) => row1 !== row2,
//      }),
//      loaded: false,
//     };
//   }
//
//   /**
//   **
//   */
//
//   componentDidMount() {
//   //  this.fetchData();
//   this.setState({
//     dataSource : this.state.dataSource.cloneWithRows(soundsData),
//     loaded : true,
//   });
//   }
//
//   fetchData() {
//     fetch(REQUEST_URL)
//       .then((response) => response.json())
//       .then((responseData) => {
//         this.setState({
//           dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
//           loaded: true,
//         });
//       })
//       .done();
//     }
//
//     render() {
//       if (!this.state.loaded) {
//         return this.renderLoadingView();
//       }
//       return (
//         <ListView
//        dataSource={this.state.dataSource}
//        renderRow={this._renderRow}
//        style={styles.listView}
//      />
//    );
//
//   }
//
//     renderLoadingView() {
//       return (
//         <View style={styles.container}>
//           <Text>
//             Loading movies...
//           </Text>
//         </View>
//       );
//     };
//
//
//     _pressRow(rowID :number) {
//       console.log("LOLOLOL " + rowID);
//     }
//
//     renderMovie(movie) {
//       console.log("Hello " + movie.title);
//       return (
//         <View style={styles.container}>
//           <Image
//             source={{uri: movie.posters.thumbnail}}
//             style={styles.thumbnail}
//           />
//           <View style={styles.rightContainer}>
//             <Text style={styles.title}>{movie.title}</Text>
//             <Text style={styles.year}>{movie.year}</Text>
//           </View>
//         </View>
//       );
//     }
//
//     _renderRow(rowData: sound, sectionID: number, rowID: number) {
//       //console.log("Fische " + sound.name);
//       return (
//         <TouchableHighlight onPress={this.playSound}>
//         <View style={styles.container}>
//           <Text style={styles.title}>{rowData.name}</Text>
//         </View>
//       </TouchableHighlight>
//     );
//     }
//
//   // return (
//   //   <View style={styles.container}>
//   //     <Text style={styles.welcome}>
//   //       Welcome to React Native!
//   //     </Text>
//   //     <Text style={styles.instructions}>
//   //       To get started, edit index.ios.js
//   //     </Text>
//   //     <Text style={styles.instructions}>
//   //       Press Cmd+R to reload,{'\n'}
//   //       Cmd+D or shake for dev menu
//   //     </Text>
//   //   </View>
//   // );
//   }
//
//
//
// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     height: 50,
//   },
//   thumbnail: {
//     width: 53,
//     height: 81,
//   },
//   rightContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 8,
//     textAlign: 'left',
//     marginLeft: 5,
//   },
//   year: {
//     textAlign: 'center',
//   },
//   listView: {
//    paddingTop: 20,
//    backgroundColor: '#F5FCFF',
//  },
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

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
          title: 'Property Finder',
          component: SoundsView,
        }}/>
    );
  }
}

AppRegistry.registerComponent('ReactTest', () => FischeBoxApp);
