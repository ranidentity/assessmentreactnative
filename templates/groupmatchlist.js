import React, {useState, useEffect} from 'react';
import i18next from '../localization/i18n';
import {formatDateString} from "../common/datefunctions";
import {truncateText} from "../common/textfunctions";
import {getMatchStatus} from "../common/matchfunctions";
import { View, Text, StyleSheet,SectionList, Image } from 'react-native';
import globalParameters from "../global";
import retrieveMatchAll from "../api/matchapi"

const GroupMatchList = () => {
    const [dateMatchList,setDateMatchList] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const newData = await retrieveMatchAll();
                // SectionList only read title and data
                const data = newData?.data?.list.reduce((r,s) => {
                    r.push({title: s.Date, data: s.Matches});
                    return r;
                  }, []);
                setDateMatchList(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    // row for match data
    const renderMatchRow = ({item}) => {
        const date = new Date(item.time);
        const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',hour12: false  });
        const matchIconUrl = item.match_type == "zuqiu" ? require("./../assets/zuqiu.png") : require("./../assets/lanqiu.png"); 
        return (
            <View style={styles.container} >
                <View style={styles.itemDate}>
                    <Text>{timeString}</Text>
                    <View style={styles.itemDateView}>
                        <Image source={matchIconUrl} style={styles.icon} />
                        <Text style={styles.itemDateText}>{truncateText(item.competition_name,3)}</Text>
                    </View>
                </View>
                <View style={styles.itemDetail}>
                    <View style={styles.itemDetailVerticalContainer}>
                        <View style={styles.itemDetailContainer}>
                            <Text style={styles.itemDetailTeam}>{item.home_team_name}</Text>
                            <Text style={item.home_score > item.away_score ? styles.itemDetailWinnerScore: styles.itemDetailScore}>{item.home_score}</Text>
                        </View>
                        <View style={styles.itemDetailContainer}>
                            <Text style={styles.itemDetailTeam}>{item.away_team_name}</Text>
                            <Text style={item.away_score > item.home_score ? styles.itemDetailWinnerScore: styles.itemDetailScore}>{item.away_score}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.itemAction}>
                    <Text style={styles.itemActionState}>{getMatchStatus(item.match_type,item.state)}</Text>
                    <Text style={styles.itemActionPlayback}>{i18next.t('action.playback')}</Text>
                </View>
            </View>
        )
    }
    const renderSectionHeader= ({section:{title}})=>{
        return (
            <View style={styles.dateRow}>
                <Text style={styles.dateRowText}>{formatDateString(title)}</Text>
            </View>
        )
    }
    return (
        <>
            {
                dateMatchList.length>0 &&
                <SectionList
                    sections={dateMatchList} 
                    renderItem={renderMatchRow}
                    renderSectionHeader={renderSectionHeader}
                    keyExtractor={(item)=>item.id + "_"+item.match_type}
                /> 
            }    
        </>
    );
}
export default GroupMatchList;

const styles = StyleSheet.create({
    container:{
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
        width: '45%',
        flexDirection:'row',
        justifyContent: 'space-between', 
        paddingVertical:0,
    },
    itemDetailVerticalContainer:{
        flexDirections:'column',
    },
    itemDetailTeam:{
        width:200,
        paddingLeft:20,
    },
    itemDetailWinnerScore:{
        paddingHorizontal: 5,
        fontWeight:'bold',
        fontSize:12,
    },
    itemDetailScore:{
        paddingHorizontal: 5,
        fontSize:12,
        color:'gray',
        fontWeight:'bold'
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
