export function scoutTalents(talents,available,skills,feats) {
    
    let talent = "";
    while (talent == "") {
        //let randomNum = Math.floor(Math.random() * 14);
        let randomNum = 0;

    if (randomNum == 0) {
        talent = awarenessTalents(talents,available,skills,feats);
    }
    else if (randomNum == 1) {
        talent = camouflageTalents(talents,available,skills,feats);
    }
    else if (randomNum == 2) {
        talent = fringerTalents(talents,available,skills,feats);
    }
    else if (randomNum == 3) {
        talent = survivorTalents(talents,available,skills,feats);
    }
    else if (randomNum == 4 && available.includes("KotORCG")) {
        talent = hyperspaceTalents(talents,available,skills,feats);
    }
    else if (randomNum == 5 && available.includes("FUCG")) {
        talent = spyTalents(talents,available,skills,feats);
    }
    else if (randomNum == 6 && available.includes("CWCG")) {
        talent = reconnaissanceTalents(talents,available,skills,feats);
    }
    else if (randomNum == 7 && available.includes("CWCG")) {
        talent = surveillanceTalents(talents,available,skills,feats);
    }
    else if (randomNum == 8 && available.includes("LECG")) {
        talent = versatilityTalents(talents,available,skills,feats);
    }
    else if (randomNum == 9 && available.includes("RECG")) {
        talent = unpredictableTalents(talents,available,skills,feats);
    }
    else if (randomNum == 10 && available.includes("GaW")) {
        talent = patrolTalents(talents,available,skills,feats);
    }
    else if (randomNum == 11 && available.includes("GoI")) {
        talent = espionageTalents(talents,available,skills,feats);
    }
    else if (randomNum == 12 && available.includes("UR")) {
        talent = masterTalents(talents,available,skills,feats);
    }
    else if (randomNum == 13 && available.includes("UR")) {
        talent = mobileTalents(talents,available,skills,feats);
    }
    }
    return talent;
}

export function awarenessTalents(talents,available,skills,feats) {
    let talent = "";
    while (talent == "") {
    let randomNum = Math.floor(Math.random() * 8);

    if (randomNum == 0 && available.includes("CR")) {
        talent = "Acute Senses";
    }
    else if (randomNum == 1 && available.includes("CR") && talents.includes("Acute Senses")) {
        talent = "Expert Tracker";
    }
    else if (randomNum == 2 && available.includes("CR") && talents.includes("Acute Senses")) {
        talent = "Improved Initiative";
    }
    else if (randomNum == 3 && available.includes("CR") && talents.includes("Acute Senses")) {
        talent = "Keen Shot";
    }
    else if (randomNum == 4 && available.includes("CR") && talents.includes("Acute Senses") && talents.includes("Improved Initiative")) {
        talent = "Uncanny Dodge I";
    }
    else if (randomNum == 5 && available.includes("CR") && talents.includes("Acute Senses") && talents.includes("Improved Initiative") && talents.includes("Uncanny Dodge I")) {
        talent = "Uncanny Dodge II";
    }
    else if (randomNum == 4 && available.includes("FUCG") && talents.includes("Acute Senses") && talents.includes("Improved Initiative") && skills.includes("Initiative")) {
        talent = "Reset Initiative";
    }
    else if (randomNum == 7 && available.includes("SaV") && talents.includes("Acute Senses") && talents.includes("Keen Shot")) {
        talent = "Weak Point";
    }   
    if (talents.includes(talent)) {
        talent = "";
    }
}

    return talent;
}