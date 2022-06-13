// code your solution here
/*function superbowlWin(record){
    const winning = (record) => record.result === 'W';
    const win =  record.find(winning)  
    if (win)
    {
        return win.year
    }
    else {
        return undefined;
    }}*/
    function superbowlWin(record){
        const winning = record.find ((record) => record.result === 'W');
        
        if (winning)
        {
            return winning.year
        }
        else {
            return undefined;
        }
    }
