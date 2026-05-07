import React from 'react';

const LazyDashboard = () => {
    return (
        <div style={{ border: '1px solid green', padding: '20px' }}>
            <h2>Dashboard Loaded Successfully</h2>
            <p>This component was loaded using React.lazy and Suspense.</p>
        </div>
    );
};

export default LazyDashboard;


