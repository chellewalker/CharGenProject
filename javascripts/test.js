import {parseXML} from './xmlGetter.js';
import {references} from './references.js';
import {speciesGen} from './speciesGen.js';
import {getLanguages,languageList} from './language.js';
import {getSkills,displaySkills} from './skills.js';
import {classFeats,speciesFeats,displayFeats,getFeats} from './feats.js';
import {getTalent,displayTalents} from './talents/getTalents.js';
import {classFirst,getFirstHitPoints,classSelection,classListing,getHitPoints,getBAB,availableFeats} from './classGen.js';
import {abilityGen} from './abilities/abilityGen.js';

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
    let check = 0;
    while (check != 1) {
        let statGen = abilityGen(abilities);
        let statLevel = Math.floor(level / 4);
    let count;
    for (count = 0; count < statLevel; count++) {
        let statRandom1 = Math.floor(Math.random() * 5);
        statGen[statRandom1]++;

        let statRandom2 = Math.floor(Math.random() * 5);
        if (statRandom2 != statRandom1) {
        statGen[statRandom2]++;
        }
        else {
            let statRandom3 = Math.floor(Math.random() * 5);
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

        //Class generation
        let classes = [0,0,0,0,0];
        let hitPoints = 0;
        let talents = [];
        let feats = [];
        let skills = [];
        let BAB = 0;
        for (count = 0; count < level; count++) {
            if (count == 0) {
                if (thisLevel == "random") {
                    thisLevel = classFirst(str,dex,con,int,wis,cha);
                    classes[thisLevel]++;
                }
                else {
                    classes[thisLevel]++;

                }
                skills = getSkills(int,thisLevel,speciesTraits,classes);
                talents.push(getTalent(thisLevel));
                hitPoints += getFirstHitPoints(thisLevel);
            }
            else {
                thisLevel = getLevel();
                classes[thisLevel]++;
                if (classes[thisLevel] % 2 == 0) {
                    feats.push(getFeat(available,thisLevel,feats,talents));
                }
                else {
                    talents.push(getTalent(available,thisLevel,feats,talents));
                }
            }
        }

        //generate languages
        let languages = getLanguages(speciesID,feats,int);
        let listLanguages = languageList(languages);
    }
}}