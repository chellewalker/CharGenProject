import {forceTalents} from '../forceAbilities/forceTalents.js';
import {traditionTalents} from '../forceAbilities/traditionTalents.js';
import {jediTalents} from './jediTalents.js';
import {nobleTalents} from './nobleTalents.js';
import {scoundrelTalents} from './scoundrelTalents.js';
import {scoutTalents} from './scoutTalents.js';
import {soldierTalents} from './soldierTalents.js';
import {acePilotTalents} from './prestigeTalents/acePilotTalents.js';
import {bountyHunterTalents} from './prestigeTalents/bountyHunterTalents.js';

export function getTalent(thisLevel,available,skills,feats,talents,BAB,forcePowers,light,dark,tradition,cha,starshipManeuvers,wis,qualities) {
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
                talent = forceTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,tradition,cha);
            }
        }
        else {
    

    if (thisLevel == 0) {
        talent = jediTalents(talents,available,skills,feats,BAB,forcePowers,light,dark);
    }
    else if (thisLevel == 1) {
        talent = nobleTalents(talents,available,skills,feats,BAB,forcePowers,light,dark,cha);
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
    else if (thisLevel == 5) {
        talent = acePilotTalents(talents,available,skills,feats,BAB,starshipManeuvers,wis,cha);
    }
    else if (thisLevel == 6) {
        talent = bountyHunterTalents(talents,available,skills,feats,BAB,wis,cha,qualities);
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
    let count2;
    for (count = 0; count < talents.length; count++) {
        if (count != 0) {
            talentDisplay += ", ";
        }
        if (talents[count].includes(" (")) {
            let temp = talents[count].split(" (");
            talentDisplay += "<a href='https://swse.fandom.com/wiki/"+temp[0]+"'>"+temp[0]+"</a>";
            for (count2 = 1; count2 < temp.length; count2++) {
                talentDisplay += " ("+temp[count2];
            }
        }
        else {
            talentDisplay += "<a href='https://swse.fandom.com/wiki/"+talents[count]+"' target='_blank' rel='noopener noreferrer'>"+talents[count]+"</a>";
        }
    }

    return talentDisplay;
}

export function displayRawTalents(talents) {
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