import React from "react";
const Input = props => {
  const { input, type, placeholder, meta } = props;
  return (
    <>
      <input {...input} type={type} placeholder={placeholder} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
};

export default Input;
