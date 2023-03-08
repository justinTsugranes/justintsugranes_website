import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { projectId } from './environment'

export const sanityClient = createClient({
  projectId,
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
})

// for images in Sanity, not cloudinary
const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source) => builder.image(source)
