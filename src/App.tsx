import React from 'react';
import User from './User';

const App: React.FC = () => {
    const usr = User({});
    return (
        <div>
        <h1>{usr.username}</h1>
        </div>
    );
    };
export default App;
