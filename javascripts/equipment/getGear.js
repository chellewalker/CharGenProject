export function getGear(available,feats,talents,skills,speciesTraits) {
    let gearEquipment = [];

    if (speciesTraits.includes("Primitive")) {
    }
    else {
        gearEquipment.push("Comlink");
    }
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
        gearEquipment.push("Medpac (2)");
    }
    if (skills.includes("Use Computer")) {
        gearEquipment.push("Portable Computer");
    }

    let bonusGear = Math.floor(Math.random() * 9);
    let count;

    for (count = 0; count < bonusGear; count++) {
        let randomNum = Math.floor(Math.random() * 17);
        if (randomNum == 0 && available.includes("CR")) {
            if (gearEquipment.includes("Pocket Scrambler")) {
            }
            else {
                gearEquipment.push("Pocket Scrambler");
        }}
        if (randomNum == 1 && available.includes("CR")) {
            if (gearEquipment.includes("Vox-Box")) {
            }
            else {
                gearEquipment.push("Vox-Box");
        }}
        if (randomNum == 2 && available.includes("CR")) {
            if (gearEquipment.includes("Code Cylinder")) {
            }
            else {
                gearEquipment.push("Code Cylinder");
        }}
        if (randomNum == 3 && available.includes("CR")) {
            if (gearEquipment.includes("Datapad")) {
            }
            else {
                gearEquipment.push("Datapad");
        }}
        if (randomNum == 4 && available.includes("CR")) {
            if (gearEquipment.includes("Personal Holoprojector")) {
            }
            else {
                gearEquipment.push("Personal Holoprojector");
        }}
        if (randomNum == 5 && skills.includes("Use Computer") && available.includes("TotG")) {
            gearEquipment.push("Computer Spike (+2)");
        }
        if (randomNum == 6 && available.includes("TotG")) {
            if (gearEquipment.includes("HiBaka 2000 Mem-Stik")) {
            }
            else {
                gearEquipment.push("HiBaka 2000 Mem-Stik");
        }}
        if (randomNum == 7 && skills.includes("Mechanics") && available.includes("TotG")) {
            gearEquipment.push("Lectroticker (+2)");
        }
        if (randomNum == 8 && available.includes("KotORCG")) {
            if (gearEquipment.includes("Computer Interface Visor (+2 Use Computer)")) {
            }
            else {
                gearEquipment.push("Computer Interface Visor (+2 Use Computer)");
        }}
        if (randomNum == 9 && available.includes("CR")) {
            if (gearEquipment.includes("Electrobinoculars")) {
            }
            else {
                gearEquipment.push("Electrobinoculars");
        }}
        if (randomNum == 10 && available.includes("CR")) {
            if (gearEquipment.includes("Glow Rod") || gearEquipment.includes("Fusion Lantern")) {
            }
            else {
                gearEquipment.push("Glow Rod");
        }}
        if (randomNum == 11 && available.includes("CR")) {
            if (gearEquipment.includes("Glow Rod") || gearEquipment.includes("Fusion Lantern")) {
            }
            else {
                gearEquipment.push("Fusion Lantern");
        }}
        if (randomNum == 12 && available.includes("CR")) {
            if (gearEquipment.includes("Audiorecorder") ||
                    gearEquipment.includes("Holorecorder") ||
                    gearEquipment.includes("Videorecorder")) {
            }
            else {
                gearEquipment.push("Audiorecorder");
        }}
        if (randomNum == 13 && available.includes("CR")) {
            if (gearEquipment.includes("Audiorecorder") ||
                    gearEquipment.includes("Holorecorder") ||
                    gearEquipment.includes("Videorecorder")) {
            }
            else {
                gearEquipment.push("Holorecorder");
        }}
        if (randomNum == 14 && available.includes("CR")) {
            if (gearEquipment.includes("Audiorecorder") ||
                    gearEquipment.includes("Holorecorder") ||
                    gearEquipment.includes("Videorecorder")) {
            }
            else {
                gearEquipment.push("Videorecorder");
        }}
        if (randomNum == 15 && available.includes("CR")) {
            if (gearEquipment.includes("Sensor Pack")) {
            }
            else {
                gearEquipment.push("Sensor Pack");
        }}
        if (randomNum == 16 && available.includes("TotG")) {
            if (gearEquipment.includes("Heat Sensor")) {
            }
            else {
                gearEquipment.push("Heat Sensor");
        }}
    }

    return gearEquipment;
}