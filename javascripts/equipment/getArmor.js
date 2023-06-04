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

    return armor
}

function getHeavy(available,feats,talents) {
    let name = "";
    let reflex;
    let fortitude;
    let maxDex;
    let type = "Heavy";

    while (name == "") {
        let randomNum = Math.floor(Math.random() * 3);

        if (randomNum == 0) {
            name = "Armored Space Suit";
            reflex = 9;
            fortitude = 3;
            maxDex = 1;
        }
        if (randomNum == 1 && available.includes("CR")) {
            name = "Heavy Battle Armor";
            reflex = 10;
            fortitude = 4;
            maxDex = 1;
        }
        if (randomNum == 2 && available.includes("KotORCG")) {
            name = "Heavy Powered Battle Armor";
            reflex = 9;
            fortitude = 4;
            maxDex = 1;
        }
        if (randomNum == 3 && available.includes("KotORCG")) {
            name = "Matrix Armor";
            reflex = 9;
            fortitude = 3;
            maxDex = 1;
        }
        if (randomNum == 4 && available.includes("KotORCG")) {
            name = "Neo-Crusader Assault Armor";
            reflex = 10;
            fortitude = 4;
            maxDex = 1;
        }
        if (randomNum == 5 && available.includes("KotORCG")) {
            name = "Republic Heavy Armor";
            reflex = 8;
            fortitude = 3;
            maxDex = 1;
        }
    }

    return [name,reflex,fortitude,maxDex,type];
}