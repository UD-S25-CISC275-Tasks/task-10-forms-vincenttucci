import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState("");

    const addInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };

    const correct = () => {
        if (answer === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input type="text" value={answer} onChange={addInput} />
            <div>{correct()}</div>
        </div>
    );
}
