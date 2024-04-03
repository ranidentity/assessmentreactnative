import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { View,Image } from 'react-native';

import LiveIcon from '../assets/tabs/live.png';
import LiveActiveIcon from '../assets/tabs/live_active.png';
import NewsIcon from '../assets/tabs/news.png';
import NewsActiveIcon from '../assets/tabs/news_active.png';
import DataIcon from '../assets/tabs/data.png';
import DataActiveIcon from '../assets/tabs/data_active.png';
import FavouriteIcon from '../assets/tabs/discovery.png';
import FavouriteActiveIcon from '../assets/tabs/discovery_active.png';
import HighlightIcon from '../assets/tabs/wonderful.png';
import HighlightActiveIcon from '../assets/tabs/wonderful_active.png';

// import LiveStack from './stacks/livestack';
import LiveTabNavigation from './stacks/mainstack';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        initialRouteName="比赛"
        screenOptions={{
        }}
    >
      <Tab.Screen name="比赛" component={LiveTabNavigation} options={{
            tabBarIcon:({focused,color, size})=>(
              <Image source={focused ? LiveActiveIcon:LiveIcon } style={{ width: size, height: size }}/>
            )
        }}
      />
      <Tab.Screen name="资讯" component={NewsStack} options={{
            tabBarIcon:({focused,color, size})=>(
              <Image source={focused?NewsActiveIcon:NewsIcon} style={{ width: size, height: size }}/>
            )
        }}
      />
       <Tab.Screen name="关注" component={FavouriteStack} options={{
            tabBarIcon:({focused,color, size})=>(
              <Image source={focused ? FavouriteActiveIcon:FavouriteIcon} style={{ width: size, height: size }}/>
            )
        }}
      />
       <Tab.Screen name="数据" component={DataStack} options={{
            tabBarIcon:({focused,color, size})=>(
              <Image source={focused ? DataActiveIcon:DataIcon} style={{ width: size, height: size }}/>
            )
        }}
      />
       <Tab.Screen name="精彩" component={HighlightStack} options={{
            tabBarIcon:({focused,color, size})=>(
              <Image source={focused ? HighlightActiveIcon:HighlightIcon} style={{ width: size, height: size }}/>
            )
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs

function NewsStack(){
      // const navigation = useNavigation(); // Get navigation object using useNavigation hook
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={NewsIcon} />
        </View>
    );
}
function FavouriteStack(){
  // const navigation = useNavigation(); // Get navigation object using useNavigation hook
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={FavouriteIcon} />
      </View>
  );
}
function DataStack(){
  // const navigation = useNavigation(); // Get navigation object using useNavigation hook
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={DataIcon} />
      </View>
  );
}
function HighlightStack(){
  // const navigation = useNavigation(); // Get navigation object using useNavigation hook
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={HighlightIcon} />
      </View>
  );
}