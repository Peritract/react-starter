import React from "react";
import { TestComponent, NotePad, DisplayHolder } from './components';

const App = () => {

    const styles = { color: "red" };

    return <>
            <h1>App</h1>
            <DisplayHolder theme={styles} />
           </>
}

export default App;