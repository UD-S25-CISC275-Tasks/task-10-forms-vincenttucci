import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [chosen, setChosen] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={chosen}
                onChange={(e) => {
                    setChosen(e.target.value);
                }}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {chosen === expectedAnswer ?
                <span>✔️</span>
            :   <span>❌</span>}
        </div>
    );
}
