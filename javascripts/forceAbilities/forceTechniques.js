export function getForceTechnique(available,forcePowers,forceTechniques) {
    let forceTechnique = "";
    let count = 0;

    while (forceTechnique == "") {
        let randomNum = Math.floor(Math.random() * 52);
        count++;

        if (randomNum == 0 && available.includes("CR")) {
            forceTechnique = "Force Point Recovery";
        }
        if (randomNum == 1 && available.includes("CR")) {
            let randomNum2 = Math.floor(Math.random() * forcePowers.length);
            let temp = forcePowers[randomNum2];
            forceTechnique = "Force Power Mastery ("+temp;
        }
        if (randomNum == 2 && available.includes("CR")) {
            forceTechnique = "Improved Force Trance";
        }
        if (randomNum == 3 && available.includes("CR")) {
            forceTechnique = "Improved Move Light Object";
        }
        if (randomNum == 4 && available.includes("CR")) {
            forceTechnique = "Improved Sense Force";
        }
        if (randomNum == 5 && available.includes("CR")) {
            forceTechnique = "Improved Sense Surroundings";
        }
        if (randomNum == 6 && available.includes("CR")) {
            forceTechnique = "Improved Telepathy";
        }
        if (randomNum == 7 && forcePowers.includes("Mind Trick") && available.includes("KotORCG")) {
            forceTechnique = "Dominate Mind";
        }
        if (randomNum == 8 && forcePowers.includes("Energy Resistance") && available.includes("KotORCG")) {
            forceTechnique = "Improved Energy Resistance";
        }
        if (randomNum == 9 && forcePowers.includes("Force Stun") && available.includes("KotORCG")) {
            forceTechnique = "Improved Force Stun";
        }
        if (randomNum == 10 && forcePowers.includes("Force Slam") && available.includes("KotORCG")) {
            forceTechnique = "Improved Force Slam";
        }
        if (randomNum == 11 && forcePowers.includes("Ionize") && available.includes("KotORCG")) {
            forceTechnique = "Improved Ionize";
        }
        if (randomNum == 12 && forcePowers.includes("Kinetic Combat") && available.includes("KotORCG")) {
            forceTechnique = "Improved Kinetic Combat";
        }
        if (randomNum == 13 && forcePowers.includes("Resist Force") && available.includes("KotORCG")) {
            forceTechnique = "Improved Resist Force";
        }
        if (randomNum == 14 && forcePowers.includes("Valor") && available.includes("KotORCG")) {
            forceTechnique = "Improved Valor";
        }
        if (randomNum == 15 && forcePowers.includes("Vital Transfer") && available.includes("KotORCG")) {
            forceTechnique = "Improved Vital Transfer";
        }
        if (randomNum == 16 && available.includes("KotORCG")) {
            forceTechnique = "Language Absorption";
        }
        if (randomNum == 17 && forcePowers.includes("Battle Strike") && available.includes("FUCG")) {
            forceTechnique = "Improved Battle Strike";
        }
        if (randomNum == 18 && forcePowers.includes("Dark Rage") && available.includes("FUCG")) {
            forceTechnique = "Improved Dark Rage";
        }
        if (randomNum == 19 && forcePowers.includes("Force Disarm") && available.includes("FUCG")) {
            forceTechnique = "Improved Force Disarm";
        }
        if (randomNum == 20 && forcePowers.includes("Force Thrust") && available.includes("FUCG")) {
            forceTechnique = "Improved Force Thrust";
        }
        if (randomNum == 21 && forcePowers.includes("Force Grip") && available.includes("FUCG")) {
            forceTechnique = "Improved Force Grip";
        }
        if (randomNum == 22 && forcePowers.includes("Force Lightning") && available.includes("FUCG")) {
            forceTechnique = "Improved Force Lightning";
        }
        if (randomNum == 23 && forcePowers.includes("Mind Trick") && available.includes("FUCG")) {
            forceTechnique = "Improved Mind Trick";
        }
        if (randomNum == 24 && forcePowers.includes("Rebuke") && available.includes("FUCG")) {
            forceTechnique = "Improved Rebuke";
        }
        if (randomNum == 25 && forcePowers.includes("Repulse") && available.includes("FUCG")) {
            forceTechnique = "Improved Repulse";
        }
        if (randomNum == 26 && forcePowers.includes("Vital Transfer") && available.includes("CWCG")) {
            forceTechnique = "Advanced Vital Transfer";
        }
        if (randomNum == 27 && forcePowers.includes("Cloak") && available.includes("CWCG")) {
            forceTechnique = "Improved Cloak";
        }
        if (randomNum == 28 && forcePowers.includes("Levitate") && available.includes("CWCG")) {
            forceTechnique = "Improved Levitate";
        }
        if (randomNum == 29 && forcePowers.includes("Malacia") && available.includes("CWCG")) {
            forceTechnique = "Improved Malacia";
        }
        if (randomNum == 30 && forcePowers.includes("Phase") && available.includes("CWCG")) {
            forceTechnique = "Improved Phase";
        }
        if (randomNum == 31 && forcePowers.includes("Rend") && available.includes("CWCG")) {
            forceTechnique = "Improved Rend";
        }
        if (randomNum == 32 && forcePowers.includes("Shatterpoint") && available.includes("CWCG")) {
            forceTechnique = "Improved Shatterpoint";
        }
        if (randomNum == 33 && forcePowers.includes("Technometry") && available.includes("CWCG")) {
            forceTechnique = "Improved Technometry";
        }
        if (randomNum == 34 && forcePowers.includes("Vital Transfer") && available.includes("LECG")) {
            forceTechnique = "Detoxify Poison";
        }
        if (randomNum == 35 && forcePowers.includes("Ballistakinesis") && available.includes("LECG")) {
            forceTechnique = "Improved Ballistakinesis";
        }
        if (randomNum == 35 && forcePowers.includes("Dark Transfer") && available.includes("LECG")) {
            forceTechnique = "Improved Dark Transfer";
        }
        if (randomNum == 35 && forcePowers.includes("Detonate") && available.includes("LECG")) {
            forceTechnique = "Improved Detonate";
        }
        if (randomNum == 35 && forcePowers.includes("Enlighten") && available.includes("LECG")) {
            forceTechnique = "Improved Enlighten";
        }
        if (randomNum == 35 && forcePowers.includes("Lightning Burst") && available.includes("LECG")) {
            forceTechnique = "Improved Lightning Burst";
        }
        if (randomNum == 35 && forcePowers.includes("Obscure") && available.includes("LECG")) {
            forceTechnique = "Improved Obscure";
        }
        if (randomNum == 36 && forcePowers.includes("Force Shield") && available.includes("LECG")) {
            forceTechnique = "Improved Force Shield";
        }
        if (randomNum == 37 && forcePowers.includes("Stagger") && available.includes("LECG")) {
            forceTechnique = "Improved Stagger";
        }
        if (randomNum == 38 && forcePowers.includes("Vital Transfer") && available.includes("JATM")) {
            forceTechnique = "Cure Disease";
        }
        if (randomNum == 39 && forcePowers.includes("Blind") && available.includes("JATM")) {
            forceTechnique = "Extended Blind";
        }
        if (randomNum == 40 && forcePowers.includes("Force Disarm") && available.includes("JATM")) {
            forceTechnique = "Extended Force Disarm";
        }
        if (randomNum == 41 && forcePowers.includes("Force Grip") && available.includes("JATM")) {
            forceTechnique = "Extended Force Grip";
        }
        if (randomNum == 42 && forcePowers.includes("Force Thrust") && available.includes("JATM")) {
            forceTechnique = "Extended Force Thrust";
        }
        if (randomNum == 43 && forcePowers.includes("Move Object") && available.includes("JATM")) {
            forceTechnique = "Extended Move Object";
        }
        if (randomNum == 44 && forcePowers.includes("Convection") && available.includes("JATM")) {
            forceTechnique = "Improved Convection";
        }
        if (randomNum == 45 && forcePowers.includes("Crucitorn") && available.includes("JATM")) {
            forceTechnique = "Improved Crucitorn";
        }
        if (randomNum == 46 && forcePowers.includes("Cryokinesis") && available.includes("JATM")) {
            forceTechnique = "Improved Cryokinesis";
        }
        if (randomNum == 47 && forcePowers.includes("Fold Space") && available.includes("JATM")) {
            forceTechnique = "Improved Fold Space";
        }
        if (randomNum == 48 && forcePowers.includes("Force Light") && available.includes("JATM")) {
            forceTechnique = "Improved Force Light";
        }
        if (randomNum == 49 && forcePowers.includes("Force Storm") && available.includes("JATM")) {
            forceTechnique = "Improved Force Storm";
        }
        if (randomNum == 50 && forcePowers.includes("Plant Surge") && available.includes("JATM")) {
            forceTechnique = "Improved Plant Surge";
        }
        if (randomNum == 51 && forcePowers.includes("Thought Bomb") && available.includes("JATM")) {
            forceTechnique = "Improved Thought Bomb";
        }
        if (forceTechniques.includes(forceTechnique)) {
            forceTechnique = "";
        }
        if (count == 25) {
            forceTechnique = "ValidForceTechniqueNotFound";
        }
    }

    return forceTechnique;
}

export function displayForceTechniques(forceTechniques) {
    let tempForceTechniques = "";
    let count;
    for (count = 0; count < forceTechniques.length; count++) {
        if (count == 0) {
            if (forceTechniques[count].includes(" (")) {
                let temp = forceTechniques[count].split(" (");
                tempForceTechniques += "<a href='https://swse.fandom.com/wiki/"+temp[0]+"' target='_blank' rel='noopener noreferrer'>"+temp[0]+"</a> (<i><a href='https://swse.fandom.com/wiki/"+temp[1]+"' target='_blank' rel='noopener noreferrer'>"+temp[1]+"</a></i>)";
            }
            else {
                tempForceTechniques += "<a href='https://swse.fandom.com/wiki/"+forceTechniques[count]+"' target='_blank' rel='noopener noreferrer'>"+forceTechniques[count]+"</a>";
            }
        }
        else {
            if (forceTechniques[count].includes(" (")) {
                let temp = forceTechniques[count].split(" (");
                tempForceTechniques += ", <a href='https://swse.fandom.com/wiki/"+temp[0]+"' target='_blank' rel='noopener noreferrer'>"+temp[0]+"</a> (<i><a href='https://swse.fandom.com/wiki/"+temp[1]+"' target='_blank' rel='noopener noreferrer'>"+temp[1]+"</a></i>)";
            }
            else {
                tempForceTechniques += ", <a href='https://swse.fandom.com/wiki/"+forceTechniques[count]+"' target='_blank' rel='noopener noreferrer'>"+forceTechniques[count]+"</a>";
            }
        }
    }

    return tempForceTechniques;
}

export function displayRawForceTechniques(forceTechniques) {
    let rawForceTechniques = "";
    let count;
    for (count = 0; count < forceTechniques.length; count++) {
        if (count == 0) {
            rawForceTechniques += forceTechniques[count];
        }
        else {
            rawForceTechniques += ", "+forceTechniques[count];
        }
    }
    
    return rawForceTechniques;
}