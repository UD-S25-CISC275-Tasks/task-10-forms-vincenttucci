import React, { useState } from "react";
import { Button } from "react-bootstrap";
<<<<<<< HEAD

interface ButtonProps {
    dhValue: number;
    setDhValue: (value: number) => void;
}

function Doubler({ dhValue, setDhValue }: ButtonProps): React.JSX.Element {
=======
import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler(): React.JSX.Element {
>>>>>>> origin/task-forms
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

<<<<<<< HEAD
function Halver({ dhValue, setDhValue }: ButtonProps): React.JSX.Element {
=======
function Halver(): React.JSX.Element {
>>>>>>> origin/task-forms
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
<<<<<<< HEAD
    const [dhValue, setDhValue] = useState<number>(10);

=======
>>>>>>> origin/task-forms
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
<<<<<<< HEAD
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
=======
            <Doubler></Doubler>
            <Halver></Halver>
>>>>>>> origin/task-forms
        </div>
    );
}
