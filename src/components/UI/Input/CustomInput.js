import React from 'react';
import classes from './CustomInput.module.css';

const CustomInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.customInp} {...props} />
    );
});

export default CustomInput;