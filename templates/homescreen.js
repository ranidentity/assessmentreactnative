import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; 
import globalParameters from "../global";
import axios from 'axios'

// export async function HomeScreen({}){
const HomeScreen = () => {
    const [data,setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newData = await getHomeScreenData();
                setData(newData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    // setData([
    //     { id: '1', home: 'Home Team',away:'away team' },
    //     { id: '2',  home: 'Home Team',away:'away team'},
    //     { id: '3', home: 'Home Team',away:'away team'},
    //     { id: '4', home: 'Home Team',away:'away team' },
    //     { id: '5',  home: 'Home Team',away:'away team' },
    //     { id: '6',  home: 'Home Team',away:'away team' },
    //     { id: '7',  home: 'Home Team',away:'away team' },
    //     { id: '8', home: 'Home Team',away:'away team' },
    //     { id: '9', home: 'Home Team',away:'away team' },
    // ]);
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.itemDate}>
                <Text>20:30</Text>
                <View style={styles.itemDateView}>
                <Image source={require('./../assets/lanqiu.png')} style={styles.icon} />
                    <Text style={styles.itemDateText}>NBA</Text>
                </View>
            </View>
            <View style={styles.itemDetail}>
                <ScrollView horizontal={true}>
                    <Text style={styles.itemDetailText}>{item.home}{'\n'}{item.away}</Text>
                </ScrollView>
            </View>
            <View style={styles.itemAction}>
                <Text style={styles.itemActionState}>State</Text>
                <Text style={styles.itemActionPlayback}>Playback</Text>
            </View>
        </View>
    );
  return (
    <View style={styles.container}>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={true}>
            <Text style={styles.scrollviewoption}>Child 1</Text>
            <Text style={styles.scrollviewoption}>Child 2</Text>
            <Text style={styles.scrollviewoption}>Child 3</Text>
        </ScrollView>
        <FlatList
            style={styles.flatlist}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        // flex: 1, //alignItems: 'center', justifyContent: 'center'
    },
    scrollviewoption:{
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    itemContainer:{
        backgroundColor:'white',
        maxHeight: 100,
        borderBottomWidth: 0.2,
        borderColor:'gray',
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemDate:{
        paddingHorizontal: 10,
        maxWidth:80,
    },
    itemDateView:{
        flexDirection:'row',
    },
    itemDateText:{
        color:'gray',
        fontSize:12,
    },
    itemDetail:{
        flex:1,
        padding:10,
        justifyContent: 'center',
    },
    itemDetailText:{
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap: 'wrap',
        flexGrow: 1,   
        maxWidth:200,
        paddingLeft:20,
        // fontWeight:'bold',
    },
    itemAction:{
        borderLeftWidth:0.2,
        borderColor:'gray',
        minWidth:80,
        padding: 10,
    },
    itemActionState:{
        color:globalParameters.color,
    },
    itemActionPlayback:{
    },
    flatlist:{
        // backgroundColor: 'red',
    },
    icon:{
        height: 12,
        width: 12,
    }
});

async function getHomeScreenData(){
    console.log("calling api")
    const requestBody = {
            state: "active",
            duration: 3,
            limit: 10,
            order: 'asc',
            groupby: 'time',
    }
    const url = globalParameters.baseurl + '/api/v1/match/zuqiu'
    axios.post(url,requestBody,{
        headers:{
            Accept:"application/json",
            'Content-Type': 'multipart/form-data',
            'SiteId': 1,
            'ProductId': 1,
        },
    })
    .then(({data})=>{
        console.log("success");
        return {
            props:{
                data: data
            }
        }
    })
    .catch(err=>{
        console.log(err);
        return {
            props: {
                data: null
            }
        };
    })
}