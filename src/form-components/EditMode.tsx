import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    /*
        I used ChatGPT to help me set up the states, and how I could use a third
        state to track if the user was a student or not in order to 
        make the program functionality differ for students/nonstudents
    */
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <label className="form-switch">
                <input
                    type="checkbox"
                    checked={editMode}
                    onChange={(e) => {
                        setEditMode(e.target.checked);
                    }}
                />{" "}
                Edit Mode
            </label>
            {editMode ?
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={(e) => {
                                setIsStudent(e.target.checked);
                            }}
                        />{" "}
                        Student
                    </label>
                </div>
            :   <p>
                    {name} is {isStudent ? "" : "not "}a student
                </p>
            }
        </div>
    );
}
