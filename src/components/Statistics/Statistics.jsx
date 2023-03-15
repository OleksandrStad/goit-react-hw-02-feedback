import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad }) => {

    return (
        < div >
            <span>Statistics</span>
            <p>Good: <span>{good}</span></p>
            <p>Neutral: <span>{neutral}</span></p>
            <p>Bad: <span>{bad}</span></p>
        </div >
    )
};



