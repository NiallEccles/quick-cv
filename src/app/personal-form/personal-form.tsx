import styles from './personal-form.module.css';
import React from "react";
import {Divider, Group, Input, Stack, Title} from '@mantine/core';
import {PersonalFields} from "../types";

/* eslint-disable-next-line */
export interface PersonalFormProps {
    values: PersonalFields,
    handleChange: {(e: React.ChangeEvent<any>): void, <T=string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : ((e: (string | React.ChangeEvent<any>)) => void)}
}

export function PersonalForm(props: PersonalFormProps) {

  return (
    <div className={styles['container']}>
        <Title order={2} size="h3" mb='sm'>Personal Details</Title>
        <Divider my="sm" />
        <Group grow>
            <Stack gap="xs">
                <label htmlFor="personalDetails.firstName">
                    <Title order={3} size="h4">First Name</Title>
                </label>
                <Input
                    name={`personalDetails.firstName`}
                    id={`personalDetails.firstName`}
                    value={props.values.firstName}
                    placeholder="First Name"
                    onChange={props.handleChange}
                />
            </Stack>

            <Stack gap="xs">
                <label htmlFor="personalDetails.lastName">
                    <Title order={3} size="h4">Last Name</Title>
                </label>
                <Input
                    name={`personalDetails.lastName`}
                    id={`personalDetails.lastName`}
                    value={props.values.lastName}
                    placeholder="Last Name"
                    onChange={props.handleChange}
                />
            </Stack>
        </Group>
    </div>
  );
}

export default PersonalForm;
