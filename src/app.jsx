import React from "react";
// import Randomiser from './components/Randomiser.jsx';
// import Beers from './components/Beers.jsx'
// import AxiosBeers from './components/AxiosBeers.jsx'
import Effects from './components/Effects.jsx'

const App = () => {

    const animalOptions = ["duck", "bear", "toad",
                           "magpie", "giraffe"]

    return <>
            <h1>Animals!</h1>
            <Effects />
           </>
}

export default App;