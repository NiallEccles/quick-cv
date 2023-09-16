import { useEffect, useState } from "react";
import { DynamicForm } from "./dynamic-form";
import { DynamicField } from "@/types/DynamicField";
import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const FormContainer = () => {

    const [contacts, setContacts] = useState<DynamicField[]>([]);

    const { control, register } = useForm({
        defaultValues: {
            contacts: [{ name: "Bill", value: "Luo" }]
          }
    });
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "contacts", // unique name for your Field Array
    });
    
    const handleFieldChange = (index: number, field: keyof DynamicField, value: string) => {
        const updatedContacts: DynamicField[] = [...contacts];
        (updatedContacts[index] as any)[field] = value;
        setContacts(updatedContacts);
    };

    console.log(useWatch({name: 'contacts', control}));
    

    return (
        <div>
            {/* <DynamicForm inputs={contacts} setInputs={setContacts} /> */}
            {fields.map((item, index) => {
                return (
                    <div key={item.id}>
                        <Input {...register(`contacts.${index}.name`)}/>
                        <Input {...register(`contacts.${index}.value`)}/>
                        <button type="button" onClick={() => remove(index)}>
                            Delete
                        </button>
                    </div>
                );
            })}
            <button onClick={() => { append({ name: '', value: '' }) }}>add field</button>
            <Button>Submit</Button>
        </div>
    )
};