import styles from './experience-form.module.css';
import { Field, FieldArray } from 'formik';
import {Button, Divider, Group, Input, Space, Stack, Checkbox, Title} from '@mantine/core';
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
                    <Title order={2} size="h3" mb='sm'>Experience</Title>
                    <Divider my="sm" variant="dashed" />
                    {props.values.length > 0 &&
                        props.values.map((experience, index) => (
                            <div key={index}>
                                <Group grow>
                                    <Stack gap="xs">
                                        <label htmlFor={`experiences.${index}.school`}>
                                            <Title order={3} size="h4">School</Title>
                                            {/*`${props.values[index].school} - ${props.values[index].degree}`*/}
                                        </label>
                                        <Input
                                            name={`experiences.${index}.school`}
                                            id={`experiences.${index}.school`}
                                            value={props.values[index].school}
                                            placeholder="School"
                                            onChange={props.handleChange}
                                        />
                                    </Stack>
                                    <Stack gap="xs">
                                        <label htmlFor={`experiences.${index}.degree`}>
                                            <Title order={3} size="h4">Degree</Title>
                                            {/*`${props.values[index].school} - ${props.values[index].degree}`*/}
                                        </label>
                                        <Input
                                            name={`experiences.${index}.degree`}
                                            id={`experiences.${index}.degree`}
                                            value={props.values[index].degree}
                                            placeholder="Degree"
                                            onChange={props.handleChange}
                                        />
                                    </Stack>
                                </Group>
                                <Space h="md" />
                                <Group grow>
                                    <Stack gap="xs">
                                        <label htmlFor={`experiences.${index}.startDate`}>
                                            <Title order={3} size="h4">Start Date</Title>
                                            {/*`${props.values[index].startDate} - ${props.values[index].degree}`*/}
                                        </label>
                                        <Input
                                            name={`experiences.${index}.startDate`}
                                            id={`experiences.${index}.startDate`}
                                            value={props.values[index].school}
                                            placeholder="Start Date"
                                            onChange={props.handleChange}
                                        />
                                    </Stack>
                                    {
                                        !props.values[index].currentlyStudying && (
                                            <Stack gap="xs">
                                                <label htmlFor={`experiences.${index}.endDate`}>
                                                    <Title order={3} size="h4">End Date</Title>
                                                    {/*`${props.values[index].school} - ${props.values[index].endDate}`*/}
                                                </label>
                                                <Input
                                                    name={`experiences.${index}.endDate`}
                                                    id={`experiences.${index}.endDate`}
                                                    value={props.values[index].endDate}
                                                    placeholder="End Date"
                                                    onChange={props.handleChange}
                                                />
                                            </Stack>
                                        )
                                    }
                                </Group>
                                <Space h="md" />
                                <Group grow>
                                    <Checkbox
                                        name={`experiences.${index}.currentlyStudying`}
                                        id={`experiences.${index}.currentlyStudying`}
                                        label="I currently work here"
                                        onChange={props.handleChange}
                                    />
                                </Group>
                                <label htmlFor={`experiences.${index}.school`}>School</label>
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
