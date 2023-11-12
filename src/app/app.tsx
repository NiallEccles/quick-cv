// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

// import ExperienceForm from "./experience-form/experience-form";
import ExperiencesForm from "./experiences-form/experiences-form";
import PersonalForm from "./personal-form/personal-form";

export function App() {
  return (
      <>
        <PersonalForm/>
        <ExperiencesForm/>
        {/*<ExperienceForm/>*/}
      </>
  );
}

export default App;
