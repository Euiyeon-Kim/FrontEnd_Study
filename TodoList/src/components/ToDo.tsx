import { useSetRecoilState } from 'recoil'
import { Categories, IToDo, toDoState } from '../atoms'

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState)
    const onClick = (cat: Categories) => {
        setToDos(oldToDos => {
            const targetIdx = oldToDos.findIndex(toDo => toDo.id === id)
            const newToDos = [...oldToDos.slice(0, targetIdx), { text, id, category: cat }, ...oldToDos.slice(targetIdx + 1)]
            return newToDos
        })
    }
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.TO_DO && <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>}
            {category !== Categories.DOING && <button onClick={() => onClick(Categories.DOING)}>Doing</button>}
            {category !== Categories.DONE && <button onClick={() => onClick(Categories.DONE)}>Done</button>}
        </li>
    )
}
export default ToDo
