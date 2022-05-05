import React, {useContext} from 'react';
import { ExampleContext } from '../../contexts';

const Display = () => {

    const themes = useContext(ExampleContext);

    return <h1 style={themes}>Themed!</h1>
}

export default Display;