import styles from './dynamic-form.module.css';
import { useForm, useFieldArray, Controller, useWatch, SubmitHandler } from "react-hook-form";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

/* eslint-disable-next-line */
export interface DynamicFormProps {}

type Inputs = {
    experienceName: string
    experienceDescription: string
}

export function DynamicForm(props: DynamicFormProps) {
    const onSubmit = (data: any) => console.log("data", data);
    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            test: [{ experienceName: "Bill", experienceDescription: "Luo" }]
        }
    });
    const {
        fields,
        append,
        remove,
        move,
    } = useFieldArray({
        control,
        name: "test"
    });
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ol>
                {fields.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <div className="flex">
                                <div>
                                    <div className="mb-2">
                                        <Label htmlFor={`test.${index}.experienceName${index}`} value="Your email" />
                                    </div>
                                    <TextInput
                                        id={`test.${index}.experienceName${index}`}
                                        {...register(`test.${index}.experienceName`, { required: true})}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2">
                                        <Label htmlFor={`test.${index}.experienceDescription${index}`} value="Your email" />
                                    </div>
                                    <TextInput
                                        id={`test.${index}.experienceDescription${index}`}
                                        {...register(`test.${index}.experienceDescription`, { required: true})}
                                    />
                                </div>

                                <Button type="button" onClick={() => remove(index)}>
                                    Delete
                                </Button>
                            </div>
                        </li>
                    );
                })}
            </ol>
            <section>
                <button
                    type="button"
                    onClick={() => {
                        append({ experienceName: "appendBill", experienceDescription: "appendLuo" });
                    }}
                >
                    append
                </button>

                <button type="button" onClick={() => move(0, 1)}>
                    move
                </button>

                <button
                    type="button"
                    onClick={() =>
                        reset({
                            test: [{ experienceName: "Bill", experienceDescription: "Luo" }]
                        })
                    }
                >
                    reset
                </button>
            </section>

            <Button onClick={(e) => console.log(e)}  type="submit">Submit</Button>
        </form>
    );
}

export default DynamicForm;
