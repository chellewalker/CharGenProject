import {adeptCounter} from "./talentCounter/adept.js";
import {armorCounter} from "./talentCounter/armor.js";
import {alterCounter} from "./talentCounter/alter.js";
import {awarenessCounter} from "./talentCounter/awareness.js";
import {commandoCounter} from "./talentCounter/commando.js";
import {controlCounter} from "./talentCounter/control.js";
import {darkCounter} from "./talentCounter/dark.js";
import {devoteeCounter} from "./talentCounter/devotee.js";
import {fortuneCounter} from "./talentCounter/fortune.js";
import {guardianCounter} from "./talentCounter/guardian.js";
import {itemCounter} from "./talentCounter/item.js";
import {lightCounter} from "./talentCounter/light.js";
import {lineageCounter} from "./talentCounter/lineage.js";
import {mercenaryCounter} from "./talentCounter/mercenary.js";
import {misfortuneCounter} from "./talentCounter/misfortune.js";
import {senseCounter} from "./talentCounter/sense.js";
import {traditionCounter} from "./talentCounter/tradition.js";
import {weaponCounter} from "./talentCounter/weapon.js";

export function getLevel(firstClass,classes,curLevel,skills,feats,talents,BAB,available,forcePowers,forceTechniques) {
    let thisLevel;

    let randomNum = Math.floor(Math.random() * 8);
    if (randomNum < 2) {
        thisLevel = firstClass;
    }
    else if (randomNum < 6) {
        let check = 0;
        while (check == 0) {
        let randomNum2 = Math.floor(Math.random() * 11);

        if (classes[randomNum2] > 0 || randomNum2 == firstClass) {
            thisLevel = randomNum2;
            check = 1;
        }
    }}
    else {
        let randomNum3 = Math.floor(Math.random() * 5);
        thisLevel = randomNum3;
    if (classes[5] > 0 || classes[6] > 0 || classes[7] > 0 || classes[8] > 0 || classes[9] > 0 || classes[10] > 0) {
        let check = 0;
        while (check == 0) {
        let randomNum4 = Math.floor(Math.random() * 6);
        if (classes[5] && randomNum4 == 0) {
            thisLevel = 5;
            check = 1;
        }
        else if (classes[6] && randomNum4 == 1) {
            thisLevel = 6;
            check = 1;
        }
        else if (classes[7] && randomNum4 == 2) {
            thisLevel = 7;
            check = 1;
        }
        else if (classes[8] && randomNum4 == 3) {
            thisLevel = 8;
            check = 1;
        }
        else if (classes[9] && randomNum4 == 4) {
            thisLevel = 8;
            check = 1;
        }
        else if (classes[10]) {
            thisLevel = 8;
            check = 1;
        }
    }}
    }

    if (curLevel >= 7 && skills.includes("Pilot") && feats.includes("Vehicular Combat") && available.includes("CR")
        && classes[5] == 0) {
        thisLevel = 5;
    }

    if (curLevel >= 7 && skills.includes("Survival") && available.includes("CR")
        && classes[6] == 0) {
            let awarenessCount = awarenessCounter(talents);
            if (awarenessCount >= 2) {
                thisLevel = 6;
            }
    }

    if (curLevel >= 7 && skills.includes("Deception") && skills.includes("Deception") && available.includes("CR")
        && classes[7] == 0) {
            let fullCount = fortuneCounter(talents) + lineageCounter(talents) + misfortuneCounter(talents);
            if (fullCount >= 1) {
                thisLevel = 7;
            }
    }

    if (BAB >= 7 && feats.includes("Armor Proficiency (Medium)") && feats.includes("Martial Arts I") && available.includes("CR")
        && classes[8] == 0 && feats.includes("Point-Blank Shot") ||
            BAB >= 7 && feats.includes("Armor Proficiency (Medium)") && feats.includes("Martial Arts I") && available.includes("CR")
                && classes[8] == 0 && feats.includes("Point-Blank Shot")) {
            let fullCount = armorCounter(talents) + commandoCounter(talents) + mercenaryCounter(talents) + weaponCounter(talents);
            if (fullCount >= 1) {
                thisLevel = 8;
            }
    }

    if (curLevel >= 7 && skills.includes("Use the Force") && classes[9] == 0) {
        let fullCount = alterCounter(talents) + controlCounter(talents) + darkCounter(talents) + senseCounter(talents) + lightCounter(talents)
        + guardianCounter(talents) + traditionCounter(talents);
            if (fullCount >= 3) {
                thisLevel = 9;
            }
    }

    if (curLevel >= 12 && forcePowers.includes("Farseeing") && forceTechniques.length >= 1) {
        let fullCount = devoteeCounter(talents) + adeptCounter(talents) + itemCounter(talents);
            if (fullCount >= 2) {
                thisLevel = 10;
            }
    }

    return thisLevel;
}