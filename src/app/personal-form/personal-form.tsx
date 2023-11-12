import styles from './personal-form.module.css';
import React from "react";
import {Form, Formik, FieldArray, Field} from "formik";
import { Button, Label, TextInput, Checkbox } from 'flowbite-react';
import {ExperienceFields, PersonalFields} from "../types";
import useInitialValues from "../hooks/useInitialValues";

/* eslint-disable-next-line */
export interface PersonalFormProps {}

export function PersonalForm(props: PersonalFormProps) {
    const initialValues: PersonalFields = useInitialValues();

  return (
    <div className={styles['container']}>
        <h2>Personal Details</h2>
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ values: {personalDetails} , handleChange}) => (
                <Form>
                    <Label htmlFor={`personalDetails.firstName`} value="First Name"/>
                    <TextInput
                        name={`personalDetails.firstName`}
                        id={`personalDetails.firstName`}
                        value={personalDetails.firstName}
                        placeholder="First Name"
                        onChange={handleChange}
                    />
                    <Button type="submit">Submit</Button>
                </Form>
            )}
        </Formik>
    </div>
  );
}

export default PersonalForm;
