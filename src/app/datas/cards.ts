import { Infocard } from '../infocard';

export const CARDS_BY_YEAR: Record<number, Infocard[]> = {
    2026: [
        { name: 'PEAK', type: 'game', time: 17.4, year: 2026, month: 11, photo: 'assets/thumbnail/gameplay/peak.png' },
        { name: 'RV THERE YET?', type: 'game', time: 4.7, year: 2026, month: 11, photo: 'assets/thumbnail/gameplay/rvthereyet.png' },
        { name: 'SC II 극한벽짓살', type: 'game', time: 100.0, year: 2026, month: 11, photo: 'assets/thumbnail/gameplay/sc2theyhunger.png' },
        { name: '실크송', type: 'game', time: 95.8, year: 2026, month: 10, photo: 'assets/thumbnail/gameplay/silksong.jpg' },
        { name: 'CLOVER PIT', type: 'game', time: 7.2, year: 2026, month: 10, photo: 'assets/thumbnail/gameplay/cloverpit.jpg' },
        { name: 'NECESSE', type: 'game', time: 41, year: 2026, month: 7, photo: 'assets/thumbnail/gameplay/necesse.jpg' },
        { name: '클레르 옵스퀴르 : 33 원정대', type: 'game', time: 91.2, year: 2026, month: 6, photo: 'assets/thumbnail/gameplay/expedition33.jpg' },
        { name: 'REMATCH', type: 'game', time: 9.0, year: 2026, month: 6, photo: 'assets/thumbnail/gameplay/rematch.jpg' },
        { name: 'MONSTER HUNTER : WILDS', type: 'game', time: 92.9, year: 2026, month: 4, photo: 'assets/thumbnail/gameplay/monsterhunterwilds.jpg' },
    ],

    2025: [
        { name: '이지은', type: 'project', time: 12.0, year: 2025, month: 2, photo: '/assets/p4.jpg' },
        { name: 'Dungeon Maker', type: 'game', time: 16.0, year: 2025, month: 7, photo: '/assets/p5.jpg' },
    ],

    2024: [
        { name: '보라', type: 'project', time: 9.5, year: 2024, month: 1, photo: '/assets/p6.jpg' },
        { name: '하늘', type: 'project', time: 11.0, year: 2024, month: 4, photo: '/assets/p7.jpg' },
        { name: 'Cyber Run', type: 'game', time: 13.0, year: 2024, month: 5, photo: '/assets/p8.jpg' },
        { name: '혜진', type: 'project', time: 10.5, year: 2024, month: 6, photo: '/assets/p9.jpg' },
    ]
};
