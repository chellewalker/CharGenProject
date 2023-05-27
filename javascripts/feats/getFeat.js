import {jediFeats} from './jediFeats.js';
import {nobleFeats} from './nobleFeats.js';
import {scoundrelFeats} from './scoundrelFeats.js';
import {scoutFeats} from './scoutFeats.js';
import {soldierFeats} from './soldierFeats.js';

export function getFeats(available,thisLevel,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits) {

    if (thisLevel == 0) {
        feats.push(jediFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits));
    }
    else if (thisLevel == 1) {
        feats.push(nobleFeats(feats,available,skills,talents,str,dex,con,int,wis,cha,BAB,speciesTraits));
    }
    else if (thisLevel == 2) {
        feats.push(scoundrelFeats(feats,available,skills,talents,str,dex,con,int,wis,cha,BAB,speciesTraits));
    }
    else if (thisLevel == 3) {
        feats.push(scoutFeats(feats,available,skills,talents,str,dex,con,int,wis,cha,BAB,speciesTraits));
    }
    else if (thisLevel == 4) {
        feats.push(soldierFeats(feats,available,skills,talents,str,dex,con,int,wis,cha,BAB,speciesTraits));
    }
    feats.sort();

    return feats;
}