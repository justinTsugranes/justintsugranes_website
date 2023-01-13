export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'company',
      type: 'string',
      title: 'Company',
    },
    {
      name: 'year',
      type: 'string',
      title: 'Year',
    },
    {
      name: 'companyLink',
      type: 'url',
      title: 'Company Link',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
}
