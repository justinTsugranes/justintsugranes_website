export default {
  name: 'headshot',
  type: 'document',
  title: 'Headshot',
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
      description: 'Alt text for the image',
      options: {
        hotspot: true,
      },
    },
  ],
}
