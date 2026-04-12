import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';
import { sanityConfig } from './config';

export default defineConfig({
  basePath: '/studio',
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool()],
});
