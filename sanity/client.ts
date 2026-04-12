import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityConfig } from './config';

export const client = createClient({
  ...sanityConfig,
  stega: { enabled: false },
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
