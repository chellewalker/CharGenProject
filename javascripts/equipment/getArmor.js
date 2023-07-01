export function getArmor(available,feats,talents) {
    let armor = [];

    if (feats.includes("Armor Proficiency (Heavy)")) {
        armor = getHeavy(available,feats,talents);
    }
    else if (feats.includes("Armor Proficiency (Medium)")) {
        armor = getMedium(available,feats,talents);
    }
    else if (feats.includes("Armor Proficiency (Light)")) {
        armor = getLight(available,feats,talents);
    }

    return armor;
}

function getHeavy(available,feats,talents) {
    let name = "";
    let reflex;
    let fortitude;
    let maxDex;
    let type = "Heavy";

    while (name == "") {
        let randomNum = Math.floor(Math.random() * 7);

        if (randomNum == 0) {
            name = "Armored Space Suit (+9 Armor, +3 Fortitude)";
            reflex = 9;
            fortitude = 3;
            maxDex = 1;
        }
        if (randomNum == 1 && available.includes("CR")) {
            name = "Heavy Battle Armor (+10 Armor, +4 Fortitude)";
            reflex = 10;
            fortitude = 4;
            maxDex = 1;
        }
        if (randomNum == 2 && available.includes("KotORCG")) {
            name = "Heavy Powered Battle Armor (+9 Armor, +4 Fortitude)";
            reflex = 9;
            fortitude = 4;
            maxDex = 1;
        }
        if (randomNum == 3 && available.includes("KotORCG")) {
            name = "Matrix Armor (+9 Armor, +3 Fortitude)";
            reflex = 9;
            fortitude = 3;
            maxDex = 1;
        }
        if (randomNum == 4 && available.includes("KotORCG")) {
            name = "Neo-Crusader Assault Armor (+10 Armor, +4 Fortitude)";
            reflex = 10;
            fortitude = 4;
            maxDex = 1;
        }
        if (randomNum == 5 && available.includes("KotORCG")) {
            name = "Republic Heavy Armor (+8 Armor, +3 Fortitude)";
            reflex = 8;
            fortitude = 3;
            maxDex = 1;
        }
        if (randomNum == 6 && available.includes("CWCG")) {
            name = "Vacuum Pod (+4 Armor, +1 Fortitude)";
            reflex = 4;
            fortitude = 1;
            maxDex = 0;
        }
    }

    return [name,reflex,fortitude,maxDex,type];
}

function getMedium(available,feats,talents) {
    let name = "";
    let reflex;
    let fortitude;
    let maxDex;
    let type = "Medium";

    while (name == "") {
        let randomNum = Math.floor(Math.random() * 9);

        if (randomNum == 0) {
            name = "Battle Armor (+8 Armor, +2 Fortitude)";
            reflex = 8;
            fortitude = 2;
            maxDex = 2;
        }
        if (randomNum == 1 && available.includes("CR")) {
            name = "Ceremonial Armor (+7 Armor)";
            reflex = 7;
            fortitude = 0;
            maxDex = 2;
        }
        if (randomNum == 2 && available.includes("CR")) {
            name = "Corellian Powersuit (+7 Armor)";
            reflex = 7;
            fortitude = 0;
            maxDex = 3;
        }
        if (randomNum == 3 && available.includes("KotORCG")) {
            name = "Mandalorian Battle Armor (+8 Armor, +2 Fortitude)";
            reflex = 8;
            fortitude = 2;
            maxDex = 2;
        }
        if (randomNum == 4 && available.includes("KotORCG")) {
            name = "Mesh Armor (+6 Armor, +2 Fortitude)";
            reflex = 6;
            fortitude = 2;
            maxDex = 2;
        }
        if (randomNum == 5 && available.includes("KotORCG")) {
            name = "Powered Battle Armor (+7 Armor, +2 Fortitude)";
            reflex = 7;
            fortitude = 2;
            maxDex = 2;
        }
        if (randomNum == 6 && available.includes("KotORCG")) {
            name = "Republic Combat Armor (+6 Armor, +2 Fortitude)";
            reflex = 6;
            fortitude = 2;
            maxDex = 2;
        }
        if (randomNum == 7 && available.includes("KotORCG")) {
            name = "Weave Armor (+6 Armor, +2 Fortitude)";
            reflex = 6;
            fortitude = 2;
            maxDex = 3;
        }
        if (randomNum == 8 && available.includes("CWCG")) {
            name = "Camo Armor (+5 Armor)";
            reflex = 5;
            maxDex = 3;
        }
    }

    return [name,reflex,fortitude,maxDex,type];
}

function getLight(available,feats,talents) {
    let name = "";
    let reflex;
    let fortitude;
    let maxDex;
    let type = "Light";

    while (name == "") {
        let randomNum = Math.floor(Math.random() * 14);

        if (randomNum == 0) {
            name = "Armored Flight Suit (+5 Armor, +2 Fortitude)";
            reflex = 5;
            fortitude = 2;
            maxDex = 3;
        }
        if (randomNum == 1 && available.includes("CR")) {
            name = "Blast Helmet and Vest (+2 Armor)";
            reflex = 2;
            fortitude = 0;
            maxDex = 5;
        }
        if (randomNum == 2 && available.includes("CR")) {
            name = "Combat Jumpsuit (+4 Armor)";
            reflex = 4;
            fortitude = 0;
            maxDex = 4;
        }
        if (randomNum == 3 && available.includes("CR")) {
            name = "Padded Flight Suit (+3 Armor, +1 Fortitude)";
            reflex = 3;
            fortitude = 1;
            maxDex = 4;
        }
        if (randomNum == 4 && available.includes("CR")) {
            name = "Mesh Armor (+6 Armor, +2 Fortitude)";
            reflex = 6;
            fortitude = 2;
            maxDex = 2;
        }
        if (randomNum == 5 && available.includes("CR")) {
            name = "Stormtrooper Armor (+6 Armor, +2 Fortitude)";
            reflex = 6;
            fortitude = 2;
            maxDex = 3;
        }
        if (randomNum == 6 && available.includes("LECG")) {
            name = "Vonduun Crabshell (+5 Armor, +5 Fortitude)";
            reflex = 5;
            fortitude = 5;
            maxDex = 4;
        }
        if (randomNum == 7 && available.includes("KotORCG")) {
            name = "Fiber Armor (+4 Armor, +1 Fortitude)";
            reflex = 4;
            fortitude = 1;
            maxDex = 2;
        }
        if (randomNum == 8 && available.includes("KotORCG")) {
            name = "Light Battle Armor (+5 Armor, +2 Fortitude)";
            reflex = 5;
            fortitude = 2;
            maxDex = 3;
        }
        if (randomNum == 9 && available.includes("KotORCG")) {
            name = "Light Powered Battle Armor (+4 Armor, +2 Fortitude)";
            reflex = 4;
            fortitude = 2;
            maxDex = 3;
        }
        if (randomNum == 10 && available.includes("KotORCG")) {
            name = "Mandalorian Combat Suit (+4 Armor, +1 Fortitude)";
            reflex = 4;
            fortitude = 1;
            maxDex = 5;
        }
        if (randomNum == 11 && available.includes("KotORCG")) {
            name = "Neo-Crusader Light Armor (+6 Armor, +2 Fortitude)";
            reflex = 6;
            fortitude = 2;
            maxDex = 3;
        }
        if (randomNum == 12 && available.includes("KotORCG")) {
            name = "Republic Light Armor (+4 Armor, +1 Fortitude)";
            reflex = 4;
            fortitude = 1;
            maxDex = 3;
        }
        if (randomNum == 13 && available.includes("CWCG")) {
            name = "Tracker Utility Vest (+1 Armor)";
            reflex = 1;
            fortitude = 0;
            maxDex = 5;
        }
    }

    return [name,reflex,fortitude,maxDex,type];
}