import React from 'react';

function SessionLength(props) {
    function decreaseSession() {
        if (props.sessionLength === 60) {
            return;
        }
        props.decreaseSession();
    }

    function increaseSession() {
        if (props.sessionLength === 1) {
            return;
        }
        props.increaseSession();
    }
    return (
        <section>
            <h4>TEMPS DE TRAVAIL</h4>
            <section className="interval-container">
                <button 
                disabled={props.isPlay === true ? "disabled" : ""}
                onClick={decreaseSession}>Baisser</button>

                <p className='interval-length'>{props.sessionLength}</p>
                
                <button 
                disabled={props.isPlay === true ? "disabled" : ""}
                onClick={increaseSession}>Augmenter</button>
            </section>
        </section>
    )
}

export default SessionLength;