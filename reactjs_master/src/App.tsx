import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { allBoardsState, IBoardItem } from './atoms';
import Board from './components/Board';

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
`;
const Boards = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
`;

function App() {
    const [allBoards, setAllBoards] = useRecoilState(allBoardsState);
    const onDragEnd = (info: DropResult) => {
        const { destination, draggableId, source } = info;
        if (!destination) return;
        if (destination?.droppableId === source.droppableId) {
            // same board movement.
            setAllBoards(oldBoards => {
                const changedBoard = [...oldBoards[source.droppableId]];
                const movedItem = changedBoard[source.index];
                changedBoard.splice(source.index, 1);
                changedBoard.splice(destination?.index, 0, movedItem);
                return {
                    ...oldBoards,
                    [source.droppableId]: changedBoard,
                };
            });
        }
        if (destination.droppableId !== source.droppableId) {
            // cross board movement
            setAllBoards(oldBoards => {
                const fromBoard = [...allBoards[source.droppableId]];
                const toBoard = [...oldBoards[destination.droppableId]];
                const movedItem = fromBoard[source.index];
                fromBoard.splice(source.index, 1);
                toBoard.splice(destination?.index, 0, movedItem);
                return {
                    ...oldBoards,
                    [source.droppableId]: fromBoard,
                    [destination.droppableId]: toBoard,
                };
            });
        }
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    {Object.keys(allBoards).map(boardId => (
                        <Board
                            boardId={boardId}
                            key={boardId}
                            boardItems={allBoards[boardId]}
                        />
                    ))}
                </Boards>
            </Wrapper>
        </DragDropContext>
    );
}

export default App;
