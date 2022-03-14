import { atom } from 'recoil';

export interface IBoardItem {
    id: number;
    content: string;
}
interface IAllBoardsState {
    [key: string]: IBoardItem[];
}

export const allBoardsState = atom<IAllBoardsState>({
    key: 'allboards',
    default: {
        'To Do': [],
        Doing: [],
        Done: [],
    },
});
