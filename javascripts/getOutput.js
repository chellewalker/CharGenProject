import {displayForcePowers,displayRawForcePowers} from './forceAbilities/getForcePower.js';
import {displayStarshipManeuvers,displayRawStarshipManeuvers} from './feats/getStarshipManeuver.js';

export function getOutput(feats,name,level,size,species,classList,initiativeDisplay,perceptionDisplay,listLanguages,
    reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,unarmed,otherMeleeAttack,otherRangedAttack,
    advancedMelee,lightsaber,pistol,rifle,heavyWeapon,other,BAB,grappleDisplay,talents,starshipManeuvers,simpleMelee,simpleRanged,
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
    }
    if (advancedMelee != "") {
        advancedMeleeAttack = "<strong>Melee:</strong> "+advancedMelee+"<br>";
    }
    if (lightsaber != "") {
        lightsaberAttack = "<strong>Melee:</strong> "+lightsaber+"<br>";
    }
    if (simpleMelee != "") {
        simpleMeleeAttack = "<strong>Melee:</strong> "+simpleMelee+"<br>";
    }
    if (simpleRanged != "") {
        simpleRangedAttack = "<strong>Ranged:</strong> "+simpleRanged+"<br>";
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
        reflex,flatFooted,fortitude,will,hitPoints,damageThreshold,speed,unarmed,otherMelee,otherRanged,damageReduction,
        advancedMelee,lightsaber,pistol,rifle,heavyWeapon,other,BAB,grappleDisplay,talents,
        speciesTraits,str,dex,con,int,wis,cha,listTalents,listFeats,listSkills,equipmentList,forcePowers,starshipManeuvers,simpleMelee,simpleRanged);

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
        "<strong>Hit Points:</strong> "+hitPoints+reductionDisplay+", <strong>Damage Threshold:</strong> "+damageThreshold+"<br>"+
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
        "<strong>Species Traits ("+species+"):</strong> "+traitDisplay+"<br>"+
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
            "alert('test');"+
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
    advancedMelee,lightsaber,pistol,rifle,heavyWeapon,other,BAB,grappleDisplay,talents,
    speciesTraits,str,dex,con,int,wis,cha,listTalents,listFeats,listSkills,equipmentList,forcePowers,starshipManeuvers,simpleMelee,simpleRanged) {

        if (Math.floor(level/5) > 0) {
            destiny = "Destiny Points: " + Math.floor(level/5) + "; ";
        }

        damageReduction = 0;
        let reductionDisplay = "";
        if (speciesTraits.includes("Damage Reduction 2")) {
            damageReduction += 2;
        }
        if (damageReduction != 0) {
            reductionDisplay = ", Damage Reduction: "+damageReduction;
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
                traitDisplay += ", ";
            }
            traitDisplay += speciesTraits[count];
        }

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
            otherMelee = "Melee: "+otherMeleeAttack+"\n";
        }
        if (advancedMelee != "") {
            advancedMeleeAttack = "Melee: "+advancedMelee+"\n";
        }
        if (lightsaber != "") {
            lightsaberAttack = "Melee: "+lightsaber+"\n";
        }
        if (simpleMelee != "") {
            simpleMeleeAttack = "Melee: "+simpleMelee+"\n";
        }
        if (simpleRanged != "") {
            simpleRangedAttack = "Ranged: "+simpleRanged+"\n";
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
            pistolAttack = "Ranged: By Weapon "+byWeapon+"\n";
        }

    let space = "";
    if (size == "Large") {
        space = "Fighting Space: 2x2 Squares; Reach: 1 Square\n";
    }

    if (forcePowers != "") {
        forcePowers = displayRawForcePowers(forcePowers);
        powerDisplay = "Force Power Suite: "+forcePowers+"\n";
    }

    if (starshipManeuvers != "") {
        starshipManeuvers = displayRawStarshipManeuvers(starshipManeuvers);
        maneuverDisplay = "Starship Maneuvers Suite: "+starshipManeuvers+"\n";
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
        "Languages: "+listLanguages+"\n\n"+
        "Defenses\n"+
        "Reflex Defense: "+reflex+" (Flat-Footed: "+flatFooted+"), Fortitude Defense: "+fortitude+", Will Defense: "+will+"\n"+
        "Hit Points: "+hitPoints+reductionDisplay+", Damage Threshold: "+damageThreshold+"\n\n"+
        "Offense\n"+
        "Speed: "+speed+"\n"+
        "Melee: "+unarmed+"\n"+
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
        "Base Attack Bonus: +"+BAB+", Grapple: "+grappleDisplay+"\n"+
        space+
        powerDisplay+
        maneuverDisplay+
        "Species Traits ("+species+"): "+traitDisplay+"\n\n"+
        "Base Stats\n"+
        "Abilities: Strength "+str+", Dexterity "+dex+", Constitution "+con+", Intelligence "+int+", Wisdom "+wis+", Charisma "+cha+""+"\n"+
        "Talents: "+listTalents+"\n"+
        "Feats: "+listFeats+"\n"+        
        "Skills: "+listSkills+"\n"+
        "Possessions: "+equipmentList;

    return outputData;
}