import React, { useState, useEffect } from "react";

const Effects = () => {

    const [val, setVal] = useState(0);
    const [specialVal, setSpecialVal] = useState(0);

    useEffect(() => {
        console.log("I have loaded!")
    }, [])

    // useEffect(() => {
    //     console.log("I fire on every update!")
    // })

    useEffect(() => {
        console.log("I fire when something important happens.")
    }, [specialVal]);

    function handleClick () {
        setVal(prev => prev + 1);
        if (val % 10 === 0) {
            setSpecialVal(prev => prev + 1);
        }
    }

    useEffect(() => {

        console.log("I fire when something happens...")

        const timer = setInterval(() => {
            console.log("I do stuff every 3 seconds");
        }, 3000)

        return () => {
            clearInterval(timer);
            console.log("And now I get cleaned up.")
        }

    }, [val]);

    return <div>
            <h2>Beers!</h2>
            <button onClick={handleClick}>{val}</button>
           </div>
}

export default Effects;