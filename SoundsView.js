'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component,
  ListView
} = React;
var Sound = require('react-native-sound');

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

var soundsData = require('./sounds.json');

Sound.enable(true);

class SoundsView extends React.Component {
  constructor(props) {
    super(props);
    //this.props.soundsData = soundsData;
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.name !== r2.name});
    this.state = {
      dataSource: dataSource.cloneWithRows(soundsData)
    }
  }

  // componentWillMount() {
  //   fetch('./sounds.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     this.setState({
  //       dataSource: data
  //     });
  //   });
  // }

  renderRow(rowData, sectionID, rowID) {
     return (
       <TouchableHighlight onPress={() => this.rowPressed(rowData)}
           underlayColor='#dddddd'>
         <View>
           <View style={styles.rowContainer}>
             <View  style={styles.textContainer}>
               <Text style={styles.title}>{rowData.name}</Text>
             </View>
           </View>
           <View style={styles.separator}/>
         </View>
       </TouchableHighlight>
     );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }

  rowPressed(data) {
    console.log("Data :" + data.name);
    var path = "./Sounds/" + data.file
    console.log("Path:"+path);
    var whoosh = new Sound(path, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
      } else { // loaded successfully
        console.log('duration in seconds: ' + whoosh.duration +
            'number of channels: ' + whoosh.numberOfChannels);
        // Play the sound with an onEnd callback
        whoosh.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      }
    });




  }
}

module.exports = SoundsView;
