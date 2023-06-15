import {displayForcePowers,displayRawForcePowers} from './forceAbilities/getForcePower.js';
import {displayStarshipManeuvers,displayRawStarshipManeuvers} from './feats/getStarshipManeuver.js';
import {displayTalents,displayRawTalents} from './Talents/getTalent.js';
import {displayFeats,displayRawFeats} from './Feats/featDisplay.js';

export function getOutput(feats,name,level,size,species,classList,initiativeDisplay,perceptionDisplay,listLanguages,
    reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,unarmed,otherMeleeAttack,otherRangedAttack,
    advancedMelee,lightsaber,pistol,rifle,heavyWeapon,other,BAB,grappleDisplay,talents,starshipManeuvers,simpleMelee,simpleRanged,
    speciesTraits,str,dex,con,int,wis,cha,listSkills,equipmentList,
    forcePowers,SR) {
    let destiny = "";
        if (Math.floor(level/5) > 0) {
            destiny = "<strong>Destiny Points: </strong>" + Math.floor(level/5) + "; ";
        }

        let listTalents = displayTalents(talents);
        let listFeats = displayFeats(feats);

        let damageReduction = 0;
        let reductionDisplay = "";
        if (speciesTraits.includes("Damage Reduction 2")) {
            damageReduction += 2;
        }
        if (damageReduction != 0) {
            reductionDisplay = ", <strong>Damage Reduction:</strong> "+damageReduction;
        }

        let shieldRating = "";
        if (SR != 0) {
            shieldRating = ", <strong>Shield Rating:</strong> "+SR;
        }

        forcePowers.sort();
    let forcePoints = Math.max(Math.floor(level/2),1);
        if (feats.includes("Force Boon")) {
            forcePoints += 3;
        }

        let traitDisplay = "";
        let count;
        for (count = 0; count < speciesTraits.length; count++) {
            if (count != 0) {
                traitDisplay += ", ";
            }
            traitDisplay += speciesTraits[count];
        }
        let rangedWeapon = (BAB + Math.floor((dex-10)/2));

    let advancedMeleeAttack = "";
    let lightsaberAttack = "";
    let pistolAttack = "";
    let rifleAttack = "";
    let heavyWeaponAttack = "";
    let simpleMeleeAttack = "";
    let simpleRangedAttack = "";
    let otherMelee = "";
    let otherRanged = "";
    let otherAttack = "";
    let byWeapon = "";
    let powerDisplay = "";
    let maneuverDisplay = "";
    if (rangedWeapon < 0) {
        byWeapon = rangedWeapon;
    }
    else {
        byWeapon = "+" + rangedWeapon;
    }
    if (otherMeleeAttack != "") {
        otherMelee = "<strong>Melee:</strong> "+otherMeleeAttack+"<br>";
        if (otherMeleeAttack.includes(" -")) {
            let otherMeleeAttackTemp = otherMeleeAttack.split(" -");
            otherMelee = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+otherMeleeAttackTemp[0]+"'>"+otherMeleeAttackTemp[0]+"</a> -"+otherMeleeAttackTemp[1]+"<br>";
        }
        else {
            let otherMeleeAttackTemp = otherMeleeAttack.split(" +");
            otherMelee = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+otherMeleeAttackTemp[0]+"'>"+otherMeleeAttackTemp[0]+"</a> +"+otherMeleeAttackTemp[1]+"<br>";
        }
    }
    if (advancedMelee != "") {
        if (advancedMelee.includes(" -")) {
            let advancedMeleeTemp = advancedMelee.split(" -");
            advancedMeleeAttack = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+advancedMeleeTemp[0]+"'>"+advancedMeleeTemp[0]+"</a> -"+advancedMeleeTemp[1]+"<br>";
        }
        else {
            let advancedMeleeTemp = advancedMelee.split(" +");
            advancedMeleeAttack = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+advancedMeleeTemp[0]+"'>"+advancedMeleeTemp[0]+"</a> +"+advancedMeleeTemp[1]+"<br>";
        }
    }
    if (lightsaber != "") {
        if (lightsaber.includes(" -")) {
            let lightsaberTemp = lightsaber.split(" -");
            lightsaberAttack = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+lightsaberTemp[0]+"'>"+lightsaberTemp[0]+"</a> -"+lightsaberTemp[1]+"<br>";
        }
        else {
            let lightsaberTemp = lightsaber.split(" +");
            lightsaberAttack = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+lightsaberTemp[0]+"'>"+lightsaberTemp[0]+"</a> +"+lightsaberTemp[1]+"<br>";
        }
    }
    if (simpleMelee != "") {
        if (simpleMelee.includes(" -")) {
            let simpleMeleeTemp = simpleMelee.split(" -");
            simpleMeleeAttack = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+simpleMeleeTemp[0]+"'>"+simpleMeleeTemp[0]+"</a> -"+simpleMeleeTemp[1]+"<br>";
        }
        else {
            let simpleMeleeTemp = simpleMelee.split(" +");
            simpleMeleeAttack = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+simpleMeleeTemp[0]+"'>"+simpleMeleeTemp[0]+"</a> +"+simpleMeleeTemp[1]+"<br>";
        }
    }
    if (simpleRanged != "") {
        if (simpleRanged.includes(" -")) {
            let simpleRangedTemp = simpleRanged.split(" -");
            simpleRangedAttack = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+simpleRangedTemp[0]+"'>"+simpleRangedTemp[0]+"</a> -"+simpleRangedTemp[1]+"<br>";
        }
        else {
            let simpleRangedTemp = simpleRanged.split(" +");
            simpleRangedAttack = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+simpleRangedTemp[0]+"'>"+simpleRangedTemp[0]+"</a> +"+simpleRangedTemp[1]+"<br>";
        }
    }
    if (otherRangedAttack != "") {
        if (otherRangedAttack.includes(" -")) {
            let otherRangedAttackTemp = otherRangedAttack.split(" -");
            otherRanged = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+otherRangedAttackTemp[0]+"'>"+otherRangedAttackTemp[0]+"</a> -"+otherRangedAttackTemp[1]+"<br>";
        }
        else {
            let otherRangedAttackTemp = otherRangedAttack.split(" +");
            otherRanged = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+otherRangedAttackTemp[0]+"'>"+otherRangedAttackTemp[0]+"</a> +"+otherRangedAttackTemp[1]+"<br>";
        }
    }
    if (pistol != "") {
        if (pistol.includes(" -")) {
            let pistolTemp = pistol.split(" -");
            pistolAttack = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+pistolTemp[0]+"'>"+pistolTemp[0]+"</a> -"+pistolTemp[1]+"<br>";
        }
        else {
            let pistolTemp = pistol.split(" +");
            pistolAttack = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+pistolTemp[0]+"'>"+pistolTemp[0]+"</a> +"+pistolTemp[1]+"<br>";
        }
    }
    if (rifle != "") {
        if (rifle.includes(" -")) {
            let rifleTemp = rifle.split(" -");
            rifleAttack = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+rifleTemp[0]+"'>"+rifleTemp[0]+"</a> -"+rifleTemp[1]+"<br>";
        }
        else {
            let rifleTemp = rifle.split(" +");
            rifleAttack = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+rifleTemp[0]+"'>"+rifleTemp[0]+"</a> +"+rifleTemp[1]+"<br>";
        }
    }
    if (heavyWeapon != "") {
        if (heavyWeapon.includes(" -")) {
            let heavyWeaponTemp = heavyWeapon.split(" -");
            heavyWeaponAttack = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+heavyWeaponTemp[0]+"'>"+heavyWeaponTemp[0]+"</a> -"+heavyWeaponTemp[1]+"<br>";
        }
        else {
            let heavyWeaponTemp = heavyWeapon.split(" +");
            heavyWeaponAttack = "<strong>Ranged:</strong> <a href='https://swse.fandom.com/wiki/"+heavyWeaponTemp[0]+"'>"+heavyWeaponTemp[0]+"</a> +"+heavyWeaponTemp[1]+"<br>";
        }
    }
    if (other != "") {
        otherAttack = "<strong>Ranged:</strong> "+other+"<br>";
    }
    if (pistol == "" && rifle == "" && heavyWeapon == "" && other == "" && otherRangedAttack == "") {
        pistolAttack = "<strong>Ranged:</strong> By Weapon "+byWeapon+"<br>";
    }

    let outputData = getOutputData(destiny,forcePoints,name,level,size,species,classList,initiativeDisplay,perceptionDisplay,listLanguages,
        reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,unarmed,otherMeleeAttack,otherRangedAttack,damageReduction,
        advancedMelee,lightsaber,pistol,rifle,heavyWeapon,other,BAB,grappleDisplay,talents,SR,feats,
        speciesTraits,str,dex,con,int,wis,cha,listSkills,equipmentList,forcePowers,starshipManeuvers,simpleMelee,simpleRanged);

        if (forcePowers != "") {
            forcePowers = displayForcePowers(forcePowers);
            powerDisplay = "<strong>Force Power Suite:</strong> "+forcePowers+"<br>";
        }

        if (starshipManeuvers != "") {
            starshipManeuvers = displayStarshipManeuvers(starshipManeuvers);
            maneuverDisplay = "<strong>Starship Maneuver Suite:</strong> "+starshipManeuvers+"<br>";
        }

        let space = "";
        if (size == "Large") {
            space = "<strong>Fighting Space:</strong> 2x2 Squares; <strong>Reach:</strong> 1 Square<br>";
        }

    let init = "<strong>Initiative:</strong> "+initiativeDisplay;
    if (talents.includes("Force Intuition")) {
        init = "<strong>Initiative (Use the Force):</strong> "+initiativeDisplay;
    }
    let senses = "Perception "+perceptionDisplay;
    if (talents.includes("Force Perception")) {
        senses = "Use the Force "+perceptionDisplay;
    }

    let output = 
    "<title>"+name+"</title><h3 style='padding-bottom:-5%;'><u>"+name+" Statistics (CL "+level+")</u></h3>"+
        size+" "+species+" "+classList+"<br>"+
        destiny+"<strong>Force Points:</strong> "+forcePoints+"<br>"+
        init+"; <strong>Senses:</strong> "+senses+"<br>"+
        "<strong>Languages:</strong> "+listLanguages+"<br>"+
        "<p style='font-size: large; margin-bottom: 0;'><u><strong>Defenses</strong></u></p>"+
        "<strong>Reflex Defense:</strong> "+reflex+" (<strong>Flat-Footed:</strong> "+flatFooted+"), <strong>Fortitude Defense:</strong> "+fortitude+", <strong>Will Defense:</strong> "+will+"<br>"+
        "<strong>Hit Points:</strong> "+hitPoints+reductionDisplay+shieldRating+", <strong>Damage Threshold:</strong> "+damageThreshold+"<br>"+
        "<p style='font-size: large; margin-bottom: 0;'><u><strong>Offense</strong></u></p>"+
        "<strong>Speed:</strong> "+speed+"<br>"+
        "<strong>Melee:</strong> "+unarmed+"<br>"+
        simpleMeleeAttack+
        otherMelee+
        advancedMeleeAttack+
        lightsaberAttack+
        simpleRangedAttack+
        otherRanged+
        pistolAttack+
        rifleAttack+
        heavyWeaponAttack+
        otherAttack+
        "<strong>Base Attack Bonus:</strong> +"+BAB+", <strong>Grapple:</strong> "+grappleDisplay+"<br>"+
        space+
        maneuverDisplay+
        powerDisplay+
        "<strong>Species Traits (<a href='https://swse.fandom.com/wiki/"+species+"'>"+species+"</a>):</strong> "+traitDisplay+"<br>"+
        "<p style='font-size: large; margin-bottom: 0;'><u><strong>Base Stats</strong></u></p>"+
        "<strong>Abilities:</strong> Strength "+str+", Dexterity "+dex+", Constitution "+con+", Intelligence "+int+", Wisdom "+wis+", Charisma "+cha+""+"<br>"+
        "<strong>Talents:</strong> "+listTalents+"<br>"+
        "<strong>Feats:</strong> "+listFeats+"<br>"+        
        "<strong>Skills:</strong> "+listSkills+"<br>"+
        "<strong>Possessions:</strong> "+equipmentList+"<br><br>"+
        "<div style='padding-left: 10%;'><button type='submit'>"+
        "<a onclick='location.href = \"index.html\"'>Make New Character</a>"+
        "<button id='download'>Download Character</button>"+
        "</button></div>"+
        "<script>"+
        "document.getElementById('download').addEventListener('click', function() {"+
            "var hiddenElement = document.createElement('a');"+
        
            "hiddenElement.href = 'data:attachment/text,' + '"+outputData+"';"+
            "hiddenElement.download = '"+name+"' + '.txt';"+
            "hiddenElement.click();"+
        "});"+
        "</script>";

    return output;
}

export function download_txt(name,outputData) {
    var hiddenElement = document.createElement('a');
    var text = outputData;
  
    hiddenElement.href = 'data:attachment/text,' + encodeURI(text);
    hiddenElement.download = name + '.txt';
    hiddenElement.click();
  }
  
export function getOutputData(destiny,forcePoints,name,level,size,species,classList,initiativeDisplay,perceptionDisplay,listLanguages,
    reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,unarmed,otherMeleeAttack,otherRangedAttack,damageReduction,
    advancedMelee,lightsaber,pistol,rifle,heavyWeapon,other,BAB,grappleDisplay,talents,SR,feats,
    speciesTraits,str,dex,con,int,wis,cha,listSkills,equipmentList,forcePowers,starshipManeuvers,simpleMelee,simpleRanged) {

        let listTalents = displayRawTalents(talents);
        let listFeats = displayRawFeats(feats);

        classList = classList.replace(/ /g, "%20");
        species = species.replace(/ /g, "%20");
        species = species.replace(/'/g, "%27");
        name = name.replace(/ /g, "%20");
        name = name.replace(/'/g, "%27");
        listLanguages = listLanguages.replace(/ /g, "%20");
        listLanguages = listLanguages.replace(/'/g, "%27");
        speed = speed.replace(/ /g, "%20");
        unarmed = unarmed.replace(/ /g, "%20");
        otherMeleeAttack = otherMeleeAttack.replace(/ /g, "%20");
        otherMeleeAttack = otherMeleeAttack.replace(/'/g, "%27");
        otherRangedAttack = otherRangedAttack.replace(/ /g, "%20");
        otherRangedAttack = otherRangedAttack.replace(/'/g, "%27");
        advancedMelee = advancedMelee.replace(/ /g, "%20");
        advancedMelee = advancedMelee.replace(/'/g, "%27");
        lightsaber = lightsaber.replace(/ /g, "%20");
        lightsaber = lightsaber.replace(/'/g, "%27");
        pistol = pistol.replace(/ /g, "%20");
        pistol = pistol.replace(/'/g, "%27");
        rifle = rifle.replace(/ /g, "%20");
        rifle = rifle.replace(/'/g, "%27");
        heavyWeapon = heavyWeapon.replace(/ /g, "%20");
        heavyWeapon = heavyWeapon.replace(/'/g, "%27");
        other = other.replace(/ /g, "%20");
        other = other.replace(/'/g, "%27");
        listTalents = listTalents.replace(/ /g, "%20");
        listFeats = listFeats.replace(/ /g, "%20");
        listSkills = listSkills.replace(/ /g, "%20");
        equipmentList = equipmentList.replace(/ /g, "%20");
        listTalents = listTalents.replace(/'/g, "%27");
        listFeats = listFeats.replace(/'/g, "%27");
        listSkills = listSkills.replace(/'/g, "%27");
        equipmentList = equipmentList.replace(/'/g, "%27");
        simpleMelee = simpleMelee.replace(/ /g, "%20");
        simpleMelee = simpleMelee.replace(/'/g, "%27");
        simpleRanged = simpleRanged.replace(/ /g, "%20");
        simpleRanged = simpleRanged.replace(/'/g, "%27");

        if (Math.floor(level/5) > 0) {
            destiny = "Destiny%20Points:%20" + Math.floor(level/5) + ";%20";
        }

        damageReduction = 0;
        let reductionDisplay = "";
        if (speciesTraits.includes("Damage Reduction 2")) {
            damageReduction += 2;
        }
        if (damageReduction != 0) {
            reductionDisplay = ",%20Damage%20Reduction:%20"+damageReduction;
        }

        let shieldRating = "";
        if (SR != 0) {
            shieldRating = ",%20Shield%20Rating:%20"+SR;
        }

        let rangedWeapon = (BAB + Math.floor((dex-10)/2));
        let traitDisplay = "";
        let byWeapon = "";
        let powerDisplay = "";
        let maneuverDisplay = "";
        if (rangedWeapon < 0) {
            byWeapon = rangedWeapon;
        }
        else {
            byWeapon = "+" + rangedWeapon;
        }
        let count;
        for (count = 0; count < speciesTraits.length; count++) {
            if (count != 0) {
                traitDisplay += ",%20";
            }
            traitDisplay += speciesTraits[count];
        }
        traitDisplay = traitDisplay.replace(/ /g, "%20");
        traitDisplay = traitDisplay.replace(/'/g, "%27");

        let otherMelee = "";
        let advancedMeleeAttack = "";
        let lightsaberAttack = "";
        let simpleMeleeAttack = "";
        let simpleRangedAttack = "";
        let otherRanged = "";
        let pistolAttack = "";
        let rifleAttack = "";
        let heavyWeaponAttack = "";
        let otherAttack = "";
        if (otherMeleeAttack != "") {
            otherMelee = "Melee:%20"+otherMeleeAttack+"%0A";
        }
        if (advancedMelee != "") {
            advancedMeleeAttack = "Melee:%20"+advancedMelee+"%0A";
        }
        if (lightsaber != "") {
            lightsaberAttack = "Melee:%20"+lightsaber+"%0A";
        }
        if (simpleMelee != "") {
            simpleMeleeAttack = "Melee:%20"+simpleMelee+"%0A";
        }
        if (simpleRanged != "") {
            simpleRangedAttack = "Ranged:%20"+simpleRanged+"%0A";
        }
        if (otherRangedAttack != "") {
            otherRanged = "Ranged:%20"+otherRangedAttack+"%0A";
        }
        if (pistol != "") {
            pistolAttack = "Ranged:%20"+pistol+"%0A";
        }
        if (rifle != "") {
            rifleAttack = "Ranged:%20"+rifle+"%0A";
        }
        if (heavyWeapon != "") {
            heavyWeaponAttack = "Ranged:%20"+heavyWeapon+"%0A";
        }
        if (other != "") {
            otherAttack = "Ranged:%20"+other+"%0A";
        }
        if (pistol == "" && rifle == "" && heavyWeapon == "" && other == "" && otherRangedAttack == "") {
            pistolAttack = "Ranged:%20By%20Weapon%20"+byWeapon+"%0A";
        }

    let space = "";
    if (size == "Large") {
        space = "Fighting%20Space:%202x2%20Squares;%20Reach:%201%20Square%0A";
    }

    if (forcePowers != "") {
        forcePowers = displayRawForcePowers(forcePowers);
        powerDisplay = "Force%20Power%20Suite:%20"+forcePowers+"%0A";
    }

    if (starshipManeuvers != "") {
        starshipManeuvers = displayRawStarshipManeuvers(starshipManeuvers);
        maneuverDisplay = "Starship%20Maneuvers%20Suite:%20"+starshipManeuvers+"%0A";
    }

    powerDisplay = powerDisplay.replace(/ /g, "%20");
    maneuverDisplay = maneuverDisplay.replace(/ /g, "%20");

    let init = "Initiative:%20"+initiativeDisplay;
    if (talents.includes("Force Intuition")) {
        init = "Initiative%20(Use%20the%20Force):%20"+initiativeDisplay;
    }
    let senses = "Perception%20"+perceptionDisplay;
    if (talents.includes("Force Perception")) {
        senses = "Use%20the%20Force%20"+perceptionDisplay;
    }

    let outputData = 
    name+"%20Statistics%20(CL%20"+level+")%0A"+
        size+"%20"+species+"%20"+classList+"%0A"+
        destiny+"Force%20Points:%20"+forcePoints+"%0A"+
        init+";%20Senses:%20"+senses+"%0A"+
        "Languages:%20"+listLanguages+"%0A%0A"+
        "Defenses%0A"+
        "Reflex%20Defense:%20"+reflex+"%20(Flat-Footed:%20"+flatFooted+"),%20Fortitude%20Defense:%20"+fortitude+",%20Will%20Defense:%20"+will+"%0A"+
        "Hit%20Points:%20"+hitPoints+reductionDisplay+shieldRating+",%20Damage%20Threshold:%20"+damageThreshold+"%0A%0A"+
        "Offense%0A"+
        "Speed:%20"+speed+"%0A"+
        "Melee:%20"+unarmed+"%0A"+
        simpleMeleeAttack+
        otherMelee+
        advancedMeleeAttack+
        lightsaberAttack+
        simpleRangedAttack+
        otherRanged+
        pistolAttack+
        rifleAttack+
        heavyWeaponAttack+
        otherAttack+
        "Base%20Attack%20Bonus:%20+"+BAB+",%20Grapple:%20"+grappleDisplay+"%0A"+
        space+
        powerDisplay+
        maneuverDisplay+
        "Species%20Traits%20("+species+"):%20"+traitDisplay+"%0A%0A"+
        "Base%20Stats%0A"+
        "Abilities:%20Strength%20"+str+",%20Dexterity%20"+dex+",%20Constitution%20"+con+",%20Intelligence%20"+int+",%20Wisdom%20"+wis+",%20Charisma%20"+cha+""+"%0A"+
        "Talents:%20"+listTalents+"%0A"+
        "Feats:%20"+listFeats+"%0A"+        
        "Skills:%20"+listSkills+"%0A"+
        "Possessions:%20"+equipmentList;

    return outputData;
}