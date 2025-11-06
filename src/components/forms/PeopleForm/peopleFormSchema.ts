import { z } from 'zod';

export const peopleFormSchema = z
  .object({
    height: z.string().describe('The height of this person in meters.'),
    mass: z.string().describe('The mass of this person in kilograms.'),
    hair_color: z.string().describe('The hair color of this person.'),
    skin_color: z.string().describe('The skin color of this person.'),
    eye_color: z.string().describe('The eye color of this person.'),
    birth_year: z
      .string()
      .describe(
        'The birth year of this person. BBY (Before the Battle of Yavin) or ABY (After the Battle of Yavin).'
      ),
    gender: z.string().describe('The gender of this person (if known).')
  })
  .describe('A person within the Star Wars universe');

export type TPeopleForm = z.infer<typeof peopleFormSchema>;
