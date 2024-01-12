import { type SchemaTypeDefinition } from 'sanity'
import blog from './lib/blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog],
}
