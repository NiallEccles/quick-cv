import styles from './formik-form.module.css';

import {Formik, FormikErrors, FormikValues} from "formik";
import { Button, Label, TextInput } from 'flowbite-react';

/* eslint-disable-next-line */
export interface FormikFormProps {}

type ExperienceFields = {
    school: string;
    degree: string;
    dates: string;
    description: string;
}

const initialValues: ExperienceFields = {
    school: "",
    degree: "",
    dates: "",
    description: ""
};

export function FormikForm(props: FormikFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FormikForm!</h1>
        <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)} validate={(values: FormikValues) => {
            const errors: FormikErrors<ExperienceFields> = {};
            if (!values.school) {
                errors.school = "Required";
            }
            return errors;
        }}>
            {
                ({ handleSubmit, handleChange, errors, touched}) => (
                    <form onSubmit={handleSubmit}>
                        <Label htmlFor="school" value="School/College/University" />
                        <TextInput name="school" onChange={handleChange}/>
                        {
                            touched.school && errors.school
                                ? <div>{errors.school}</div>
                                : null
                        }
                        <Label htmlFor="degree" value="Degree" />
                        <TextInput name="degree" onChange={handleChange}/>

                        <Label htmlFor="dates" value="Dates" />
                        <TextInput name="dates" onChange={handleChange}/>

                        <Label htmlFor="description" value="Description" />
                        <TextInput name="description" onChange={handleChange}/>
                        <br/>
                        <Button type="submit">Submit</Button>
                    </form>
                )
            }
        </Formik>
    </div>
  );
}

export default FormikForm;
