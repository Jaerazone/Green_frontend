import React from 'react';
import { useContext } from 'react';
import { DispatchContext } from "./DispatchContext";

const DispatchComp = () => {
    const context = useContext(DispatchContext);
    return (
        <div>
            <button 
            onClick = {() => {
                context({type: 'is_plus' })
            }}
            >
                값이 1증가합니다
            </button>
        </div>
    );
};

export default DispatchComp;