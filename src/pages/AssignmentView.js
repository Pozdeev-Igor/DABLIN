import React, { useEffect, useState } from 'react';

const AssignmentView = () => {
    const assigmentId = window.location.href.split("/assignments/")[1];
    const [assignment, setAssignment] = useState(null);

    useEffect(() => {
        fetch(`/api/assignments/${assigmentId}`, {
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            method: "GET",
        }).then(response => {
            if (response.status === 200) return response.json();
        }).then(assignmentData => {
            setAssignment(assignmentData);
        });
    }, [])
    return (
        <div>
            <h1>Assignment ID: {assigmentId}</h1>
            {assignment ? 
                <>
                    <h2>Assignment status: {assignment.status}</h2>
                </> : <></> }
        </div>
    );
};

export default AssignmentView;