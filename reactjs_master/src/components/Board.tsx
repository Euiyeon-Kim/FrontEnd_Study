import { Droppable } from 'react-beautiful-dnd';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isTemplateExpression } from 'typescript';
import { allBoardsState, IBoardItem } from '../atoms';
import DraggableCard from './DraggableCard';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-top: 10px;
    width: 300px;
    background-color: ${props => props.theme.boardColor};
    border-radius: 10px;
    min-height: 300px;
`;
const Title = styled.h2`
    text-align: center;
    font-weight: 400;
    margin-bottom: 10px;
    font-size: 18px;
`;
const Area = styled.div<IAreaProps>`
    background-color: ${props =>
        props.isDraggingOver
            ? '#74b9ff'
            : props.isDraggingFromThis
            ? '#ff7675'
            : 'transparent'};
    padding: 20px;
    flex-grow: 1;
    transition: background-color 0.3s ease-in-out;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
        width: 100%;
    }
    button {
        width: 100%;
    }
`;

interface IBoardProps {
    boardItems: IBoardItem[];
    boardId: string;
}
interface IForm {
    newItem: string;
}
interface IAreaProps {
    isDraggingFromThis: boolean;
    isDraggingOver: boolean;
}

function Board({ boardItems, boardId }: IBoardProps) {
    const setAllBoards = useSetRecoilState(allBoardsState);
    const { register, setValue, handleSubmit } = useForm<IForm>();
    const onValid = ({ newItem }: IForm) => {
        const addedItem: IBoardItem = {
            id: Date.now(),
            content: newItem,
        };
        setAllBoards(oldBoards => {
            return {
                ...oldBoards,
                [boardId]: [...oldBoards[boardId], addedItem],
            };
        });
        setValue('newItem', '');
    };

    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onValid)}>
                <input
                    {...register('newItem', {
                        required: true,
                    })}
                    type="text"
                    placeholder={'Enter ' + boardId}
                ></input>
            </Form>
            <Droppable droppableId={boardId}>
                {(magic, info) => (
                    <Area
                        isDraggingOver={info.isDraggingOver}
                        isDraggingFromThis={Boolean(info.draggingFromThisWith)}
                        ref={magic.innerRef}
                        {...magic.droppableProps}
                    >
                        {boardItems.map((item, index) => (
                            <DraggableCard
                                key={item.id}
                                itemId={item.id}
                                index={index}
                                content={item.content}
                            />
                        ))}
                        {magic.placeholder}
                    </Area>
                )}
            </Droppable>
        </Wrapper>
    );
}
export default Board;
