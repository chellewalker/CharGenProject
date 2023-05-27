export function getWill(classes,wis,level,speciesTraits,feats) {

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

    return will;
}