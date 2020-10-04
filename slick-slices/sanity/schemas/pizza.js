import { IoMdPizza as icon } from 'react-icons/io';

export default {
  // Computer Namd
  name: 'pizza',
  // Visible title
  title: 'Pizzas',
  icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Pizza name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in cents',
      validation: (Rule) => Rule.min(1000),
      // TODO: Add custom input component
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'topping',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping_0: 'toppings.0.name',
      topping_1: 'toppings.1.name',
      topping_2: 'toppings.2.name',
      topping_3: 'toppings.3.name',
    },
    prepare: ({ title, media, ...toppings }) => {
      // 1. Filter out undefined toppings
      const tops = Object.values(toppings).filter(Boolean);
      // 2. Return the preview object for the pizza
      return {
        title,
        media,
        subtitle: Object.values(tops).join(', '),
      };
    },
  },
};
