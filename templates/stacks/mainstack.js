import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GroupMatchList from '../components/groupmatchlist'
import { View, Text,TouchableOpacity, Button } from 'react-native';
import globalParameters from '../../global';

const Tab = createMaterialTopTabNavigator();
const LiveTabNavigation = () => {
    return (
        <>
            <Tab.Navigator
            initialRouteName="highlight"
            screenOptions={ ()=>({
                tabBarActiveTintColor: globalParameters.color,
                tabBarInactiveTintColor: '#CCCCCC',
                tabBarScrollEnabled:true,
                tabBarLabelStyle:{
                    fontSize:16,
                },
                tabBarItemStyle:{
                    width:"auto"
                },
                swipeEnabled:true, 
            })}
            >
                <Tab.Screen name="follow" component={FollowView}
                options={{
                    tabBarLabel:({color,focused})=>(
                        <Text style={focused ? {fontWeight:800,fontSize:16,color} :{fontSize:16,color}}>关注</Text>
                    ),
                }} 
                />
                <Tab.Screen name="highlight" component={GroupMatchList} 
                options={{
                    tabBarLabel:({color,focused})=>(
                        <Text style={focused ? {fontWeight:800,fontSize:16,color} :{fontSize:16,color}}>热门</Text>
                    )
                }}
                />
                <Tab.Screen name="足球" component={OtherView} />
                <Tab.Screen name="篮球" component={OtherView} />
                <Tab.Screen name="NBA" component={OtherView} />
                <Tab.Screen name="英超" component={OtherView} />
                <Tab.Screen name="西甲" component={OtherView} />
                <Tab.Screen name="意甲" component={OtherView} />
                <Tab.Screen name="法甲" component={OtherView} />
                <Tab.Screen name="德甲" component={OtherView} />
            </Tab.Navigator>
        </>
    )
}
export default LiveTabNavigation

function FollowView(){
    return (
        <View>
            <Text>Following</Text>
        </View>
    )
}

function OtherView(){
    return (
        <View>
            <Text>others</Text>
        </View>
    )
}
  