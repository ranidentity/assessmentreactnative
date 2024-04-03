import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GroupMatchList from '../components/groupmatchlist'
import { View, Text } from 'react-native';
import globalParameters from '../../global';

const Tab = createMaterialTopTabNavigator();
const LiveTabNavigation = () => {
    const tabBarLabelStyle= {
        fontSize: 16,
    }
    return (
        <Tab.Navigator
            initialRouteName="热门"
            screenOptions={{
                tabBarActiveTintColor: globalParameters.color,
                tabBarInactiveTintColor: '#CCCCCC',
                tabBarStyle:{
                    backgroundColor:'white',
                },
                tabBarLabelStyle:{
                    fontSize:16,
                },
            }}
        >
            <Tab.Screen name="follow" component={FollowView}
                options={{
                    tabBarLabel:({color,focused})=>(<Text style={focused ? {fontWeight:800,fontSize:16,color} :{fontSize:16,color}}>关注</Text>)
                }} 
            />
            <Tab.Screen name="highlight" component={GroupMatchList} 
                options={{
                    tabBarLabel:({color,focused})=>(<Text style={focused ? {fontWeight:800,fontSize:16,color} :{fontSize:16,color}}>热门</Text>)
                }}
            />
            <Tab.Screen name="足球" component={GroupMatchList} />
            <Tab.Screen name="篮球" component={GroupMatchList} />
            <Tab.Screen name="NBA" component={GroupMatchList} />
            <Tab.Screen name="英超" component={GroupMatchList} />
            {/* <Tab.Screen name="西甲" component={SettingsScreen} />
            <Tab.Screen name="意甲" component={SettingsScreen} />
            <Tab.Screen name="法甲" component={SettingsScreen} />
            <Tab.Screen name="德甲" component={SettingsScreen} />
            <Tab.Screen name="CBA" component={SettingsScreen} />
            <Tab.Screen name="西杯" component={SettingsScreen} />
            <Tab.Screen name="世界杯" component={SettingsScreen} />
            <Tab.Screen name="英联杯" component={SettingsScreen} />
            <Tab.Screen name="亚冠" component={SettingsScreen} />
            <Tab.Screen name="英冠" component={SettingsScreen} />
            <Tab.Screen name="荷甲" component={SettingsScreen} />
            <Tab.Screen name="苏超" component={SettingsScreen} />
            <Tab.Screen name="葡超" component={SettingsScreen} />
            <Tab.Screen name="俄超" component={SettingsScreen} />
            <Tab.Screen name="土超" component={SettingsScreen} />
            <Tab.Screen name="荷甲" component={SettingsScreen} />
            <Tab.Screen name="荷甲" component={SettingsScreen} />
            <Tab.Screen name="荷甲" component={SettingsScreen} /> */}
        </Tab.Navigator>
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