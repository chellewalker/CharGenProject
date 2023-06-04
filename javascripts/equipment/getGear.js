export function getGear(available,feats,talents,skills) {
    let gearEquipment = [];

    if (talents.includes("Jet Pack Training")) {
        gearEquipment.push("Jet Pack");
    }
    
    return gearEquipment;
}