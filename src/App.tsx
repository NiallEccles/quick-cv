import './App.css'

import Personal from '@/components/personal';
import { PersonalFields } from './fields';

// const [formData, setFormData] = useState<{}[]>([{}]);

const handleUpdates = (data: PersonalFields) => {
  // console.log(data);
}


function App() {
  return (
    <>
      <Personal handleUpdates={handleUpdates}/>
    </>
  )
}

export default App
