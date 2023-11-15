import styles from './personal-form.module.css';
import React from "react";
import { Input } from '@mantine/core';
import {PersonalFields} from "../types";

/* eslint-disable-next-line */
export interface PersonalFormProps {
    values: PersonalFields,
    handleChange: {(e: React.ChangeEvent<any>): void, <T=string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : ((e: (string | React.ChangeEvent<any>)) => void)}
}

export function PersonalForm(props: PersonalFormProps) {

  return (
    <div className={styles['container']}>
        <h2>Personal Details</h2>
        <label htmlFor="personalDetails.firstName">First Name</label>
        <Input
            name={`personalDetails.firstName`}
            id={`personalDetails.firstName`}
            value={props.values.firstName}
            placeholder="First Name"
            onChange={props.handleChange}
        />
    </div>
  );
}

export default PersonalForm;
