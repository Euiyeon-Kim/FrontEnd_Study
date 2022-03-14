import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import DraggableCard from './DraggableCard';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
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

interface IAreaProps {
    isDraggingFromThis: boolean;
    isDraggingOver: boolean;
}

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

interface IBoardProps {
    toDos: string[];
    boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(magic, info) => (
                    <Area
                        isDraggingOver={info.isDraggingOver}
                        isDraggingFromThis={Boolean(info.draggingFromThisWith)}
                        ref={magic.innerRef}
                        {...magic.droppableProps}
                    >
                        {toDos.map((toDo, index) => (
                            <DraggableCard
                                key={toDo}
                                index={index}
                                item={toDo}
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
