import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aspect',
      title: 'Aspect Ratio',
      type: 'string',
      options: {
        list: [
          { title: 'Wide (16:10)', value: 'aspect-[16/10]' },
          { title: 'Landscape (4:3)', value: 'aspect-[4/3]' },
          { title: 'Widescreen (16:9)', value: 'aspect-[16/9]' },
          { title: 'Portrait (3:4)', value: 'aspect-[3/4]' },
          { title: 'Square (1:1)', value: 'aspect-square' },
        ],
      },
      initialValue: 'aspect-[4/3]',
    }),
    defineField({
      name: 'colSpan',
      title: 'Grid Width',
      type: 'string',
      options: {
        list: [
          { title: 'Small (4 cols)', value: 'md:col-span-4' },
          { title: 'Medium (5 cols)', value: 'md:col-span-5' },
          { title: 'Half (6 cols)', value: 'md:col-span-6' },
          { title: 'Large (7 cols)', value: 'md:col-span-7' },
        ],
      },
      initialValue: 'md:col-span-6',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' },
  },
});
