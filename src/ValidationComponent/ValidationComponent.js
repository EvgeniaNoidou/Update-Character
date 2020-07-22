import React from 'react';

function ValidationComponent(props) {
    const validation = props.length > 5 ? 'Text long enough' : 'Text too short';

    return (
        <p>
            {validation}
        </p>
    );
}

export default ValidationComponent;
