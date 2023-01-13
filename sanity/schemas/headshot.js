export default {
  name: 'headshot',
  title: 'Headshot',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'altText',
      title: 'Alt Text',
      description: 'Alt text for the image',
      type: 'string',
    },
  ],
}
