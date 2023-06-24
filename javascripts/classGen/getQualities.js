export function getQuality(thisLevel) {
    let quality = 0;

    if (thisLevel == 5) {
        quality = "Vehicle Dodge";
    }
    return quality;
}

export function compressQualities(qualities) {
    let tempQualityCount;
    let tempQualities = [];
    let lastQuality = "";
    let tempQuality;
    let count;

    for (count = 0; count < qualities.length; count++) {

    tempQuality = qualities[count];
    tempQualityCount = 0;
    let count2;

    for (count2 = 0; count2 < qualities.length; count2++) {

        if (qualities[count2] == tempQuality) {
            tempQualityCount++;
        }
    }

    if (tempQualities.includes(tempQuality+" ("+tempQualityCount+")")) {

    }
    else {
        if (tempQualityCount > 1) {
            tempQualities.push(tempQuality+" ("+tempQualityCount+")");
            lastQuality = tempQuality+" ("+tempQualityCount+")";
        }
        else if (tempQualityCount == 1) {
            tempQualities.push(tempQuality);
            lastQuality= tempQuality;
        }

}}

    tempQualities.sort();
    return tempQualities;
}

export function displayQualities(qualities) {
    let tempQualities = "";
    let count;
    for (count = 0; count < qualities.length; count++) {
        if (count == 0) {
            if (qualities[count].includes(" (")) {
                let temp = qualities[count].split(" (");
                tempQualities += "<a href='https://swse.fandom.com/wiki/"+temp[0]+"' target='_blank' rel='noopener noreferrer'>"+temp[0]+"</a> ("+temp[1];
            }
            else {
                tempQualities += "<a href='https://swse.fandom.com/wiki/"+qualities[count]+"' target='_blank' rel='noopener noreferrer'>"+qualities[count]+"</a>";
            }
        }
        else {
            if (qualities[count].includes(" (")) {
                let temp = qualities[count].split(" (");
                tempQualities += ", <a href='https://swse.fandom.com/wiki/"+temp[0]+"' target='_blank' rel='noopener noreferrer'>"+temp[0]+"</a> ("+temp[1];
            }
            else {
                tempQualities += ", <a href='https://swse.fandom.com/wiki/"+qualities[count]+"' target='_blank' rel='noopener noreferrer'>"+qualities[count]+"</a>";
            }
        }
    }

    return tempQualities;
}

export function displayRawQualities(qualities) {
    let rawQualities = "";
    let count;
    for (count = 0; count < qualities.length; count++) {
        if (count == 0) {
            rawQualities += qualities[count];
        }
        else {
            rawQualities += ", "+qualities[count];
        }
    }
    
    return rawQualities;
}