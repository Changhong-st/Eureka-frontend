import React, { useState } from 'react';

import styles from './BillingAddress.module.scss';

import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import useForm from '../../../../../hooks/useForm';
import FORM from './form';

export default function BillingAddress({ storedValue, onSubmit }) {
  const form = useForm(FORM, storedValue);
  const [testing, toggleTesting] = useState(false);

  const {
    getData,
    handleDataChange,
    findEmptyField,
  } = form;

  const formData = getData();

  const introduction = 'Your billing address will be verified before you can receive payments.';
  const information = 'Your address will never been shown publicly, it is only used for account verification purposes.';
  const errorMessage = 'Please enter your complete address.';

  const fieldList = Object.keys(FORM).map((key) => {
    const { label, optional } = FORM[key];
    const value = formData[key];
    const handleChange = handleDataChange(key);

    return (
      <div className={styles.field_input_wrapper} key={label} >
        <Input
          label={label}
          value={value}
          handleChange={handleChange}
          isError={testing && !value && !optional}
          errorMessage={errorMessage}
        />
      </div>
    );
  });

  const handleSubmit = () => {
    if (!findEmptyField()) {
      onSubmit(formData);
    } else {
      toggleTesting(true);
    }
  };

  return (
    <>
      <div className={styles.introduction} >
        {introduction}
      </div>
      <div className={styles.form_input} >
        {fieldList}
      </div>
      <div className={styles.button_wrapper} >
        <Button onClick={handleSubmit} >
          Add Billing Address
        </Button>
      </div>
      <div className={styles.information} >
        {information}
      </div>
    </>
  );
}
