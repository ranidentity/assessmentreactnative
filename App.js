import * as React from 'react';
// import { Text, View  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GroupMatchList from './templates/components/groupmatchlist'
import MyTabs from './templates/bottomnav'
// const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        {/* <Stack.Navigator>
          <Stack.Screen name="比赛">
              {(props) => <GroupMatchList {...props} title="This is home"/>}
          </Stack.Screen>
        </Stack.Navigator> */}
        <MyTabs />
      </NavigationContainer>
    </>
  );
}

export default App;

