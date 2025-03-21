import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colorList = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];

    const [colorChoice, setColorChoice] = useState<string>(colorList[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {colorList.map((color) => {
                return (
                    <label key={color}>
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={colorChoice === color}
                            onChange={() => {
                                setColorChoice(color);
                            }}
                        />
                        {color}
                    </label>
                );
            })}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: colorChoice }}
            >
                {colorChoice}
            </div>
        </div>
    );
}
