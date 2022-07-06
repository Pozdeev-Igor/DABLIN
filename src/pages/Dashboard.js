import React, { useState } from 'react';
import { useLocalState } from '../util/useLocalState';

const Dashboard = () => {


    function createAssignment(){
        fetch("/api/assignments", {
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            method: "POST",
        }).then(response => {
            if (response.status === 200) return response.json();
        }).then(assignment => {
            window.location.href = `assignments/${assignment.id}`;
        });
    }

    return (
        <div style={{margin: "2em"}}>
        <button type="button" className="btn btn-secondary" onClick={() => createAssignment()}>Submit new Assignment</button>
    </div>
    );
};

export default Dashboard;