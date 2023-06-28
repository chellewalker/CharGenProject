export function getWill(classes,wis,level,speciesTraits,feats,talents) {

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

    let will = 10 + Math.floor((wis-10)/2) + parseInt(level) + classWill;
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

    return will;
}