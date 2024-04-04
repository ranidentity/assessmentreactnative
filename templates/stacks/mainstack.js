import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GroupMatchList from '../components/groupmatchlist'
import { View, Text } from 'react-native';
import globalParameters from '../../global';

const Tab = createMaterialTopTabNavigator();
const LiveTabNavigation = () => {
    const tabBarLabelStyle= {
        fontSize: 16,
    }
    // TODO - all screen loaded on mount, should be loaded individually
    return (
        <>
            <Tab.Navigator
            initialRouteName="highlight"
            swipeEnabled={true}
            screenOptions={ ({route})=>({
                tabBarActiveTintColor: globalParameters.color,
                tabBarInactiveTintColor: '#CCCCCC',
                tabBarScrollEnabled:true,
                tabBarLabelStyle:{
                    fontSize:16,
                },
                tabBarItemStyle:{
                    width:"auto"
                }
            })}
            >
                <Tab.Screen name="follow" component={FollowView}
                options={{
                    tabBarGap:0,
                    tabBarLabel:({color,focused})=>(
                        <Text style={focused ? {fontWeight:800,fontSize:16,color} :{fontSize:16,color}}>关注</Text>
                    )
                }} 
                />
                <Tab.Screen name="highlight" component={GroupMatchList} 
                options={{
                    tabBarLabel:({color,focused})=>(
                        <Text style={focused ? {fontWeight:800,fontSize:16,color} :{fontSize:16,color}}>热门</Text>
                    )
                }}
                />
                <Tab.Screen name="足球" component={FollowView} />
                <Tab.Screen name="篮球" component={FollowView} />
                <Tab.Screen name="NBA" component={FollowView} />
                <Tab.Screen name="英超" component={FollowView} />
                <Tab.Screen name="西甲" component={FollowView} />
                <Tab.Screen name="意甲" component={FollowView} />
                <Tab.Screen name="法甲" component={FollowView} />
                <Tab.Screen name="德甲" component={FollowView} />
                {/* <Tab.Screen name="CBA" component={FollowView} />
                <Tab.Screen name="西杯" component={FollowView} />
                <Tab.Screen name="世界杯" component={FollowView} />
                <Tab.Screen name="英联杯" component={FollowView} />
                <Tab.Screen name="亚冠" component={FollowView} />
                <Tab.Screen name="英冠" component={FollowView} />
                <Tab.Screen name="荷甲" component={FollowView} />
                <Tab.Screen name="苏超" component={FollowView} />
                <Tab.Screen name="葡超" component={FollowView} />
                <Tab.Screen name="俄超" component={FollowView} />
                <Tab.Screen name="土超" component={FollowView} /> */}
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