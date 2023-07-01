import {characterFeat} from './characterFeat.js';
import {jediFeats} from './jediFeats.js';
import {nobleFeats} from './nobleFeats.js';
import {scoundrelFeats} from './scoundrelFeats.js';
import {scoutFeats} from './scoutFeats.js';
import {soldierFeats} from './soldierFeats.js';

export function getFeat(available,thisLevel,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel,species) {
let feat = "";
let count = 0;
while (feat == "") {
    count++;

    if (thisLevel == 0) {
        feat = jediFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel);
    }
    else if (thisLevel == 1) {
        feat = nobleFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel);
    }
    else if (thisLevel == 2) {
        feat = scoundrelFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel);
    }
    else if (thisLevel == 3) {
        feat = scoutFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel);
    }
    else if (thisLevel == 4) {
        feat = soldierFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel);
    }
    else {
        feat = characterFeat(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size,curLevel,species);
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