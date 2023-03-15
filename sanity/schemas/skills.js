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
