import { type SchemaTypeDefinition } from 'sanity'
import blog from './lib/blog'
import { tag } from './lib/tags'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,tag],
}
