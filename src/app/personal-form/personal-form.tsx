import styles from './personal-form.module.css';

/* eslint-disable-next-line */
export interface PersonalFormProps {}

export function PersonalForm(props: PersonalFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PersonalForm!</h1>
    </div>
  );
}

export default PersonalForm;
