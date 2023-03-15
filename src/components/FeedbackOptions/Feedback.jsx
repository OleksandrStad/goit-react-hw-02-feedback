import React from 'react';
import PropTypes from 'prop-types';



export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <div>
            <span>Please leave feedback</span>
            <div>
                {options.map(el => {
                    return (
                        <button key={el} onClick={() => onLeaveFeedback(el)}>
                            {el}
                        </button>
                    );
                })}

            </div>

        </div>
    )

};

