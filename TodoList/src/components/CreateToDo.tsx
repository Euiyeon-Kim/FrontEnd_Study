import { useForm } from 'react-hook-form'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { categoryState, toDoState } from '../atoms'

interface IForm {
    toDo: string
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState)
    const curCategory = useRecoilValue(categoryState)
    const { register, handleSubmit, setValue } = useForm<IForm>({})
    const onValid = ({ toDo }: IForm) => {
        setToDos(prev => [{ text: toDo, id: Date.now(), category: curCategory as any }, ...prev])
        setValue('toDo', '')
    }
    return (
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onValid)}>
            <input {...register('toDo', { required: 'Please write to do' })} placeholder="Write a to do" />
            <button>Add</button>
        </form>
    )
}
export default CreateToDo
