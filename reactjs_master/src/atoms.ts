import { atom } from 'recoil';

interface IAllBoardsState {
    [key: string]: string[];
}

export const allBoardsState = atom<IAllBoardsState>({
    key: 'allboards',
    default: {
        'To Do': ['a', 'b'],
        Doing: ['c', 'd', 'e'],
        Done: ['f'],
    },
});
