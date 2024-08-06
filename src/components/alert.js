import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    if (!word) return ""; // Return empty string if word is undefined or null
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert ? ( // Render only if props.alert exists
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>
    ): null
  );
}

export default Alert;
