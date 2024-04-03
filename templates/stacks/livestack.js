import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GroupMatchList from '../components/groupmatchlist'
const Stack = createNativeStackNavigator();
const LiveStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="比赛Stack"
                component={GroupMatchList}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>
    )
}
// NOT IN USE
export default LiveStack

