import styles from './experience-form.module.css';
import { Field, FieldArray } from 'formik';
import {Button, Divider, Group, Input, Space, Stack, Checkbox, Title, Accordion } from '@mantine/core';
import {ExperienceFields, PersonalFields} from "../types";
import React, {useEffect} from "react";
import useInitialValues from "../hooks/useInitialValues";
import { Camera } from 'lucide-react';
import { nanoid } from 'nanoid';

/* eslint-disable-next-line */
export interface ExperienceFormProps {
    values: ExperienceFields,
    handleChange: {(e: React.ChangeEvent<any>): void, <T=string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : ((e: (string | React.ChangeEvent<any>)) => void)}
}


export function ExperienceForm(props: ExperienceFormProps) {
    // const initialValues = useInitialValues();

    return (
        <FieldArray name="experiences">
            {({remove, push}) => (
                <div>
                    <Title order={2} size="h3" mb='sm'>Education</Title>
                    <Divider my="sm" variant="dashed" />
                    <Accordion multiple>
                    {props.values.length > 0 &&
                        props.values.map((experience, index) => (
                            <Accordion.Item value={experience.id} key={experience.id}>
                                <Accordion.Control>
                                    {experience.school}
                                </Accordion.Control>
                                <Accordion.Panel>
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
                                    <Checkbox
                                        name={`experiences.${index}.currentlyStudying`}
                                        id={`experiences.${index}.currentlyStudying`}
                                        label="I currently study here"
                                        checked={props.values[index].currentlyStudying}
                                        onChange={props.handleChange}
                                    />
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
                                <Button type="button" variant="danger" onClick={() => remove(index)}>
                                    Remove
                                </Button>
                                </Accordion.Panel>
                                {/*<label htmlFor={`experiences.${index}.school`}>School</label>*/}
                            </Accordion.Item>
                            )
                        )
                    }
                    </Accordion>
                    <Space h="xs"/>
                    <Button
                        fullWidth
                        type="button"
                        onClick={() => {
                            // console.log(initialValues.experiences)
                            const newId = nanoid();
                            const newItem =
                                {
                                    id: newId,
                                    school: "School Name",
                                    degree: "",
                                    currentlyStudying: false,
                                    startDate: "",
                                    endDate: "",
                                    description: "",
                                };
                            console.log(newItem);
                            push(newItem);
                        }
                        }
                    >
                        Add One More Education
                    </Button>
                </div>
                )}
        </FieldArray>
    );
}

export default ExperienceForm;
