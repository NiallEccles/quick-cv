// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import '@mantine/core/styles.css';

// import ExperienceForm from "./experience-form/experience-form";
import ExperiencesForm from "./experiences-form/experiences-form";
import PersonalForm from "./personal-form/personal-form";
import useInitialValues from "./hooks/useInitialValues";
import {Formik, Form} from "formik";
import validationSchema from "./validationSchema";
import {Button} from "flowbite-react";
import ExperienceForm from "./experience-form/experience-form";

export function App() {
    const initialValues = useInitialValues();
    const handleSubmit = (e: any) => console.log(e);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values: {personalDetails, experiences}, handleSubmit, isSubmitting, handleChange}) => (
                <Form>
                    <PersonalForm values={personalDetails} handleChange={handleChange}/>
                    <ExperienceForm values={experiences} handleChange={handleChange}/>
                    <Button type="submit">Submit</Button>
                </Form>
            )}
        </Formik>
    )
}

export default App;
