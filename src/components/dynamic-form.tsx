import { DynamicField } from "@/types/DynamicField";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { Input } from "./ui/input";
import { useState } from "react";


type DynamicFormProps = {
    formName: string
    formFields: DynamicField[]
    setFormData: React.Dispatch<React.SetStateAction<DynamicField[]>>

};

export const DynamicForm: React.FC<DynamicFormProps> = ({formName, formFields, setFormData}) => {

    const { control, register, watch } = useForm({
        defaultValues: {
            [formName]: [formFields]
        }
    });
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: formName, // unique name for your Field Array
    });
    
    // setFormData();
    console.log(useWatch({ name: formName, control }));

    return (
        <>
            {fields.map((item, index) => {
                return (
                    <div key={item.id}>
                        <Input {...register(`contacts.${index}.name`)} />
                        <button type="button" onClick={() => remove(index)}>
                            Remove
                        </button>
                    </div>
                );
            })}
        </>
    )
};