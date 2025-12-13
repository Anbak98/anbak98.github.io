import { Infocard } from '../infocard';

export const CARDS_BY_YEAR: Record<number, Infocard[]> = {
  2025: [
    {
      name: 'PEAK',
      type: 'game',
      time: 17.4,
      year: 2025,
      month: 11,
      photo: 'assets/thumbnail/gameplay/peak.png',
      htmlFile: 'assets/cards/peak.html',
      subTypes: ['퍼즐', '협동']
    },
    { name: 'RV THERE YET?', type: 'game', time: 4.7, year: 2025, month: 11, photo: 'assets/thumbnail/gameplay/rvthereyet.png', htmlFile: '', subTypes: ['퍼즐', '협동'] },
    { name: 'SC II 극한벽짓살', type: 'game', time: 100.0, year: 2025, month: 11, photo: 'assets/thumbnail/gameplay/sc2theyhunger.png', htmlFile: '', subTypes: ['디펜스', '전략'] },
    { name: '실크송', type: 'game', time: 95.8, year: 2025, month: 10, photo: 'assets/thumbnail/gameplay/silksong.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'CLOVER PIT', type: 'game', time: 7.2, year: 2025, month: 10, photo: 'assets/thumbnail/gameplay/cloverpit.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'NECESSE', type: 'game', time: 41, year: 2025, month: 7, photo: 'assets/thumbnail/gameplay/necesse.jpg', htmlFile: '', subTypes: ['RPG', '샌드박스'] },
    { name: '클레르 옵스퀴르 : 33 원정대', type: 'game', time: 91.2, year: 2025, month: 6, photo: 'assets/thumbnail/gameplay/expedition33.jpg', htmlFile: '', subTypes: ['RPG', '어드벤처'] },
    { name: 'REMATCH', type: 'game', time: 9.0, year: 2025, month: 6, photo: 'assets/thumbnail/gameplay/rematch.jpg', htmlFile: '', subTypes: ['스포츠'] },
    { name: 'MONSTER HUNTER : WILDS', type: 'game', time: 92.9, year: 2025, month: 4, photo: 'assets/thumbnail/gameplay/monsterhunterwilds.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'RIFT OF THE NECRODANCER', type: 'game', time: 10.4, year: 2025, month: 3, photo: 'assets/thumbnail/gameplay/liftofthenecrodancer.jpg', htmlFile: '', subTypes: ['리듬'] },
    { name: 'PALWORLD', type: 'game', time: 137.9, year: 2025, month: 2, photo: 'assets/thumbnail/gameplay/palworld.jpg', htmlFile: '', subTypes: ['RPG', '샌드박스'] }
  ],

  2024: [
    { name: 'Warhammer 40,000: Darktide', type: 'game', time: 94.9, year: 2024, month: 12, photo: 'assets/thumbnail/gameplay/darktide.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'GUILTY GEAR STRIVE', type: 'game', time: 20.7, year: 2024, month: 11, photo: 'assets/thumbnail/gameplay/guiltygearstrive.jpg', htmlFile: '', subTypes: ['대전격투'] },
    { name: 'Fallout 4', type: 'game', time: 169.1, year: 2024, month: 10, photo: 'assets/thumbnail/gameplay/fallout4.jpg', htmlFile: '', subTypes: ['RPG', '오픈월드'] },
    { name: 'Project Zomboid', type: 'game', time: 119.2, year: 2024, month: 9, photo: 'assets/thumbnail/gameplay/projectzomboid.jpg', htmlFile: '', subTypes: ['생존', '샌드박스'] },
    { name: 'Zenress Zone Zero', type: 'game', time: 116.7, year: 2024, month: 7, photo: 'assets/thumbnail/gameplay/zenresszonezero.jpg', htmlFile: '', subTypes: ['액션', '서브컬처'] },
    { name: 'GRANBLUE FANTASY Relink', type: 'game', time: 105.2, year: 2024, month: 7, photo: 'assets/thumbnail/gameplay/granbluefantasyrelink.jpg', htmlFile: '', subTypes: ['RPG', '액션'] },
    { name: 'HELLDIVERS II', type: 'game', time: 99.2, year: 2024, month: 4, photo: 'assets/thumbnail/gameplay/helldivers2.jpg', htmlFile: '', subTypes: ['액션', '협동'] },
    { name: 'DYING LIGHT2 STAY HUMAN', type: 'game', time: 116.7, year: 2024, month: 1, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] }
  ],

  2023: [
    { name: 'SONS OF THE FOREST', type: 'game', time: 29.9, year: 2023, month: 7, photo: 'assets/thumbnail/gameplay/sonsoftheforest.jpg', htmlFile: '', subTypes: ['생존', '어드벤처'] }
  ],

  2022: [
    { name: '명일방주', type: 'game', time: 1000, year: 2023, month: 7, photo: 'assets/thumbnail/gameplay/arknights.jpg', htmlFile: '', subTypes: ['디펜스', '서브컬처'] }
  ],

  2021: [
    { name: 'SATISFACTORY', type: 'game', time: 398.1, year: 2021, month: 12, photo: 'assets/thumbnail/gameplay/satisfactory.jpg', htmlFile: '', subTypes: ['시뮬레이션', '샌드박스'] },
    { name: 'Sid Meiers Civilization 5', type: 'game', time: 36.6, year: 2021, month: 10, photo: 'assets/thumbnail/gameplay/sidmeierscivilization5.jpg', htmlFile: '', subTypes: ['전략', '시뮬레이션'] },
    { name: '발헤임', type: 'game', time: 51.1, year: 2021, month: 2, photo: 'assets/thumbnail/gameplay/valheim.jpg', htmlFile: '', subTypes: ['생존', '샌드박스'] },
    { name: 'GREEN HELL', type: 'game', time: 20.5, year: 2021, month: 2, photo: 'assets/thumbnail/gameplay/greenhell.jpg', htmlFile: '', subTypes: ['생존', '어드벤처'] }
  ],

  2020: [
    { name: '가디언 테일즈', type: 'game', time: 1000, year: 2020, month: 7, photo: 'assets/thumbnail/gameplay/guardiantales.png', htmlFile: '', subTypes: ['RPG'] },
    { name: 'Fallout3', type: 'game', time: 13.4, year: 2020, month: 6, photo: 'assets/thumbnail/gameplay/fallout3.jpg', htmlFile: '', subTypes: ['RPG'] },
    { name: 'A DANCE OF FIRE AND ICE', type: 'game', time: 26.9, year: 2020, month: 4, photo: 'assets/thumbnail/gameplay/fireandice.jpg', htmlFile: '', subTypes: ['리듬'] },
    { name: 'Divinity: Original Sin 2', type: 'game', time: 72.7, year: 2020, month: 3, photo: 'assets/thumbnail/gameplay/divinity2.jpg', htmlFile: '', subTypes: ['RPG'] },
    { name: 'RED ALERT3', type: 'game', time: 21.5, year: 2020, month: 2, photo: 'assets/thumbnail/gameplay/redalert3.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: 'Slay the Spire', type: 'game', time: 41.2, year: 2020, month: 2, photo: 'assets/thumbnail/gameplay/slaythespire.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: 'HOLLOW KNIGHT', type: 'game', time: 33.9, year: 2020, month: 1, photo: 'assets/thumbnail/gameplay/hollowknight.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'LOBOTOMY CORPORATION', type: 'game', time: 57.3, year: 2020, month: 1, photo: 'assets/thumbnail/gameplay/lobotomycorporation.jpg', htmlFile: '', subTypes: ['시뮬레이션'] }
  ],

  2019: [
    { name: 'SURVIVING MARS', type: 'game', time: 17, year: 2019, month: 12, photo: 'assets/thumbnail/gameplay/survivingmars.jpg', htmlFile: '', subTypes: ['시뮬레이션'] },
    { name: 'Borderlands2', type: 'game', time: 131.4, year: 2019, month: 10, photo: 'assets/thumbnail/gameplay/borderlands2.jpg', htmlFile: '', subTypes: ['액션', 'RPG'] },
    { name: 'HELLBLADE: Senuas Sacrifice', type: 'game', time: 6.8, year: 2019, month: 9, photo: 'assets/thumbnail/gameplay/hellblade.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'DYING LIGHT', type: 'game', time: 24.1, year: 2019, month: 8, photo: 'assets/thumbnail/gameplay/dyinglight.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: 'Spec Ops : The Line', type: 'game', time: 12, year: 2019, month: 7, photo: 'assets/thumbnail/gameplay/specopstheline.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'RISE OF THE TOMB RAIDER', type: 'game', time: 12.6, year: 2019, month: 6, photo: 'assets/thumbnail/gameplay/riseofthetombraider.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'MONSTER HUNTER WORLD', type: 'game', time: 144.5, year: 2019, month: 4, photo: 'assets/thumbnail/gameplay/monsterhunterworld.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'The Elder Scrolls Skyrim', type: 'game', time: 20.7, year: 2019, month: 4, photo: 'assets/thumbnail/gameplay/skyrim.jpg', htmlFile: '', subTypes: ['RPG', '오픈월드'] },
    { name: 'Kingdom Rush Frontiers', type: 'game', time: 15, year: 2019, month: 3, photo: 'assets/thumbnail/gameplay/kingdomrushfrontiers.jpg', htmlFile: '', subTypes: ['디펜스'] },
    { name: 'Northgard', type: 'game', time: 16.6, year: 2019, month: 3, photo: 'assets/thumbnail/gameplay/northgard.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: 'Absolver Downfall', type: 'game', time: 3.6, year: 2019, month: 3, photo: 'assets/thumbnail/gameplay/absolverdownfall.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'THE FOREST', type: 'game', time: 17.2, year: 2019, month: 2, photo: 'assets/thumbnail/gameplay/theforest.jpg', htmlFile: '', subTypes: ['생존', '어드벤처'] }
  ],

  2018: [
    { name: 'Borderlands the Pre-Sequel', type: 'game', time: 14.2, year: 2018, month: 12, photo: 'assets/thumbnail/gameplay/borderlandpresequel.jpg', htmlFile: '', subTypes: ['액션', 'RPG'] },
    { name: 'Dark Souls 3', type: 'game', time: 15, year: 2018, month: 12, photo: 'assets/thumbnail/gameplay/darksouls3.jpg', htmlFile: '', subTypes: ['액션', 'RPG'] }
  ],

  2017: [
    { name: 'CUPHEAD', type: 'game', time: 13.4, year: 2017, month: 12, photo: 'assets/thumbnail/gameplay/cuphead.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Dragon Age Origins', type: 'game', time: 37.2, year: 2017, month: 11, photo: 'assets/thumbnail/gameplay/dragonageorigins.jpg', htmlFile: '', subTypes: ['RPG'] },
    { name: 'Crypt of the Necrodancer', type: 'game', time: 13.7, year: 2017, month: 1, photo: 'assets/thumbnail/gameplay/cryptofthenecrodancer.jpg', htmlFile: '', subTypes: ['리듬'] },
    { name: 'To The Moon', type: 'game', time: 5.3, year: 2017, month: 1, photo: 'assets/thumbnail/gameplay/tothemoon.jpg', htmlFile: '', subTypes: ['어드벤처'] }
  ],

  2016: [
    { name: 'Tomclancys the Division', type: 'game', time: 44, year: 2016, month: 12, photo: 'assets/thumbnail/gameplay/division.jpg', htmlFile: '', subTypes: ['액션', 'RPG'] },
    { name: 'TEAM FORTRESS 2', type: 'game', time: 8, year: 2016, month: 12, photo: 'assets/thumbnail/gameplay/teamfortress2.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Orcs Must Die 2', type: 'game', time: 8.3, year: 2016, month: 11, photo: 'assets/thumbnail/gameplay/orcsmustdie2.jpg', htmlFile: '', subTypes: ['디펜스', '액션'] },
    { name: 'Magicka', type: 'game', time: 3.1, year: 2016, month: 11, photo: 'assets/thumbnail/gameplay/magicka.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Braid', type: 'game', time: 5.1, year: 2016, month: 11, photo: 'assets/thumbnail/gameplay/braid.jpg', htmlFile: '', subTypes: ['퍼즐'] },
    { name: 'Stardew Vally', type: 'game', time: 68.5, year: 2016, month: 11, photo: 'assets/thumbnail/gameplay/stardewvally.jpg', htmlFile: '', subTypes: ['시뮬레이션'] },
    { name: 'Half Life', type: 'game', time: 3, year: 2016, month: 10, photo: 'assets/thumbnail/gameplay/halflife.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'awesomenauts', type: 'game', time: 6.7, year: 2016, month: 9, photo: 'assets/thumbnail/gameplay/awesomenauts.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: '던전 앤 파이터', type: 'game', time: 4.7, year: 2016, month: 10, photo: 'assets/thumbnail/gameplay/dungeonandfighter.png', htmlFile: '', subTypes: ['RPG', '액션'] }
  ],

  2015: [
    { name: 'Torch Light', type: 'game', time: 9.9, year: 2015, month: 7, photo: 'assets/thumbnail/gameplay/torchlight.jpg', htmlFile: '', subTypes: ['RPG'] },
    { name: 'Alan Wake', type: 'game', time: 4, year: 2015, month: 3, photo: 'assets/thumbnail/gameplay/alanwake.jpg', htmlFile: '', subTypes: ['어드벤처'] },
    { name: 'The Stanley Parable', type: 'game', time: 3.1, year: 2015, month: 1, photo: 'assets/thumbnail/gameplay/stanleyparable.jpg', htmlFile: '', subTypes: ['어드벤처'] }
  ],

  2014: [
    { name: 'Infestation the New Beginning', type: 'game', time: 15, year: 2014, month: 12, photo: 'assets/thumbnail/gameplay/infestationthenewbeginning.jpg', htmlFile: '', subTypes: ['생존'] },
    { name: 'REUS', type: 'game', time: 0.7, year: 2014, month: 9, photo: 'assets/thumbnail/gameplay/reus.jpg', htmlFile: '', subTypes: ['시뮬레이션'] },
    { name: 'Assassins Creed Brotherhood', type: 'game', time: 25.3, year: 2014, month: 9, photo: 'assets/thumbnail/gameplay/assassinscreedbrotherhood.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'Half Life 2', type: 'game', time: 3, year: 2014, month: 8, photo: 'assets/thumbnail/gameplay/halflife2.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'JUST CAUSE 2', type: 'game', time: 18.2, year: 2014, month: 7, photo: 'assets/thumbnail/gameplay/justcause2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: 'Prototype2', type: 'game', time: 15, year: 2014, month: 6, photo: 'assets/thumbnail/gameplay/prototype2.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'F.E.A.R.3', type: 'game', time: 6.2, year: 2014, month: 6, photo: 'assets/thumbnail/gameplay/fear3.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'CRYSIS 2', type: 'game', time: 11.5, year: 2014, month: 6, photo: 'assets/thumbnail/gameplay/crysis2.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Batman Arkham City', type: 'game', time: 16.5, year: 2014, month: 5, photo: 'assets/thumbnail/gameplay/batmanarkham.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Sniper Elite', type: 'game', time: 8.5, year: 2014, month: 5, photo: 'assets/thumbnail/gameplay/sniperelite.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Terraria', type: 'game', time: 311, year: 2014, month: 3, photo: 'assets/thumbnail/gameplay/terraria.jpg', htmlFile: '', subTypes: ['샌드박스'] },
    { name: 'BIT.TRIP Runner2', type: 'game', time: 1, year: 2014, month: 2, photo: 'assets/thumbnail/gameplay/bittriprunner2.jpg', htmlFile: '', subTypes: ['리듬'] },
    { name: 'Farcry3', type: 'game', time: 15.3, year: 2014, month: 2, photo: 'assets/thumbnail/gameplay/farcry3.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: 'Papo&Yo', type: 'game', time: 2.9, year: 2014, month: 1, photo: 'assets/thumbnail/gameplay/papayo.jpg', htmlFile: '', subTypes: ['어드벤처'] }
  ],

  2013: [
    { name: 'Darksiders', type: 'game', time: 18.5, year: 2013, month: 12, photo: 'assets/thumbnail/gameplay/darksiders.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'LIMBO', type: 'game', time: 2.8, year: 2013, month: 10, photo: 'assets/thumbnail/gameplay/limbo.jpg', htmlFile: '', subTypes: ['퍼즐'] },
    { name: 'Portal', type: 'game', time: 16, year: 2013, month: 9, photo: 'assets/thumbnail/gameplay/portal.jpg', htmlFile: '', subTypes: ['퍼즐'] },
    { name: 'MIRRORS EDGE', type: 'game', time: 2, year: 2013, month: 8, photo: 'assets/thumbnail/gameplay/mirrorsedge.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Surgeon Simulator', type: 'game', time: 1.5, year: 2013, month: 7, photo: 'assets/thumbnail/gameplay/surgeonsimulator.jpg', htmlFile: '', subTypes: ['시뮬레이션'] },
    { name: 'ACE of SPADES', type: 'game', time: 8.2, year: 2013, month: 7, photo: 'assets/thumbnail/gameplay/aceofspades.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'The Binding of ISAAC', type: 'game', time: 19.8, year: 2013, month: 7, photo: 'assets/thumbnail/gameplay/thebindingofisac.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'LEFT 4 DEAD 2', type: 'game', time: 19.6, year: 2013, month: 7, photo: 'assets/thumbnail/gameplay/left4dead2.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: '다키스트 오브 데이스', type: 'game', time: 7, year: 2013, month: 2, photo: 'assets/thumbnail/gameplay/darkestofdays.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'SD건담 캡슐파이터', type: 'game', time: 50, year: 2013, month: 2, photo: 'assets/thumbnail/gameplay/sdgundamcapsulefighter.jpg', htmlFile: '', subTypes: ['액션'] }
  ],

  2012: [
    { name: '마인크래프트', type: 'game', time: 50, year: 2012, month: 11, photo: 'assets/thumbnail/gameplay/minecraft.jpg', htmlFile: '', subTypes: ['샌드박스'] },
    { name: "Garry's Mod", type: 'game', time: 4.7, year: 2012, month: 11, photo: 'assets/thumbnail/gameplay/garrymod.jpg', htmlFile: '', subTypes: ['샌드박스'] }
  ],

  2010: [
    { name: '스타크래프트2 자유의 날개', type: 'game', time: 4.7, year: 2010, month: 10, photo: 'assets/thumbnail/gameplay/starcraft2freedom.jpg', htmlFile: '', subTypes: ['전략'] }
  ],

  2009: [
    { name: '노바2', type: 'game', time: 70, year: 2009, month: 7, photo: 'assets/thumbnail/gameplay/nova2.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: '메탈레이지', type: 'game', time: 4.7, year: 2009, month: 7, photo: 'assets/thumbnail/gameplay/metalrage.jpg', htmlFile: '', subTypes: ['액션'] }
  ],

  2006: [
    { name: '노바1492', type: 'game', time: 70, year: 2006, month: 7, photo: 'assets/thumbnail/gameplay/nova1492.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: '메이플스토리', type: 'game', time: 4.7, year: 2006, month: 10, photo: 'assets/thumbnail/gameplay/maplestory.jpg', htmlFile: '', subTypes: ['RPG'] },
    { name: '던전 앤 파이터', type: 'game', time: 4.7, year: 2006, month: 10, photo: 'assets/thumbnail/gameplay/dungeonandfighter.png', htmlFile: '', subTypes: ['RPG', '액션'] }
  ]
};