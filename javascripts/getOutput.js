import {displayForcePowers,displayRawForcePowers} from './forceAbilities/getForcePower.js';

export function getOutput(feats,name,level,size,species,classList,initiativeDisplay,perceptionDisplay,listLanguages,
    reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,unarmed,otherMeleeAttack,otherRangedAttack,
    advancedMelee,lightsaber,pistol,rifle,heavyWeapon,other,BAB,grappleDisplay,talents,
    speciesTraits,str,dex,con,int,wis,cha,listTalents,listFeats,listSkills,equipmentList,
    forcePowers) {
    let destiny = "";
        if (Math.floor(level/5) > 0) {
            destiny = "<strong>Destiny Points: </strong>" + Math.floor(level/5) + "; ";
        }

        let damageReduction = 0;
        let reductionDisplay = "";
        if (speciesTraits.includes("Damage Reduction 2")) {
            damageReduction += 2;
        }
        if (damageReduction != 0) {
            reductionDisplay = ", <strong>Damage Reduction:</strong> "+damageReduction;
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
    let otherMelee = "";
    let otherRanged = "";
    let otherAttack = "";
    let byWeapon = "";
    let powerDisplay = "";
    if (rangedWeapon < 0) {
        byWeapon = rangedWeapon;
    }
    else {
        byWeapon = "+" + rangedWeapon;
    }
    if (otherMeleeAttack != "") {
        otherMelee = "<strong>Melee:</strong> "+otherMeleeAttack+"<br>";
    }
    if (advancedMelee != "") {
        advancedMeleeAttack = "<strong>Melee:</strong> "+advancedMelee+"<br>";
    }
    if (lightsaber != "") {
        lightsaberAttack = "<strong>Melee:</strong> "+lightsaber+"<br>";
    }
    if (otherRangedAttack != "") {
        otherRanged = "<strong>Ranged:</strong> "+otherRangedAttack+"<br>";
    }
    if (pistol != "") {
        pistolAttack = "<strong>Ranged:</strong> "+pistol+"<br>";
    }
    if (rifle != "") {
        rifleAttack = "<strong>Ranged:</strong> "+rifle+"<br>";
    }
    if (heavyWeapon != "") {
        heavyWeaponAttack = "<strong>Ranged:</strong> "+heavyWeapon+"<br>";
    }
    if (other != "") {
        otherAttack = "<strong>Ranged:</strong> "+other+"<br>";
    }
    if (pistol == "" && rifle == "" && heavyWeapon == "" && other == "" && otherRangedAttack == "") {
        pistolAttack = "<strong>Ranged:</strong> By Weapon "+byWeapon+"<br>";
    }

    let outputData = getOutputData(destiny,forcePoints,name,level,size,species,classList,initiativeDisplay,perceptionDisplay,listLanguages,
        reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,unarmed,otherMeleeAttack,otherRangedAttack,damageReduction,
        advancedMeleeAttack,lightsaberAttack,pistolAttack,rifleAttack,heavyWeaponAttack,otherAttack,BAB,grappleDisplay,talents,
        speciesTraits,str,dex,con,int,wis,cha,listTalents,listFeats,listSkills,equipmentList,forcePowers);

        if (forcePowers != "") {
            forcePowers = displayForcePowers(forcePowers);
            powerDisplay = "<strong>Force Power Suite:</strong> "+forcePowers+"<br>";
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
        "<strong>Hit Points:</strong> "+hitPoints+reductionDisplay+", <strong>Damage Threshold:</strong> "+damageThreshold+"<br>"+
        "<p style='font-size: large; margin-bottom: 0;'><u><strong>Offense</strong></u></p>"+
        "<strong>Speed:</strong> "+speed+"<br>"+
        "<strong>Melee:</strong> "+unarmed+"<br>"+
        otherMelee+
        advancedMeleeAttack+
        lightsaberAttack+
        otherRanged+
        pistolAttack+
        rifleAttack+
        heavyWeaponAttack+
        otherAttack+
        "<strong>Base Attack Bonus:</strong> +"+BAB+", <strong>Grapple:</strong> "+grappleDisplay+"<br>"+
        space+
        powerDisplay+
        "<strong>Species Traits ("+species+"):</strong> "+traitDisplay+"<br>"+
        "<p style='font-size: large; margin-bottom: 0;'><u><strong>Base Stats</strong></u></p>"+
        "<strong>Abilities:</strong> Strength "+str+", Dexterity "+dex+", Constitution "+con+", Intelligence "+int+", Wisdom "+wis+", Charisma "+cha+""+"<br>"+
        "<strong>Talents:</strong> "+listTalents+"<br>"+
        "<strong>Feats:</strong> "+listFeats+"<br>"+        
        "<strong>Skills:</strong> "+listSkills+"<br>"+
        "<strong>Possessions:</strong> "+equipmentList+"<br><br>"+
        "<div style='padding-left: 10%;'><button type='submit'>"+
        "<a onclick='location.href = \"index.html\"'>Make New Character</a>"+
        "</button><button type='submit'>"+
        "<a onclick='print()'>Download Character</a>"+
        "</button></div>";

    return output;
}

export function getOutputData(destiny,forcePoints,name,level,size,species,classList,initiativeDisplay,perceptionDisplay,listLanguages,
    reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,unarmed,otherMeleeAttack,otherRangedAttack,damageReduction,
    advancedMelee,lightsaber,pistol,rifle,heavyWeapon,other,BAB,grappleDisplay,talents,
    speciesTraits,str,dex,con,int,wis,cha,listTalents,listFeats,listSkills,equipmentList,forcePowers) {

        let rangedWeapon = (BAB + Math.floor((dex-10)/2));
        let traitDisplay = "";
        let byWeapon = "";
        let powerDisplay = "";
        if (rangedWeapon < 0) {
            byWeapon = rangedWeapon;
        }
        else {
            byWeapon = "+" + rangedWeapon;
        }
        let count;
        for (count = 0; count < speciesTraits.length; count++) {
            if (count != 0) {
                traitDisplay += ", ";
            }
            traitDisplay += speciesTraits[count];
        }
        let reductionDisplay = "";
        if (damageReduction != 0) {
            reductionDisplay = ", Damage Reduction: "+damageReduction;
        }

        let otherMelee = "";
        let advancedMeleeAttack = "";
        let lightsaberAttack = "";
        let otherRanged = "";
        let pistolAttack = "";
        let rifleAttack = "";
        let heavyWeaponAttack = "";
        let otherAttack = "";
        if (otherMeleeAttack != "") {
            otherMelee = "Melee: "+otherMeleeAttack+"\n";
        }
        if (advancedMelee != "") {
            advancedMeleeAttack = "Melee: "+advancedMelee+"\n";
        }
        if (lightsaber != "") {
            lightsaberAttack = "Melee: "+lightsaber+"\n";
        }
        if (otherRangedAttack != "") {
            otherRanged = "Ranged: "+otherRangedAttack+"\n";
        }
        if (pistol != "") {
            pistolAttack = "Ranged: "+pistol+"\n";
        }
        if (rifle != "") {
            rifleAttack = "Ranged: "+rifle+"\n";
        }
        if (heavyWeapon != "") {
            heavyWeaponAttack = "Ranged: "+heavyWeapon+"\n";
        }
        if (other != "") {
            otherAttack = "Ranged: "+other+"\n";
        }
        if (pistol == "" && rifle == "" && heavyWeapon == "" && other == "" && otherRangedAttack == "") {
            pistolAttack = "Ranged: By Weapon "+byWeapon+"<br>";
        }

    let space = "";
    if (size == "Large") {
        space = "Fighting Space: 2x2 Squares; Reach: 1 Square\n";
    }

    if (forcePowers != "") {
        forcePowers = displayRawForcePowers(forcePowers);
        powerDisplay = "Force Power Suite: "+forcePowers+"\n";
    }

    let init = "Initiative: "+initiativeDisplay;
    if (talents.includes("Force Intuition")) {
        init = "Initiative (Use the Force): "+initiativeDisplay;
    }
    let senses = "Perception "+perceptionDisplay;
    if (talents.includes("Force Perception")) {
        senses = "Use the Force "+perceptionDisplay;
    }

    let outputData = 
    name+" Statistics (CL "+level+")\n"+
        size+" "+species+" "+classList+"\n"+
        destiny+"Force Points: "+forcePoints+"\n"+
        init+"; Senses: "+senses+"\n"+
        "Languages: "+listLanguages+"\n"+
        "Defenses\n"+
        "Reflex Defense: "+reflex+" (Flat-Footed: "+flatFooted+"), Fortitude Defense: "+fortitude+", Will Defense: "+will+"\n"+
        "Hit Points: "+hitPoints+reductionDisplay+", Damage Threshold: "+damageThreshold+"\n"+
        "Offense\n"+
        "Speed: "+speed+"\n"+
        "Melee: "+unarmed+"\n"+
        otherMelee+
        advancedMeleeAttack+
        lightsaberAttack+
        otherRanged+
        pistolAttack+
        rifleAttack+
        heavyWeaponAttack+
        otherAttack+
        "Base Attack Bonus: +"+BAB+", Grapple: "+grappleDisplay+"\n"+
        space+
        powerDisplay+
        "Species Traits ("+species+"): "+traitDisplay+"\n"+
        "Base Stats\n"+
        "Abilities: Strength "+str+", Dexterity "+dex+", Constitution "+con+", Intelligence "+int+", Wisdom "+wis+", Charisma "+cha+""+"\n"+
        "Talents: "+listTalents+"\n"+
        "Feats: "+listFeats+"\n"+        
        "Skills: "+listSkills+"\n"+
        "Possessions: "+equipmentList;

    return outputData;
}