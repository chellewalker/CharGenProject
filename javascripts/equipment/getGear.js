export function getGear(available,feats,talents,skills) {
    let gearEquipment = [];

    if (talents.includes("Jet Pack Training")) {
        gearEquipment.push("Jet Pack");
    }
    if (skills.includes("Mechanics")) {
        let randomNum = Math.floor(Math.random() * 2);
        if (randomNum == 0) {
            gearEquipment.push("Tool Kit");
        }
        else if (randomNum == 1) {
            gearEquipment.push("Security Kit");
        }
    }
    if (skills.includes("Survival")) {
        gearEquipment.push("Field Kit");
    }
    if (skills.includes("Treat Injury")) {
        gearEquipment.push("Medical Kit");
    }

    return gearEquipment;
}