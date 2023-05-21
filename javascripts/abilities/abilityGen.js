import {plannedStats} from './planNumGen.js';
import {rolledStats} from './rollNumGen.js';
import {standardStats} from './stanNumGen.js';

export function abilityGen(abilities) {
    let str,dex,con,int,wis,cha = null;

if (abilities == "standard") {
    let statGen = standardStats();
    str = statGen[0];
    dex = statGen[1];
    con = statGen[2];
    int = statGen[3];
    wis = statGen[4];
    cha = statGen[5];
}
else if (abilities == "planned") {
    let planPoints = document.getElementById('planPoints').value;
    let statGen = plannedStats(planPoints);
    str = statGen[0];
    dex = statGen[1];
    con = statGen[2];
    int = statGen[3];
    wis = statGen[4];
    cha = statGen[5];

    
}
else if (abilities == "rolled") {
    let statGen = rolledStats();
    str = statGen[0];
    dex = statGen[1];
    con = statGen[2];
    int = statGen[3];
    wis = statGen[4];
    cha = statGen[5];
}

return [str,dex,con,int,wis,cha]
}