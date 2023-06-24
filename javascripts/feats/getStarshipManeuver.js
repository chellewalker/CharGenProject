export function getStarshipManeuver(starshipManeuvers,wis,feats) {
    let temp;
    let count;
    let avail = 1 + Math.max(0,Math.floor((wis-10)/2));
    
    for (count = 0; count < avail; count++) {
        temp = "";
    while (temp == "") {
        let randomNum = Math.floor(Math.random() * 27);
        if (randomNum == 0) {
            temp = "Ackbar Slash";
        }
        else if (randomNum == 1) {
            temp = "Afterburn";
        }
        else if (randomNum == 2) {
            temp = "Angle Deflector Shields";
        }
        else if (randomNum == 3) {
            temp = "Attack Formation Zeta Nine";
        }
        else if (randomNum == 4) {
            temp = "Attack Pattern Delta";
        }
        else if (randomNum == 5) {
            temp = "Corellian Slip";
        }
        else if (randomNum == 6) {
            temp = "Counter";
        }
        else if (randomNum == 7) {
            temp = "Darklighter Spin";
        }
        else if (randomNum == 8) {
            temp = "Devastating Hit";
        }
        else if (randomNum == 9) {
            temp = "Engine Hit";
        }
        else if (randomNum == 10) {
            temp = "Evasive Action";
        }
        else if (randomNum == 11) {
            temp = "Explosive Shot";
        }
        else if (randomNum == 12) {
            temp = "Howlrunner Formation";
        }
        else if (randomNum == 13) {
            temp = "I Have You Now";
        }
        else if (randomNum == 14) {
            temp = "Intercept";
        }
        else if (randomNum == 15) {
            temp = "Overwhelming Assault";
        }
        else if (randomNum == 16) {
            temp = "Segnor's Loop";
        }
        else if (randomNum == 17) {
            temp = "Shield Hit";
        }
        else if (randomNum == 18) {
            temp = "Skim the Surface";
        }
        else if (randomNum == 19) {
            temp = "Skywalker Loop";
        }
        else if (randomNum == 20) {
            temp = "Snap Roll";
        }
        else if (randomNum == 21) {
            temp = "Strike Formation";
        }
        else if (randomNum == 22) {
            temp = "Tallon Roll";
        }
        else if (randomNum == 23) {
            temp = "Target Lock";
        }
        else if (randomNum == 24 && feats.includes("Force Sensitivity")) {
            temp = "Target Sense";
        }
        else if (randomNum == 25) {
            temp = "Thruster Hit";
        }
        else if (randomNum == 26) {
            temp = "Wotan Weave";
        }
        if (count == 25) {
            temp = "ValidForcePowerNotFound";
        }
    }
    starshipManeuvers.push(temp);
}
    return starshipManeuvers;
}

export function compressStarshipManeuvers(starshipManeuvers) {
    let tempManeuverCount;
    let tempStarshipManeuvers = [];
    let lastManeuver = "";
    let tempManeuver;
    let count;

    for (count = 0; count < starshipManeuvers.length; count++) {

    tempManeuver = starshipManeuvers[count];
    tempManeuverCount = 0;
    let count2;

    for (count2 = 0; count2 < starshipManeuvers.length; count2++) {

        if (starshipManeuvers[count2] == tempManeuver) {
            tempManeuverCount++;
        }
    }

    if (tempStarshipManeuvers.includes(tempManeuver+" ("+tempManeuverCount+")")) {

    }
    else {
        if (tempManeuverCount > 1) {
            tempStarshipManeuvers.push(tempManeuver+" ("+tempManeuverCount+")");
            lastManeuver = tempManeuver+" ("+tempManeuverCount+")";
        }
        else if (tempManeuverCount == 1) {
            tempStarshipManeuvers.push(tempManeuver);
            lastManeuver= tempManeuver;
        }

}}

    tempStarshipManeuvers.sort();
    return tempStarshipManeuvers;
}

export function displayStarshipManeuvers(starshipManeuvers) {
    let maneuvers = "";
    let count;
    for (count = 0; count < starshipManeuvers.length; count++) {
        if (count == 0) {
            if (starshipManeuvers[count].includes(" (")) {
                let temp = starshipManeuvers[count].split(" (");
                maneuvers += "<i><a href='https://swse.fandom.com/wiki/"+temp[0]+"' target='_blank' rel='noopener noreferrer'>"+temp[0]+"</a></i> ("+temp[1];
            }
            else {
                maneuvers += "<i><a href='https://swse.fandom.com/wiki/"+starshipManeuvers[count]+"' target='_blank' rel='noopener noreferrer'>"+starshipManeuvers[count]+"</a></i>";
            }
        }
        else {
            if (starshipManeuvers[count].includes(" (")) {
                let temp = starshipManeuvers[count].split(" (");
                maneuvers += ", <i><a href='https://swse.fandom.com/wiki/"+temp[0]+"' target='_blank' rel='noopener noreferrer'>"+temp[0]+"</a></i> ("+temp[1];
            }
            else {
                maneuvers += ", <i><a href='https://swse.fandom.com/wiki/"+starshipManeuvers[count]+"' target='_blank' rel='noopener noreferrer'>"+starshipManeuvers[count]+"</a></i>";
            }
        }
    }

    return maneuvers;
}

export function displayRawStarshipManeuvers(starshipManeuvers) {
    let rawManeuvers = "";
    let count;
    for (count = 0; count < starshipManeuvers.length; count++) {
        if (count == 0) {
            rawManeuvers += starshipManeuvers[count];
        }
        else {
            rawManeuvers += ", "+starshipManeuvers[count];
        }
    }
    
    return rawManeuvers;
}