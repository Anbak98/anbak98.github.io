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
  2026: [
    { name: '명일방주: 엔드필드', type: 'game', time: '', year: 2026, month: 1, photo: 'assets/thumbnail/gameplay/endfield.jpg', comment: "기본이 튼튼한 캐릭터 육성과 전투 시스템, 그리고 적당한 공장 시스템. 취향에 딱 맞는 최고의 게임이다.", htmlFile: '', subTypes: ['서브컬처', '공장'] },
    { name: '사이버펑크 2077', type: 'game', time: '276.9', year: 2026, month: 1, photo: 'assets/thumbnail/gameplay/cyberfunk2077.jpg', comment: "아주 매력적인 사이버펑크 세계관을 느끼기 좋은 게임.", htmlFile: '', subTypes: ['FPS', '오픈월드'] },
  ],
  2025: [
    { name: 'PEAK', type: 'game', time: '17.4시간', year: 2025, month: 11, photo: 'assets/thumbnail/gameplay/peak.png', comment: "친구 머리 끄댕이를 잡아당기면서 놀다보면 서로의 손을 잡아 끌며 진지하게 정상을 향하게 된다. 업데이트가 꾸준하고 BBNO가 콘서트를 열만큼 개발자들이 신경 써준다.", htmlFile: 'assets/cards/peak.html', subTypes: ['퍼즐', '협동'] },
    { name: 'RV THERE YET?', type: 'game', time: '4.7시간', year: 2025, month: 11, photo: 'assets/thumbnail/gameplay/rvthereyet.png', comment: "친구 혈압 올리기 아주 좋은 게임. RV카를 고치는 것보다 부셔버리는 게 재밌다.",htmlFile: '', subTypes: ['퍼즐', '협동'] },
    { name: 'SC II 극한벽짓살', type: 'game', time: '100시간', year: 2025, month: 11, photo: 'assets/thumbnail/gameplay/sc2theyhunger.png', comment: "극한의 최적화, 극한의 빌드. 완벽주의적 성향을 만족시킬 수 있다." ,htmlFile: '', subTypes: ['디펜스', '전략']
      , icons: [
        {
          type: 'blog',
          url: 'https://anbak.tistory.com/10',
          tooltip: '후기 보러가기'
        },
      ]
    },
    {
      name: '실크송', type: 'game', time: '95.8시간', year: 2025, month: 10, photo: 'assets/thumbnail/gameplay/silksong.jpg', comment:"귀여운 세계와 몽환적인 모험. 어린 시절 아파트 뒷 골목을 돌아다니며 모험하던 습성을 극한으로 발휘할 수 있다. 그리고 세심한 컨트롤과 다급히 키보드를 두드리는 소리, 최고의 전투 경험을 얻을 수 있다.", htmlFile: '', subTypes: ['액션', '어드벤처'], icons: [
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
    { name: 'CLOVER PIT', type: 'game', time: '7.2시간', year: 2025, month: 10, photo: 'assets/thumbnail/gameplay/cloverpit.jpg', comment:"도파민! 도파민!! 도파민!!! 도파ㅁ...어, 666? 컨셉은 좋지만 666으로 인한 도무룩이 과연 유저들이 원하는 것일까. 물론, 보는 맛이 좋아지고 어쩌면 플레이어 입장에서도 나름의 도파민이긴 하다.", htmlFile: '', subTypes: ['로그라이크'] },
    { name: '수레기 머학생 베타', type: 'project', time: '3개월', year: 2025, month: 7, photo: 'assets/thumbnail/development/trashstudent.png', comment:"첫 현업에 비해 어려운 작업. 객체 지향 프로그래밍의 정수를 담은 프레임워크 작업을 주로 담당했다. 반응형 UI와 컨텐츠 개발은 덤.", htmlFile: 'assets/htmls/trashstudent/trashstudent.html', subTypes: ['Unity', '퍼즐'] 
        , icons: [
          {
            type: 'notion',
            url: 'https://www.notion.so/24742be5b78c802da8b9ca77b0aace8c?source=copy_link',
            tooltip: '기술 문서'
          },
        ]
    },
    { name: 'NECESSE', type: 'game', time: '41시간', year: 2025, month: 7, photo: 'assets/thumbnail/gameplay/necesse.jpg', comment:"NPC들 일 시키고 마을 최적화하는 타이쿤 게임. 아니 사실 RPG였다. 근데 NPC들이 일을 너무 잘 해서 일 시키는 맛이 좋다.", htmlFile: '', subTypes: ['RPG', '샌드박스'] },
    { name: '클레르 옵스퀴르 : 33 원정대', type: 'game', time: '91.2시간', year: 2025, month: 6, photo: 'assets/thumbnail/gameplay/expedition33.jpg', comment:"예술적이다. 역시 게임은 모든 창작 문화 중에 가장 잠재력이 뛰어나다. 33 원정대는 아주 담백하게 게임의 매력을 끌어올렸다.", htmlFile: '', subTypes: ['RPG', '어드벤처'] 
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
    { name: 'REMATCH', type: 'game', time: '9시간', year: 2025, month: 6, photo: 'assets/thumbnail/gameplay/rematch.jpg', comment: "골키퍼 어디갔어?", htmlFile: '', subTypes: ['스포츠'] },
    { name: 'INFEST', type: 'project', time: '1개월', year: 2025, month: 5, photo: 'assets/thumbnail/development/infest.png', comment: "유니티를 접한 이래 출시까지 고려했던 첫 프로젝트. 이야, 네트워크 R&D하고 개발하는 게 굉장히 어렵다. 나만 안다고 되는 게 아니라서 팀원들에게 매번 강의하는 게 힘들기도 했고. 또 유니티 애널리틱스로 유저 테스트까지 진행했다. 게임의 재미를 잡으면서 개발을 진행하는 게 얼마나 어려운지 체감했다." ,htmlFile: 'assets/htmls/infest/infest.html', subTypes: ['Unity', 'Network'] 
      , tags: [
      ]
      , icons: [
        {
          type: 'notion',
          url: 'https://www.notion.so/INFEST-24742be5b78c8027809ff19983d444b2?source=copy_link',
          tooltip: '기술 문서'
        },
        {
          type: 'github',
          url: 'https://github.com/Anbak98/INFEST',
          tooltip: '깃헙'
        },
        {
          type: 'youtube',
          url: 'https://youtu.be/ZbKr9C13bc4',
          tooltip: '트레일러'
        },
      ]
    },
    { name: '스파르타파밍', type: 'project', time: '1개월', year: 2025, month: 5, photo: 'assets/thumbnail/development/spartafarming.png', comment:"처음으로 프레임워크의 힘과 구현의 어려움을 체감했다. 농사/낚시/건축/사냥 등 다양한 캐릭터 로직을 만들었는데 프레임워크가 없어서 합칠 방법이 없었다. FSM으로 리팩토링 하는 게 참 머리 아팠다.", htmlFile: 'assets/cards/spartafarming.html', subTypes: ['Unity', '타이쿤'] 
      , icons: [
          {
            type: 'notion',
            url: 'https://www.notion.so/24742be5b78c808196fae30ac088a0f6?source=copy_link',
            tooltip: '기술 문서'
          },
        {
          type: 'github',
          url: 'https://github.com/Anbak98/SpartaFarming',
          tooltip: '깃헙'
        },
        {
          type: 'youtube',
          url: 'https://youtu.be/nhSb4TZOLsQ',
          tooltip: '트레일러'
        },
        ]
    },
    { name: '23 Days Left', type: 'project', time: '1개월', year: 2025, month: 5, photo: 'assets/thumbnail/development/23daysleft.png', comment:"본격적인 UI 작업. 인벤토리 만들어서, UI로 가져오고, 프레임워크 설계하고... 레시피랑 크래프팅 등 여러 가지 만들어봤다. 하지만 아쉽게도 UI에 대한 이해가 탁 트이진 않았다.", htmlFile: 'assets/cards/23daysleft.html', subTypes: ['Unity', '생존'] 
      , icons: [
          {
            type: 'notion',
            url: 'https://www.notion.so/23-Days-Left-24842be5b78c80e8a481e77b6d1a0c28?source=copy_link',
            tooltip: '기술 문서'
          },
        {
          type: 'github',
          url: 'https://github.com/Najaehyeon/23_Days_Left',
          tooltip: '깃헙'
        },
        {
          type: 'youtube',
          url: 'https://youtu.be/evaRW2qT4Nw',
          tooltip: '트레일러'
        },
        ]
    },
    { name: '26 DB Run', type: 'project', time: '1개월', year: 2025, month: 5, photo: 'assets/thumbnail/development/26dbrun.png', comment:"커스터마이징 팔레트를 만들었다. ", htmlFile: 'assets/cards/26dbrun.html', subTypes: ['Unity'] 
      , icons: [
          {
            type: 'notion',
            url: 'https://www.notion.so/26DB-RUN-24842be5b78c80f399dcca7f63160e89?source=copy_link',
            tooltip: '기술 문서'
          },
        {
          type: 'github',
          url: 'https://github.com/yukgeunmu/26DB_GameProject/tree/main',
          tooltip: '깃헙'
        },
        ]
    },
    { name: 'TextPunk2025', type: 'project', time: '1개월', year: 2025, month: 5, photo: 'assets/thumbnail/development/textpunk.png', comment:"텍스트 RPG 만드는 거 재밌네~ 리플렉션/JSON/콜백 등을 활용해보려 노력한 프로젝트다.", htmlFile: 'assets/cards/textpunk.html', subTypes: ['Unity'] 
      , icons: [
          {
            type: 'notion',
            url: 'https://www.notion.so/TextPunk-24842be5b78c80d9bb56e8048d6ccfea?source=copy_link',
            tooltip: '기술 문서'
          },
          {
            type: 'github',
            url: 'https://github.com/armadimon/team15-TextRPG',
            tooltip: '깃헙'
          },
        ]
    },
    { name: 'MONSTER HUNTER : WILDS', type: 'game', time: '92.9시간', year: 2025, month: 4, photo: 'assets/thumbnail/gameplay/monsterhunterwilds.jpg', comment:"남자라면 킹왕짱 공룡을 참을 순 없지.", htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'RIFT OF THE NECRODANCER', type: 'game', time: '10.4시간', year: 2025, month: 3, photo: 'assets/thumbnail/gameplay/liftofthenecrodancer.jpg', comment:"군대 시절 드럼 치던 맛으로 한 게임. 노트 맞추는 맛이 상당하다.", htmlFile: '', subTypes: ['리듬'] },
    { name: '험난한 카드 뒤집기', type: 'project', time: '1개월', year: 2025, month: 5, photo: 'assets/thumbnail/development/tiredcardmatch.png', comment:"유니티 부트캠프 첫 프로젝트. 카드 뒤집기인데, 카드가 너무 작은 탓에 돋보기를 써야 볼 수 있다.",htmlFile: 'assets/cards/tiredcardmatch.html', subTypes: ['Unity', '퍼즐'] },
    { name: 'PALWORLD', type: 'game', time: '137.9시간', year: 2025, month: 2, photo: 'assets/thumbnail/gameplay/palworld.jpg', comment:"어린 시절 개미 잡아다가 개미집에 넣어놓고 구경하던 그 맛.", htmlFile: '', subTypes: ['RPG', '샌드박스'] }
  ],

  2024: [
    { name: 'Warhammer 40,000: Darktide', type: 'game', time: '94.9시간', year: 2024, month: 12, photo: 'assets/thumbnail/gameplay/darktide.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'GUILTY GEAR STRIVE', type: 'game', time: '20.7시간', year: 2024, month: 11, photo: 'assets/thumbnail/gameplay/guiltygearstrive.jpg', htmlFile: '', subTypes: ['대전격투'] },
    { name: 'Fallout 4', type: 'game', time: '169.1시간', year: 2024, month: 10, photo: 'assets/thumbnail/gameplay/fallout4.jpg', htmlFile: '', subTypes: ['RPG', '오픈월드'] },
    { name: 'Project Zomboid', type: 'game', time: '119.2시간', year: 2024, month: 9, photo: 'assets/thumbnail/gameplay/projectzomboid.jpg', htmlFile: '', subTypes: ['생존', '샌드박스'] },
    { name: '게임의 경험과 현실', type: 'project', time: '1개월', year: 2023, month: 8, photo: 'assets/thumbnail/development/gamephilosophy.png', htmlFile: '', subTypes: [] },
    { name: 'Big Defence', type: 'project', time: '0.5개월', year: 2025, month: 5, photo: 'assets/thumbnail/development/bigdefence.png', htmlFile: '', subTypes: ['Unity', '디펜스'] },
    { name: 'Zenress Zone Zero', type: 'game', time: '', year: 2024, month: 7, photo: 'assets/thumbnail/gameplay/zenresszonezero.jpg', htmlFile: '', subTypes: ['액션', '서브컬처'] },
    { name: 'GRANBLUE FANTASY Relink', type: 'game', time: '105.2시간', year: 2024, month: 7, photo: 'assets/thumbnail/gameplay/granbluefantasyrelink.jpg', htmlFile: '', subTypes: ['RPG', '액션'] },
    { name: 'HELLDIVERS II', type: 'game', time: '99.2시간', year: 2024, month: 4, photo: 'assets/thumbnail/gameplay/helldivers2.jpg', htmlFile: '', subTypes: ['액션', '협동'] },
    { name: '게임 마왕 철학', type: 'project', time: '1개월', year: 2023, month: 8, photo: 'assets/thumbnail/development/gamephilosophy.png', htmlFile: '', subTypes: [] },
    { name: '찜빌방에서 돌 키우기', type: 'project', time: '2개월', year: 2024, month: 2, photo: 'assets/thumbnail/development/growstone.png', htmlFile: '', subTypes: ['Unity'] },
    { name: 'CQB Training', type: 'project', time: '2개월', year: 2024, month: 2, photo: 'assets/thumbnail/development/cqbtraining.png', htmlFile: '', subTypes: ['Unreal'] },
    { name: '농작물 자동 수확 기계', type: 'project', time: '1개월', year: 2024, month: 2, photo: 'assets/thumbnail/development/autoharvester.png', htmlFile: '', subTypes: [] },
    { name: 'DYING LIGHT 2 STAY HUMAN', type: 'game', time: '116.7시간', year: 2024, month: 1, photo: 'assets/thumbnail/gameplay/dyinglight2.jpg', htmlFile: '', subTypes: ['액션', '오픈월드'] },
  ],

  2023: [
    { name: '리버스 1999', type: 'game', time: '3개월', year: 2023, month: 10, photo: 'assets/thumbnail/gameplay/reverse1999.jpg', htmlFile: '', subTypes: ['서브컬처'] },
    { name: 'TwitchChatCare', type: 'project', time: '2개월', year: 2023, month: 8, photo: 'assets/thumbnail/development/twitchchatcare.png', htmlFile: '', subTypes: ['NLP'] },
    { name: 'Artificial Hunter Vision', type: 'project', time: '2개월', year: 2023, month: 8, photo: 'assets/thumbnail/development/ahv.png', htmlFile: '', subTypes: ['CV', 'ML'] },
    { name: 'Sync Sense', type: 'project', time: '2개월', year: 2023, month: 8, photo: 'assets/thumbnail/development/syncsense.png', htmlFile: '', subTypes: ['Unity', 'Network', '퍼즐'] },
    { name: '젤다의 전설 왕국의 눈물', type: 'game', time: '50시간', year: 2023, month: 7, photo: 'assets/thumbnail/gameplay/zeldatearsofkingdom.jpg', htmlFile: '', subTypes: ['오픈월드', '어드벤처'] },
    { name: 'SONS OF THE FOREST', type: 'game', time: '29.9시간', year: 2023, month: 7, photo: 'assets/thumbnail/gameplay/sonsoftheforest.jpg', htmlFile: '', subTypes: ['생존', '어드벤처'] }
  ],

  2022: [
    { name: '탕탕특공대', type: 'game', time: '10시간', year: 2022, month: 9, photo: 'assets/thumbnail/gameplay/tangtangspecial.jpg', htmlFile: '', subTypes: ['뱀서라이크'] },
    { name: '아이언 마린 : Invasion', type: 'game', time: '5시간', year: 2022, month: 9, photo: 'assets/thumbnail/gameplay/ironmarineinvasion.png', htmlFile: '', subTypes: ['전략'] },
    { name: '명일방주', type: 'game', time: '', year: 2022, month: 7, photo: 'assets/thumbnail/gameplay/arknights.jpg', htmlFile: '', subTypes: ['디펜스', '서브컬처']
      , icons: [  
        {
          type: 'achievement-100',
          active: true,
          tooltip: '2025.12.14 만렙 달성'
        },
      ]
    },
    { name: '스도리카', type: 'game', time: '50시간', year: 2022, month: 4, photo: 'assets/thumbnail/gameplay/sdorica.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: '킹덤 러쉬 오리진', type: 'game', time: '5시간', year: 2022, month: 4, photo: 'assets/thumbnail/gameplay/kingdomrushorigins.jpg', htmlFile: '', subTypes: ['디펜스'] },
    { name: '킹덤 러쉬 벤전스', type: 'game', time: '5시간', year: 2022, month: 3, photo: 'assets/thumbnail/gameplay/kingdomrushvengence.jpg', htmlFile: '', subTypes: ['디펜스'] },
    { name: '아이언 마린', type: 'game', time: '5시간', year: 2022, month: 3, photo: 'assets/thumbnail/gameplay/ironmarine.jpg', htmlFile: '', subTypes: ['전략'] },
  ],

  2021: [
    { name: '강화학습 에이전트 레벨디자인 기법 연구', type: 'project', time: '3개월', year: 2021, month: 12, photo: 'assets/thumbnail/development/scoredmlagent.png', htmlFile: '', subTypes: ['Unity', 'ML'] },
    { name: 'SATISFACTORY', type: 'game', time: '509시간', year: 2021, month: 12, photo: 'assets/thumbnail/gameplay/satisfactory.jpg', htmlFile: '', subTypes: ['공장'] },
    { name: '블루아카이브', type: 'game', time: '3개월', year: 2021, month: 11, photo: 'assets/thumbnail/gameplay/bluearchive.jpg', htmlFile: '', subTypes: ['전략', '서브컬처'] },
    { name: 'Sid Meiers Civilization 5', type: 'game', time: '36.6시간', year: 2021, month: 10, photo: 'assets/thumbnail/gameplay/sidmeierscivilization5.jpg', htmlFile: '', subTypes: ['전략', '시뮬레이션'] },
    { name: '갓 오브 워', type: 'game', time: '56.3시간', year: 2021, month: 8, photo: 'assets/thumbnail/gameplay/godofwar.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: '포켓몬스터 소드 실드', type: 'game', time: '15.3시간', year: 2021, month: 4, photo: 'assets/thumbnail/gameplay/poketmonswordshield.jpg', htmlFile: '', subTypes: ['어드벤처'] },
    { name: '발헤임', type: 'game', time: '51.1시간', year: 2021, month: 2, photo: 'assets/thumbnail/gameplay/valheim.jpg', htmlFile: '', subTypes: ['생존', '샌드박스'] },
    { name: 'GREEN HELL', type: 'game', time: '20.5시간', year: 2021, month: 2, photo: 'assets/thumbnail/gameplay/greenhell.jpg', htmlFile: '', subTypes: ['생존', '어드벤처'] },
    { name: '악마의 와이너리', type: 'project', time: '6개월', year: 2021, month: 2, photo: 'assets/thumbnail/development/devilswinery.jpg', htmlFile: '', subTypes: ['Unity', '기획', '캐주얼'] },
  ],

  2020: [
    { name: '스타크래프트 네트워크 분석', type: 'project', time: '1개월', year: 2020, month: 9, photo: 'assets/thumbnail/development/starcraftnetworkreport.png', htmlFile: '', subTypes: ['Network'] },
    { name: '젤다의 전설 야생의 숨결', type: 'game', time: '100시간', year: 2020, month: 8, photo: 'assets/thumbnail/gameplay/zeldabreathofwild.jpg', htmlFile: '', subTypes: ['어드벤처', '오픈월드'] },
    { name: '좀비 아포칼립스', type: 'project', time: '36시간', year: 2020, month: 8, photo: 'assets/thumbnail/development/zombieapocalypse.png', htmlFile: '', subTypes: ['Unity', '아트'] },
    { name: 'New Age', type: 'project', time: '2개월', year: 2020, month: 8, photo: 'assets/thumbnail/development/newage.png', htmlFile: '', subTypes: ['Unity', '아트'] },
    { name: '무한의 벽 부수기', type: 'project', time: '2개월', year: 2020, month: 8, photo: 'assets/thumbnail/development/infinitebreakwall.png', htmlFile: '', subTypes: ['Unity', '아트', '캐주얼'] },
    { name: '가디언 테일즈', type: 'game', time: '1년', year: 2020, month: 7, photo: 'assets/thumbnail/gameplay/guardiantales.png', htmlFile: '', subTypes: ['어드벤처', '서브컬처'] },
    { name: 'Fallout 3', type: 'game', time: '13.4시간', year: 2020, month: 6, photo: 'assets/thumbnail/gameplay/fallout3.jpg', htmlFile: '', subTypes: ['RPG'] },
    { name: '모여봐요 동물의 숲', type: 'game', time: '20시간', year: 2020, month: 5, photo: 'assets/thumbnail/gameplay/animalforest.jpg', htmlFile: '', subTypes: ['타이쿤'] },
    { name: '데몬 엑스 마키나', type: 'game', time: '7시간', year: 2020, month: 5, photo: 'assets/thumbnail/gameplay/demonxmachina.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'A DANCE OF FIRE AND ICE', type: 'game', time: '26.9시간', year: 2020, month: 4, photo: 'assets/thumbnail/gameplay/fireandice.jpg', htmlFile: '', subTypes: ['리듬'] },
    { name: 'Divinity: Original Sin 2', type: 'game', time: '72.7시간', year: 2020, month: 3, photo: 'assets/thumbnail/gameplay/divinity2.jpg', htmlFile: '', subTypes: ['RPG'] },
    { name: 'RED ALERT 3', type: 'game', time: '21.5시간', year: 2020, month: 2, photo: 'assets/thumbnail/gameplay/redalert3.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: 'Slay the Spire', type: 'game', time: '41.2시간', year: 2020, month: 2, photo: 'assets/thumbnail/gameplay/slaythespire.jpg', htmlFile: '', subTypes: ['덱빌딩', '로그라이크'] },
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
    { name: 'WebGL Tutorial', type: 'project', time: '1개월', year: 2019, month: 6, photo: 'assets/thumbnail/development/webgltutorial.png', htmlFile: '', subTypes: [] },
    { name: 'MONSTER HUNTER WORLD', type: 'game', time: '144.5시간', year: 2019, month: 4, photo: 'assets/thumbnail/gameplay/monsterhunterworld.jpg', htmlFile: '', subTypes: ['액션', '어드벤처'] },
    { name: 'The Elder Scrolls V: Skyrim', type: 'game', time: '20.7시간', year: 2019, month: 4, photo: 'assets/thumbnail/gameplay/skyrim.jpg', htmlFile: '', subTypes: ['RPG', '오픈월드'] },
    { name: 'Kingdom Rush Frontiers', type: 'game', time: '15시간', year: 2019, month: 3, photo: 'assets/thumbnail/gameplay/kingdomrushfrontiers.jpg', htmlFile: '', subTypes: ['디펜스'] },
    { name: 'Northgard', type: 'game', time: '16.6시간', year: 2019, month: 3, photo: 'assets/thumbnail/gameplay/northgard.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: '투구 : 심해의 모험가', type: 'project', time: '12개월', year: 2019, month: 2, photo: 'assets/thumbnail/development/togo.jpg', htmlFile: '', subTypes: ['Unity', 'QA'] },
    { name: 'Absolver Downfall', type: 'game', time: '3.6시간', year: 2019, month: 3, photo: 'assets/thumbnail/gameplay/absolverdownfall.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: 'THE FOREST', type: 'game', time: '17.2시간', year: 2019, month: 2, photo: 'assets/thumbnail/gameplay/theforest.jpg', htmlFile: '', subTypes: ['생존', '어드벤처'] },
    { name: '바이오쇼크 인피니티', type: 'game', time: '13.2시간', year: 2016, month: 1, photo: 'assets/thumbnail/gameplay/bioshockinfinite.jpg', htmlFile: '', subTypes: ['어드벤처'] },
  ],

  2018: [
    { name: 'Borderlands: The Pre-Sequel', type: 'game', time: '14.2시간', year: 2018, month: 12, photo: 'assets/thumbnail/gameplay/borderlandpresequel.jpg', htmlFile: '', subTypes: ['액션', 'RPG'] },
    { name: 'Dark Souls III', type: 'game', time: '15시간', year: 2018, month: 12, photo: 'assets/thumbnail/gameplay/darksouls3.jpg', htmlFile: '', subTypes: ['액션', 'RPG'] },
    { name: '냥코대전쟁', type: 'game', time: '1년', year: 2018, month: 3, photo: 'assets/thumbnail/gameplay/nayngcowar.jpg', htmlFile: '', subTypes: ['디펜스', '서브컬처'] }
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
    { name: 'Risk Of Rain', type: 'game', time: '19.7시간', year: 2016, month: 2, photo: 'assets/thumbnail/gameplay/riskofrain.jpg', htmlFile: '', subTypes: ['로그라이크', '액션'] },
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
    { name: '스포어', type: 'game', time: '15시간', year: 2014, month: 6, photo: 'assets/thumbnail/gameplay/spore.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: '암네시아 다크 디센트', type: 'game', time: '2.7시간', year: 2014, month: 1, photo: 'assets/thumbnail/gameplay/amnesiadarkdescent.jpg', htmlFile: '', subTypes: ['공포'] },
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
    { name: 'The Binding of Isaac', type: 'game', time: '19.8시간', year: 2013, month: 7, photo: 'assets/thumbnail/gameplay/thebindingofisac.jpg', htmlFile: '', subTypes: ['로그라이크', '액션'] },
    { name: 'LEFT 4 DEAD 2', type: 'game', time: '19.6시간', year: 2013, month: 7, photo: 'assets/thumbnail/gameplay/left4dead2.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: '호러매니악 大 영웅대전', type: 'project', time: '1개월', year: 2013, month: 3, photo: 'assets/thumbnail/development/starcraftusemaphorrormaniacheroswar.png', htmlFile: '', subTypes: ['유즈맵'] },
    { name: '배틀 오브 호러매니악', type: 'project', time: '1개월', year: 2013, month: 3, photo: 'assets/thumbnail/development/starcraftusemapbattleofhorrormaniac.png', htmlFile: '', subTypes: ['유즈맵'] },
    { name: '다키스트 오브 데이스', type: 'game', time: '7시간', year: 2013, month: 2, photo: 'assets/thumbnail/gameplay/darkestofdays.jpg', htmlFile: '', subTypes: ['액션'] },
    { name: '마지막의 길', type: 'project', time: '1개월', year: 2013, month: 3, photo: 'assets/thumbnail/development/roadonend.png', htmlFile: '', subTypes: ['쯔꾸르'] },
    { name: 'SD건담 캡슐파이터', type: 'game', time: '50시간', year: 2013, month: 2, photo: 'assets/thumbnail/gameplay/sdgundamcapsulefighter.jpg', htmlFile: '', subTypes: ['액션'] }
  ],

  2012: [
    { name: '마인크래프트', type: 'game', time: '50시간', year: 2012, month: 11, photo: 'assets/thumbnail/gameplay/minecraft.jpg', htmlFile: '', subTypes: ['샌드박스'] },
    { name: "Garry's Mod", type: 'game', time: '4.7시간', year: 2012, month: 11, photo: 'assets/thumbnail/gameplay/garrymod.jpg', htmlFile: '', subTypes: ['샌드박스'] }
  ],

  2010: [
    { name: '인페스티드 테란 컨트롤', type: 'project', time: '1개월', year: 2013, month: 3, photo: '', htmlFile: '', subTypes: ['유즈맵'] },
    { name: '스타크래프트 II: 자유의 날개', type: 'game', time: '4.7시간', year: 2010, month: 10, photo: 'assets/thumbnail/gameplay/starcraft2freedom.jpg', htmlFile: '', subTypes: ['전략'] },
  ],

  2009: [
    { name: '노바 2', type: 'game', time: '70시간', year: 2009, month: 7, photo: 'assets/thumbnail/gameplay/nova2.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: '메탈레이지', type: 'game', time: '4.7시간', year: 2009, month: 7, photo: 'assets/thumbnail/gameplay/metalrage.jpg', htmlFile: '', subTypes: ['액션'] }
  ],

  2006: [
    { name: '필통 축구', type: 'project', time: '1주일', year: 2013, month: 3, photo: '', htmlFile: '', subTypes: [] },
    { name: '공책 게임', type: 'project', time: '1주일', year: 2013, month: 3, photo: '', htmlFile: '', subTypes: [] },
    { name: '노바 1492', type: 'game', time: '70시간', year: 2006, month: 7, photo: 'assets/thumbnail/gameplay/nova1492.jpg', htmlFile: '', subTypes: ['전략'] },
    { name: '메이플스토리', type: 'game', time: '4.7시간', year: 2006, month: 10, photo: 'assets/thumbnail/gameplay/maplestory.jpg', htmlFile: '', subTypes: ['RPG'] },
    { name: '던전 앤 파이터', type: 'game', time: '4.7시간', year: 2006, month: 10, photo: 'assets/thumbnail/gameplay/dungeonandfighter.png', htmlFile: '', subTypes: ['RPG', '액션'] }
  ]
};
