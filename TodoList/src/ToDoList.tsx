import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface IForm {
    toDo: string
}

function ToDoList() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IForm>({})
    const onValid = (data: IForm) => {
        console.log(data.toDo)
        setValue('toDo', '')
    }
    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onValid)}>
                <input {...register('toDo', { required: 'Please write to do' })} placeholder="Write a to do" />
                <span>{errors?.toDo?.message}</span>
                <button>Add</button>
            </form>
        </div>
    )
}

export default ToDoList
