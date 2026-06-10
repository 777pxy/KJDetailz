import { createClient } from 'next-sanity'

if ( process.env.SANITY_PROJECT_ID == undefined ) { console.log("projectId missing")}
if ( process.env.SANITY_DATASET == undefined ) { console.log("dataset missing")}


export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
})