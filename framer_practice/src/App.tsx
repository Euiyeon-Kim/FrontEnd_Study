import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #3988f6, #9482fe);
    overflow: hidden;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 50%;
    grid-gap: 10px;

    & > div:nth-of-type(1) {
        transform-origin: right bottom;
    }
    & > div:nth-of-type(2) {
        transform-origin: left bottom;
    }
    & > div:nth-of-type(3) {
        transform-origin: right top;
    }
    & > div:nth-of-type(4) {
        transform-origin: left top;
    }
`;

const Box = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1) 0 10px 20px rgba(0, 0, 0, 0.5);
`;

const Circle = styled(motion.div)`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    background: #fff;
`;

const Overlay = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Button = styled(motion.button)`
    width: 80px;
    height: 40px;
    background: #fff;
    color: #000;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-top: 30px;
    font-size: 14px;
    font-weight: 700;

    &[data-clicked='true'] {
        color: #54e98d;
        scale: 1.2;
    }
`;

const boxGestureVar = {
    hover: {
        scale: 1.1,
    },
};

const overlayVar = {
    initial: {
        background: 'rgba(0,0,0,0)',
    },
    animate: {
        background: 'rgba(0,0,0,0.7)',
    },
    exit: {
        background: 'rgba(0,0,0,0)',
    },
};

export default function App() {
    const boxArr = ['1', '2', '3', '4'];
    const [id, setId] = useState<string | null>(null);
    const [clicked, setClicked] = useState(false);
    return (
        <Wrapper>
            <Grid>
                {boxArr.map(index => {
                    return (
                        <Box
                            key={index}
                            variants={boxGestureVar}
                            whileHover="hover"
                            layoutId={index}
                            onClick={() => setId(index)}
                        >
                            {index === '2' && clicked ? (
                                <Circle layoutId="circle" />
                            ) : null}
                            {index === '3' && !clicked ? (
                                <Circle layoutId="circle" />
                            ) : null}
                        </Box>
                    );
                })}
            </Grid>
            <Button
                data-clicked={clicked}
                layout
                onClick={() => setClicked(prev => !prev)}
            >
                Switch
            </Button>
            <AnimatePresence>
                {id ? (
                    <Overlay
                        variants={overlayVar}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        onClick={() => setId(null)}
                    >
                        <Box
                            style={{
                                width: 200,
                                background: 'rgba(255, 255, 255, 1)',
                            }}
                            layoutId={id}
                        />
                    </Overlay>
                ) : null}
            </AnimatePresence>
        </Wrapper>
    );
}
