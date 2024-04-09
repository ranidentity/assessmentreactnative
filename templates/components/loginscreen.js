import {Text, View, Image, TouchableOpacity} from 'react-native';
import globalParameters from '../../global';

import LoginNo from '../../assets/loginNo.png';
import BlueArrowRight from '../../assets/arrowsRightBlue.png';

const LoginScreen = ({navigation, route})=>{
    // console.log(route.params)
    return (
        <>
            <View 
            style={{
                flexDirection:"row", 
                backgroundColor:globalParameters.color, 
                height:90,
                alignItems: "center",
                justifyContent: "space-between",
                paddingRight: 12,
                paddingBottom:10,
                }}>
                <View style={{flexDirection: "row", alignItems: "center" }}>
                    <Image source={LoginNo} style={{height: 50,width: 50,margin:12}}/>
                    <Text 
                    style={{
                        textAlignVertical: "center", 
                        color:"white", 
                        fontSize:20, 
                        fontWeight:"bold" 
                        }}>
                        {route.params?.username ?? "未登录"}
                    </Text>
                </View>
                <TouchableOpacity 
                style={{
                    flexDirection:"row", 
                    backgroundColor: "white", 
                    borderRadius: 20, 
                    paddingVertical: 4, 
                    paddingHorizontal: 16, 
                    alignItems:"center" 
                    }}>
                    <Text style={{ fontSize: 13, color: globalParameters.color }}>
                        去登录
                    </Text>
                    <Image source={BlueArrowRight} style={{height:8,width:8, resizeMode:"contain", marginLeft: 4}}/>
                </TouchableOpacity>
            </View>
            <View style={{borderRadius:14, backgroundColor:"white", flex:1, marginTop:-10}}>
                <View style={{backgroundColor:"red", height:100}}>

                </View>
            </View>
        </>
    );
}
export default LoginScreen;