import { FaPepperHot as icon } from 'react-icons/Fa';

export default {
  // computer name
  name: 'topping',
  // visible title
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'topping Name',
      type: 'string',
      description: 'What is the name of the topping',
    },
    {
      name: 'vegitarian',
      title: 'Vegitarian',
      type: 'boolean',
      description: 'Is this topping vegitarian',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegitarian: 'vegitarian',
    },
    prepare: ({ name, vegitarian }) => ({
      title: `${name} ${vegitarian ? '🌱' : ''}`,
    }),
  },
};
