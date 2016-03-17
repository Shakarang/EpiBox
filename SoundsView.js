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
    padding: 10,
  },
  section: {
    height: 30,
    backgroundColor: '#123456'
  },
  sectionText: {
    color: '#FFFFFF',
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center'
  }
});

var soundsData = require('./sounds.json');

Sound.enable(true);

class SoundsView extends React.Component {
  constructor(props) {
    super(props);

    var dataSource = new ListView.DataSource(
      {
        sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
        rowHasChanged: (r1, r2) => r1 !== r2
      });
    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(this._convertJSONtoMap())
    }
  }

  _convertJSONtoMap() {
    var soundsMap = {};

    soundsData.forEach(function(data) {
      if (!soundsMap[data.speaker]) {
        soundsMap[data.speaker] = [];
      }
      soundsMap[data.speaker] = data.sounds;
    });
    return soundsMap;
  }

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

  renderSectionHeader(sectionData, sectionID) {
   return (
     <View style={styles.section}>
       <Text style={styles.sectionText}>{sectionID}</Text>
     </View>
     )
 }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        renderSectionHeader={this.renderSectionHeader.bind(this)}/>
    );
  }

  rowPressed(data) {
    console.log("Data :" + data.name);
    var path = "./Sounds/" + data.file

    var whoosh = new Sound(path, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
      } else {
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
