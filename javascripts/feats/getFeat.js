import {jediFeats} from './jediFeats.js';
import {nobleFeats} from './nobleFeats.js';
import {scoundrelFeats} from './scoundrelFeats.js';
import {scoutFeats} from './scoutFeats.js';
import {soldierFeats} from './soldierFeats.js';

export function getFeat(available,thisLevel,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size) {
let feat = "";
let count = 0;
while (feat == "") {
    count++;
    if (thisLevel == 0) {
        feat = jediFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size);
    }
    else if (thisLevel == 1) {
        feat = nobleFeats(feats,available,skills,talents,str,dex,con,int,wis,cha,BAB,speciesTraits,size);
    }
    else if (thisLevel == 2) {
        feat = scoundrelFeats(feats,available,skills,talents,str,dex,con,int,wis,cha,BAB,speciesTraits,size);
    }
    else if (thisLevel == 3) {
        feat = scoutFeats(feats,available,skills,talents,str,dex,con,int,wis,cha,BAB,speciesTraits,size);
    }
    else if (thisLevel == 4) {
        feat = soldierFeats(feats,available,skills,talents,str,dex,con,int,wis,cha,BAB,speciesTraits,size);
    }
    if (feats.includes(feat)) {
        feat = "";
    }
    if (count == 500) {
        alert(thisLevel);
        feat = "ValidFeatNotFound";
    }
}

    return feat;
}