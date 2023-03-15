export default {
  name: 'images',
  title: 'Images',
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
      title: 'Image',
      description: 'The image to display',
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
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
  ],
}
