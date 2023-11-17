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
        <Divider my="sm" variant="dashed" />
        <Group grow>
            <Stack gap="xs">
                <label htmlFor="personalDetails.name">
                    <Title order={3} size="h4">Name</Title>
                </label>
                <Input
                    name={`personalDetails.name`}
                    id={`personalDetails.name`}
                    value={props.values.name}
                    placeholder="Name"
                    onChange={props.handleChange}
                />
            </Stack>
        </Group>
        <Group grow mt="sm">
            <Stack gap="xs">
                <label htmlFor="personalDetails.email">
                    <Title order={3} size="h4">Email</Title>
                </label>
                <Input
                    name={`personalDetails.email`}
                    id={`personalDetails.email`}
                    value={props.values.email}
                    placeholder="Email"
                    onChange={props.handleChange}
                />
            </Stack>
            <Stack gap="xs">
                <label htmlFor="personalDetails.phone">
                    <Title order={3} size="h4">Phone</Title>
                </label>
                <Input
                    name={`personalDetails.phone`}
                    id={`personalDetails.phone`}
                    value={props.values.phone}
                    placeholder="Phone"
                    onChange={props.handleChange}
                />
            </Stack>
        </Group>
        <Group grow mt="sm">
            <Stack gap="xs">
                <label htmlFor="personalDetails.country">
                    <Title order={3} size="h4">Country</Title>
                </label>
                <Input
                    name={`personalDetails.country`}
                    id={`personalDetails.country`}
                    value={props.values.country}
                    placeholder="Country"
                    onChange={props.handleChange}
                />
            </Stack>
            <Stack gap="xs">
                <label htmlFor="personalDetails.city">
                    <Title order={3} size="h4">City</Title>
                </label>
                <Input
                    name={`personalDetails.city`}
                    id={`personalDetails.city`}
                    value={props.values.city}
                    placeholder="City"
                    onChange={props.handleChange}
                />
            </Stack>
        </Group>
    </div>
  );
}

export default PersonalForm;
