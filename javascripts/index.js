import {parseXML} from './xmlGetter.js';
import {references} from './references.js';
import {speciesGen} from './speciesGen.js';
import {getSpeed} from './speed.js';
import {getTradition} from './forceAbilities/getTradition.js';
import {getLanguages,languageList} from './language.js';
import {getSkills,getNewSkill,displaySkills,getInitiative,getPerception} from './classGen/skills.js';
import {getBAB} from './classGen/getBAB.js';
import {getOutput} from './getOutput.js';
import {speciesFeats} from './feats/speciesFeats.js';
import {getStarshipManeuver,compressStarshipManeuvers} from './feats/getStarshipManeuver.js';
import {getFeat} from './feats/getFeat.js';
import {getArmor} from './equipment/getArmor.js';
import {classFeats,multiclassFeat} from './feats/classFeats.js';
import {getTalent} from './talents/getTalent.js';
import {getFirstHitPoints,getMoreHitPoints} from './classGen/hitPoints.js';
import {classFirst,classListing} from './classGen/classGen.js';
import {finalAbilities} from './abilities/abilityGen.js';
import {getLevel} from './classGen/levelUp.js';
import {getFlatFooted, getReflex} from './defenses/reflex.js';
import {getDamageThreshold, getFortitude} from './defenses/fortitude.js';
import {displayEquipment} from './equipment/display.js';
import {getGear} from './equipment/getGear.js';
import {getShields} from './equipment/getShields.js';
import {getImplant} from './equipment/getImplant.js';
import {getSpecial} from './equipment/getSpecial.js';
import {getWill} from './defenses/will.js';
import {getForcePower,compressForcePowers} from './forceAbilities/getForcePower.js';
import {getGrapple} from './attacks/getGrapple.js';
import {getUnarmed} from './attacks/weaponTypes/unarmed.js';
import {getAdvancedMelee} from './attacks/weaponTypes/advancedMelee.js';
import {getHeavyWeapon} from './attacks/weaponTypes/heavyWeapon.js';
import {getLightsaber} from './attacks/weaponTypes/lightsaber.js';
import {getPistol} from './attacks/weaponTypes/pistol.js';
import {getRifle} from './attacks/weaponTypes/rifle.js';
import {getSimpleMelee} from './attacks/weaponTypes/simpleMelee.js';
import {getSimpleRanged} from './attacks/weaponTypes/simpleRanged.js';
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
        let starshipManeuvers = [];
        let BAB = 0;
        let classList;
        let listSkills;
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
                if (feats.findLast(findLast) == "Starship Tactics") {
                    starshipManeuvers = getStarshipManeuver(starshipManeuvers,wis);
                }
                feats.push(getFeat(available,50,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size));
                if (feats.findLast(findLast) == "Skill Training") {
                    skills.push(getNewSkill(speciesTraits,classes,skills,feats,talents));
                }
                if (feats.findLast(findLast) == "Force Training") {
                    forcePowers = getForcePower(forcePowers,available,wis,light,dark);
                    if (talents.includes("Telekinetic Prodigy")) {
                        forcePowers.push("Move Object");
                    }
                }
                if (feats.findLast(findLast) == "Starship Tactics") {
                    starshipManeuvers = getStarshipManeuver(starshipManeuvers,wis);
                }
                if (speciesTraits.includes("Bonus Feat")) {
                    feats.push(getFeat(available,50,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits,size));
                if (feats.findLast(findLast) == "Skill Training") {
                    skills.push(getNewSkill(speciesTraits,classes,skills,feats,talents));
                }
                if (feats.findLast(findLast) == "Force Training") {
                    forcePowers = getForcePower(forcePowers,available,wis,light,dark);
                    if (talents.includes("Telekinetic Prodigy")) {
                        forcePowers.push("Move Object");
                    }
                }
                if (feats.findLast(findLast) == "Starship Tactics") {
                    starshipManeuvers = getStarshipManeuver(starshipManeuvers,wis);
                }}
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
                        skills.push(getNewSkill(speciesTraits,classes,skills,feats,talents));
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
                skills.push(getNewSkill(speciesTraits,classes,skills,feats,talents));
                skills.sort();
            }
            if (feats.findLast(findLast) == "Force Training") {
                forcePowers = getForcePower(forcePowers,available,wis,light,dark);
                if (talents.includes("Telekinetic Prodigy")) {
                    forcePowers.push("Move Object");
                }
            }
            if (feats.findLast(findLast) == "Starship Tactics") {
                starshipManeuvers = getStarshipManeuver(starshipManeuvers,wis);
            }

        }}
        if (feats.includes("Shake It Off")) {
        }
        else if (classes[3] > 0 && con >= 13 && skills.includes("Endurance")) {
            feats.push("Shake It Off");
        }
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
        feats.sort();
        talents.sort();
        classList = classListing(firstClass,classes);
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
        let equipment = [];
        let armorTemp;
        let armorRef = 0;
        let armorFort = 0;
        let maxDex = 10;
        let armorType = "";
        if (talents.includes("Armored Defense") && feats.includes("Armor Proficiency (Light)")) {
            armorTemp = getArmor(available,feats,talents);
            equipment.push(armorTemp[0]);
            armorRef = armorTemp[1];
            armorFort = armorTemp[2];
            maxDex = armorTemp[3];
            armorType = armorTemp[4];

            if (talents.includes("Second Skin") && armorType != "") {
                armorRef++;
                armorFort++;
            }
            if (talents.includes("Attune Armor") && armorType != "") {
                armorRef += 2;
            }
        }

        let shieldTemp = [];
        let SR = 0;
        if (talents.includes("Shield Expert") && feats.includes("Armor Proficiency (Light)")) {
            shieldTemp = getShields(available,feats,talents);
            equipment.push(shieldTemp[0]);
            SR = shieldTemp[1];
            maxDex = Math.min(maxDex,shieldTemp[2]);
            armorType = shieldTemp[3];
        }

        if (talents.includes("Armor Mastery")) {
            maxDex++;
        }

        if (talents.includes("Attune Armor") && armorType != "") {
            maxDex++;
        }

        let reflex = getReflex(classes,dex,level,size,speciesTraits,feats,talents,armorRef,maxDex);
            let flatFooted = getFlatFooted(reflex,dex,feats,talents);
        let fortitude = getFortitude(classes,con,level,speciesTraits,feats,armorFort,talents);
            let damageThreshold = getDamageThreshold(fortitude,size,feats,talents);
        let will = getWill(classes,wis,level,speciesTraits,feats,talents);

        //speed
        let speed = getSpeed(speciesID,talents,feats,armorType);

        //attacks and damage
        let unarmed = getUnarmed(BAB,level,str,dex,cha,feats,talents,size,speciesTraits);
        let tempEquipment = [];
        let temp;
        let temp2;
        let advancedMelee = "";
        let heavyWeapon = "";
        let lightsaber = "";
        let pistol = "";
        let rifle = "";
        let otherAttack = "";
        let simpleMelee = "";
        let simpleRanged = "";
        let otherMeleeAttack = "";
        let otherRangedAttack = "";

    if (feats.includes("Weapon Proficiency (Advanced Melee Weapons)")) {
        temp2 = getAdvancedMelee(available,BAB,level,str,dex,cha,feats,talents,size);
        advancedMelee = temp2[0];
        temp = temp2[1];
        tempEquipment.push(temp);
    }
    if (feats.includes("Weapon Proficiency (Heavy Weapons)")) {
        temp2 = getHeavyWeapon(available,BAB,level,dex,feats,talents,size);
        heavyWeapon = temp2[0];
        temp = temp2[1];
        tempEquipment.push(temp);
    }
    if (feats.includes("Weapon Proficiency (Lightsabers)")) {
        temp2 = getLightsaber(available,BAB,level,str,dex,cha,feats,talents,size);
        lightsaber = temp2[0];
        temp = temp2[1];
        tempEquipment.push(temp);
    }
    if (feats.includes("Weapon Proficiency (Pistols)")) {
        temp2 = getPistol(available,BAB,level,dex,feats,talents,size);
        pistol = temp2[0];
        temp = temp2[1];
        tempEquipment.push(temp);
    }
    if (feats.includes("Weapon Proficiency (Rifles)")) {
        temp2 = getRifle(available,BAB,level,dex,feats,talents,size);
        rifle = temp2[0];
        temp = temp2[1];
        tempEquipment.push(temp);
    }
    if (speciesTraits.includes("Primitive") || feats.includes("Weapon Focus (Simple Weapons)")) {
        let simpleRandom = Math.floor(Math.random() * 2);
        if (simpleRandom == 0) {
            temp2 = getSimpleMelee(available,BAB,level,str,dex,cha,feats,talents,size);
            simpleMelee = temp2[0];
            temp = temp2[1];
            tempEquipment.push(temp);
        }
        else {
            temp2 = getSimpleRanged(available,BAB,level,dex,str,feats,talents,size);
            simpleRanged = temp2[0];
            temp = temp2[1];
            tempEquipment.push(temp);
        }
    }

        temp2 = getExoticMelee(available,BAB,level,str,dex,cha,feats,talents,size,speciesTraits);
        if (temp2[1] != "") {
            otherMeleeAttack = temp2[0];
            temp = temp2[1];
            tempEquipment.push(temp);
        }
        temp2 = getExoticRanged(available,BAB,level,dex,feats,talents,size,speciesTraits);
        if (temp2[1] != "") {
            otherRangedAttack = temp2[0];
            temp = temp2[1];
            tempEquipment.push(temp);
        }


    if (speciesTraits.includes("Bellow")) {
        temp2 = getBellow(available,BAB,level,dex,feats,talents,size);
        otherAttack = temp2[0];
    }
    forcePowers.sort();
    starshipManeuvers.sort();
    forcePowers = compressForcePowers(forcePowers);
    starshipManeuvers = compressStarshipManeuvers(starshipManeuvers);

    //equipment
    let gearEquipment = getGear(available,feats,talents,skills,speciesTraits);
    let speciesEquipment = getSpecial(speciesTraits);
    let implant = "";

        tempEquipment.sort();
        gearEquipment.sort();

        if (feats.includes("Implant Training")) {
            implant = getImplant(available);
            equipment.push(implant);
            if (implant == "Cardio Implant") {
                hitPoints += parseInt(level);
            }}

        equipment.push.apply(equipment, tempEquipment);
        equipment.push.apply(equipment, gearEquipment);
        equipment.push.apply(equipment, speciesEquipment);
        let equipmentList = displayEquipment(equipment);

        if (equipment.includes("Neural Band (+2 Will, -2 Damage Threshold)")) {
            will += 2;
            damageThreshold -= 2;
        }

        listSkills = displaySkills(str,dex,con,int,wis,cha,skills,size,level,speciesTraits,feats,talents,equipment,implant);
        initiativeDisplay = getInitiative(level,dex,skills,feats,talents,cha);
        perceptionDisplay = getPerception(level,wis,skills,feats,equipment,talents,cha);

        //output
        let output = getOutput(feats,name,level,size,species,classList,initiativeDisplay,perceptionDisplay,listLanguages,
            reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,unarmed,otherMeleeAttack,otherRangedAttack,
            advancedMelee,lightsaber,pistol,rifle,heavyWeapon,otherAttack,BAB,grapple,talents,starshipManeuvers,simpleMelee,simpleRanged,
            speciesTraits,str,dex,con,int,wis,cha,listSkills,equipmentList,forcePowers,SR);
    
        document.write(output);
}

function findLast(array) {
    return array;
}