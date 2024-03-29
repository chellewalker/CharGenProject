export function getWill(classes,wis,cha,level,speciesTraits,feats,talents,armorFort) {

    let classWill = 0;

        if (classes[0] > 0) {
            classWill = 1;
        }
        if (classes[1] > 0) {
            classWill = Math.max(classWill,2);
        }
        if (classes[2] > 0) {
            classWill = Math.max(classWill,1);
        }
        if (classes[3] > 0) {
            classWill = Math.max(classWill,0);
        }
        if (classes[4] > 0) {
            classWill = Math.max(classWill,0);
        }
        //Ace Pilot
        if (classes[5] > 0) {
            classWill = Math.max(classWill,2);
        }
        //Crime Lord
        if (classes[7] > 0) {
            classWill = Math.max(classWill,4);
        }
        //Force Adept
        if (classes[9] > 0) {
            classWill = Math.max(classWill,4);
        }
        //Force Disciple
        if (classes[10] > 0) {
            classWill = Math.max(classWill,6);
        }

    let will = 10 + Math.floor((wis-10)/2) + parseInt(level) + classWill;
    if (speciesTraits.includes("Strength of Conviction") || feats.includes("Force of Personality")) {
        will = 10 + Math.floor((Math.max(wis,cha)-10)/2) + parseInt(level) + classWill;
    }
        if (speciesTraits.includes("Iron Will")) {
            will += 2;
        }
        if (speciesTraits.includes("Superior Defenses")) {
            will++;
        }
        if (feats.includes("Improved Defenses")) {
            will++;
        }
        if (talents.includes("Force of Will")) {
            will += 2;
        }
        if (feats.includes("Grand Army of the Republic Training")) {
            will += armorFort;
        }

    return will;
}