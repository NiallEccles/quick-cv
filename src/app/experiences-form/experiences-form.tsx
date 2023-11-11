import styles from './experiences-form.module.css';
import React from 'react';
import {Form, Formik, FieldArray, Field} from "formik";
import { Button, Label, TextInput } from 'flowbite-react';

/* eslint-disable-next-line */
export interface ExperiencesFormProps {}

type ExperienceFields = {
    experiences: Array<
        {
            school: string;
            degree: string;
            dates: string;
            description: string;
        }
    >
}

const initialValues: ExperienceFields = {
    experiences: [
        {
            school: "",
            degree: "",
            dates: "",
            description: ""
        }
    ]
};

export function ExperiencesForm(props: ExperiencesFormProps) {
  return (
    <div className={styles['container']}>
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ values , handleChange}) => (
                <Form>
                    <FieldArray name="experiences">
                        {({ push, remove }) => (
                            <div>
                                {values.experiences.map((experience, index) => (
                                    <div key={index}>
                                        <Label htmlFor={`experiences.${index}.school`} value="School"/>
                                        <TextInput name={`experiences.${index}.school`} id={`experiences.${index}.school`} placeholder="School" onChange={handleChange}/>

                                        <Label htmlFor={`experiences.${index}.degree`} value="Degree"/>
                                        <TextInput name={`experiences.${index}.degree`} id={`experiences.${index}.degree`} placeholder="Degree" onChange={handleChange}/>

                                        <Label htmlFor={`experiences.${index}.dates`} value="Dates"/>
                                        <TextInput name={`experiences.${index}.dates`} id={`experiences.${index}.dates`} placeholder="Dates" onChange={handleChange}/>
                                        <Button type="button" color="failure" onClick={() => remove(index)}>
                                            Remove
                                        </Button>
                                    </div>
                                ))}
                                <Button type="button" onClick={() => push({ school: '', degree: '', dates: '', description: '' })}>
                                    Add Experience
                                </Button>
                                <br/>
                            </div>
                        )}
                    </FieldArray>
                    <Button type="submit">Submit</Button>
                </Form>
            )}
        </Formik>
    </div>
  );
}

export default ExperiencesForm;
