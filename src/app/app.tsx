// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import '@mantine/core/styles.css';

// import ExperienceForm from "./experience-form/experience-form";
import ExperiencesForm from "./experiences-form/experiences-form";
import PersonalForm from "./personal-form/personal-form";
import useInitialValues from "./hooks/useInitialValues";
import {Formik, Form} from "formik";
import validationSchema from "./validationSchema";
import {Button, Space, Grid, Box} from '@mantine/core';
import ExperienceForm from "./experience-form/experience-form";

export function App() {
    const initialValues = useInitialValues();
    const handleSubmit = (e: any) => console.log(e);
    return (
        <Grid>
            <Grid.Col span={12} p='xl'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values: {personalDetails, experiences}, handleSubmit, isSubmitting, handleChange}) => (
                        <Form>
                            <PersonalForm values={personalDetails} handleChange={handleChange}/>
                            <Space h="xl" />
                            <ExperienceForm values={experiences} handleChange={handleChange}/>
                            <Space h="md" />
                            <Button type="submit">Submit</Button>
                        </Form>
                    )}
                </Formik>
            </Grid.Col>
            <Grid.Col style={{height: '100vh'}} span={6}>
                <Box bg="gray.2" h='100%'>
                </Box>
            </Grid.Col>
        </Grid>
    )
}

export default App;
