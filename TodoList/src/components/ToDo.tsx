import { useSetRecoilState } from 'recoil'
import { Categories, IToDo, toDoState } from '../atoms'

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState)
    const onClickMoveCategory = (cat: Categories) => {
        setToDos(oldToDos => {
            const targetIdx = oldToDos.findIndex(toDo => toDo.id === id)
            const newToDos = [...oldToDos.slice(0, targetIdx), { text, id, category: cat }, ...oldToDos.slice(targetIdx + 1)]
            return newToDos
        })
    }
    const onClickDelete = () => {
        setToDos(oldToDos => {
            const targetIdx = oldToDos.findIndex(toDo => toDo.id === id)
            const newToDos = [...oldToDos.slice(0, targetIdx), ...oldToDos.slice(targetIdx + 1)]
            return newToDos
        })
    }
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.TO_DO && <button onClick={() => onClickMoveCategory(Categories.TO_DO)}>To Do</button>}
            {category !== Categories.DOING && <button onClick={() => onClickMoveCategory(Categories.DOING)}>Doing</button>}
            {category !== Categories.DONE && <button onClick={() => onClickMoveCategory(Categories.DONE)}>Done</button>}
            <button onClick={onClickDelete}>Delete</button>
        </li>
    )
}
export default ToDo
