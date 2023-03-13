export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    // {
    //   name: 'imgUrl',
    //   title: 'ImgUrl',
    //   description: 'The image file from cloudinary',
    //   type: 'cloudinary.asset',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: 'image',
      type: 'image',
      title: 'image',
      description: 'The image to display for the banner',
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
