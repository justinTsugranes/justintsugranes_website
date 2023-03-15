export default {
  name: 'preFooterCTA',
  title: 'Pre Footer CTA',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'quote',
      type: 'string',
      title: 'Quote',
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'graphic',
      type: 'image',
      title: 'Graphic',
    },
  ],
}
