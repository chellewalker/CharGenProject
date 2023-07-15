export function getFirstHitPoints(firstClass,con) {
    let hitPoints = 0;
    let conMod = Math.floor((con-10)/2);

    if (firstClass == 0 || firstClass == 4) {
        hitPoints += 30 + conMod;
    }
    else if (firstClass == 1 || firstClass == 2) {
        hitPoints += 18 + conMod;
    }
    else if (firstClass == 3) {
        hitPoints += 24 + conMod;
    }

    return hitPoints;
}

export function getMoreHitPoints(thisLevel,con) {
    let hitPoints = 0;
    let conMod = Math.floor((con-10)/2);

    if (thisLevel == 0 || thisLevel == 4) {
        hitPoints += 6 + conMod;
    }
    else if (thisLevel == 1 || thisLevel == 2) {
        hitPoints += 4 + conMod;
    }
    else if (thisLevel == 3 || thisLevel == 5 || thisLevel == 7 || thisLevel == 9 || thisLevel == 10) {
        hitPoints += 5 + conMod;
    }
    else if (thisLevel == 6) {
        hitPoints += 6 + conMod;
    }
    else if (thisLevel == 8) {
        hitPoints += 7 + conMod;
    }

    return hitPoints;
}