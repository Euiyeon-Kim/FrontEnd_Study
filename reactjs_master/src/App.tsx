import styled from 'styled-components';
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useTransform,
    useViewportScroll,
} from 'framer-motion';
import { useRef, useState } from 'react';

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, rgb(238, 0, 153), rgb(211, 0, 238));
`;

const Box = styled(motion.div)`
    width: 400px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    border-radius: 40px;
    position: absolute;
    top: 100px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVar = {
    invisible: (back: boolean) => {
        return { x: back ? -500 : 500, opacity: 0, scale: 0 };
    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
    leaving: (back: boolean) => {
        return {
            x: back ? 500 : -500,
            opacity: 0,
            scale: 0,
            transition: { duration: 0.5 },
        };
    },
};

function App() {
    const [showing, setShowing] = useState(1);
    const [goingBack, setGoingBack] = useState(false);
    const getNext = () => {
        setGoingBack(false);
        setShowing(prev => (prev === 10 ? 1 : prev + 1));
    };
    const getPrev = () => {
        setGoingBack(true);
        setShowing(prev => (prev === 1 ? 10 : prev - 1));
    };
    return (
        <Wrapper>
            <AnimatePresence>
                <Box
                    custom={goingBack}
                    variants={boxVar}
                    initial="invisible"
                    animate="visible"
                    exit="leaving"
                    key={showing}
                >
                    {showing}
                </Box>
            </AnimatePresence>
            <button onClick={getPrev}>Prev Please</button>
            <button onClick={getNext}>Next Please</button>
        </Wrapper>
    );
}

export default App;
