import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState<number>(3);
    const [input, setInput] = useState<string>("");

    const quizAttempt = () => {
        if (remainingAttempts > 0) {
            setRemainingAttempts(remainingAttempts - 1);
        }
    };

    const addAttempt = () => {
        const requested = parseInt(input, 10);
        if (requested) {
            setRemainingAttempts((prev) => prev + requested);
        }
        setInput("");
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {remainingAttempts}</p>
            <input
                type="number"
                value={input}
                onChange={(event) => {
                    setInput(event.target.value);
                }}
            />
            <button onClick={quizAttempt} disabled={remainingAttempts === 0}>
                Use
            </button>
            <button onClick={addAttempt}>Gain</button>
        </div>
    );
}
