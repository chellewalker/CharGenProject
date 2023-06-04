import {parseXML} from './xmlGetter.js';

export function getSpeed(speciesID,talents,feats,armorType) {
    let speedValue = parseInt(parseXML("xmls/species.xml","speed",speciesID));
    if (armorType == "Medium" && speedValue == 4 ||
            armorType == "Heavy" && speedValue == 4) {
        if (talents.includes("Juggernaut")) {}
        else {
        speedValue = 3;
    }}
    else if (armorType == "Medium" && speedValue != 2 || armorType == "Heavy" && speedValue != 2) {
        if (talents.includes("Juggernaut")) {}
        else {
        speedValue -= 2;
    }}
        if (talents.includes("Long Stride")) {
            speedValue += 2;
        }
        let swimSpeed = parseInt(parseXML("xmls/species.xml","swimSpeed",speciesID));
        let speed = speedValue + " Squares (Walking)";
        if (swimSpeed != 0) {
            if (talents.includes("Long Stride")) {
                swimSpeed += 2;
                if (feats.includes("Increased Agility")) {
                    swimSpeed += 2;
                    speed = speed + ", 4 Squares (Climbing), 2 Squares (Jumping), " + swimSpeed + " Squares (Swimming)";
                }
            }
            else if (feats.includes("Increased Agility")) {
                swimSpeed += 2;
                speed = speed + ", 2 Squares (Climbing), 2 Squares (Jumping), " + swimSpeed + " Squares (Swimming)";
            }
            else {
            speed = speed + ", " + swimSpeed + " Squares (Swimming)";
        }}
        else if (feats.includes("Increased Agility") && talents.includes("Long Stride")) {
            speed = speed + ", 4 Squares (Climbing), 2 Squares (Jumping), 4 Squares (Swimming)";
        }
        else if (feats.includes("Increased Agility")) {
            speed = speed + ", 2 Squares (Climbing), 2 Squares (Jumping), 2 Squares (Swimming)";
        }

        if (talents.includes("Jet Pack Training")) {
            if (talents.includes("Improved Trajectory")) {
                speed += ", 8 Squares (Jet Pack)";
            }
            else {
                speed += ", 6 Squares (Jet Pack)";
        }}
    return speed;
}