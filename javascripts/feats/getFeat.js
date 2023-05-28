import {characterFeat} from './characterFeat.js';
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
    else {
        feat = characterFeat(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size);
    }
    /*if (feats.includes(feat) && feat != "Linguist" && feat != "Force Training" && feat != "Skill Training" && feat != "Starship Tactics") {
        feat = "";
    }*/
    if (count == 5000000) {
        feat = "ValidFeatNotFound";
    }
}

    return feat;
}