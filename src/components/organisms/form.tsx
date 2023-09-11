'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

const personalSchema = z.object({
  name: z.string().min(1, { message: 'Username must be at least 2 characters.' }).max(50),
  email: z.string().min(1, { message: 'Username must be at least 2 characters.' }).max(50),
  location: z.string().min(1, { message: 'Username must be at least 2 characters.' }).max(50),
});

type PersonalSchemaType = z.infer<typeof personalSchema>;

export default function PersonalDetails() {
  const form = useForm<PersonalSchemaType>({
    resolver: zodResolver(personalSchema),
  });

  function onSubmit(values: PersonalSchemaType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-5">
        {
          Object.keys((personalSchema.shape)).map((field, index) => (
            <FormField
            key={index}
            control={form.control}
            name={field as keyof PersonalSchemaType}
            defaultValue=''
            render={(t) => {
              return <FormItem>
                <FormLabel>{field}</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...t.field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            }}
          />
          ))
        }
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}