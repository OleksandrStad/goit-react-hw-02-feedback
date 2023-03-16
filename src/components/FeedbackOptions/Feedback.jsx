import React from 'react';
import PropTypes from 'prop-types';



export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <div>
            {options.map(el => {
                return (
                    <button key={el} onClick={() => onLeaveFeedback(el)}>
                        {el}
                    </button>
                );
            })}

        </div>
    )

};


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
