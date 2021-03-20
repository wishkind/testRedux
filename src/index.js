import React from 'react';
import ReactDOM from 'react-dom';

import TestProvider from './TestProvider';

ReactDOM.render(
    <React.StrictMode>
        <TestProvider />
    </React.StrictMode>, document.getElementById('root')
)

