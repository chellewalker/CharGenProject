import {jediTalents} from './jediTalents.js';
import {nobleTalents} from './nobleTalents.js';
import {scoundrelTalents} from './scoundrelTalents.js';
import {scoutTalents} from './scoutTalents.js';
import {soldierTalents} from './soldierTalents.js';

export function getTalents(thisLevel,available,skills,feats,talents) {

    if (thisLevel == 0) {
        talents.push(jediTalents(talents,available,skills,feats));
    }
    else if (thisLevel == 1) {
        talents.push(nobleTalents(talents,available,skills,feats));
    }
    else if (thisLevel == 2) {
        talents.push(scoundrelTalents(talents,available,skills,feats));
    }
    else if (thisLevel == 3) {
        talents.push(scoutTalents(talents,available,skills,feats));
    }
    else if (thisLevel == 4) {
        talents.push(soldierTalents(talents,available,skills,feats));
    }
    talents.sort();

    return talents;
}