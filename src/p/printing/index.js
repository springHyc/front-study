import React from 'react';
import './index.less';
import ReactDOM from 'react-dom';

function AnimationCases() {
    const word = 'Hello World!';
    return (
        <div className='wrapper'>
            <div className='word-wrapper'>{word}</div>
        </div>
    );
}

ReactDOM.render(<AnimationCases />, document.getElementById('root'));
