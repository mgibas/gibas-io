import { getCollection } from 'astro:content'

export async function getOrderedCollection<Name extends 'sections' | 'projects'>(name: Name) {
  const entries = await getCollection(name)
  return entries.sort((a, b) => a.data.order - b.data.order)
}
