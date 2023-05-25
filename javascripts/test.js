import {parseXML} from './xmlGetter.js';
import {references} from './references.js';
import {speciesGen} from './speciesGen.js';
import {getLanguages,languageList} from './language.js';
import {getSkills,displaySkills} from './classGen/skills.js';
import {getBAB} from './classGen/getBAB.js';
import {classFeats,speciesFeats,getFeat,displayFeats} from './feats.js';
import {getTalent,displayTalents} from './talents/getTalents.js';
import {getFirstHitPoints,getMoreHitPoints} from './classGen/hitPoints.js';
import {classFirst,getFirstHitPoints,classSelection,classListing,getBAB} from './classGen.js';
import {abilityGen,finalAbilities} from './abilities/abilityGen.js';

export function genCharacter() {
    // get values
    let available = references().split(",");
    let abilities = document.getElementById('abilities').value;
    let thisLevel = document.getElementById('class').value;
    let level = document.getElementById('level').value;
    let species = "error";
    let tempSpecies = document.querySelector('input[name="species"]:checked').value;
        if (tempSpecies == "on") {
            tempSpecies = document.getElementById('speciesManual').value;
            if (tempSpecies == null) {
                tempSpecies = "random";
            }
        }

        //generate species
        let speciesID = speciesGen(tempSpecies,available);
        species = parseXML("xmls/species.xml","name",speciesID);
        let speciesMod = parseXML("xmls/species.xml","abilityMods",speciesID);
        let speciesTraits = parseXML("xmls/species.xml","speciesTraits",speciesID).split(", ");

        //generate name
        let name = document.querySelector('input[name="name"]:checked').value;
        if (document.getElementById('nameManual').value != "") {
            name = document.getElementById('nameManual').value;
        }
        else if (name == "random" || name == "on") {
                let nameList = parseXML("xmls/species.xml","exampleNames",speciesID);
                let nameArray = nameList.split(", ");
                let randomName = Math.floor(Math.random() * nameArray.length);
                name = nameArray[randomName];
        }
        let size = parseXML("xmls/species.xml","size",speciesID);

        //generate ability scores
        let str,dex,con,int,wis,cha = finalAbilities(abilities,level,speciesMod);

        //Class generation
        let classes = [0,0,0,0,0];
        let hitPoints = 0;
        let talents = [];
        let feats = [];
        let skills = [];
        let BAB = 0;
        for (count = 0; count < level; count++) {
            if (count % 4 == 0) {
                feats.push(characterFeats(available,feats,talents,skills,type,str,dex,con,int,wis,cha,BAB,speciesTraits));
            }
            if (count == 0) {
                if (thisLevel == "random") {
                    thisLevel = classFirst(str,dex,con,int,wis,cha);
                    classes[thisLevel]++;
                }
                else {
                    classes[thisLevel]++;

                }
                skills = getSkills(int,thisLevel,speciesTraits,classes);
                BAB = getBAB(classes);
                talents.push(getTalent(thisLevel));
                hitPoints += getFirstHitPoints(thisLevel,available,skills,feats,talents);
                feats.push(characterFeats(available,feats,talents,skills,type,str,dex,con,int,wis,cha,BAB,speciesTraits));
            }
            else {
                thisLevel = getLevel();
                classes[thisLevel]++;
                BAB = getBAB(classes);
                hitPoints += getMoreHitPoints(thisLevel,con);
                if (classes[thisLevel] % 2 == 0) {
                    feats.push(getFeat(available,thisLevel,feats,talents));
                }
                else {
                    talents.push(getTalent(thisLevel,available,skills,feats,talents));
                }
            }
        }

        //generate languages
        let languages = getLanguages(speciesID,feats,int);
        let listLanguages = languageList(languages);

        //defenses

        //speed
        let speedValue = parseInt(parseXML("xmls/species.xml","speed",speciesID));
        if (talents.includes("Long Stride")) {
            speedValue += 2;
        }
        let swimSpeed = parseInt(parseXML("xmls/species.xml","swimSpeed",speciesID));
        let speed = speedValue + " Squares";
        if (swimSpeed != 0) {
            if (talents.includes("Long Stride")) {
                swimSpeed += 2;
            }
            speed = speed + " (Walking), " + swimSpeed + " Squares (Swimming)";
        }

        //attacks and damage

        //equipment

        //output
}