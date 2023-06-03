import {parseXML} from './xmlGetter.js';
import {references} from './references.js';
import {speciesGen} from './speciesGen.js';
import {getSpeed} from './speed.js';
import {getTradition} from './forceAbilities/getTradition.js';
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
import {classFirst,classListing} from './classGen/classGen.js';
import {finalAbilities} from './abilities/abilityGen.js';
import {getLevel} from './classGen/levelUp.js';
import {getFlatFooted, getReflex} from './defenses/reflex.js';
import {getDamageThreshold, getFortitude} from './defenses/fortitude.js';
import {displayEquipment} from './equipment/display.js';
import {getWill} from './defenses/will.js';
import {getForcePower,compressForcePowers} from './forceAbilities/getForcePower.js';
import {getGrapple} from './attacks/getGrapple.js';
import {getUnarmed} from './attacks/weaponTypes/unarmed.js';
import {getAdvancedMelee} from './attacks/weaponTypes/advancedMelee.js';
import {getHeavyWeapon} from './attacks/weaponTypes/heavyWeapon.js';
import {getLightsaber} from './attacks/weaponTypes/lightsaber.js';
import {getPistol} from './attacks/weaponTypes/pistol.js';
import {getRifle} from './attacks/weaponTypes/rifle.js';
import {getExoticMelee} from './attacks/weaponTypes/exoticMelee.js';
import {getExoticRanged} from './attacks/weaponTypes/exoticRanged.js';
import {getBellow} from './attacks/getBellow.js';

window.genCharacter = function genCharacter() {

    // get values
    let count;
    let light = 0;
    let dark = 0;
    let available = references();
    let abilities = document.getElementById('abilities').value;
    let thisLevel = document.getElementById('class').value;
    let level = document.getElementById('level').value;
    let affinity = document.querySelector('input[name="alignment"]:checked').value;
    if (affinity == "both" || affinity == "light") {
        light = 1;
    }
    if (affinity == "both" || affinity == "dark") {
        dark = 1;
    }
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
        let tradition = getTradition(light,dark,species);

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

    //Class generation (2,8,8)
    let failsafe = 0;
    let classes = [0,0,0,0,0];
        let firstClass;
        let hitPoints = 0;
        let talents = [];
        let feats = [];
        let skills = [];
        let forcePowers = [];
        let BAB = 0;
        let classList;
        let listSkills;
        let listTalents;
        let listFeats;
        let initiativeDisplay;
        let perceptionDisplay;
        let grapple;
        let linguist = 0;
        let forceTraining = 0;
        let skillTraining = 0;
        let startshipTactics = 0;
        let sneakAttack = 0;
        let lightsaberDefense = 0;
        let sentinelStrike = 0;
        let coordinate = 0;
        let tempTalents = [];
        let tempFeats = [];
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
                talents.push(getTalent(thisLevel,available,skills,feats,talents,BAB,forcePowers,light,dark,tradition,cha));
                hitPoints += getFirstHitPoints(firstClass,con);
                feats = classFeats(thisLevel,int,con,skills,speciesTraits);
                feats = speciesFeats(feats,speciesTraits,skills);
                if (feats.findLast(findLast) == "Force Training") {
                    forcePowers = getForcePower(forcePowers,available,wis,light,dark);
                    if (talents.includes("Telekinetic Prodigy")) {
                        forcePowers.push("Move Object");
                    }
                }
                feats.push(getFeat(available,50,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size));
                if (feats.findLast(findLast) == "Skill Training") {
                    skills.push(getNewSkill(speciesTraits,classes,skills,feats));
                }
                if (feats.findLast(findLast) == "Force Training") {
                    forcePowers = getForcePower(forcePowers,available,wis,light,dark);
                    if (talents.includes("Telekinetic Prodigy")) {
                        forcePowers.push("Move Object");
                    }
                }
            }
            else {
                thisLevel = getLevel(firstClass,classes);
                classes[thisLevel]++;
                if (classes[thisLevel] == 1) {
                    let temp = (multiclassFeat(thisLevel,feats,skills,int,con,speciesTraits));
                    if (temp != "") { 
                        feats.push(temp);
                }}
                BAB = getBAB(classes);
                hitPoints += getMoreHitPoints(thisLevel,con);
                if (classes[thisLevel] % 2 == 0) {
                    feats.push(getFeat(available,thisLevel,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size));
                    if (feats.findLast(findLast) == "Skill Training") {
                        skills.push(getNewSkill(speciesTraits,classes,skills,feats));
                    }
                    if (feats.findLast(findLast) == "Force Training") {
                        forcePowers = getForcePower(forcePowers,available,wis,light,dark);
                        if (talents.includes("Telekinetic Prodigy")) {
                            forcePowers.push("Move Object");
                        }
                    }
                    skills.sort();
                }
                else {
                    talents.push(getTalent(thisLevel,available,skills,feats,talents,BAB,forcePowers,light,dark,tradition,cha));
                }
            }
            if ((count-2) % 3 == 0) {
                feats.push(getFeat(available,50,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size));
            if (feats.findLast(findLast) == "Skill Training") {
                skills.push(getNewSkill(speciesTraits,classes,skills,feats));
                skills.sort();
            }
            if (feats.findLast(findLast) == "Force Training") {
                forcePowers = getForcePower(forcePowers,available,wis,light,dark);
                forcePowers.sort();
            }

        }}
        talents.sort();
        feats.sort();

        //split Linguist/Force Training/Skill Training/Starship Tactics
        for (count = 0; count < feats.length; count++) {
            if (feats[count] == "Linguist") {
                linguist++;
            }
            else if (feats[count] == "Skill Training") {
                skillTraining++;
            }
            else if (feats[count] == "Force Training") {
                forceTraining++;
            }
            else if (feats[count] == "Starship Tactics") {
                startshipTactics++;
            }
            else {
                tempFeats.push(feats[count]);
            }
        }
        if (count == feats.length && linguist > 1) {
            tempFeats.push("Linguist ("+linguist+")");
        }
        else if (count == feats.length && linguist == 1) {
            tempFeats.push("Linguist");
        }
        if (count == feats.length && forceTraining > 1) {
            tempFeats.push("Force Training ("+forceTraining+")");
        }
        else if (count == feats.length && forceTraining == 1) {
            tempFeats.push("Force Training");
        }
        if (count == feats.length && skillTraining > 1) {
            tempFeats.push("Skill Training ("+skillTraining+")");
        }
        else if (count == feats.length && skillTraining == 1) {
            tempFeats.push("Skill Training");
        }
        if (count == feats.length && startshipTactics > 1) {
            tempFeats.push("Starship Tactics ("+startshipTactics+")");
        }
        else if (count == feats.length && startshipTactics == 1) {
            tempFeats.push("Starship Tactics");
        }
        feats = tempFeats;

        //split Talents
        for (count = 0; count < talents.length; count++) {
            if (talents[count] == "Sneak Attack") {
                sneakAttack++;
            }
            else if (talents[count] == "Lightsaber Defense") {
                lightsaberDefense++;
            }
            else if (talents[count] == "Sentinel Strike") {
                sentinelStrike++;
            }
            else if (talents[count] == "Coordinate") {
                coordinate++;
            }
            else {
                tempTalents.push(talents[count]);
            }
        }
        if (count == talents.length && sneakAttack > 0) {
            tempTalents.push("Sneak Attack (+"+sneakAttack+"d6)");
        }
        if (count == talents.length && lightsaberDefense > 0) {
            tempTalents.push("Lightsaber Defense (+"+lightsaberDefense+")");
        }
        if (count == talents.length && sentinelStrike > 0) {
            tempTalents.push("Sentinel Strike (+"+sentinelStrike+"d6)");
        }
        if (count == talents.length && coordinate > 0) {
            tempTalents.push("Coordinate (+"+coordinate+")");
        }
        talents = tempTalents;

        //list features
        classList = classListing(firstClass,classes);
        listSkills = displaySkills(str,dex,con,int,wis,cha,skills,size,level,speciesTraits,feats,talents);
        listTalents = displayTalents(talents);
        listFeats = displayFeats(feats);
        initiativeDisplay = getInitiative(level,dex,skills,feats);
        perceptionDisplay = getPerception(level,wis,skills,feats);
        grapple = getGrapple(BAB,str,dex,size,talents);

        if (feats.includes("ValidFeatNotFound")) {
            failsafe = 0;
        }
        if (talents.includes("ValidTalentNotFound")) {
            failsafe = 0;
        }
    }

    //generate languages
        let languages = getLanguages(speciesID,linguist,int);
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
        let unarmed = getUnarmed(BAB,level,str,dex,cha,feats,talents,size,speciesTraits);
        let equipment = [];
        let temp;
        let temp2;
        let advancedMelee = "";
        let heavyWeapon = "";
        let lightsaber = "";
        let pistol = "";
        let rifle = "";
        let otherAttack = "";
        let otherMeleeAttack = "";
        let otherRangedAttack = "";

    if (feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
        temp2 = getAdvancedMelee(available,BAB,level,str,dex,cha,feats,talents,size);
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
        temp2 = getLightsaber(available,BAB,level,str,dex,cha,feats,talents,size);
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

        temp2 = getExoticMelee(available,BAB,level,str,dex,cha,feats,talents,size,speciesTraits);
        if (temp2[1] != "") {
            otherMeleeAttack = temp2[0];
            temp = temp2[1];
            equipment.push(temp);
        }
        temp2 = getExoticRanged(available,BAB,level,dex,feats,talents,size,speciesTraits);
        if (temp2[1] != "") {
            otherRangedAttack = temp2[0];
            temp = temp2[1];
            equipment.push(temp);
        }


    if (speciesTraits.includes("Bellow")) {
        temp2 = getBellow(available,BAB,level,dex,feats,talents,size);
        otherAttack = temp2[0];
    }

    forcePowers = compressForcePowers(forcePowers);

    //equipment
        equipment.sort();
        if (talents.includes("Jet Pack Training")) {
                equipment.push("Jet Pack");
        }
        let equipmentList = displayEquipment(equipment);

        //output
        let output = getOutput(feats,name,level,size,species,classList,initiativeDisplay,perceptionDisplay,listLanguages,
            reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,unarmed,otherMeleeAttack,otherRangedAttack,
            advancedMelee,lightsaber,pistol,rifle,heavyWeapon,otherAttack,BAB,grapple,
            speciesTraits,str,dex,con,int,wis,cha,listTalents,listFeats,listSkills,equipmentList,forcePowers);
    
        document.write(output);
}

function findLast(array) {
    return array;
}