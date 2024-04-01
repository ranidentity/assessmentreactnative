import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import globalParameters from "../global";
import axios from 'axios'
import {formatDateString} from "../common/datefunctions";
import {truncateText} from "../common/textfunctions";
import {getMatchStatus} from "../common/matchfunctions";
import i18next from '../localization/i18n';

const HomeScreen = () => {
    const [data,setData] = useState(null)
    const [dateMatchList,setDateMatchList] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newData = await getHomeScreenData();
                setData(newData);
                setDateMatchList(newData.data.list)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
  
    // Loop Date groups
    const renderItem = ({ item }) => {
        return(
            <>
                <View style={styles.dateRow}>
                    <Text style={styles.dateRowText}>{formatDateString(item.Date)}</Text>
                </View>
                {item.Matches.map((row) =>{
                    const key = row.match_type+"_"+row.id
                    const date = new Date(row.time);
                    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',hour12: false  });
                    const matchIconUrl = row.match_type == "zuqiu" ? require("./../assets/zuqiu.png") : require("./../assets/lanqiu.png");
                    return (
                        <View style={styles.itemContainer} key={key} >
                            <View style={styles.itemDate}>
                                <Text>{timeString}</Text>
                                <View style={styles.itemDateView}>
                                    <Image source={matchIconUrl} style={styles.icon} />
                                    <Text style={styles.itemDateText}>{truncateText(row.competition_name,3)}</Text>
                                </View>
                            </View>
                            <View style={styles.itemDetail}>
                                <ScrollView horizontal={true}>
                                    <View style={styles.itemDetailContainer}>
                                        <Text style={styles.itemDetailTeam}>{row.home_team_name}</Text>
                                        <Text style={styles.itemDetailScores}>10x2</Text>
                                        <Text style={styles.itemDetailScores}>10x2</Text>
                                        <Text style={styles.itemDetailScores}>10x2</Text>
                                        <Text style={styles.itemDetailScores}>10x2</Text>
                                    </View>
                                    <View style={styles.itemDetailContainer}>
                                        <Text style={styles.itemDetailTeam}>{row.away_team_name}</Text>
                                        <Text style={styles.itemDetailScores}>10x2</Text>
                                        <Text style={styles.itemDetailScores}>10x2</Text>
                                        <Text style={styles.itemDetailScores}>10x2</Text>
                                        <Text style={styles.itemDetailScores}>10x2</Text>
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={styles.itemAction}>
                                <Text style={styles.itemActionState}>{getMatchStatus(row.match_type,row.state)}</Text>
                                <Text style={styles.itemActionPlayback}>{i18next.t('action.playback')}</Text>
                            </View>
                        </View>
                    )
                })}
            </> 
        )
    }

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
            data={dateMatchList}
            renderItem={renderItem}
        />
    </View>
  );
};
export default HomeScreen;

async function getHomeScreenData(){
    const requestBody = {
            state: "active",
            duration: 3,
            order: 'asc',
            groupby: 'time',
    }
    const url = globalParameters.baseurl + '/api/v1/match/zuqiu'
    try {
        const response = await axios.post(url, requestBody, {
            headers: {
                Accept: "application/json",
                'Content-Type': 'multipart/form-data',
                'SiteId': 1,
                'ProductId': 1,
            },
        });
        return response.data;
    } catch (error) {
        console.log('Error fetching data:', error);
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1, //alignItems: 'center', justifyContent: 'center'
        backgroundColor:'white',
    },
    scrollviewoption:{
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    itemContainer:{
        // backgroundColor:'white',
        maxHeight: 100,
        borderBottomWidth: 0.2,
        borderColor:'gray',
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemDate:{
        paddingHorizontal: 10,
        // maxWidth:80,
        width:70,
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
    itemDetailContainer:{
        // minWidth:300,
        // maxWidth:400,
        width: '45%',
        flexDirection:'row',
        justifyContent: 'space-between', 
        marginBottom:5,
    },
    itemDetailTeam:{
        // flexDirection:'row',
        // alignItems:'flex-start',
        // flexWrap: 'wrap',
        // flexGrow: 1,   
        // width:200,
        paddingLeft:20,
        // fontWeight:'bold',
    },
    itemDetailScores:{
        paddingHorizontal: 5,
        fontWeight:'bold',
        fontSize:12,
    },
    itemAction:{
        borderLeftWidth:0.2,
        borderColor:'gray',
        minWidth:80,
        padding: 10,
    },
    itemActionState:{
        textAlign:"right",
        color:globalParameters.color,
        fontSize:12,
    },
    itemActionPlayback:{
        fontSize:12,
    },
    flatlist:{
    },
    icon:{
        height: 12,
        width: 12,
    },
    dateRow:{
        alignItems:'center',
        paddingVertical:8,
        backgroundColor:globalParameters.background_row_color,
    },
    dateRowText:{
        fontWeight:'bold',
    }
});
