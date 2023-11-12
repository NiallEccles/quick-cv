import styles from './experiences-form.module.css';
import React from 'react';
import {Form, Formik, FieldArray, Field} from "formik";
import { Button, Label, TextInput, Checkbox } from 'flowbite-react';

/* eslint-disable-next-line */
export interface ExperiencesFormProps {}

type ExperienceFields = {
    experiences: Array<
        {
            id: string;
            school: string;
            degree: string;
            currentlyStudying: boolean;
            startDate: string;
            endDate: string;
            description: string;
        }
    >
}

const initialValues: ExperienceFields = {
    experiences: [
        {
            id: '1',
            school: "1",
            degree: "1",
            currentlyStudying: false,
            startDate: "1",
            endDate: "1",
            description: "",
        },
        {
            id: '2',
            school: "2",
            degree: "2",
            currentlyStudying: false,
            startDate: "2",
            endDate: "2",
            description: "",
        },
        {
            id: '3',
            school: "3",
            degree: "3",
            currentlyStudying: false,
            startDate: "3",
            endDate: "3",
            description: "",
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
            {({ values: {experiences} , handleChange}) => (
                <Form>
                    <FieldArray name="experiences">
                        {({ push, remove }) => (
                            <div>
                                {experiences.map((experience, index) => (
                                    <div key={index}>
                                        <h3>{`${experiences[index].school} - ${experiences[index].degree}`}</h3>
                                        <Label htmlFor={`experiences.${index}.school`} value="School"/>
                                        <TextInput
                                            name={`experiences.${index}.school`}
                                            id={`experiences.${index}.school`}
                                            value={experiences[index].school}
                                            placeholder="School"
                                            onChange={handleChange}
                                        />

                                        <Label htmlFor={`experiences.${index}.degree`} value="Degree"/>
                                        <TextInput
                                            name={`experiences.${index}.degree`}
                                            id={`experiences.${index}.degree`}
                                            value={experiences[index].degree}
                                            placeholder="Degree"
                                            onChange={handleChange}
                                        />

                                        <Label htmlFor={`experiences.${index}.currentlyStudying`} value="I currently study here: "/>
                                        <Checkbox
                                            id={`experiences.${index}.currentlyStudying`}
                                            name={`experiences.${index}.currentlyStudying`}
                                            value={String(experiences[index].currentlyStudying)}
                                            onChange={handleChange}
                                        />

                                        <div className={'flex gap-2'}>
                                            <div>
                                                <Label htmlFor={`experiences.${index}.startDate`} value="Start Date"/>
                                                <TextInput
                                                    name={`experiences.${index}.startDate`}
                                                    id={`experiences.${index}.startDate`}
                                                    value={experiences[index].startDate}
                                                    placeholder="Start Date"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {
                                                !experiences[index].currentlyStudying && (
                                                    <div>
                                                        <Label htmlFor={`experiences.${index}.endDate`} value="End Date"/>
                                                        <TextInput
                                                            name={`experiences.${index}.endDate`}
                                                            id={`experiences.${index}.endDate`}
                                                            value={experiences[index].endDate}
                                                            placeholder="End Date"
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                )
                                            }
                                        </div>

                                        <Button type="button" color="failure" onClick={() => remove(index)}>
                                            Remove
                                        </Button>
                                    </div>
                                ))}
                                <Button type="button" onClick={() => push({ school: '', degree: '', currentlyStudying: '', startDate: '', endDate:'', description: '' })}>
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
