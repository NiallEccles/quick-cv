import styles from './experience-form.module.css';
import { Field, FieldArray } from 'formik';
import { Button, Input, Space } from '@mantine/core';
import {ExperienceFields, PersonalFields} from "../types";
import React from "react";

/* eslint-disable-next-line */
export interface ExperienceFormProps {
    values: ExperienceFields,
    handleChange: {(e: React.ChangeEvent<any>): void, <T=string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : ((e: (string | React.ChangeEvent<any>)) => void)}
}


export function ExperienceForm(props: ExperienceFormProps) {
    return (
        <FieldArray name="experiences">
            {({remove, push}) => (
                <div>
                    {props.values.length > 0 &&
                        props.values.map((experience, index) => (
                            <div key={index}>
                                <h3>{`${props.values[index].school} - ${props.values[index].degree}`}</h3>
                                <label htmlFor={`experiences.${index}.school`}>School</label>
                                <Input
                                    name={`experiences.${index}.school`}
                                    id={`experiences.${index}.school`}
                                    value={props.values[index].school}
                                    placeholder="School"
                                    onChange={props.handleChange}
                                />
                                <Button type="button" onClick={() => remove(index)}>
                                    Remove
                                </Button>
                            </div>
                            )
                        )
                    }
                    <Space h="xs"/>
                    <Button
                        type="button"
                        onClick={() => push({ school: ''  })}
                    >
                        Add Experience
                    </Button>
                </div>
                )}
        </FieldArray>
    );
}

export default ExperienceForm;
