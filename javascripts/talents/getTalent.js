import {forceTalents} from '../forceAbilities/forceTalents.js';
import {traditionTalents} from '../forceAbilities/traditionTalents.js';
import {jediTalents} from './jediTalents.js';
import {nobleTalents} from './nobleTalents.js';
import {scoundrelTalents} from './scoundrelTalents.js';
import {scoutTalents} from './scoutTalents.js';
import {soldierTalents} from './soldierTalents.js';

export function getTalent(thisLevel,available,skills,feats,talents,BAB,forcePowers,light,dark,tradition) {
    let talent = "";
    let count = 0;
while (talent == "") {
        count++;
    if (feats.includes("Force Sensitivity")) {
        let randomNum = Math.floor(Math.random() * 3);
        if (randomNum == 0) {
            let randomNum2 = Math.floor(Math.random() * 2);
            if (randomNum2 == 0 && tradition != 0 && tradition != 1) {
                talent = traditionTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,tradition);
            }
            else {
                talent = forceTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,tradition);
            }
        }
        else {
    

    if (thisLevel == 0) {
        talent = jediTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (thisLevel == 1) {
        talent = nobleTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (thisLevel == 2) {
        talent = scoundrelTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (thisLevel == 3) {
        talent = scoutTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (thisLevel == 4) {
        talent = soldierTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}}
else {
    if (thisLevel == 0) {
        talent = jediTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (thisLevel == 1) {
        talent = nobleTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (thisLevel == 2) {
        talent = scoundrelTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (thisLevel == 3) {
        talent = scoutTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (thisLevel == 4) {
        talent = soldierTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    if (count == 500) {
        talent = "ValidTalentNotFound";
    }
}
}

    return talent;
}

export function displayTalents(talents) {
    let talentDisplay = "";
    let count;
    for (count = 0; count < talents.length; count++) {
        if (count != 0) {
            talentDisplay += ", ";
        }
        talentDisplay += talents[count];
    }

    return talentDisplay;
}