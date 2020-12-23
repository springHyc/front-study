import React from 'react';
import ReactDOM from 'react-dom';

function UsegestureTest() {
    return (
        <div>
            <p>更加适合手机或者有需要轮播图的地方，点击下面链接查看详细的例子。</p>
            <a href='https://use-gesture.netlify.app/docs/examples/'>examples</a>
        </div>
    );
}

ReactDOM.render(<UsegestureTest />, document.getElementById('root'));
