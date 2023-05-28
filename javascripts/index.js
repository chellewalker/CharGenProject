import {parseXML} from './xmlGetter.js';
import {references} from './references.js';
import {speciesGen} from './speciesGen.js';
import {getSpeed} from './speed.js';
import {getLanguages,languageList} from './language.js';
import {getSkills,getNewSkill,displaySkills,getInitiative,getPerception} from './classGen/skills.js';
import {getBAB} from './classGen/getBAB.js';
import {getOutput} from './getOutput.js';
import {displayFeats} from './feats/featDisplay.js';
import {speciesFeats} from './feats/speciesFeats.js';
import {getFeat} from './feats/getFeat.js';
import {classFeats,multiclassFeat} from './feats/classFeats.js';
import {getTalent,displayTalents} from './talents/getTalent.js';
import {getFirstHitPoints,getMoreHitPoints} from './classGen/hitPoints.js';
import {classFirst,classListing} from './classGen.js';
import {finalAbilities} from './abilities/abilityGen.js';
import {getLevel} from './classGen/levelUp.js';
import {getFlatFooted, getReflex} from './defenses/reflex.js';
import {getDamageThreshold, getFortitude} from './defenses/fortitude.js';
import {displayEquipment} from './equipment/display.js';
import {getWill} from './defenses/will.js';
import {getGrapple} from './attacks/getGrapple.js';
import {getUnarmed} from './attacks/weaponTypes/unarmed.js';
import {getAdvancedMelee} from './attacks/weaponTypes/advancedMelee.js';
import {getHeavyWeapon} from './attacks/weaponTypes/heavyWeapon.js';
import {getLightsaber} from './attacks/weaponTypes/lightsaber.js';
import {getPistol} from './attacks/weaponTypes/pistol.js';
import {getRifle} from './attacks/weaponTypes/rifle.js';

window.genCharacter = function genCharacter() {
    
    // get values
    let count;
    let available = references();
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
        let statGen = finalAbilities(abilities,level,speciesMod);
            let str = statGen[0];
            let dex = statGen[1];
            let con = statGen[2];
            let int = statGen[3];
            let wis = statGen[4];
            let cha = statGen[5];

        //Class generation
    let failsafe = 0;
    let classes = [0,0,0,0,0];
        let firstClass;
        let hitPoints = 0;
        let talents = [];
        let feats = [];
        let skills = [];
        let BAB = 0;
        let classList;
        let listSkills;
        let listTalents;
        let listFeats;
        let initiativeDisplay;
        let perceptionDisplay;
        let grapple;
        let safecount = 0;
    while (failsafe == 0) {
        safecount++;
        failsafe = 1;
        classes = [0,0,0,0,0];
        hitPoints = 0;
        talents = [];
        feats = [];
        skills = [];
        BAB = 0;

        for (count = 0; count < level; count++) {
            if (count == 0) {
                if (thisLevel == "random") {
                    thisLevel = classFirst(str,dex,con,int,wis,cha);
                    firstClass = thisLevel;
                    classes[thisLevel]++;
                }
                else {
                    classes[thisLevel]++;
                    firstClass = thisLevel;
                }
                skills = getSkills(int,thisLevel,speciesTraits,classes);
                BAB = getBAB(classes);
                talents.push(getTalent(thisLevel,available,skills,feats,talents,BAB));
                hitPoints += getFirstHitPoints(firstClass,con);
                feats = classFeats(thisLevel,int,con,skills,speciesTraits);
                feats = speciesFeats(feats,speciesTraits,skills);
                feats.push(getFeat(available,50,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size));
            }
            else {
                thisLevel = getLevel(firstClass,classes);
                classes[thisLevel]++;
                if (classes[thisLevel] == 1) {
                    let temp = (multiclassFeat(thisLevel,feats,skills,int,con));
                    if (temp != "") { 
                        feats.push(temp);
                }}
                BAB = getBAB(classes);
                hitPoints += getMoreHitPoints(thisLevel,con);
                if (classes[thisLevel] % 2 == 0) {
                    feats.push(getFeat(available,thisLevel,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size));
                    if (feats.findLast(findLast) == "Skill Training") {
                        skills.push(getNewSkill(speciesTraits,classes,skills));
                    }
                    skills.sort();
                }
                else {
                    talents.push(getTalent(thisLevel,available,skills,feats,talents,BAB));
                }
            }
            if (count % 3 == 0) {
                feats.push(getFeat(available,50,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size));
            if (feats.findLast(findLast) == "Skill Training") {
                skills.push(getNewSkill(speciesTraits,classes,skills));
                skills.sort();
            }

        }}
        talents.sort();
        feats.sort();
        classList = classListing(firstClass,classes);
        listSkills = displaySkills(str,dex,con,int,wis,cha,skills,size,level,speciesTraits,feats);
        listTalents = displayTalents(talents);
        listFeats = displayFeats(feats);
        initiativeDisplay = getInitiative(level,dex,skills,feats);
        perceptionDisplay = getPerception(level,wis,skills,feats);
        grapple = getGrapple(BAB,str,dex,size,talents);

        /*if (feats.includes("ValidFeatNotFound")) {
            failsafe = 0;
        }
        if (talents.includes("ValidTalentNotFound")) {
            failsafe = 0;
        }*/
    }

        //generate languages
        let languages = getLanguages(speciesID,feats,int);
        let listLanguages = languageList(languages);

        //defenses
        let reflex = getReflex(classes,dex,level,size,speciesTraits,feats);
            let flatFooted = getFlatFooted(reflex,dex,feats);
        let fortitude = getFortitude(classes,con,level,speciesTraits,feats);
            let damageThreshold = getDamageThreshold(fortitude,size,feats);
        let will = getWill(classes,wis,level,speciesTraits,feats);

        //speed
        let speed = getSpeed(speciesID,talents,feats);

        //attacks and damage
        let unarmed = getUnarmed(BAB,level,str,size,speciesTraits,feats);
        let equipment = [];
        let temp;
        let temp2;
        let advancedMelee = "";
        let heavyWeapon = "";
        let lightsaber = "";
        let pistol = "";
        let rifle = "";
        let otherAttack = "";

    if (feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
        temp2 = getAdvancedMelee(available,BAB,level,str,dex,feats,talents,size);
        advancedMelee = temp2[0];
        temp = temp2[1];
        equipment.push(temp);
    }
    if (feats.includes("Weapon Proficiency (Heavy Weapons)")) {
        temp2 = getHeavyWeapon(available,BAB,level,dex,feats,talents,size);
        heavyWeapon = temp2[0];
        temp = temp2[1];
        equipment.push(temp);
    }
    if (feats.includes("Weapon Proficiency (Lightsabers)")) {
        temp2 = getLightsaber(available,BAB,level,str,dex,feats,talents,size);
        lightsaber = temp2[0];
        temp = temp2[1];
        equipment.push(temp);
    }
    if (feats.includes("Weapon Proficiency (Pistols)")) {
        temp2 = getPistol(available,BAB,level,dex,feats,talents,size);
        pistol = temp2[0];
        temp = temp2[1];
        equipment.push(temp);
    }
    if (feats.includes("Weapon Proficiency (Rifles)")) {
        temp2 = getRifle(available,BAB,level,dex,feats,talents,size);
        rifle = temp2[0];
        temp = temp2[1];
        equipment.push(temp);
    }

        //equipment
        equipment.sort();
        let equipmentList = displayEquipment(equipment);

        //output
        let output = getOutput(feats,name,level,size,species,classList,initiativeDisplay,perceptionDisplay,listLanguages,
            reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,unarmed,
            advancedMelee,lightsaber,pistol,rifle,heavyWeapon,otherAttack,BAB,grapple,
            speciesTraits,str,dex,con,int,wis,cha,listTalents,listFeats,listSkills,equipmentList);
    
        document.write(output);
}

function findLast(array) {
    return array;
}