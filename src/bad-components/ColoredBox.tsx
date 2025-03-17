import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

<<<<<<< HEAD
function ChangeColor(props: {
    colorIndex: number;
    setColorIndex: (index: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                props.setColorIndex((props.colorIndex + 1) % COLORS.length);
=======
function ChangeColor(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <Button
            onClick={() => {
                setColorIndex((1 + colorIndex) % COLORS.length);
>>>>>>> origin/task-forms
            }}
        >
            Next Color
        </Button>
    );
}

<<<<<<< HEAD
function ColorPreview(props: { colorIndex: number }): React.JSX.Element {
=======
function ColorPreview(): React.JSX.Element {
>>>>>>> origin/task-forms
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
<<<<<<< HEAD
                backgroundColor: COLORS[props.colorIndex],
=======
                backgroundColor: COLORS[DEFAULT_COLOR_INDEX],
>>>>>>> origin/task-forms
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
<<<<<<< HEAD
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                />
                <ColorPreview colorIndex={colorIndex} />
=======
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor></ChangeColor>
                <ColorPreview></ColorPreview>
>>>>>>> origin/task-forms
            </div>
        </div>
    );
}
