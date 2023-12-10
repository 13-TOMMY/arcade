import React, { useState, useEffect } from 'react';

const ShootingGame = () => {
    const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(10);
    const [isGameRunning, setIsGameRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);


    useEffect(() => {
        if (isGameRunning && timer > 0) {
            const newIntervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            setIntervalId(newIntervalId);

            return () => clearInterval(newIntervalId);
        } else if (timer === 0) {
            clearInterval(intervalId)
            endGame();
        }
    }, [isGameRunning, timer]);

    const moveTarget = () => {
        if (intervalId) {
            clearInterval(intervalId); // Clear existing interval
        }
        const newIntervalId = setInterval(() => {
            const newX = Math.floor(Math.random() * (window.innerWidth - 300)) + 150; //keep the target 150px away from the edges
            const newY = Math.floor(Math.random() * (window.innerHeight - 300)) + 150;
            setTargetPosition({ x: newX, y: newY });
        }, 2000);
        setIntervalId(newIntervalId);
    };

    const startGame = () => {
        setIsGameRunning(true);
        setScore(0);
        setTimer(15);
        setTargetPosition({ x: 50, y: 50 });
        moveTarget();
    };

    const endGame = () => {
        if (isGameRunning) {
            setIsGameRunning(false);
            alert(`Game Over! Your final score is ${score}`);
        }
    };

    const handleShoot = (event) => {
        if (!isGameRunning) {
            startGame();
        } else {
            const targetX = targetPosition.x + 25;
            const targetY = targetPosition.y + 25;
            const clickX = event.clientX;
            const clickY = event.clientY;

            const distance = Math.sqrt(Math.pow(clickX - targetX, 2) + Math.pow(clickY - targetY, 2));
            const maxPoints = 100;
            const minDistance = 50;
            const distanceRatio = Math.max(0, 1 - distance / minDistance);
            const points = Math.floor(maxPoints * distanceRatio);

            setScore(score + points);
        }
    };

    return (
        <div className='target-game-wrapper' onClick={handleShoot}>
            <h1>TARGET TIME TRIAL</h1>
            <div
                style={{
                    position: 'absolute',
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    top: `${targetPosition.y}px`,
                    left: `${targetPosition.x}px`,
                }}
            ></div>
            <p>Click on the moving target to shoot!</p>
            {isGameRunning ? (
                <div>
                    <p>Timer: {timer} seconds</p>
                    <p>Score: {score}</p>
                </div>
            ) : (
                <button onClick={startGame}>Start Game</button>
            )}
        </div>
    );
};

export default ShootingGame;
