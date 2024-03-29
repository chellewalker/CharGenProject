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
        if (classes[5] > 0) {
            classList += "/Ace Pilot "+classes[5];
        }
        if (classes[6] > 0) {
            classList += "/Bounty Hunter "+classes[6];
        }
        if (classes[7] > 0) {
            classList += "/Crime Lord "+classes[7];
        }
        if (classes[8] > 0) {
            classList += "/Elite Trooper "+classes[8];
        }
        if (classes[9] > 0) {
            classList += "/Force Adept "+classes[9];
        }
        if (classes[10] > 0) {
            classList += "/Force Disciple "+classes[10];
        }
    return classList;
}