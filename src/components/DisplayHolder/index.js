import React, { useContext } from 'react';
import { default as Display } from '../Display';
import { ExampleContext } from '../../contexts';

const DisplayHolder = () => {

    return <>
            <Display />
            <Display />
            <Display />
           </>
}

export default DisplayHolder;