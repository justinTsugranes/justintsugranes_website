import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset, apiVersion } from './environment'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

// for images in Sanity, not cloudinary
const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source) => builder.image(source)
