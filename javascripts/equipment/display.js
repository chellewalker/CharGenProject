export function displayEquipment(equipment) {
    let equipmentDisplay = "";
    let count;
    for (count = 0; count < equipment.length; count++) {
        if (count != 0) {
            equipmentDisplay += ", ";
        }
        equipmentDisplay += equipment[count];
    }

    return equipmentDisplay;
}