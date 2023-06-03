import {parseXML} from './xmlGetter.js';

export function getSpeed(speciesID,talents,feats) {
    let speedValue = parseInt(parseXML("xmls/species.xml","speed",speciesID));
        if (talents.includes("Long Stride")) {
            speedValue += 2;
        }
        let swimSpeed = parseInt(parseXML("xmls/species.xml","swimSpeed",speciesID));
        let speed = speedValue + " Squares";
        if (swimSpeed != 0) {
            if (talents.includes("Long Stride")) {
                swimSpeed += 2;
                if (feats.includes("Increased Agility")) {
                    swimSpeed += 2;
                    speed = speed + " (Walking), 4 Squares (Climbing), 2 Squares (Jumping), " + swimSpeed + " Squares (Swimming)";
                }
            }
            else if (feats.includes("Increased Agility")) {
                swimSpeed += 2;
                speed = speed + " (Walking), 2 Squares (Climbing), 2 Squares (Jumping), " + swimSpeed + " Squares (Swimming)";
            }
            else {
            speed = speed + " (Walking), " + swimSpeed + " Squares (Swimming)";
        }}
        else if (feats.includes("Increased Agility") && talents.includes("Long Stride")) {
            speed = speed + " (Walking), 4 Squares (Climbing), 2 Squares (Jumping), 4 Squares (Swimming)";
        }
        else if (feats.includes("Increased Agility")) {
            speed = speed + " (Walking), 2 Squares (Climbing), 2 Squares (Jumping), 2 Squares (Swimming)";
        }
    return speed;
}