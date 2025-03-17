import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition,
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button
            onClick={() => {
                setPosition(4 + position);
            }}
        >
            Shove the Box
        </Button>
    );
}

<<<<<<< HEAD
// used chat gpt to explain that this function needs to get position as a prop in order to control movement of the box
function MoveableBox({ position }: { position: number }): React.JSX.Element {
=======
function MoveableBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);
>>>>>>> origin/task-forms
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px",
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
<<<<<<< HEAD
    // used chat gpt to understand the importance of setting a value here in order to show movement of button on clicks
    const [position, setPosition] = useState<number>(10);
=======
    const box = MoveableBox();
>>>>>>> origin/task-forms

    return (
        <div>
            <h3>Shove Box</h3>
<<<<<<< HEAD
            <span>The box is at: {position}px</span>
            <div>
                <ShoveBoxButton position={position} setPosition={setPosition} />
                <MoveableBox position={position} />
            </div>
=======
            {/* <span>The box is at: {box.position}</span>
            <div>
                <ShoveBoxButton
                    position={box.position}
                    setPosition={box.setPosition}
                ></ShoveBoxButton>
                {box}
            </div> */}
>>>>>>> origin/task-forms
        </div>
    );
}
