import React, { useContext } from 'react';
import { default as Display } from '../Display';
import { ExampleContext } from '../../contexts';

const DisplayHolder = ({ theme }) => {

    const ctx = useContext(ExampleContext)

    return <>
            <Display theme={theme}/>
            <Display theme={theme}/>
            <Display theme={theme}/>
           </>
}

export default DisplayHolder;