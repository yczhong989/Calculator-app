import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('');

    const handleClick = (value) => {
        if (value === '='){
            try {
                setDisplayValue(eval(displayValue));
            } catch (error) {
                setDisplayValue('Error');
            }
        } else if (value === 'C'){
            setDisplayValue('')
        } else {
            setDisplayValue(displayValue + value);
        }
    };

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
    ];

    return (
        <div className="Calculator">
            <Display value={displayValue} />
            <div className="buttons">
                {buttons.map((label, index) => (
                    <Button key={index} label={label} onClick={() => handleClick(label)} />
                ))}
            </div>
        </div>
    );
};

export default Calculator;