import {jediTalents} from './jediTalents.js';
import {nobleTalents} from './nobleTalents.js';
import {scoundrelTalents} from './scoundrelTalents.js';
import {scoutTalents} from './scoutTalents.js';
import {soldierTalents} from './soldierTalents.js';

export function getTalents(classes,available,skills,feats) {
    let talents = [];
    let count;

    if (Math.round(classes[0]/2) > 0) {
        for (count = 0; count < Math.round(classes[0]/2); count++) {
            talents.push (jediTalents(talents,available,skills,feats));
        }
    }
    if (Math.round(classes[1]/2) > 0) {
        for (count = 0; count < Math.round(classes[1]/2); count++) {
            talents.push (nobleTalents(talents,available,skills,feats));
        }
    }
    if (Math.round(classes[2]/2) > 0) {
        for (count = 0; count < Math.round(classes[2]/2); count++) {
            talents.push (scoundrelTalents(talents,available,skills,feats));
        }
    }
    if (Math.round(classes[3]/2) > 0) {
        for (count = 0; count < Math.round(classes[3]/2); count++) {
            talents.push (scoutTalents(talents,available,skills,feats));
        }
    }
    if (Math.round(classes[4]/2) > 0) {
        for (count = 0; count < Math.round(classes[4]/2); count++) {
            talents.push (soldierTalents(talents,available,skills,feats));
        }
    }

    return talents;
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