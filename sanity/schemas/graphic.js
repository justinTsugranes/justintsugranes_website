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
      name: 'imgUrl',
      title: 'ImgUrl',
      description: 'The image file from cloudinary',
      type: 'cloudinary.asset',
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
