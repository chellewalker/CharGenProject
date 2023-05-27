import {jediTalents} from './jediTalents.js';
import {nobleTalents} from './nobleTalents.js';
import {scoundrelTalents} from './scoundrelTalents.js';
import {scoutTalents} from './scoutTalents.js';
import {soldierTalents} from './soldierTalents.js';

export function getTalent(thisLevel,available,skills,feats,talents) {
    let talent;

    if (thisLevel == 0) {
        talent = jediTalents(talents,available,skills,feats);
    }
    else if (thisLevel == 1) {
        talent = nobleTalents(talents,available,skills,feats);
    }
    else if (thisLevel == 2) {
        talent = scoundrelTalents(talents,available,skills,feats);
    }
    else if (thisLevel == 3) {
        talent = scoutTalents(talents,available,skills,feats);
    }
    else if (thisLevel == 4) {
        talent = soldierTalents(talents,available,skills,feats);
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