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

export function finalAbilities(abilities,level,speciesMod) {
    let check = 0;
    while (check != 1) {
        let statGen = abilityGen(abilities);
        let statLevel = Math.floor(level / 4);
    let count;
    for (count = 0; count < statLevel; count++) {
        let statRandom1 = Math.floor(Math.random() * 5);
        statGen[statRandom1]++;

        let statRandom2 = Math.floor(Math.random() * 5);
        if (statRandom2 != statRandom1) {
        statGen[statRandom2]++;
        }
        else {
            let statRandom3 = Math.floor(Math.random() * 5);
            statGen[statRandom3]++;
        }
    }
        let str = statGen[0];
        let dex = statGen[1];
        let con = statGen[2];
        let int = statGen[3];
        let wis = statGen[4];
        let cha = statGen[5];

    if (typeof str !== 'undefined' &&
        typeof dex !== 'undefined' &&
        typeof con !== 'undefined' &&
        typeof int !== 'undefined' &&
        typeof wis !== 'undefined' &&
        typeof cha !== 'undefined') {
        check = 1;

        if (speciesMod != 0) {
            let abilityMods = speciesMod.split(";");
            let count;
    
            for (count = 0; count < (abilityMods.length); count++) {
                let indAbilityMods = abilityMods[count].split(",");
                if (indAbilityMods[0] == "str") {
                    str += Number(indAbilityMods[1]);
                }
                if (indAbilityMods[0] == "dex") {
                    dex += Number(indAbilityMods[1]);
                }
                if (indAbilityMods[0] == "con") {
                    con += Number(indAbilityMods[1]);
                }
                if (indAbilityMods[0] == "int") {
                    int += Number(indAbilityMods[1]);
                }
                if (indAbilityMods[0] == "wis") {
                    wis += Number(indAbilityMods[1]);
                }
                if (indAbilityMods[0] == "cha") {
                    cha += Number(indAbilityMods[1]);
                }
            }}
        }}
    return str,dex,con,int,wis,cha;
}