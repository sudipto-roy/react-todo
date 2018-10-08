import React from 'react';

let Checkbox = (props) => <input type='checkbox' checked={props.checked} onChange={props.onChange} />;

export default Checkbox;