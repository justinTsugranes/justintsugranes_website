export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'BgColor',
      type: 'string',
    },
    // {
    //   name: 'image',
    //   title: 'Image',
    //   description: 'The icon to display for this skill',
    //   type: 'cloudinary.asset',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: 'image',
      type: 'image',
      title: 'image',
      description: 'The image to display for this skill',
      options: {
        hotspot: true,
      },
    },
  ],
}
