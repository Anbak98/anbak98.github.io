import { Infocard } from '../app/infocard';

export type SubType =
  | '액션'
  | 'RPG'
  | '샌드박스'
  | '어드벤처'
  | '전략'
  | '리듬'
  | '디펜스'
  | '시뮬레이션'
  | '오픈월드'
  | '협동'
  | '퍼즐'
  | '생존'
  | '스포츠'
  | '타이쿤'
  | '대전격투'
  | '서브컬처';

export const CARDS_BY_YEAR: Record<number, Infocard[]> = {
  2025: [
    { name: 'PEAK', type: 'game', time: '17.4시간', year: 2025, month: 11, photo: 'assets/thumbnail/gameplay/peak.png', htmlFile: 'assets/cards/peak.html', subTypes: ['퍼즐', '협동'] },
    { name: 'RV THERE YET?', type: 'game', time: '4.7시간', year: 2025, month: 11, photo: 'assets/thumbnail/gameplay/rvthereyet.png', htmlFile: '', subTypes: ['퍼즐', '협동'] },
    { name: 'SC II 극한벽짓살', type: 'game', time: '100시간', year: 2025, month: 11, photo: 'assets/thumbnail/gameplay/sc2theyhunger.png', htmlFile: '', subTypes: ['디펜스', '전략']
      , icons: [
        {
          type: 'blog',
          url: 'https://anbak.tistory.com/10',
          tooltip: '후기 보러가기'
        },
      ]
    },
    {
      name: '실크송', type: 'game', time: '95.8시간', year: 2025, month: 10, photo: 'assets/thumbnail/gameplay/silksong.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'], icons: [
        {
          type: 'blog',
          url: 'https://anbak.tistory.com/4',
          tooltip: '후기 보러가기'
        },
        {
          type: 'achievement-100',
          active: true,
          tooltip: '도전과제 100% 달성'
        },
      ]
    },
    { name: 'CLOVER PIT', type: 'game', time: '7.2시간', year: 2025, month: 10, photo: 'assets/thumbnail/gameplay/cloverpit.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: '수레기 머학생 베타', type: 'project', time: '3개월', year: 2025, month: 7, photo: 'assets/thumbnail/development/trashstudent.png', htmlFile: 'assets/cards/trashstudent.html', subTypes: ['Unity', '퍼즐'] 
        , icons: [
        {
          type: 'notion',
          url: 'https://www.notion.so/24742be5b78c802da8b9ca77b0aace8c?source=copy_link',
          tooltip: '개발 기록'
        },
      ]
    },
    { name: 'NECESSE', type: 'game', time: '41시간', year: 2025, month: 7, photo: 'assets/thumbnail/gameplay/necesse.jpg', htmlFile: '', subTypes: ['RPG', '샌드박스'] },
    { name: '클레르 옵스퀴르 : 33 원정대', type: 'game', time: '91.2시간', year: 2025, month: 6, photo: 'assets/thumbnail/gameplay/expedition33.jpg', htmlFile: '', subTypes: ['RPG', '어드벤처'] 
      , icons: [
        {
          type: 'blog',
          url: 'https://anbak.tistory.com/11',
          tooltip: '후기 보러가기'
        },
        {
          type: 'achievement-100',
          active: true,
          tooltip: '도전과제 100% 달성'
        },
      ]
    },
    { name: 'REMATCH', type: 'game', time: '9시간', year: 2025, month: 6, photo: 'assets/thumbnail/gameplay/rematch.jpg', htmlFile: '', subTypes: ['스포츠'] },
    { name: 'INFEST', type: 'project', time: '1개월', year: 2025, month: 5, photo: 'assets/thumbnail/development/infest.png', htmlFile: 'assets/htmls/infest/infest.html', subTypes: ['Unity', '퍼즐'] 
      , tags: [
        'Photon Fusion2'
      ]
      , icons: [
        {
          type: 'notion',
          url: 'https://www.notion.so/INFEST-24742be5b78c8027809ff19983d444b2?source=copy_link',
          tooltip: '개발 기록'
        },
        {
          type: 'github',
          url: 'https://github.com/Anbak98/INFEST',
          tooltip: '깃헙'
        },
      ]
    },
    { name: '스파르타파밍', type: 'project', time: '1개월', year: 2025, month: 5, photo: 'assets/thumbnail/gameplay/infest.png', htmlFile: 'assets/cards/infest.html', subTypes: ['Unity', '퍼즐'] },
    { name: '23 Days Left', type: 'project', time: '1개월', year: 2025, month: 5, photo: 'assets/thumbnail/gameplay/infest.png', htmlFile: 'assets/cards/infest.html', subTypes: ['Unity', '퍼즐'] },
    { name: '26 DB Run', type: 'project', time: '1개월', year: 2025, month: 5, photo: 'assets/thumbnail/gameplay/infest.png', htmlFile: 'assets/cards/infest.html', subTypes: ['Unity', '퍼즐'] },
    { name: 'TextPunk2025', type: 'project', time: '1개월', year: 2025, month: 5, photo: 'assets/thumbnail/gameplay/infest.png', htmlFile: 'assets/cards/infest.html', subTypes: ['Unity', '퍼즐'] },
    { name: 'MONSTER HUNTER : WILDS', type: 'game', time: '92.9시간', year: 2025, month: 4, photo: 'assets/thumbnail/gameplay/monsterhunterwilds.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'RIFT OF THE NECRODANCER', type: 'game', time: '10.4시간', year: 2025, month: 3, photo: 'assets/thumbnail/gameplay/liftofthenecrodancer.jpg', htmlFile: '', subTypes: ['리듬'] },
    { name: '돋보기로 카드뒤집기', type: 'project', time: '1개월', year: 2025, month: 5, photo: 'assets/thumbnail/gameplay/infest.png', htmlFile: 'assets/cards/infest.html', subTypes: ['Unity', '퍼즐'] },
    { name: 'PALWORLD', type: 'game', time: '137.9시간', year: 2025, month: 2, photo: 'assets/thumbnail/gameplay/palworld.jpg', htmlFile: '', subTypes: ['RPG', '샌드박스'] }
  ],

  2024: [
    { name: 'Warhammer 40,000: Darktide', type: 'game', time: '94.9시간', year: 2024, month: 12, photo: 'assets/thumbnail/gameplay/darktide.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'GUILTY GEAR STRIVE', type: 'game', time: '20.7시간', year: 2024, month: 11, photo: 'assets/thumbnail/gameplay/guiltygearstrive.jpg', htmlFile: '', subTypes: ['대전격투'] },
    { name: 'Fallout 4', type: 'game', time: '169.1시간', year: 2024, month: 10, photo: 'assets/thumbnail/gameplay/fallout4.jpg', htmlFile: '', subTypes: ['RPG', '오픈월드'] },
    { name: 'Project Zomboid', type: 'game', time: '119.2시간', year: 2024, month: 9, photo: 'assets/thumbnail/gameplay/projectzomboid.jpg', htmlFile: '', subTypes: ['생존', '샌드박스'] },
    { name: '게임의 경험과 현실', type: 'project', time: '2개월', year: 2023, month: 8, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: 'Big Defence', type: 'project', time: '1개월', year: 2025, month: 5, photo: 'assets/thumbnail/gameplay/infest.png', htmlFile: 'assets/cards/infest.html', subTypes: ['Unity', '퍼즐'] },
    { name: 'Zenress Zone Zero', type: 'game', time: '1년', year: 2024, month: 7, photo: 'assets/thumbnail/gameplay/zenresszonezero.jpg', htmlFile: '', subTypes: ['액션', '서브컬처'] },
    { name: 'GRANBLUE FANTASY Relink', type: 'game', time: '105.2시간', year: 2024, month: 7, photo: 'assets/thumbnail/gameplay/granbluefantasyrelink.jpg', htmlFile: '', subTypes: ['RPG', '액션'] },
    { name: 'HELLDIVERS II', type: 'game', time: '99.2시간', year: 2024, month: 4, photo: 'assets/thumbnail/gameplay/helldivers2.jpg', htmlFile: '', subTypes: ['액션', '협동'] },
    { name: '게임 마왕 철학', type: 'project', time: '2개월', year: 2023, month: 8, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: '찜빌방에서 돌 키우기', type: 'project', time: '2개월', year: 2024, month: 2, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: 'CQB Training', type: 'project', time: '2개월', year: 2024, month: 2, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: '농작물 자동 수확 기계', type: 'project', time: '1개월', year: 2024, month: 2, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: 'DYING LIGHT 2 STAY HUMAN', type: 'game', time: '116.7시간', year: 2024, month: 1, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
  ],

  2023: [
    { name: '리버스 1999', type: 'game', time: '3개월', year: 2023, month: 10, photo: 'assets/thumbnail/gameplay/reverse1999.jpg', htmlFile: '', subTypes: ['서브컬처'] },
    { name: 'TwitchChatCare', type: 'project', time: '2개월', year: 2023, month: 8, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: 'Artificial Hunter Vision', type: 'project', time: '2개월', year: 2023, month: 8, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: 'Sync Sense', type: 'project', time: '2개월', year: 2023, month: 8, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: '젤다의 전설 왕국의 눈물', type: 'game', time: '50시간', year: 2023, month: 7, photo: 'assets/thumbnail/gameplay/zeldatearsofkingdom.jpg', htmlFile: '', subTypes: ['오픈월드', '어드벤처'] },
    { name: 'SONS OF THE FOREST', type: 'game', time: '29.9시간', year: 2023, month: 7, photo: 'assets/thumbnail/gameplay/sonsoftheforest.jpg', htmlFile: '', subTypes: ['생존', '어드벤처'] }
  ],

  2022: [
    { name: '탕탕특공대', type: 'game', time: '10시간', year: 2022, month: 9, photo: 'assets/thumbnail/gameplay/tangtangspecial.jpg', htmlFile: '', subTypes: ['뱀서라이크'] },
    { name: '아이언 마린 : Invasion', type: 'game', time: '5시간', year: 2022, month: 9, photo: 'assets/thumbnail/gameplay/ironmarineinvasion.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: '명일방주', type: 'game', time: '4년', year: 2022, month: 7, photo: 'assets/thumbnail/gameplay/arknights.jpg', htmlFile: '', subTypes: ['디펜스', '서브컬처'] },
    { name: '스도리카', type: 'game', time: '50시간', year: 2022, month: 4, photo: 'assets/thumbnail/gameplay/sdorika.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: '킹덤 러쉬 오리진', type: 'game', time: '5시간', year: 2022, month: 4, photo: 'assets/thumbnail/gameplay/kingdomrushorigins.jpg', htmlFile: '', subTypes: ['디펜스'] },
    { name: '킹덤 러쉬 벤전스', type: 'game', time: '5시간', year: 2022, month: 3, photo: 'assets/thumbnail/gameplay/kingdomrushvengence.jpg', htmlFile: '', subTypes: ['디펜스'] },
    { name: '아이언 마린', type: 'game', time: '5시간', year: 2022, month: 3, photo: 'assets/thumbnail/gameplay/ironmarine.jpg', htmlFile: '', subTypes: ['전략'] },
  ],

  2021: [
    { name: '강화학습 에이전트 레벨디자인 기법 연구', type: 'project', time: '3개월', year: 2021, month: 12, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['Unity', '강화학습'] },
    { name: 'SATISFACTORY', type: 'game', time: '398.1시간', year: 2021, month: 12, photo: 'assets/thumbnail/gameplay/satisfactory.jpg', htmlFile: '', subTypes: ['시뮬레이션', '샌드박스'] },
    { name: '블루아카이브', type: 'game', time: '3개월', year: 2021, month: 11, photo: 'assets/thumbnail/gameplay/bluearchaive.jpg', htmlFile: '', subTypes: ['전략', '서브컬처'] },
    { name: 'Sid Meiers Civilization 5', type: 'game', time: '36.6시간', year: 2021, month: 10, photo: 'assets/thumbnail/gameplay/sidmeierscivilization5.jpg', htmlFile: '', subTypes: ['전략', '시뮬레이션'] },
    { name: '갓 오브 워', type: 'game', time: '56.3시간', year: 2021, month: 8, photo: 'assets/thumbnail/gameplay/godofwar.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: '포켓몬스터 소드 실드', type: 'game', time: '15.3시간', year: 2021, month: 4, photo: 'assets/thumbnail/gameplay/poketmonswordshield.jpg', htmlFile: '', subTypes: ['어드벤처'] },
    { name: '발헤임', type: 'game', time: '51.1시간', year: 2021, month: 2, photo: 'assets/thumbnail/gameplay/valheim.jpg', htmlFile: '', subTypes: ['생존', '샌드박스'] },
    { name: 'GREEN HELL', type: 'game', time: '20.5시간', year: 2021, month: 2, photo: 'assets/thumbnail/gameplay/greenhell.jpg', htmlFile: '', subTypes: ['생존', '어드벤처'] },
    { name: '악마의 와이너리', type: 'project', time: '6개월', year: 2021, month: 2, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['Unity', '기확', '캐주얼'] },
  ],

  2020: [
    { name: '스타크래프트 네트워크 분석', type: 'project', time: '1개월', year: 2020, month: 9, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['네트워크'] },
    { name: '젤다의 전설 야생의 숨결', type: 'game', time: '100시간', year: 2020, month: 8, photo: 'assets/thumbnail/gameplay/zeldabreathofwild.jpg', htmlFile: '', subTypes: ['어드벤처', '오픈월드'] },
    { name: '좀비 아포칼립스', type: 'project', time: '36시간', year: 2020, month: 8, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['Unity', '아트'] },
    { name: 'New Age', type: 'project', time: '2개월', year: 2020, month: 8, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['Unity', '아트'] },
    { name: '무한의 벽 부수기', type: 'project', time: '2개월', year: 2020, month: 8, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['Unity', '아트', '캐주얼'] },
    { name: '가디언 테일즈', type: 'game', time: '1년', year: 2020, month: 7, photo: 'assets/thumbnail/gameplay/guardiantales.png', htmlFile: '', subTypes: ['어드벤처', '서브컬처'] },
    { name: 'Fallout 3', type: 'game', time: '13.4시간', year: 2020, month: 6, photo: 'assets/thumbnail/gameplay/fallout3.jpg', htmlFile: '', subTypes: ['RPG'] },
    { name: '모여봐요 동물의 숲', type: 'game', time: '20시간', year: 2020, month: 5, photo: 'assets/thumbnail/gameplay/animalforest.jpg', htmlFile: '', subTypes: ['타이쿤'] },
    { name: '데몬 엑스 마키나', type: 'game', time: '7시간', year: 2020, month: 5, photo: 'assets/thumbnail/gameplay/demonxmachina.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'A DANCE OF FIRE AND ICE', type: 'game', time: '26.9시간', year: 2020, month: 4, photo: 'assets/thumbnail/gameplay/fireandice.jpg', htmlFile: '', subTypes: ['리듬'] },
    { name: 'Divinity: Original Sin 2', type: 'game', time: '72.7시간', year: 2020, month: 3, photo: 'assets/thumbnail/gameplay/divinity2.jpg', htmlFile: '', subTypes: ['RPG'] },
    { name: 'RED ALERT 3', type: 'game', time: '21.5시간', year: 2020, month: 2, photo: 'assets/thumbnail/gameplay/redalert3.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: 'Slay the Spire', type: 'game', time: '41.2시간', year: 2020, month: 2, photo: 'assets/thumbnail/gameplay/slaythespire.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: 'HOLLOW KNIGHT', type: 'game', time: '33.9시간', year: 2020, month: 1, photo: 'assets/thumbnail/gameplay/hollowknight.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'LOBOTOMY CORPORATION', type: 'game', time: '57.3시간', year: 2020, month: 1, photo: 'assets/thumbnail/gameplay/lobotomycorporation.jpg', htmlFile: '', subTypes: ['시뮬레이션'] }
  ],

  2019: [
    { name: 'SURVIVING MARS', type: 'game', time: '17시간', year: 2019, month: 12, photo: 'assets/thumbnail/gameplay/survivingmars.jpg', htmlFile: '', subTypes: ['시뮬레이션'] },
    { name: 'Borderlands 2', type: 'game', time: '131.4시간', year: 2019, month: 10, photo: 'assets/thumbnail/gameplay/borderlands2.jpg', htmlFile: '', subTypes: ['액션', 'RPG'] },
    { name: 'HELLBLADE: Senua’s Sacrifice', type: 'game', time: '6.8시간', year: 2019, month: 9, photo: 'assets/thumbnail/gameplay/hellblade.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'DYING LIGHT', type: 'game', time: '24.1시간', year: 2019, month: 8, photo: 'assets/thumbnail/gameplay/dyinglight.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: 'Spec Ops: The Line', type: 'game', time: '12시간', year: 2019, month: 7, photo: 'assets/thumbnail/gameplay/specopstheline.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'RISE OF THE TOMB RAIDER', type: 'game', time: '12.6시간', year: 2019, month: 6, photo: 'assets/thumbnail/gameplay/riseofthetombraider.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'WebGL Tutorial', type: 'project', time: '1개월', year: 2019, month: 6, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: 'MONSTER HUNTER WORLD', type: 'game', time: '144.5시간', year: 2019, month: 4, photo: 'assets/thumbnail/gameplay/monsterhunterworld.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'The Elder Scrolls V: Skyrim', type: 'game', time: '20.7시간', year: 2019, month: 4, photo: 'assets/thumbnail/gameplay/skyrim.jpg', htmlFile: '', subTypes: ['RPG', '오픈월드'] },
    { name: 'Kingdom Rush Frontiers', type: 'game', time: '15시간', year: 2019, month: 3, photo: 'assets/thumbnail/gameplay/kingdomrushfrontiers.jpg', htmlFile: '', subTypes: ['디펜스'] },
    { name: 'Northgard', type: 'game', time: '16.6시간', year: 2019, month: 3, photo: 'assets/thumbnail/gameplay/northgard.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: '투구 : 심해의 모험가', type: 'project', time: '12개월', year: 2019, month: 2, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: 'Absolver Downfall', type: 'game', time: '3.6시간', year: 2019, month: 3, photo: 'assets/thumbnail/gameplay/absolverdownfall.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'THE FOREST', type: 'game', time: '17.2시간', year: 2019, month: 2, photo: 'assets/thumbnail/gameplay/theforest.jpg', htmlFile: '', subTypes: ['생존', '어드벤처'] },
    { name: '바이오쇼크 인피니티', type: 'game', time: '13.2시간', year: 2016, month: 1, photo: 'assets/thumbnail/gameplay/bioshockinfinite.jpg', htmlFile: '', subTypes: ['어드벤처'] },
  ],

  2018: [
    { name: 'Borderlands: The Pre-Sequel', type: 'game', time: '14.2시간', year: 2018, month: 12, photo: 'assets/thumbnail/gameplay/borderlandpresequel.jpg', htmlFile: '', subTypes: ['액션', 'RPG'] },
    { name: 'Dark Souls III', type: 'game', time: '15시간', year: 2018, month: 12, photo: 'assets/thumbnail/gameplay/darksouls3.jpg', htmlFile: '', subTypes: ['액션', 'RPG'] },
    { name: '냥코대전쟁', type: 'game', time: '1년', year: 2018, month: 3, photo: 'assets/thumbnail/gameplay/nyngcowar.jpg', htmlFile: '', subTypes: ['디펜스', '서브컬처'] }
  ],

  2017: [
    { name: 'CUPHEAD', type: 'game', time: '13.4시간', year: 2017, month: 12, photo: 'assets/thumbnail/gameplay/cuphead.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Dragon Age: Origins', type: 'game', time: '37.2시간', year: 2017, month: 11, photo: 'assets/thumbnail/gameplay/dragonageorigins.jpg', htmlFile: '', subTypes: ['RPG'] },
    { name: 'Crypt of the NecroDancer', type: 'game', time: '13.7시간', year: 2017, month: 1, photo: 'assets/thumbnail/gameplay/cryptofthenecrodancer.jpg', htmlFile: '', subTypes: ['리듬'] },
    { name: 'To The Moon', type: 'game', time: '5.3시간', year: 2017, month: 1, photo: 'assets/thumbnail/gameplay/tothemoon.jpg', htmlFile: '', subTypes: ['어드벤처'] }
  ],

  2016: [
    { name: 'Tom Clancy’s The Division', type: 'game', time: '44시간', year: 2016, month: 12, photo: 'assets/thumbnail/gameplay/division.jpg', htmlFile: '', subTypes: ['액션', 'RPG'] },
    { name: 'TEAM FORTRESS 2', type: 'game', time: '8시간', year: 2016, month: 12, photo: 'assets/thumbnail/gameplay/teamfortress2.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Orcs Must Die 2', type: 'game', time: '8.3시간', year: 2016, month: 11, photo: 'assets/thumbnail/gameplay/orcsmustdie2.jpg', htmlFile: '', subTypes: ['디펜스', '액션'] },
    { name: 'Magicka', type: 'game', time: '3.1시간', year: 2016, month: 11, photo: 'assets/thumbnail/gameplay/magicka.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Braid', type: 'game', time: '5.1시간', year: 2016, month: 11, photo: 'assets/thumbnail/gameplay/braid.jpg', htmlFile: '', subTypes: ['퍼즐'] },
    { name: 'Stardew Valley', type: 'game', time: '68.5시간', year: 2016, month: 11, photo: 'assets/thumbnail/gameplay/stardewvally.jpg', htmlFile: '', subTypes: ['시뮬레이션'] },
    { name: 'Half-Life', type: 'game', time: '3시간', year: 2016, month: 10, photo: 'assets/thumbnail/gameplay/halflife.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Awesomenauts', type: 'game', time: '6.7시간', year: 2016, month: 9, photo: 'assets/thumbnail/gameplay/awesomenauts.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: '바이오쇼크', type: 'game', time: '21.5시간', year: 2016, month: 1, photo: 'assets/thumbnail/gameplay/bioshock.jpg', htmlFile: '', subTypes: ['어드벤처'] },
  ],

  2015: [
    { name: 'Torchlight', type: 'game', time: '9.9시간', year: 2015, month: 7, photo: 'assets/thumbnail/gameplay/torchlight.jpg', htmlFile: '', subTypes: ['RPG'] },
    { name: 'Alan Wake', type: 'game', time: '4시간', year: 2015, month: 3, photo: 'assets/thumbnail/gameplay/alanwake.jpg', htmlFile: '', subTypes: ['어드벤처'] },
    { name: 'The Stanley Parable', type: 'game', time: '3.1시간', year: 2015, month: 1, photo: 'assets/thumbnail/gameplay/stanleyparable.jpg', htmlFile: '', subTypes: ['어드벤처'] }
  ],

  2014: [
    { name: 'Infestation: The New Beginning', type: 'game', time: '15시간', year: 2014, month: 12, photo: 'assets/thumbnail/gameplay/infestationthenewbeginning.jpg', htmlFile: '', subTypes: ['생존'] },
    { name: 'REUS', type: 'game', time: '0.7시간', year: 2014, month: 9, photo: 'assets/thumbnail/gameplay/reus.jpg', htmlFile: '', subTypes: ['시뮬레이션'] },
    { name: "Assassin's Creed Brotherhood", type: 'game', time: '25.3시간', year: 2016, month: 1, photo: 'assets/thumbnail/gameplay/assassinscreedbrotherhood.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'Half-Life 2', type: 'game', time: '3시간', year: 2014, month: 8, photo: 'assets/thumbnail/gameplay/halflife2.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'JUST CAUSE 2', type: 'game', time: '18.2시간', year: 2014, month: 7, photo: 'assets/thumbnail/gameplay/justcause2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: '스포어', type: 'game', time: '15시간', year: 2014, month: 6, photo: 'assets/thumbnail/gameplay/prototype2.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: '암네시아 다크 디센트', type: 'game', time: '2.7시간', year: 2014, month: 1, photo: 'assets/thumbnail/gameplay/bioshockinfinite.jpg', htmlFile: '', subTypes: ['공포'] },
    { name: 'Prototype 2', type: 'game', time: '15시간', year: 2014, month: 6, photo: 'assets/thumbnail/gameplay/prototype2.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'F.E.A.R. 3', type: 'game', time: '6.2시간', year: 2014, month: 6, photo: 'assets/thumbnail/gameplay/fear3.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'CRYSIS 2', type: 'game', time: '11.5시간', year: 2014, month: 6, photo: 'assets/thumbnail/gameplay/crysis2.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Batman: Arkham City', type: 'game', time: '16.5시간', year: 2014, month: 5, photo: 'assets/thumbnail/gameplay/batmanarkham.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Sniper Elite', type: 'game', time: '8.5시간', year: 2014, month: 5, photo: 'assets/thumbnail/gameplay/sniperelite.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Terraria', type: 'game', time: '311시간', year: 2014, month: 3, photo: 'assets/thumbnail/gameplay/terraria.jpg', htmlFile: '', subTypes: ['샌드박스'] },
    { name: 'BIT.TRIP Runner 2', type: 'game', time: '1시간', year: 2014, month: 2, photo: 'assets/thumbnail/gameplay/bittriprunner2.jpg', htmlFile: '', subTypes: ['리듬'] },
    { name: 'Far Cry 3', type: 'game', time: '15.3시간', year: 2014, month: 2, photo: 'assets/thumbnail/gameplay/farcry3.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
    { name: 'Papo & Yo', type: 'game', time: '2.9시간', year: 2014, month: 1, photo: 'assets/thumbnail/gameplay/papayo.jpg', htmlFile: '', subTypes: ['어드벤처'] }
  ],

  2013: [
    { name: 'Darksiders', type: 'game', time: '18.5시간', year: 2013, month: 12, photo: 'assets/thumbnail/gameplay/darksiders.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'LIMBO', type: 'game', time: '2.8시간', year: 2013, month: 10, photo: 'assets/thumbnail/gameplay/limbo.jpg', htmlFile: '', subTypes: ['퍼즐'] },
    { name: 'Portal', type: 'game', time: '16시간', year: 2013, month: 9, photo: 'assets/thumbnail/gameplay/portal.jpg', htmlFile: '', subTypes: ['퍼즐'] },
    { name: "Mirror's Edge", type: 'game', time: '2시간', year: 2013, month: 8, photo: 'assets/thumbnail/gameplay/mirrorsedge.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'Surgeon Simulator', type: 'game', time: '1.5시간', year: 2013, month: 7, photo: 'assets/thumbnail/gameplay/surgeonsimulator.jpg', htmlFile: '', subTypes: ['시뮬레이션'] },
    { name: 'ACE OF SPADES', type: 'game', time: '8.2시간', year: 2013, month: 7, photo: 'assets/thumbnail/gameplay/aceofspades.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'The Binding of Isaac', type: 'game', time: '19.8시간', year: 2013, month: 7, photo: 'assets/thumbnail/gameplay/thebindingofisac.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'LEFT 4 DEAD 2', type: 'game', time: '19.6시간', year: 2013, month: 7, photo: 'assets/thumbnail/gameplay/left4dead2.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: '호러매니악 大 영웅대전', type: 'project', time: '1개월', year: 2013, month: 3, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['유즈맵'] },
    { name: '배틀 오브 호러매니악', type: 'project', time: '1개월', year: 2013, month: 3, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['유즈맵'] },
    { name: '다키스트 오브 데이스', type: 'game', time: '7시간', year: 2013, month: 2, photo: 'assets/thumbnail/gameplay/darkestofdays.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: '마지막의 길', type: 'project', time: '1개월', year: 2013, month: 3, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['쯔꾸르'] },
    { name: 'SD건담 캡슐파이터', type: 'game', time: '50시간', year: 2013, month: 2, photo: 'assets/thumbnail/gameplay/sdgundamcapsulefighter.jpg', htmlFile: '', subTypes: ['액션'] }
  ],

  2012: [
    { name: '마인크래프트', type: 'game', time: '50시간', year: 2012, month: 11, photo: 'assets/thumbnail/gameplay/minecraft.jpg', htmlFile: '', subTypes: ['샌드박스'] },
    { name: "Garry's Mod", type: 'game', time: '4.7시간', year: 2012, month: 11, photo: 'assets/thumbnail/gameplay/garrymod.jpg', htmlFile: '', subTypes: ['샌드박스'] }
  ],

  2010: [
    { name: '인페스티드 테란 컨트롤', type: 'project', time: '1개월', year: 2013, month: 3, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['유즈맵'] },
    { name: '스타크래프트 II: 자유의 날개', type: 'game', time: '4.7시간', year: 2010, month: 10, photo: 'assets/thumbnail/gameplay/starcraft2freedom.jpg', htmlFile: '', subTypes: ['전략'] },
  ],

  2009: [
    { name: '노바 2', type: 'game', time: '70시간', year: 2009, month: 7, photo: 'assets/thumbnail/gameplay/nova2.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: '메탈레이지', type: 'game', time: '4.7시간', year: 2009, month: 7, photo: 'assets/thumbnail/gameplay/metalrage.jpg', htmlFile: '', subTypes: ['액션'] }
  ],

  2006: [
    { name: '필통 축구', type: 'project', time: '1주일', year: 2013, month: 3, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: [] },
    { name: '공책 게임', type: 'project', time: '1주일', year: 2013, month: 3, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: [] },
    { name: '노바 1492', type: 'game', time: '70시간', year: 2006, month: 7, photo: 'assets/thumbnail/gameplay/nova1492.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: '메이플스토리', type: 'game', time: '4.7시간', year: 2006, month: 10, photo: 'assets/thumbnail/gameplay/maplestory.jpg', htmlFile: '', subTypes: ['RPG'] },
    { name: '던전 앤 파이터', type: 'game', time: '4.7시간', year: 2006, month: 10, photo: 'assets/thumbnail/gameplay/dungeonandfighter.png', htmlFile: '', subTypes: ['RPG', '액션'] }
  ]
};
