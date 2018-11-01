// skills
// Runeblade"de
var knight = {
    "max_points": 58,
    "10100001": {
        "title": "Cross Cut",
        "level": "10",
        "job": "Knight",
        "min": 1,
        "max": 10,
        "locked": false,
        "unlockAt": false
    },
    "10100011": {
        "title": "Tornado Slash",
        "level": "10",
        "job": "Knight",
        "min": 1,
        "max": 10,
        "locked": false,
        "unlockAt": false
    },
    "10100021": {
        "title": "Divine Strike",
        "level": "13",
        "job": "Knight",
        "min": 0,
        "max": 10,
        "locked": true,
        "unlockAt": { "10100001": 2, "10100011": 2 }
    },
    "10100031": {
        "title": "Drill Thrust",
        "level": "37",
        "job": "Knight",
        "min": 0,
        "max": 10,
        "locked": true,
        "unlockAt": { "10100001": 2, "10100011": 2, "10100021": 6 }
    },
    "10100041": {
        "title": "Warhorn",
        "level": "22",
        "job": "Knight",
        "min": 0,
        "max": 10,
        "locked": true,
        "unlockAt": { "10100051": 3 }
    },
    "10100051": {
        "title": "Shield Wall",
        "level": "16",
        "job": "Knight",
        "min": 0,
        "max": 10,
        "locked": false,
        "unlockAt": {}
    },
    "10100061": {
        "title": "Iron Defense",
        "level": "1",
        "job": "Knight",
        "min": 1,
        "max": 1,
        "locked": false,
        "unlockAt": {}
    },
    "10100071": {
        "title": "Shield Toss",
        "level": "25",
        "job": "Knight",
        "min": 0,
        "max": 10,
        "locked": true,
        "unlockAt": { "10100001": 1, "10100011": 3, "10100131": 4, "10100151": 4 }
    },
    "10100081": {
        "title": "Bulwark",
        "level": "34",
        "job": "Knight",
        "min": 0,
        "max": 10,
        "locked": true,
        "unlockAt": { "10100051": 4, "10100041": 3 }
    },
    "10100091": {
        "title": "Shield Charge",
        "level": "1",
        "job": "Knight",
        "min": 1,
        "max": 1,
        "locked": false,
        "unlockAt": {}
    },
    "10100101": {
        "title": "Defender of the Faith",
        "level": "40",
        "job": "Knight",
        "min": 0,
        "max": 10,
        "locked": true,
        "unlockAt": { "10100051": 4, "10100041": 3 }
    },
    "10100111": {
        "title": "Longsword Mastery",
        "level": "43",
        "job": "Knight",
        "min": 0,
        "max": 10,
        "locked": true,
        "unlockAt": { "10100001": 6, "10100011": 2, "10100021": 6, "10100031": 2 }
    },
    "10100121": {
        "title": "Shield Mastery",
        "level": "31",
        "job": "Knight",
        "min": 0,
        "max": 10,
        "locked": true,
        "unlockAt": { "10100151": 4 }
    },
    "10100131": {
        "title": "Typhoon Slash",
        "level": "19",
        "job": "Knight",
        "min": 0,
        "max": 10,
        "locked": true,
        "unlockAt": { "10100011": 3 }
    },
    "10100141": {
        "title": "Stinging Flurry",
        "level": "28",
        "job": "Knight",
        "min": 0,
        "max": 10,
        "locked": true,
        "unlockAt": { "10100001": 5, "10100011": 2, "10100021": 5 }
    },
    "10100151": {
        "title": "Iron Shield",
        "level": "10",
        "job": "Knight",
        "min": 0,
        "max": 10,
        "locked": false,
        "unlockAt": {}
    },
    "10100161": {
        "title": "Shield Booster",
        "level": "46",
        "job": "Knight",
        "min": 0,
        "max": 10,
        "locked": true,
        "unlockAt": { "10100151": 4, "10100121": 2 }
    }
}
var berserker = {
    "10200001": {
        "title": "Raging Slash",
        "level": "12",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200011": {
        "title": "Death Spin",
        "level": "12",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200021": {
        "title": "Ground Breaker",
        "level": "19",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200031": {
        "title": "Dark Aura",
        "level": "1",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200041": {
        "title": "Void Slash",
        "level": "10",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200051": {
        "title": "Bloodlust",
        "level": "13",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200061": {
        "title": "Intimidation",
        "level": "28",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200071": {
        "title": "Dark Breaker",
        "level": "22",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200081": {
        "title": "Adrenaline Rush",
        "level": "25",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200091": {
        "title": "X Slash",
        "level": "1",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200101": {
        "title": "Inhuman Endurance",
        "level": "43",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200111": {
        "title": "Deep Wounds",
        "level": "37",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200121": {
        "title": "Greatsword Mastery",
        "level": "16",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200131": {
        "title": "Dark Might",
        "level": "40",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200141": {
        "title": "Blood Price",
        "level": "31",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200151": {
        "title": "Warrior's Instinct",
        "level": "34",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10200161": {
        "title": "Earthquake",
        "level": "46",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "20000001": {
        "title": "Swift Swim",
        "level": "1",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "20000011": {
        "title": "Wall Climbing",
        "level": "1",
        "job": "Berserker",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    }
}
var wizard = {
    "10300011": {
        "title": "Flame Tornado",
        "level": "22",
        "job": "Wizard",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10300021": {
        "title": "Flame Wave",
        "level": "10",
        "job": "Wizard",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10300031": {
        "title": "Chain Lightning",
        "level": "16",
        "job": "Wizard",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10300041": {
        "title": "Arcane Blast",
        "level": "10",
        "job": "Wizard",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10300051": {
        "title": "Ice Spear",
        "level": "13",
        "job": "Wizard",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10300091": {
        "title": "Focus Seal",
        "level": "31",
        "job": "Wizard",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10300111": {
        "title": "Cryomancy",
        "level": "37",
        "job": "Wizard",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10300121": {
        "title": "Electromancy",
        "level": "40",
        "job": "Wizard",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10300141": {
        "title": "Ice Storm",
        "level": "25",
        "job": "Wizard",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10300151": {
        "title": "Elemental Master",
        "level": "43",
        "job": "Wizard",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    }
}
var priest = {
    "10400001": {
        "title": "Celestial Light",
        "level": "10",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400011": {
        "title": "Holy Blast",
        "level": "10",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400021": {
        "title": "Scepter Mastery",
        "level": "13",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400031": {
        "title": "Holy Relic",
        "level": "28",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400041": {
        "title": "Shield of the Archon",
        "level": "19",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400051": {
        "title": "Holy Symbol",
        "level": "34",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400061": {
        "title": "Sanctuary",
        "level": "31",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400071": {
        "title": "Healing Prayer",
        "level": "10",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400081": {
        "title": "Celestial Guardian",
        "level": "16",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400091": {
        "title": "Celestial Blessings",
        "level": "25",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400101": {
        "title": "Scourging Wave",
        "level": "22",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400111": {
        "title": "Steadfast Faith",
        "level": "1",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400121": {
        "title": "Smiting Aura",
        "level": "40",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400131": {
        "title": "Disciple",
        "level": "43",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400141": {
        "title": "Healing Mastery",
        "level": "37",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400151": {
        "title": "Heavenly Wings",
        "level": "1",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10400161": {
        "title": "Angelic Ray",
        "level": "46",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "20000001": {
        "title": "Swift Swim",
        "level": "1",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "20000011": {
        "title": "Wall Climbing",
        "level": "1",
        "job": "Priest",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    }
}
var archer = {
    "10500001": {
        "title": "Arrow Stream",
        "level": "10",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500011": {
        "title": "Arrow Barrage",
        "level": "10",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500021": {
        "title": "Rapid Shot",
        "level": "16",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500031": {
        "title": "Ice Arrow",
        "level": "22",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500041": {
        "title": "Evasive Salvo",
        "level": "10",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500051": {
        "title": "Bow Swing",
        "level": "40",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500061": {
        "title": "Sharp Eyes",
        "level": "34",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500071": {
        "title": "Bronze Eagle",
        "level": "13",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500081": {
        "title": "Eagle Claw",
        "level": "28",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500091": {
        "title": "Eagle's Majesty",
        "level": "37",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500101": {
        "title": "Arrow Storm",
        "level": "25",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500111": {
        "title": "Snipe",
        "level": "1",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500121": {
        "title": "Conditioning",
        "level": "19",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500131": {
        "title": "Agile Archer",
        "level": "31",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500141": {
        "title": "Screwdriver Shot",
        "level": "43",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500151": {
        "title": "Eagle Glide",
        "level": "1",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10500161": {
        "title": "Precision Shooter",
        "level": "46",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "20000001": {
        "title": "Swift Swim",
        "level": "1",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "20000011": {
        "title": "Wall Climbing",
        "level": "1",
        "job": "Archer",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    }
}
var hgunner = {
    "10600001": {
        "title": "Gatling Fire",
        "level": "10",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600011": {
        "title": "Rocket Launcher",
        "level": "10",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600021": {
        "title": "Lock-on",
        "level": "19",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600031": {
        "title": "Homing Missiles",
        "level": "22",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600041": {
        "title": "Electric Blast",
        "level": "25",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600051": {
        "title": "Stun Grenades",
        "level": "16",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600061": {
        "title": "Magnetic Bomb",
        "level": "13",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600071": {
        "title": "Reload",
        "level": "1",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600081": {
        "title": "Jet Boots",
        "level": "1",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600091": {
        "title": "Med Kit",
        "level": "40",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600101": {
        "title": "Bullet Spray",
        "level": "10",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600111": {
        "title": "Advanced Bullets",
        "level": "31",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600121": {
        "title": "M-Bomb",
        "level": "34",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600131": {
        "title": "Suborbital Bombardment",
        "level": "28",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600141": {
        "title": "Advanced Missiles",
        "level": "43",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600151": {
        "title": "Advanced Pulse Weapons",
        "level": "37",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10600161": {
        "title": "Blast Charge Kit",
        "level": "46",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "20000001": {
        "title": "Swift Swim",
        "level": "1",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "20000011": {
        "title": "Wall Climbing",
        "level": "1",
        "job": "Heavy Gunner",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    }
}
var thief = {
    "10700001": {
        "title": "Double Slash",
        "level": "10",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700011": {
        "title": "Poison Edge",
        "level": "10",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700021": {
        "title": "Vicious Cuts",
        "level": "22",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700031": {
        "title": "Blade Dance",
        "level": "28",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700041": {
        "title": "Mind Stealer",
        "level": "1",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700051": {
        "title": "Somersault Kick",
        "level": "10",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700061": {
        "title": "Spirit Thief",
        "level": "1",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700071": {
        "title": "Deft Combatant",
        "level": "43",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700081": {
        "title": "Haste",
        "level": "34",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700091": {
        "title": "Surprise Attack",
        "level": "31",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700101": {
        "title": "Retaliation",
        "level": "37",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700111": {
        "title": "Poison Vial",
        "level": "16",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700121": {
        "title": "Mind Breaker",
        "level": "13",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700131": {
        "title": "Quick Step",
        "level": "25",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700141": {
        "title": "Cunning Tactics",
        "level": "19",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700151": {
        "title": "Ruthless Guile",
        "level": "40",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10700161": {
        "title": "Mesoguard Plus",
        "level": "46",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "20000001": {
        "title": "Swift Swim",
        "level": "1",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "20000011": {
        "title": "Wall Climbing",
        "level": "1",
        "job": "Thief"
        ,
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    }
}
var assassin = {
    "10800001": {
        "title": "Lucky Stars",
        "level": "10",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800011": {
        "title": "Shadow Cutter",
        "level": "10",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800021": {
        "title": "Fragmented Star",
        "level": "10",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800031": {
        "title": "Shadow Burst",
        "level": "22",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800041": {
        "title": "Fatal Strikes",
        "level": "16",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800051": {
        "title": "Dark Cloak",
        "level": "13",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800061": {
        "title": "Shadow Web",
        "level": "37",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800071": {
        "title": "Dash",
        "level": "1",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800081": {
        "title": "Shadow Chaser",
        "level": "1",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800091": {
        "title": "Mark of Death",
        "level": "25",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800101": {
        "title": "Star Flurry",
        "level": "28",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800111": {
        "title": "Thrown Weapon Mastery",
        "level": "40",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800121": {
        "title": "Star Chaser",
        "level": "19",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800131": {
        "title": "Death Sentence",
        "level": "34",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800141": {
        "title": "Soul Grind",
        "level": "31",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800151": {
        "title": "Shadow Arts",
        "level": "43",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10800161": {
        "title": "Mirror Image: Dark Blade",
        "level": "46",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "20000001": {
        "title": "Swift Swim",
        "level": "1",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "20000011": {
        "title": "Wall Climbing",
        "level": "1",
        "job": "Assassin",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    }
}
var runeblade = {
    "10900001": {
        "title": "Flame Sigil",
        "level": "10",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900011": {
        "title": "Frost Sigil",
        "level": "22",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900021": {
        "title": "Storm Sigil",
        "level": "34",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900031": {
        "title": "Flurry",
        "level": "10",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900041": {
        "title": "Rune Balance",
        "level": "1",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900051": {
        "title": "Blink",
        "level": "1",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900061": {
        "title": "Whirling Blades",
        "level": "13",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900071": {
        "title": "Impact",
        "level": "19",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900081": {
        "title": "Gravity Rune",
        "level": "16",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900091": {
        "title": "Warding Rune",
        "level": "28",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900101": {
        "title": "Blade Chasm",
        "level": "43",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900111": {
        "title": "Illusory Blades",
        "level": "25",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900121": {
        "title": "Rune Focus",
        "level": "31",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900131": {
        "title": "Elemental Potency",
        "level": "40",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900141": {
        "title": "Blade Mastery",
        "level": "37",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900151": {
        "title": "Echoing Blade",
        "level": "10",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "10900161": {
        "title": "Honing Runes",
        "level": "46",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "20000001": {
        "title": "Swift Swim",
        "level": "1",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    },
    "20000011": {
        "title": "Wall Climbing",
        "level": "1",
        "job": "Runeblade",
        "min": "",
        "max": "",
        "locked": "",
        "unlockAt": {},
        "lines": ['']
    }
}

var buildTemplate;

if (Cookies.get('ms2-build'))
    buildTemplate = JSON.parse(Cookies.get('ms2-build'))
else
    buildTemplate = JSON.parse(JSON.stringify(knight))


$("[name='btn']").click(event => addPoints(event.target.getAttribute('data-skillid')));
$("[name='-btn']").click(event => removePoints(event.target.getAttribute('data-skillid')));
$("#resetbuildbtn").click(() => resetBuild());

$(document).ready(() => {
    $('.level_cell, .level_cell_sp').addClass('bg-light');
    loadBuild();
})

function loadBuild() {
    $.each(buildTemplate, (index, value) => {
        $('#max-points').text(buildTemplate.max_points);
        $('#point-' + index).text(" " + buildTemplate[index].min);
        $('#point-max-' + index).text(buildTemplate[index].max + " ");
        if (buildTemplate[index].locked) lockSkill(index);
    });
    saveInCookie();
}

function addPoints(skillid) {
    if (buildTemplate[skillid].min < knight[skillid].max && buildTemplate.max_points > 0) {
        buildTemplate[skillid].min++;
        removeMaxPoints(1);
        pointsAction(skillid);
    }
}

function removePoints(skillid) {
    if (buildTemplate[skillid].min > knight[skillid].min && buildTemplate.max_points <= 58) {
        buildTemplate[skillid].min--;
        addMaxPoints(1);
        pointsAction(skillid)
    }
}

function checkLocks(skillid) {
    if (buildTemplate[skillid].unlockAt) {
        $.each(buildTemplate[skillid].unlockAt, (index, value) => {
            if (buildTemplate[index].min >= value) {
            } else {
                removeMaxPoints(Math.abs(buildTemplate[index].min - value))
                buildTemplate[index].min = value;
                unlockSkill(index);
            }
        });
    }
}

function checkLocksAll() {
    $.each(buildTemplate, (index, value) => {
        if (buildTemplate[index].unlockAt) {
            var i = 0;
            var check = 0;
            $.each(buildTemplate[index].unlockAt, (subindex, value) => {
                if (buildTemplate[subindex].min >= value) {
                    i++;
                    check++;
                } else {
                    check--;
                }
            });
            if (i === check) unlockSkill(index)
            else lockSkill(index)
        }
    })
}

function lockSkill(skillid) {
    buildTemplate[skillid].locked = true;
    addMaxPoints(buildTemplate[skillid].min);
    buildTemplate[skillid].min = 0;
    $('#lock-' + skillid).addClass('locked');
}

function unlockSkill(skillid) {
    buildTemplate[skillid].locked = false;
    $('#lock-' + skillid).removeClass('locked');
}

function removeMaxPoints(points) {
    buildTemplate.max_points -= points;
    $('#max-points').text(buildTemplate.max_points);
}

function addMaxPoints(points) {
    buildTemplate.max_points += points;
    $('#max-points').text(buildTemplate.max_points);
}

function pointsAction(skillid) {
    checkLocks(skillid);
    checkLocksAll();
    loadBuild();
}

function resetBuild() {
    buildTemplate = JSON.parse(JSON.stringify(knight))
    loadBuild()
}

function saveInCookie() {
    Cookies.set("ms2-build", JSON.stringify(buildTemplate));
}
