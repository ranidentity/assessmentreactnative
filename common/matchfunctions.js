export function getMatchStatus(match_type, state){
    var status = "待定"
    switch (match_type) {
        case "zuqiu":
            if(state > 0){
                status = "进行中";
            }else if (state < 0){
                status = "已结束";
            }else{
                status = "未开始";
            }
        case "lanqiu":
            if(state > 0){
                status = "进行中";
            }else if (state < 0){
                status = "已结束";
            }else{
                status = "未开始";
            }
    }
    return status
}