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
            }
            speed = speed + " (Walking), " + swimSpeed + " Squares (Swimming)";
        }
    return speed;
}