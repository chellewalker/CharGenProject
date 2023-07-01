export function getForceSecret(available,light,dark,forceSecrets) {
    let forceSecret = "";
    let count = 0;

    while (forceSecret == "") {
        let randomNum = Math.floor(Math.random() * 15);
        count++;

        if (randomNum == 0 && available.includes("CR")) {
            forceSecret = "Devastating Power";
        }
        if (randomNum == 1 && available.includes("CR")) {
            forceSecret = "Distant Power";
        }
        if (randomNum == 2 && available.includes("CR")) {
            forceSecret = "Multitarget Power";
        }
        if (randomNum == 3 && available.includes("CR")) {
            forceSecret = "Quicken Power";
        }
        if (randomNum == 4 && available.includes("CR")) {
            forceSecret = "Shaped Power";
        }
        if (randomNum == 5 && dark == 1 && available.includes("FUCG")) {
            forceSecret = "Corrupted Power";
        }
        if (randomNum == 6 && available.includes("FUCG")) {
            forceSecret = "Debilitating Power";
        }
        if (randomNum == 7 && available.includes("FUCG")) {
            forceSecret = "Enlarged Power";
        }
        if (randomNum == 8 && light == 1 && available.includes("FUCG")) {
            forceSecret = "Pure Power";
        }
        if (randomNum == 9 && available.includes("FUCG")) {
            forceSecret = "Remote Power";
        }
        if (randomNum == 10 && available.includes("CWCG")) {
            forceSecret = "Extend Power";
        }
        if (randomNum == 11 && available.includes("CWCG")) {
            forceSecret = "Linked Power";
        }
        if (randomNum == 12 && available.includes("CWCG")) {
            forceSecret = "Unconditional Power";
        }
        if (randomNum == 13 && available.includes("JATM")) {
            forceSecret = "Holocron Loremaster";
        }
        if (randomNum == 14 && available.includes("JATM")) {
            forceSecret = "Mentor";
        }

        if (forceSecrets.includes(forceSecret)) {
            forceSecret = "";
        }
        if (count == 25) {
            forceSecret = "ValidForceSecretNotFound";
        }
    }

    return forceSecret;
}

export function displayForceSecrets(forceSecrets) {
    let tempForceSecrets = "";
    let count;
    for (count = 0; count < forceSecrets.length; count++) {
        if (count == 0) {
            tempForceSecrets += "<a href='https://swse.fandom.com/wiki/"+forceSecrets[count]+"' target='_blank' rel='noopener noreferrer'>"+forceSecrets[count]+"</a>";
        }
        else {
            tempForceSecrets += ", <a href='https://swse.fandom.com/wiki/"+forceSecrets[count]+"' target='_blank' rel='noopener noreferrer'>"+forceSecrets[count]+"</a>";
        }
    }

    return tempForceSecrets;
}

export function displayRawForceSecrets(forceSecrets) {
    let rawForceSecrets = "";
    let count;
    for (count = 0; count < forceSecrets.length; count++) {
        if (count == 0) {
            rawForceSecrets += forceSecrets[count];
        }
        else {
            rawForceSecrets += ", "+forceSecrets[count];
        }
    }
    
    return rawForceSecrets;
}