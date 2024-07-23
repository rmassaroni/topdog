import React from 'react';
import User from './User';

const App: React.FC = () => {
    const usr = User({});
    return (
        <div>
            <div>
            <h1>{usr.username}</h1>
        </div>
            <div className='financial-statements'>
                <h1>Financial Statements</h1>
            {usr.bs.component()}
            </div>
        </div>
    );
};
export default App;
