import {parseXML} from './xmlGetter.js';
import {references} from './references.js';
import {speciesGen} from './speciesGen.js';
import {getSpeed} from './speed.js';
import {getLanguages,languageList} from './language.js';
import {getSkills,displaySkills,getInitiative,getPerception} from './classGen/skills.js';
import {getBAB} from './classGen/getBAB.js';
import {getOutput} from './getOutput.js';
import {speciesFeats,getFeat,displayFeats} from './feats.js';
import {classFeats,multiclassFeat} from './feats/classFeats.js';
import {getTalent,displayTalents} from './talents/getTalents.js';
import {getFirstHitPoints,getMoreHitPoints} from './classGen/hitPoints.js';
import {classFirst,getFirstHitPoints,classSelection,classListing} from './classGen.js';
import {finalAbilities} from './abilities/abilityGen.js';
import {getFlatFooted, getReflex} from './defenses/reflex.js';
import {getDamageThreshold, getFortitude} from './defenses/fortitude.js';
import {getWill} from './defenses/will.js';
import {getGrapple} from './attacks/getGrapple.js';
import {getUnarmed} from './attacks/weaponTypes/unarmed.js';

export function genCharacter() {
    // get values
    let count;
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
                feats.push(characterFeats(available,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits));
            }
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
                talents.push(getTalent(thisLevel));
                hitPoints += getFirstHitPoints(thisLevel,available,skills,feats,talents);
                feats = classFeats(thisLevel,classes,int,con,skills,speciesTraits);
                feats = speciesFeats(feats,speciesTraits,skills);
            }
            else {
                thisLevel = getLevel(firstClass,classes);
                classes[thisLevel]++;
                if (classes[thisLevel] == 1) {
                    feats.push(multiclassFeat(thisLevel,feats,skills,int,con));
                }
                BAB = getBAB(classes);
                hitPoints += getMoreHitPoints(thisLevel,con);
                if (classes[thisLevel] % 2 == 0) {
                    feats.push(getFeat(available,thisLevel,feats,talents,skills,str,dex,con,int,wis,cha,BAB,speciesTraits));
                }
                else {
                    talents.push(getTalent(thisLevel,available,skills,feats,talents));
                }
            }
        }
        let classList = classListing(firstClass,classes);
        let listSkills = displaySkills(str,dex,con,int,wis,cha,skills,size,level,speciesTraits,feats);
        let listTalents = displayTalents(talents);
        let listFeats = displayFeats(feats);
        let initiativeDisplay = getInitiative(level,dex,skills,feats);
        let perceptionDisplay = getPerception(level,wis,skills,feats);
        let grapple = getGrapple(BAB,str,dex,size,talents);

        //generate languages
        let languages = getLanguages(speciesID,feats,int);
        let listLanguages = languageList(languages);

        //defenses
        let reflex = getReflex(classes,dex,level,size,speciesTraits,feats);
            let flatFooted = getFlatFooted(reflex,dex);
        let fortitude = getFortitude(classes,con,level,speciesTraits,feats);
            let damageThreshold = getDamageThreshold(fortitude,size,feats);
        let will = getWill(classes,wis,level,speciesTraits,feats);

        //speed
        let speed = getSpeed(speciesID,talents,feats);

        //attacks and damage
        let unarmed = getUnarmed(BAB,level,str,size,speciesTraits,feats);
        let advancedMelee,heavyWeapon,lightsaber,pistol,rifle,equipment = getWeapon(BAB,level,str,dex,feats);

        //equipment
        equipment.sort();

        //output
        let output = getOutput(feats,name,level,size,species,classList,initiativeDisplay,perceptionDisplay,listLanguages,
            reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,meleeAttack,unarmed,meleeDamage,
            advancedMelee,lightsaber,pistol,rifle,heavyWeapon,otherAttack,baseAttackBonus,grapple,
            speciesTraits,str,dex,con,int,wis,cha,listTalents,listFeats,listSkills,equipmentList);
    
        document.write(output);
}