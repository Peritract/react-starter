import React from "react";
import { TestComponent, NotePad, DisplayHolder } from './components';
import { ExampleContext } from "./contexts";

const App = () => {

    const styles = { color: "magenta" };

    return <>
            <ExampleContext.Provider value={styles}>
                <h1 style={styles}>App</h1>
                <DisplayHolder />
            </ExampleContext.Provider>
           </>
}

export default App;