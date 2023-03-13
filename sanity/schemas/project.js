export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A brief overview of the project',
    },
    {
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      description: 'The technologies used in this project',
      of: [{type: 'string'}],
    },
    {
      name: 'image',
      type: 'image',
      title: 'image',
      description: 'The image to display for this project',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'demoLink',
      type: 'url',
      title: 'Demo Link',
      description: 'A link to the live demo of the project',
    },
    {
      name: 'repoLink',
      type: 'url',
      title: 'Repository Link',
      description: 'A link to the repository for this project',
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
    },
  ],
}
