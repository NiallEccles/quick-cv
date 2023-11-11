// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import ExperienceForm from "./experience-form/experience-form";
import FormikForm from "./formik-form/formik-form";

export function App() {
  return (
      <>
        <FormikForm/>
        {/*<ExperienceForm/>*/}
      </>
  );
}

export default App;
