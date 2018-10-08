import React from 'react';

TextInput = ({ value }) => <div className="TextInput">
  <input type='text' value={value || ''} />
</div>;

export default TextInput;