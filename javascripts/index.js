import {parseXML} from './xmlGetter.js';
import {references} from './references.js';
import {speciesGen} from './speciesGen.js';
import {language,languageList} from './language.js';
import {getSkills,displaySkills} from './skills.js';
import {classFeats,speciesFeats,listFeats} from './feats.js';
import {getTalents,displayTalents} from './talents/getTalents.js';
import {classFirst,classSelection,classListing,getHitPoints,getBAB,availableFeats} from './classGen.js';
import {abilityGen} from './abilities/abilityGen.js';

window.genCharacter = function genCharacter() {
// get values
    let abilities = document.getElementById('abilities').value;
    let firstClass = document.getElementById('class').value;
    let level = document.getElementById('level').value;
    let species = "error";
    let tempSpecies = document.querySelector('input[name="species"]:checked').value;
        if (tempSpecies == "on") {
            tempSpecies = document.getElementById('speciesManual').value;
            if (tempSpecies == null) {
                tempSpecies = "random";
            }
        }

    let availableStart = references();
    let available = availableStart.split(",");

let check = 0;
while (check != 1) {
// get abilities
    let statGen = abilityGen(abilities);
    let statLevel = level % 4;
    let count;
    for (count = 0; count < statLevel; count++) {
        let statRandom1 = Math.floor(Math.random() * 5);
        statGen[statRandom1]++;

        let statRandom2 = Math.random() * 5;
        if (statRandom2 != statRandom1) {
        statGen[statRandom2]++;
        }
        else {
            let statRandom3 = Math.random() * 5;
            statGen[statRandom3]++;
        }
    }

        let str = statGen[0];
        let dex = statGen[1];
        let con = statGen[2];
        let int = statGen[3];
        let wis = statGen[4];
        let cha = statGen[5];

    if (typeof str !== 'undefined' &&
        typeof dex !== 'undefined' &&
        typeof con !== 'undefined' &&
        typeof int !== 'undefined' &&
        typeof wis !== 'undefined' &&
        typeof cha !== 'undefined') {
        check = 1;

    // get species
    let speciesID = speciesGen(tempSpecies,available);

        species = parseXML("xmls/species.xml","name",speciesID);
        let speciesMod = parseXML("xmls/species.xml","abilityMods",speciesID);

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

    if (speciesMod != 0) {
        let abilityMods = speciesMod.split(";");
        let count;

        for (count = 0; count < (abilityMods.length); count++) {
            let indAbilityMods = abilityMods[count].split(",");
            if (indAbilityMods[0] == "str") {
                str += Number(indAbilityMods[1]);
            }
            if (indAbilityMods[0] == "dex") {
                dex += Number(indAbilityMods[1]);
            }
            if (indAbilityMods[0] == "con") {
                con += Number(indAbilityMods[1]);
            }
            if (indAbilityMods[0] == "int") {
                int += Number(indAbilityMods[1]);
            }
            if (indAbilityMods[0] == "wis") {
                wis += Number(indAbilityMods[1]);
            }
            if (indAbilityMods[0] == "cha") {
                cha += Number(indAbilityMods[1]);
            }
        }}

        let classes = [0,0,0,0,0];
        if (firstClass == "random") {
            firstClass = classFirst(str,dex,con,int,wis,cha);
        }
        classes[firstClass]++;
        classes = classSelection(firstClass,classes,level);
        let classList = classListing(firstClass,classes);

        let classReflex = 0;
        let classFortitude = 0;
        let classWill = 0;
        if (classes[0] > 0) {
            classReflex = 1;
            classFortitude = 1;
            classWill = 1;
        }
        if (classes[1] > 0) {
            classReflex = Math.max(classReflex,1);
            classFortitude = Math.max(classFortitude,0);
            classWill = Math.max(classWill,2);
        }
        if (classes[2] > 0) {
            classReflex = Math.max(classReflex,2);
            classFortitude = Math.max(classFortitude,0);
            classWill = Math.max(classWill,1);
        }
        if (classes[3] > 0) {
            classReflex = Math.max(classReflex,2);
            classFortitude = Math.max(classFortitude,1);
            classWill = Math.max(classWill,0);
        }
        if (classes[4] > 0) {
            classReflex = Math.max(classReflex,1);
            classFortitude = Math.max(classFortitude,2);
            classWill = Math.max(classWill,0);
        }

        let flatFooted;
        let size = parseXML("xmls/species.xml","size",speciesID);
        let speciesTraits = parseXML("xmls/species.xml","speciesTraits",speciesID);
        let baseAttackBonus = getBAB(classes,firstClass);

        let speed = parseXML("xmls/species.xml","speed",speciesID) + " Squares";
        let swimSpeed = parseXML("xmls/species.xml","swimSpeed",speciesID);
        if (swimSpeed != 0) {
            speed = speed + " (Walking), " + swimSpeed + " Squares (Swimming)";
        }

        let meleeAttackRaw = baseAttackBonus + Math.floor((str-10)/2);
        let meleeAttack = "";
        if (meleeAttackRaw < 0) {
            meleeAttack = meleeAttackRaw;
        }
        else {
            meleeAttack = "+" + meleeAttackRaw;
        }
        let meleeDamageRaw = Math.floor(level/2) + Math.floor((str-10)/2);
        let meleeDamage = "";
        if (meleeDamageRaw < 0) {
            meleeDamage = meleeDamageRaw;
        }
        else {
            meleeDamage = "+" + meleeDamageRaw;
        }
        let rangedAttackRaw = baseAttackBonus + Math.floor((dex-10)/2);
        let rangedAttack = "";
        if (rangedAttackRaw < 0) {
            rangedAttack = rangedAttackRaw;
        }
        else {
            rangedAttack = "+" + rangedAttackRaw;
        }
        let rangedDamageRaw = Math.floor(level/2);
        let rangedDamage = "";
        if (rangedDamageRaw < 0) {
            rangedDamage = rangedDamageRaw;
        }
        else {
            rangedDamage = "+" + rangedDamageRaw;
        }
        let unarmedList = ["1d2","1d3","1d4","1d6","1d8","1d10","1d12"];
        let unarmed = 2;
        if (size == "Small") {
            unarmed--;
        }
        if (size == "Large") {
            unarmed++;
        }
        if (speciesTraits.split(", ").includes("Natural Weapons")) {
            unarmed = 3;
        }
        let skills = getSkills(str,dex,con,int,wis,cha,firstClass,level,size,speciesTraits,classes);
        let feats = classFeats(firstClass,classes,int,con,skills,speciesTraits);
        feats = speciesFeats(feats,speciesTraits,skills);
        let initiative = Math.floor(level/2) + Math.floor((dex-10)/2);
        if (skills.includes("Initiative")) {
            initiative += 5;
        }
        if (feats.includes("Skill Focus (Initiative)")) {
            initiative += 5;
        }
        let initiativeDisplay = "";
        if (initiative < 0) {
            initiativeDisplay = initiative;
        }
        else {
            initiativeDisplay = "+" + initiative;
        }
        let perception = Math.floor(level/2) + Math.floor((wis-10)/2);
        if (skills.includes("Perception")) {
            perception += 5;
        }
        if (feats.includes("Skill Focus (Perception)")) {
            perception += 5;
        }
        let perceptionDisplay = "";
        if (perception < 0) {
            perceptionDisplay = perception;
        }
        else {
            perceptionDisplay = "+" + perception;
        }
        let featList = listFeats(feats);
        featList += "; " + availableFeats(level,classes,firstClass,speciesTraits);
        let listSkills = displaySkills(str,dex,con,int,wis,cha,skills,size,level,speciesTraits,feats);
        let talents = getTalents(classes,available,skills,feats,firstClass);
        talents.sort();
        let listTalents = displayTalents(talents);
        let grapple = baseAttackBonus + Math.max(Math.floor((str-10)/2),Math.floor((dex-10)/2));
            if (size == "Small") {
                grapple -= 5;
            }
            if (size == "Large") {
                grapple += 5;
            }
            if (talents.includes("Expert Grappler")) {
                grapple += 2;
            }
        let grappleDisplay;
        if (grapple < 0) {
            grappleDisplay = grapple;
        }
        else {
            grappleDisplay = "+"+grapple;
        }
        let reflex = 10 + Math.floor((dex-10)/2) + parseInt(level) + classReflex;
            if (size == "Small") {
                reflex++;
            }
            if (size == "Large") {
                reflex--;
            }
            if (speciesTraits.split(", ").includes("Lightning Reflexes")) {
                reflex += 2;
            }
            if (speciesTraits.split(", ").includes("Natural Armor (+1)")) {
                reflex += 1;
            }
            if (speciesTraits.split(", ").includes("Natural Armor (+2)")) {
                reflex += 2;
            }
            if (speciesTraits.split(", ").includes("Superior Defenses")) {
                reflex += 1;
            }
            if (dex > 11) {
                flatFooted = reflex - Math.floor((dex-10)/2);
            }
            else {
                flatFooted = reflex;
            }
        let fortitude = 10 + Math.floor((con-10)/2) + parseInt(level) + classFortitude;
        if (speciesTraits.split(", ").includes("Great Fortitude")) {
            fortitude += 2;
        }
        if (speciesTraits.split(", ").includes("Superior Defenses")) {
            fortitude += 1;
        }
        let damageThreshold = fortitude;
            if (size == "Large") {
                damageThreshold += 5;
            }
            if (feats.includes("Improved Damage Threshold")) {
                damageThreshold += 5;
            }
        let will = 10 + Math.floor((wis-10)/2) + parseInt(level) + classWill;
        if (speciesTraits.split(", ").includes("Iron Will")) {
            will += 2;
        }
        if (speciesTraits.split(", ").includes("Superior Defenses")) {
            will += 1;
        }
        let hitPoints = getHitPoints(firstClass,classes,con);
        if (feats.includes("Toughness")) {
            hitPoints += parseInt(level);
        }
        let languages = [];
        languages = (parseXML("xmls/species.xml","languages",speciesID)).split(", ");
        if (int > 11) {
            let extraLanguages = Math.floor((int-10)/2);
            if (feats.includes("Linguist")) {
                extraLanguages += 1 + Math.floor((int-10)/2);
            }
            for (count = 0; count < extraLanguages; count++) {
                languages.push(language(languages));
            }
        }
        languages.sort();
        let listLanguages = languageList(languages);
        let destiny = "";
        if (Math.floor(level/5) > 0) {
            destiny = "<strong>Destiny Points: </strong>" + Math.floor(level/5) + "; ";
        }
        let lightsaberAttack = meleeAttack;
        let lightsaberDamage = meleeDamage;
        let lightsaber = "";
        if (feats.includes("Weapon Proficiency (Lightsabers)")) {
            lightsaber = "<strong>Melee:</strong> Lightsaber "+lightsaberAttack+" (2d8"+lightsaberDamage+")<br>";
        }
        let pistolAttack = rangedAttack;
        let pistolDamage = rangedDamage;
        let blasterPistol = "";
        if (feats.includes("Weapon Proficiency (Pistols)")) {
            blasterPistol = "<strong>Ranged:</strong> Blaster Pistol "+pistolAttack+" (3d6"+pistolDamage+")<br>";
        }
        let rifleAttack = rangedAttack;
        let rifleDamage = rangedDamage;
        let blasterRifle = "";
        if (feats.includes("Weapon Proficiency (Rifles)")) {
            blasterRifle = "<strong>Ranged:</strong> Blaster Rifle "+rifleAttack+" (3d8"+rifleDamage+")<br>";
        }
        let otherAttack = "";
        if (blasterPistol == "" && blasterRifle == "") {
            otherAttack = "<strong>Ranged:</strong> By Weapon "+rangedAttack+"<br>";
        }
        let equipment = [];
        if (lightsaber != "") {
            equipment.push("Lightsaber");
        }
        if (blasterPistol != "") {
            equipment.push("Blaster Pistol");
        }
        if (blasterRifle != "") {
            equipment.push("Blaster Rifle");
        }
        equipment.sort();

        let equipmentList = "";
        for (count = 0; count < equipment.length; count++) {
            if (count != 0) {
                equipmentList += ", ";
            }
            equipmentList += equipment[count];
        }
        if (equipmentList == "") {
            equipmentList += "None";
        }

    // output results
        document.write("<h3 style='padding-bottom:-5%;'><u>"+name+" Statistics (CL "+level+")</u></h3>"+
        size+" "+species+" "+classList+"<br>"+
        destiny+"<strong>Force Points:</strong> "+Math.max(Math.floor(level/2),1)+""+"<br>"+
        "<strong>Initiative:</strong> "+initiativeDisplay+"; <strong>Senses:</strong> Perception "+perceptionDisplay+"<br>"+
        "<strong>Languages:</strong> "+listLanguages+"<br>"+
        "<p style='font-size: large; margin-bottom: 0;'><u><strong>Defenses</strong></u></p>"+
        "<strong>Reflex Defense:</strong> "+reflex+" (<strong>Flat-Footed:</strong> "+flatFooted+"), <strong>Fortitude Defense:</strong> "+fortitude+", <strong>Will Defense:</strong> "+will+"<br>"+
        "<strong>Hit Points:</strong> "+hitPoints+", <strong>Damage Threshold:</strong> "+damageThreshold+"<br>"+
        "<p style='font-size: large; margin-bottom: 0;'><u><strong>Offense</strong></u></p>"+
        "<strong>Speed:</strong> "+speed+"<br>"+
        "<strong>Melee:</strong> Unarmed "+meleeAttack+" ("+unarmedList[unarmed]+meleeDamage+")"+"<br>"+
        lightsaber+
        blasterPistol+
        blasterRifle+
        otherAttack+
        "<strong>Base Attack Bonus:</strong> +"+baseAttackBonus+", <strong>Grapple:</strong> "+grappleDisplay+"<br>"+
        "<strong>Species Traits ("+species+"):</strong> "+speciesTraits+""+"<br>"+
        "<p style='font-size: large; margin-bottom: 0;'><u><strong>Base Stats</strong></u></p>"+
        "<strong>Abilities:</strong> Strength "+str+", Dexterity "+dex+", Constitution "+con+", Intelligence "+int+", Wisdom "+wis+", Charisma "+cha+""+"<br>"+
        "<strong>Talents:</strong> "+listTalents+"<br>"+
        "<strong>Feats:</strong> "+featList+"<br>"+        
        "<strong>Skills:</strong> "+listSkills+"<br>"+
        "<strong>Possessions:</strong> "+equipmentList+"<br><br>"+
        "<div style='padding-left: 10%;'><button type='submit'>"+
        "<a onclick='location.href = \"index.html\"'>Make New Character</a>"+
        "</button><button type='submit'>"+
        "<a onclick='print()'>Download Character</a>"+
        "</button></div>");
    }
}}