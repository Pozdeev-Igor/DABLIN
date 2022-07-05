import React from 'react';
import { useLocalState } from '../util/useLocalState';


const HomePage = () => {
    const jwt = useLocalState("", "jwt");
    
    function createAssignment(){
        fetch("/api/assignments", {
            headers: {
                "content-type": "application/json",
                Authorisation: `Bearer ${jwt}`
            },
            method: "POST",
        }).then(response => {
            if (response.status === 200) return response.json();
        }).then(data => {
            console.log(data);
        });
    }
    return (
        <div>
            <h1>Home page</h1>
            <div style={{margin: "2em"}}>
                <button onClick={() => createAssignment()}>Submit new Assignment</button>
            </div>
        </div>
    );
};

export default HomePage;