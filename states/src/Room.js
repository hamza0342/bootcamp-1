import React from 'react';

function Room() {
    let state = React.useState(true);
    let isLit= state[0];
    let setLit= state[1];

    let [age, setage]= React.useState(15);
    let light = () => {
        setLit(!isLit);
    }
    let ageplus = () => {
        setage(age+=1);
    }


    return (
        <div>
        <div>
            This Room is {isLit? 'Lit' : "Dark"} 
            </div>
        <div>
            <button onClick={light}> Toggle Me </button>
        </div>
        <br></br>
        <div>
            The age is {age}
        </div>
        <div>
            <button onClick={ageplus}> Age number </button>
        </div>
        </div>
    );
}

export default Room;