import React, { useState, useEffect, useRef, useContext } from 'react';

import './style.css';

const NotePad = () => {

    const [ notes, setNotes ] = useState([{ timestamp: Date.now(), body: 'Welcome to your NotePad!'}])
    const [ input, setInput ] = useState("")

    const notesEnd = useRef();

    useEffect(() => {
        notesEnd.current.scrollIntoView({ behavior: "smooth" })
    }, [notes])

    const handleChange = e => setInput(e.target.value)

    const handleSubmit = e => {
        e.preventDefault();
        let newNote = { timestamp: Date.now(), body: input }
        setInput('')
        setNotes(prev => [ ...prev, newNote ])
    }

    const renderNotes = () => notes.map((n, i) => <p 
                                                    className="note" 
                                                    key={i}
                                                    style={{
                                                        opacity: (((i - 0) * 1/notes.length) + 0.6)
                                                    }}
                                                    >{n.body
                                                }</p>)

    return (
        <section id="notepad">
            <div id="notes-container">
                { renderNotes() }
                <span ref={notesEnd}></span>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleChange}/>
            </form>
        </section>
    )
}

export default NotePad