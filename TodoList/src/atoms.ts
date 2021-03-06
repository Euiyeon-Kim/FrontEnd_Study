import { atom, selector } from 'recoil'

const isDark = atom({
    key: 'isDark',
    default: true,
})

export enum Categories {
    'TO_DO' = 'TO_DO',
    'DOING' = 'DOING',
    'DONE' = 'DONE',
}

export interface IToDo {
    text: string
    id: number
    category: Categories
}

export const categoryState = atom<Categories>({
    key: 'category',
    default: Categories.TO_DO,
})

function getStoraged() {
    const savedToDos = localStorage.getItem('todos')
    if (savedToDos != null) {
        return JSON.parse(savedToDos)
    } else return []
}

export const toDoState = atom<IToDo[]>({
    key: 'toDos',
    default: getStoraged(),
    effects: [
        ({ onSet }) => {
            onSet(newToDos => {
                localStorage.setItem('todos', JSON.stringify(newToDos))
            })
        },
    ],
})

export const toDoSelector = selector({
    key: 'toDoSelector',
    get: ({ get }) => {
        const toDos = get(toDoState)
        const curCategory = get(categoryState)
        return toDos.filter(toDo => toDo.category === curCategory)
    },
})
