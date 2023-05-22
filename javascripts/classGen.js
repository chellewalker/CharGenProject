import {classXML} from './xmlGetter.js';

export function classFirst(str,dex,con,int,wis,cha) {
    let jedi = 0;
    let noble = 0;
    let scoundrel = 0;
    let scout = 0;
    let soldier = 0;

    if (str > 13) {
        jedi++;
        scout++;
        soldier += 2;
    }
        if (str > 17) {
            jedi++;
            scout++;
            soldier += 2;
        }
    if (dex > 13) {
        jedi++;
        scoundrel += 2;
        scout += 2;
        soldier += 2;
    }
        if (dex > 17) {
            jedi++;
            scoundrel += 2;
            scout += 2;
            soldier += 2;
        }
    if (con > 13) {
        soldier += 2;
    }
        if (con > 17) {
            soldier += 2;
        }
    if (int > 13) {
        noble++;
        scoundrel += 2;
        scout += 2;
        soldier++;
    }
        if (int > 17) {
            noble++;
            scoundrel += 2;
            scout += 2;
            soldier++;
        }
    if (wis > 13) {
        jedi += 2;
        noble++;
        scoundrel++;
        scout += 2;
        soldier++;
    }
        if (wis > 17) {
            jedi += 2;
            noble++;
            scoundrel++;
            scout += 2;
            soldier++;
        }
    if (cha > 13) {
        jedi += 2;
        noble += 3;
        scoundrel++;
    }
        if (cha > 17) {
            jedi += 2;
            noble += 3;
            scoundrel++;
        }

    if (str < 11) {
        jedi--;
        scout--;
        soldier -= 2;
    }
    if (dex < 11) {
        jedi--;
        scoundrel -= 2;
        scout -= 2;
        soldier -= 2;
    }
    if (con < 11) {
        soldier -= 2;
    }
    if (int < 11) {
        noble--;
        scoundrel -= 2;
        scout -= 2;
        soldier--;
    }
    if (wis < 11) {
        jedi -= 2;
        noble--;
        scoundrel--;
        scout -= 2;
        soldier--;
    }
    if (cha < 11) {
        jedi -= 2;
        noble -= 3;
        scoundrel--;
    }

    let highest = Math.max(jedi,noble,scoundrel,scout,soldier);

    if (highest == jedi) {
        return 0;
    }
    else if (highest == noble) {
        return 1;
    }
    else if (highest == scoundrel) {
        return 2;
    }
    else if (highest == scout) {
        return 3;
    }
    else if (highest == soldier) {
        return 4;
    }
}

export function classSelection(firstClass,classes,level) {
    level--;
    let count;
    let otherClass = [];

    for (count = 0; count < level; count++) {

    let randomNum = Math.floor(Math.random() * 8);
    if (randomNum < 2) {
        classes[firstClass]++;
    }
    else if (randomNum < 6) {
        let check = 0;
        while (check == 0) {
        let randomNum3 = Math.floor(Math.random() * 5);

        if (otherClass.includes(randomNum3) || randomNum3 == firstClass) {
            classes[randomNum3]++;
            check = 1;
        }
    }}
    else {
        let randomNum2 = Math.floor(Math.random() * 5);
        classes[randomNum2]++;
        otherClass.push(randomNum2);
    }}

    return classes;
}

export function classListing(firstClass,classes) {
    let classList = "";
    if (firstClass == 0) {
        classList += "Jedi "+classes[0];
    }
    if (firstClass == 1) {
        classList += "Noble "+classes[1];
    }
    if (firstClass == 2) {
        classList += "Scoundrel "+classes[2];
    }
    if (firstClass == 3) {
        classList += "Scout "+classes[3];
    }
    if (firstClass == 4) {
        classList += "Soldier "+classes[4];
    }

        if (classes[0] > 0 && firstClass != 0) {
            classList += "/Jedi "+classes[0];
        }
        if (classes[1] > 0 && firstClass != 1) {
            classList += "/Noble "+classes[1];
        }
        if (classes[2] > 0 && firstClass != 2) {
            classList += "/Scoundrel "+classes[2];
        }
        if (classes[3] > 0 && firstClass != 3) {
            classList += "/Scout "+classes[3];
        }
        if (classes[4] > 0 && firstClass != 4) {
            classList += "/Soldier "+classes[4];
        }
    return classList;
}

export function getHitPoints(firstClass,classes,con) {
    let hitPoints = 0;
    let conMod = Math.floor((con-10)/2);

    if (firstClass == 0) {
        hitPoints += 30 + conMod;
    }
    if (firstClass == 1) {
        hitPoints += 18 + conMod;
    }
    if (firstClass == 2) {
        hitPoints += 18 + conMod;
    }
    if (firstClass == 3) {
        hitPoints += 24 + conMod;
    }
    if (firstClass == 4) {
        hitPoints += 30 + conMod;
    }
    classes[firstClass]--;
    hitPoints += classes[0]*(6 + conMod);
    hitPoints += classes[1]*(4 + conMod);
    hitPoints += classes[2]*(4 + conMod);
    hitPoints += classes[3]*(5 + conMod);
    hitPoints += classes[4]*(6 + conMod);

    return hitPoints;
}

export function getBAB(classes,firstClass) {
    let BAB = 0;
    classes[firstClass]++;

    BAB += classes[0]*1;
    BAB += Math.floor(classes[1]*0.75);
    BAB += Math.floor(classes[2]*0.75);
    BAB += Math.floor(classes[3]*0.75);
    BAB += classes[4]*1;

    return BAB;
}

export function availableFeats(level,classes,firstClass,speciesTraits) {
    let availableFeats = [0,0,0,0,0,0];
    if (classes[firstClass]%2 == 0) {
        classes[firstClass]--;
    }
    let score = Math.ceil(level/3);
    if (speciesTraits.split(", ").includes("Bonus Feat")) {
        score++;
    }
    availableFeats[0] = score;


    if (Math.floor(classes[0]/2) > 0) {
        availableFeats[1] = Math.floor(classes[0]/2);
    }
    if (Math.floor(classes[1]/2) > 0) {
        availableFeats[2] = Math.floor(classes[1]/2);
    }
    if (Math.floor(classes[2]/2) > 0) {
        availableFeats[3] = Math.floor(classes[2]/2);
    }
    if (Math.floor(classes[3]/2) > 0) {
        availableFeats[4] = Math.floor(classes[3]/2);
    }
    if (Math.floor(classes[4]/2) > 0) {
        availableFeats[5] = Math.floor(classes[4]/2);
    }

    return availableFeats;
}