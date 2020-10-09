import React from 'react';

import styles from './Question.module.scss';

function Question({ questionInput, questionList }) {
  const title = `QUESTION(${questionList.length})`;
  const notice = `Please don't share personal info – insurance won't apply to tasks done privately!`;

  return (
    <div className={styles.question_wrapper} >
      <div className={styles.title} >
        {title}
      </div>
      <div className={styles.notice} >
        {notice}
      </div>
      <div className={styles.input_wrapper} >
        {questionInput}
      </div>
      <div className={styles.question_list_wrapper}>
        {questionList}
      </div>
    </div>
  );
};

export default Question;