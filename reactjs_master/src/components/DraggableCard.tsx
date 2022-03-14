import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface IDragabbleCardProps {
    item: string;
    index: number;
}

interface ICardProps {
    isDragging: boolean;
}

const Card = styled.div<ICardProps>`
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px 10px;
    background-color: ${props =>
        props.isDragging ? 'whitesmoke' : props.theme.cardColor};
    box-shadow: ${props =>
        props.isDragging ? '3px 3px 5px rgba(0, 0, 0, 0.5)' : 'none'};
`;

function DraggableCard({ item, index }: IDragabbleCardProps) {
    return (
        <Draggable draggableId={item} index={index}>
            {(provided, snapshot) => (
                <Card
                    isDragging={snapshot.isDragging}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                >
                    {item}
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DraggableCard);
