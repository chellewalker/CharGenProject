export function standardStats() {
    let abilities = stanGetNumber();
    var str = abilities[0];
    var dex = abilities[1];
    var con = abilities[2];
    var int = abilities[3];
    var wis = abilities[4];
    var cha = abilities[5];

    return [str,dex,con,int,wis,cha];
}

export function stanGetNumber() {
    let stats = [
        15, 
        14, 
        13, 
        12, 
        10,
        8
    ];

    let pointer = Math.floor(Math.random() * stats.length);
    var str = stats[pointer];
            stats.splice(pointer, 1);

    pointer = Math.floor(Math.random() * stats.length);
    var dex = stats[pointer];
            stats.splice(pointer, 1);

    pointer = Math.floor(Math.random() * stats.length);
    var con = stats[pointer];
            stats.splice(pointer, 1);

    pointer = Math.floor(Math.random() * stats.length);
    var int = stats[pointer];
            stats.splice(pointer, 1);

    pointer = Math.floor(Math.random() * stats.length);
    var wis = stats[pointer];
            stats.splice(pointer, 1);

    pointer = Math.floor(Math.random() * stats.length);
    var cha = stats[pointer];
            stats.splice(pointer, 1);
        
    return [str, dex, con, int, wis, cha];
}