import React from "react";
import { store } from '../store';
import {setBackground, setMemberName} from '../actions';

const ButtonGroup = ({ membername }) => (
    <div>
        {membername.map((name, i) => (
            <button
                data-name={name}
                key={`btn-${i}`}
                onClick={dispatchBtnAction}
            >
                {name}
            </button>
        ))}
    </div>
);

function dispatchBtnAction (e) {
    const name = e.target.dataset.name;
    store.dispatch(setMemberName(name));
    store.dispatch(setBackground(name));
}

export default ButtonGroup;