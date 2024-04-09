import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './templates/bottomnav';
import LoginScreen from './templates/components/loginscreen';
import {Text,TouchableOpacity,Image} from 'react-native';
import ArrowLeft from './assets/arrowsLeft.png';
import globalParameters from './global';


const Stack = createNativeStackNavigator();
const App=()=> {
  return (
    <>
      <NavigationContainer
      
      >
        <Stack.Navigator>
          <Stack.Screen name="TabStacks" component={MyTabs}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen name="LoginScreen" component={LoginScreen} 
          options={({navigation})=>({
            title:'',
            headerLeft:()=>(
              <TouchableOpacity style={{flexDirection:"row"}}
              onPress={()=>navigation.goBack()}>
                <Image source={ArrowLeft} style={{height: 16,width: 16}}/>
                <Text style={{textAlign:"center",color:'white'}}>返回</Text>
              </TouchableOpacity>
            ),
            headerStyle:{
              backgroundColor:globalParameters.color,
            }
          })}
          />
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

