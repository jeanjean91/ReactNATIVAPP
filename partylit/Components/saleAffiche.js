import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import salleItem from './salleItem'
import { getSalles } from '../API/conSalle'

class affiche extends React.Component {

constructor(props) {
    super(props)
    this._salles = []
  }
  

_loadEvents() {
    getEvents().then(data => console.log(data));
    this._salles  = data
      this.forceUpdate()
}

 
  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

 render() {
    return (
      <View style={styles.main_container}>
        
        <FlatList
      data={this._salles }
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <eventItem _salles ={item}/>}
    />

      </View>
    )
  }
 } 
 const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default affiche