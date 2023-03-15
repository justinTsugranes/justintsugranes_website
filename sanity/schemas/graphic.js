export default {
  name: 'graphics',
  title: 'Graphics',
  type: 'document',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'ID',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'image',
      type: 'image',
      title: 'image',
      description: 'The image to display for this graphic',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'altText',
      title: 'Alt Text',
      description: 'Alt text for the graphic',
      type: 'string',
    },
  ],
}
