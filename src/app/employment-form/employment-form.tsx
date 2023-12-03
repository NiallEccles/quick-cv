import styles from './employment-form.module.css';
import { Field, FieldArray } from 'formik';
import {Button, Divider, Group, Input, Space, Stack, Checkbox, Title, Accordion } from '@mantine/core';
import {EmploymentFields, PersonalFields} from "../types";
import React, {useEffect} from "react";
import useInitialValues from "../hooks/useInitialValues";
import { Camera } from 'lucide-react';
import { nanoid } from 'nanoid';

/* eslint-disable-next-line */
export interface EmploymentFormProps {
    values: EmploymentFields,
    handleChange: {(e: React.ChangeEvent<any>): void, <T=string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : ((e: (string | React.ChangeEvent<any>)) => void)}
}


export function EmploymentForm(props: EmploymentFormProps) {
    // const initialValues = useInitialValues();

    return (
        <FieldArray name="employments">
            {({remove, push}) => (
                <div>
                    <Title order={2} size="h3" mb='sm'>Employment History</Title>
                    <Divider my="sm" variant="dashed" />
                    <Accordion multiple>
                        {props.values.length > 0 &&
                            props.values.map((employment, index) => (
                                    <Accordion.Item value={employment.id} key={employment.id}>
                                        <Accordion.Control>
                                            {employment.title}
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <Group grow>
                                                <Stack gap="xs">
                                                    <label htmlFor={`employments.${index}.title`}>
                                                        <Title order={3} size="h4">Job Title</Title>
                                                        {/*`${props.values[index].school} - ${props.values[index].degree}`*/}
                                                    </label>
                                                    <Input
                                                        name={`employments.${index}.title`}
                                                        id={`employments.${index}.title`}
                                                        value={props.values[index].title}
                                                        placeholder="Job Title"
                                                        onChange={props.handleChange}
                                                    />
                                                </Stack>
                                                <Stack gap="xs">
                                                    <label htmlFor={`employments.${index}.employer`}>
                                                        <Title order={3} size="h4">Employer</Title>
                                                        {/*`${props.values[index].school} - ${props.values[index].degree}`*/}
                                                    </label>
                                                    <Input
                                                        name={`employments.${index}.employer`}
                                                        id={`employments.${index}.employer`}
                                                        value={props.values[index].employer}
                                                        placeholder="Employer"
                                                        onChange={props.handleChange}
                                                    />
                                                </Stack>
                                            </Group>
                                            <Space h="md" />
                                            <Group grow>
                                                <Checkbox
                                                    name={`employments.${index}.currentlyWorking`}
                                                    id={`employments.${index}.currentlyWorking`}
                                                    label="I currently work here"
                                                    checked={props.values[index].currentlyWorking}
                                                    onChange={props.handleChange}
                                                />
                                            </Group>
                                            <Space h="md" />
                                            <Group grow>
                                                <Stack gap="xs">
                                                    <label htmlFor={`employments.${index}.startDate`}>
                                                        <Title order={3} size="h4">Start Date</Title>
                                                        {/*`${props.values[index].startDate} - ${props.values[index].degree}`*/}
                                                    </label>
                                                    <Input
                                                        name={`employments.${index}.startDate`}
                                                        id={`employments.${index}.startDate`}
                                                        value={props.values[index].startDate}
                                                        placeholder="Start Date"
                                                        onChange={props.handleChange}
                                                    />
                                                </Stack>
                                                {
                                                    !props.values[index].currentlyWorking && (
                                                        <Stack gap="xs">
                                                            <label htmlFor={`employments.${index}.endDate`}>
                                                                <Title order={3} size="h4">End Date</Title>
                                                                {/*`${props.values[index].school} - ${props.values[index].endDate}`*/}
                                                            </label>
                                                            <Input
                                                                name={`employments.${index}.endDate`}
                                                                id={`employments.${index}.endDate`}
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
                                        {/*<label htmlFor={`employments.${index}.school`}>School</label>*/}
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
                            // console.log(initialValues.employments)
                            const newId = nanoid();
                            const newItem =
                                {
                                    id: newId,
                                    title: "Job Title",
                                    employer: "",
                                    currentlyWorking: false,
                                    startDate: "",
                                    endDate: "",
                                    description: "",
                                };
                            console.log(newItem);
                            push(newItem);
                        }
                        }
                    >
                        Add One More Employment
                    </Button>
                </div>
            )}
        </FieldArray>
    );
}

export default EmploymentForm;
