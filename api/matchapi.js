import React, { useState, useEffect } from 'react';
import globalParameters from '../global';

const ApiCall = () => {
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetchData();
    }, []);
    const fetchData = async() => {
        try{
            const response = await fetch(globalParameters.baseurl+"/api/v1/match/football", {
                method: 'POST',
                header: globalParameters.apiheader,
                body:  JSON.stringify({
                    state:"active",
                    limit:10,
                    duration:3,
                    order:'asc',
                    groupby:'time',
                }),
            });
            const jsonData = await response.json();
            setData(jsonData);
            console.log("done");
        }catch (error){
            console.error('Error fetching data: ',error);
        }
    };
    return(
        data
    )
}
export default ApiCall;