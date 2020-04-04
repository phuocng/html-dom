import React from 'react';

import './spinner.css';

const Spinner: React.FC<{}> = () => {
    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <svg className="spinner" width="64px" height="64px" viewBox="0 0 48 48">
                <circle
                    cx="24"
                    cy="24"
                    fill="none"
                    r="18"
                    stroke="rgba(0, 0, 0, 0.4)"
                    strokeDasharray={Math.PI * 2 * 9}
                    strokeLinecap="round"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
};

export default Spinner;
