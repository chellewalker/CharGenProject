export function getLevel(firstClass,classes,curLevel,skills,feats,talents,BAB,available) {
    let thisLevel;

    let randomNum = Math.floor(Math.random() * 8);
    if (randomNum < 2) {
        thisLevel = firstClass;
    }
    else if (randomNum < 6) {
        let check = 0;
        while (check == 0) {
        let randomNum2 = Math.floor(Math.random() * 6);

        if (classes[randomNum2] > 0 || randomNum2 == firstClass) {
            thisLevel = randomNum2;
            check = 1;
        }
    }}
    else {
        let randomNum3 = Math.floor(Math.random() * 5);
        thisLevel = randomNum3;
        if (classes[5] > 0) {
        thisLevel = 5;
    }
    }

    if (curLevel >= 7 && skills.includes("Pilot") && feats.includes("Vehicular Combat") && available.includes("CR")
        && classes[5] == 0) {
        thisLevel = 5;
    }

    return thisLevel;
}