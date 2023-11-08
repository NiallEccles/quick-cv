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
        swap,
        move,
    } = useFieldArray({
        control,
        name: "test"
    });
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
                {fields.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email1" value="Your email" />
                                </div>
                                {/*<TextInput id="email1" type="email" placeholder="name@flowbite.com" required />*/}
                                <TextInput
                                    id='email1'
                                    {...register(`test.${index}.experienceName`, { required: true})}
                                />
                            </div>

                            <Controller
                                render={({ field }) => <input {...field} />}
                                name={`test.${index}.experienceDescription`}
                                control={control}
                            />
                            <button type="button" onClick={() => remove(index)}>
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
            <section>
                <button
                    type="button"
                    onClick={() => {
                        append({ experienceName: "appendBill", experienceDescription: "appendLuo" });
                    }}
                >
                    append
                </button>
                <button type="button" onClick={() => swap(1, 2)}>
                    swap
                </button>

                <button type="button" onClick={() => move(1, 2)}>
                    move
                </button>

                <button type="button" onClick={() => remove(1)}>
                    remove at
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
