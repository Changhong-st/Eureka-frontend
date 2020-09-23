import React from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';

export default function Input({
  label, name, type, placeholder, handleChange, isError, ...otherProps
}) {
  const cx = classNames.bind(styles);
  return (
    <div className={styles.input_wrapper} >
      <label className={styles.label} >{label}</label>
      <input
        className={cx({
          input: true,
          error_input: isError,
        })}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
}
