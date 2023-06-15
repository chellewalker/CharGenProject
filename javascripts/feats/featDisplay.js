export function displayFeats(feats) {
    let featDisplay = "";
    let count;
    let count2;
    feats.sort();
    for (count = 0; count < feats.length; count++) {
        if (count != 0) {
            featDisplay += ", ";
        }
        if (feats[count].includes(" (")) {
            let temp = feats[count].split(" (");
            featDisplay += "<a href='https://swse.fandom.com/wiki/"+temp[0]+"'>"+temp[0]+"</a>";
            for (count2 = 1; count2 < temp.length; count2++) {
                featDisplay += " ("+temp[count2];
            }
        }
        else {
            featDisplay += "<a href='https://swse.fandom.com/wiki/"+feats[count]+"'>"+feats[count]+"</a>";
        }
    }

    return featDisplay;
}

export function displayRawFeats(feats) {
    let featDisplay = "";
    let count;
    feats.sort();
    for (count = 0; count < feats.length; count++) {
        if (count != 0) {
            featDisplay += ", ";
        }
        featDisplay += feats[count];
    }

    return featDisplay;
}