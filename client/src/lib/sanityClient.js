import { createClient } from '@sanity/client'
import { projectId, dataset } from './environment'

export const sanityClient = createClient({
  baseUrl: 'https://justintsugranes.com',
  projectId,
  dataset,
  apiVersion: '2021-03-25',
  useCdn: true,
  // withCredentials: false,
})

console.log(sanityClient)
