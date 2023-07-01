import {parseXML} from './xmlGetter.js';

export function getSpeed(speciesID,talents,feats,armorType,armor) {
    let hovering = 0;
    if (speciesID != 0) {
    try {
        hovering = parseInt(parseXML("xmls/species.xml","hoveringSpeed",speciesID));
                if (armorType == "Medium" && hovering < 6 ||
                    armorType == "Heavy" && hovering < 6) {
                if (talents.includes("Juggernaut")) {}
                else {
                    hovering--;
            }}
            else if (armorType == "Medium" || armorType == "Heavy") {
                if (talents.includes("Juggernaut")) {}
                else {
                    hovering -= 2;
            }}
    }
    catch {}
}
    let flying = 0;
    try {
        flying = parseInt(parseXML("xmls/species.xml","flySpeed",speciesID));
        if (armorType == "Medium" && flying < 6 ||
                    armorType == "Heavy" && flying < 6) {
                if (talents.includes("Juggernaut")) {}
                else {
                    flying--;
            }}
            else if (armorType == "Medium" || armorType == "Heavy") {
                if (talents.includes("Juggernaut")) {}
                else {
                    flying -= 2;
            }}
    }
    catch {}
    let climbing = 0;
    try {
        climbing = parseInt(parseXML("xmls/species.xml","climbSpeed",speciesID));
    }
    catch {}
    if (feats.includes("Increased Agility")) {
        climbing += 2;
    }
    if (talents.includes("Long Stride") && climbing > 0) {
        climbing += 2;
    }
        if (armorType == "Medium" && climbing < 6 ||
                    armorType == "Heavy" && climbing < 6) {
                if (talents.includes("Juggernaut")) {}
                else {
                    climbing--;
            }}
            else if (climbing > 0 && armorType == "Medium" || climbing > 0 && armorType == "Heavy") {
                if (talents.includes("Juggernaut")) {}
                else {
                    climbing -= 2;
            }}
    let jumping = 0;
    try {
        jumping = parseInt(parseXML("xmls/species.xml","jumpSpeed",speciesID));
    }
    catch {}
    if (feats.includes("Increased Agility")) {
        jumping += 2;
    }
        if (armorType == "Medium" && jumping < 6 ||
                    armorType == "Heavy" && jumping < 6) {
                if (talents.includes("Juggernaut")) {}
                else {
                    jumping--;
            }}
            else if (jumping > 0 && armorType == "Medium" || jumping > 0 && armorType == "Heavy") {
                if (talents.includes("Juggernaut")) {}
                else {
                    jumping -= 2;
            }}
    let speedValue = parseInt(parseXML("xmls/species.xml","speed",speciesID));
            if (armorType == "Medium" && speedValue < 6 ||
                    armorType == "Heavy" && speedValue < 6) {
                if (talents.includes("Juggernaut")) {}
                else {
                speedValue--;
            }}
            else if (armorType == "Medium" || armorType == "Heavy") {
                if (talents.includes("Juggernaut")) {}
                else {
                speedValue -= 2;
            }}
                if (talents.includes("Long Stride")) {
                    speedValue += 2;
                }
        let swimSpeed = parseInt(parseXML("xmls/species.xml","swimSpeed",speciesID));
        if (armorType == "Medium" && swimSpeed < 6 ||
                    armorType == "Heavy" && swimSpeed < 6) {
                if (talents.includes("Juggernaut")) {}
                else {
                    swimSpeed--;
            }}
            else if (armorType == "Medium" || armorType == "Heavy") {
                if (talents.includes("Juggernaut")) {}
                else {
                    swimSpeed -= 2;
            }}
                if (talents.includes("Long Stride")) {
                    swimSpeed += 2;
                }
                if (feats.includes("Increased Agility")) {
                    swimSpeed += 2;
                }
        let jetPack = 0;
        if (armor == "Neo-Crusader Light Armor (+6 Reflex, +2 Fortitude)"
                || armor == "Neo-Crusader Light Armor (+6 Reflex, +2 Fortitude)") {
            jetPack = 4;
        }
        else if (talents.includes("Jet Pack Training")
                || armor == "Mandalorian Battle Armor (+8 Reflex, +2 Fortitude)"
                || armor == "Neo-Crusader Assault Armor (+10 Reflex, +4 Fortitude)") {
            jetPack = 6;
            }
            if (talents.includes("Improved Trajectory")) {
                jetPack += 2;
            }
        if (talents.includes("Jet Pack Training")) {
            jetPack = 6;
            if (talents.includes("Improved Trajectory")) {
                jetPack += 2;
            }}
        let speed = speedValue + " Squares (Walking)";
        if (swimSpeed > 0) {
            speed += ", " + swimSpeed + " Squares (Swimming)";
        }
        if (climbing > 0) {
            speed += ", " + climbing + " Squares (Climbing)";
        }
        if (jumping > 0) {
            speed += ", " + jumping + " Squares (Jumping)";
        }
        if (hovering > 0) {
            speed += ", " + hovering + " Squares (Hovering)";
        }
        if (flying > 0) {
            speed += ", " + flying + " Squares (Flying)";
        }
        if (jetPack > 0) {
            speed += ", " + jetPack + " Squares (Jet Pack)";
        }

    return speed;
}