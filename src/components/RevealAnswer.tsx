import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
<<<<<<< HEAD
    const [visible, visibleSet] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    visibleSet(!visible);
                }}
            >
                Reveal Answer
            </Button>
            {visible && <div>42</div>}
        </div>
    );
=======
    return <div>Reveal Answer</div>;
>>>>>>> origin/task-forms
}
