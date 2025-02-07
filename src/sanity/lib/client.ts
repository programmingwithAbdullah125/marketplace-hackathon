import { createClient } from 'next-sanity'


export const client = createClient({
  projectId: 'nj7m1kok',
  dataset: 'production',
  apiVersion: '2025-02-05',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export default client