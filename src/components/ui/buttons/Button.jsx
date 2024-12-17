import React from 'react';

function Button({style, content}) {
    return (
        <button
            style={style}>
            {content}
        </button>
    );
}

export default Button;