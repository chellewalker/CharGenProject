export function getForceRegimen(available,feats,light,dark,forceRegimens,wis) {
    let forceRegimen = "";
    let count = 0;
    let avail = 1 + Math.max(0,Math.floor((wis-10)/2));

    for (count = 0; count < avail; count++) {
    while (forceRegimen == "") {
        let randomNum = Math.floor(Math.random() * 12);
        count++;

        if (randomNum == 0) {
            forceRegimen = "Awaken Force Sensitivity";
        }
        if (randomNum == 1) {
            forceRegimen = "Eyes of the Force";
        }
        if (randomNum == 2) {
            forceRegimen = "Oxygen Bottle";
        }
        if (randomNum == 3) {
            forceRegimen = "Quiet the Mind";
        }
        if (randomNum == 4) {
            forceRegimen = "Telekinetic Practice";
        }
        if (randomNum == 5 && feats.includes("Weapon Proficiency (Lightsabers)")) {
            forceRegimen = "Sparring Practice";
        }
        if (randomNum == 6 && feats.includes("Weapon Proficiency (Lightsabers)")) {
            forceRegimen = "Training Remote";
        }
        if (randomNum == 7 && feats.includes("Weapon Proficiency (Lightsabers)")) {
            forceRegimen = "Vo'ren's First Cadence";
        }
        if (randomNum == 8 && feats.includes("Weapon Proficiency (Lightsabers)")) {
            forceRegimen = "Vo'ren's Second Cadence";
        }
        if (randomNum == 9 && feats.includes("Weapon Proficiency (Lightsabers)")) {
            forceRegimen = "Vo'ren's Third Cadence";
        }
        if (randomNum == 10 && feats.includes("Weapon Proficiency (Lightsabers)")) {
            forceRegimen = "Vo'ren's Fourth Cadence";
        }
        if (randomNum == 11 && feats.includes("Weapon Proficiency (Lightsabers)")) {
            forceRegimen = "Vo'ren's Fifth Cadence";
        }

        if (forceRegimens.includes(forceRegimen)) {
            forceRegimen = "";
        }
        if (count == 25) {
            forceRegimen = "ValidForceRegimenNotFound";
        }
    }
    forceRegimens.push(forceRegimen);
}

    return forceRegimens;
}

export function displayForceRegimens(forceRegimens) {
    let tempForceRegimens = "";
    let count;
    for (count = 0; count < forceRegimens.length; count++) {
        if (count == 0) {
            tempForceRegimens += "<a href='https://swse.fandom.com/wiki/"+forceRegimens[count]+"' target='_blank' rel='noopener noreferrer'>"+forceRegimens[count]+"</a>";
        }
        else {
            tempForceRegimens += ", <a href='https://swse.fandom.com/wiki/"+forceRegimens[count]+"' target='_blank' rel='noopener noreferrer'>"+forceRegimens[count]+"</a>";
        }
    }

    return tempForceRegimens;
}

export function displayRawForceRegimens(forceRegimens) {
    let rawForceRegimens = "";
    let count;
    for (count = 0; count < forceRegimens.length; count++) {
        if (count == 0) {
            rawForceRegimens += forceRegimens[count];
        }
        else {
            rawForceRegimens += ", "+forceRegimens[count];
        }
    }
    
    return rawForceRegimens;
}