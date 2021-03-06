import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

import Spinner from '../Spinner';

const cx = classNames.bind(styles);

const Button = ({
  children,
  onClick,
  color,
  size,
  long,
  isDisabled,
  isLoading,
  ...otherProps
}) => (
  <button
    className={cx(
      'button',
      { long },
      {
        green: 'green',
        blue: 'blue',
        'light-blue': 'light-blue',
        red: 'red',
        pink: 'pink',
        mint: 'mint',
        navy: 'navy',
        transparent: 'transparent',
        transparentActive: 'transparentActive',
        categories: 'categories',
      }[color] || 'green',
      {
        small: 'small',
        medium: 'medium',
        large: 'large',
        navbar: 'navbar',
        categoriesButton: 'categoriesButton',
      }[size] || 'medium',
      { isLoading },
    )}
    disabled={isDisabled}
    onClick={onClick}
    {...otherProps}
  >
    {isLoading ? <Spinner /> : null}
    {children}
  </button>
);

const IconButton = ({ onClick, children }) => (
  <button
    className={styles.icon_button}
    onClick={onClick}
  >
    {children}
  </button>
);

const CloseIcon = ({ onClick }) => (
  <IconButton onClick={onClick} >
    <i className="ri-close-fill ri-xl"/>
  </IconButton>
);

const BackIcon = ({ onClick }) => (
  <IconButton onClick={onClick} >
    <i className="ri-arrow-left-line ri-xl" />
  </IconButton>
);

const SearchIcon = ({ onClick }) => (
  <IconButton onClick={onClick} >
    <div className={styles.search_icon_wrapper} >
      <i className="ri-search-line" />
    </div>
  </IconButton>
);

const Text = ({
  onClick, children, color, size,
}) => (
  <button
    onClick={onClick}
    className={cx(
      'text_button',
      {
        white: 'white',
        grey: 'grey',
        navy: 'navy',
        navMobile: 'navMobile',
        'light-blue': 'light-blue',
      }[color] || 'grey',
      {
        small: 'small',
        medium: 'medium',
      }[size] || 'small',
    )}
  >
    {children}
  </button>
);

Button.CloseIcon = CloseIcon;
Button.BackIcon = BackIcon;
Button.SearchIcon = SearchIcon;
Button.Text = Text;
Button.IconButton = IconButton;

export default Button;
