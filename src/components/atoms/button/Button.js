import React from 'react';

Button = (props) => <div>
    <button type={props.type || 'button'}>{props.text || 'click'}</button>
</div>;

export default Button;