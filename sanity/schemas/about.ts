import { defineType, defineField } from 'sanity';

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'portrait',
      title: 'Portrait Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Designing with',
    }),
    defineField({
      name: 'headingItalic',
      title: 'Heading (italic part)',
      type: 'string',
      initialValue: 'intention',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'focus',
      title: 'Focus',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'string',
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'string',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'About Section' }),
  },
});
