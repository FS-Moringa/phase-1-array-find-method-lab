// code your solution here
 /*function superBowlWin(record){
 
 let wining=(record)=>record.result === "W";
    let win =record.find(wining)
    if (win)  
    {
        return win.year;
    }
else {
    return undefined;
}
}*/


// code your solution here
function superbowlWin(record){
    const winning = (record) => record.result === 'W';
    const win =  record.find(winning)  
    if (win)
    {
        return win.year
    }
    else {
        return undefined;
    }}
