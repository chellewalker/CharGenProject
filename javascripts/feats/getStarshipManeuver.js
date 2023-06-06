export function getStarshipManeuver(starshipManeuvers,available,wis) {
    let temp;
    let count;
    let avail = 1 + Math.max(0,Math.floor((wis-10)/2));
    
    for (count = 0; count < avail; count++) {
        temp = "";
    while (temp == "") {
        let randomNum = Math.floor(Math.random() * 26);
        if (randomNum == 0) {
            temp = "Ackbar Slash";
        }
        if (randomNum == 1) {
            temp = "Afterburn";
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
                maneuvers += "<i>"+temp[0]+"</i> ("+temp[1];
            }
            else {
                maneuvers += "<i>"+starshipManeuvers[count]+"</i>";
            }
        }
        else {
            if (starshipManeuvers[count].includes(" (")) {
                let temp = starshipManeuvers[count].split(" (");
                maneuvers += ", <i>"+temp[0]+"</i> ("+temp[1];
            }
            else {
                maneuvers += ", <i>"+starshipManeuvers[count]+"</i>";
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