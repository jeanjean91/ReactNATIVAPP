// Navigation/Navigation.js
import * as React from 'react';

import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';


import affiche from '../Components/affiche'

const Stack = createStackNavigator();
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FilmDetail" component={FilmDetail} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}


function MyStack() {
  return (
    <NavigationContainer >

      <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >


     /*
      <Stack.Screen
        name="FilmDetail"
        component={FilmDetail}
        options={{
          idFilm: 'idFilm',
        }}
      />*/
      <Stack.Screen
        name="affiche"
        component={affiche}
        options={{
          title: 'Evenements',
        }}
      />
     

  
      
      
    </Stack.Navigator>
    </NavigationContainer>
  );

}
export default MyStack;


// Navigation/Navigation.js
/*import 'react-native-gesture-handler';
import * as React from 'react';
 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
 
const Stack = createStackNavigator();
 
export default function App() {
  return(
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="FilmDetail" component={FilmDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}*/