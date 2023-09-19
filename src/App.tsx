import './App.css'

import Personal from '@/components/personal';
import { FormFields } from './fields';
import Experience from './components/experience';

// const [formData, setFormData] = useState<{}[]>([{}]);

const handleUpdates = (data: FormFields) => {
  console.log(data);
}


function App() {
  return (
    <>
      <Personal handleUpdates={handleUpdates}/>
      <Experience handleUpdates={handleUpdates}/>
    </>
  )
}

export default App
