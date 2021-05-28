import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID, 
  dataset: 'production',
  apiVersion: '2021-05-16',
  useCdn: true
})