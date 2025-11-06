import { z } from 'zod';

export const people = z
  .object({
    name: z.string().describe('The name of this person.'),
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
    gender: z.string().describe('The gender of this person (if known).'),
    homeworld: z
      .string()
      .describe('The url of the planet resource that this person was born on.'),
    films: z
      .array(z.any())
      .describe(
        'An array of urls of film resources that this person has been in.'
      ),
    species: z
      .array(z.any())
      .describe('The url of the species resource that this person is.'),
    vehicles: z
      .array(z.any())
      .describe('An array of vehicle resources that this person has piloted'),
    starships: z
      .array(z.any())
      .describe('An array of starship resources that this person has piloted'),
    url: z.string().url().describe('The url of this resource'),
    created: z
      .string()
      .datetime({ offset: true })
      .describe(
        'The ISO 8601 date format of the time that this resource was created.'
      ),
    edited: z
      .string()
      .datetime({ offset: true })
      .describe(
        'the ISO 8601 date format of the time that this resource was edited.'
      )
  })
  .describe('A person within the Star Wars universe');
export type TPeople = z.infer<typeof people>;
