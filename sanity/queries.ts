import { client } from './client';

export async function getProjects() {
  return client.fetch(
    `*[_type == "project"] | order(order asc) {
      _id,
      title,
      category,
      image,
      aspect,
      colSpan
    }`
  );
}

export async function getAbout() {
  return client.fetch(
    `*[_type == "about"][0] {
      portrait,
      heading,
      headingItalic,
      bio,
      focus,
      skills,
      education
    }`
  );
}

export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      heroLine1,
      heroLine2,
      heroSubtitle,
      heroDescription,
      featuredImage,
      email,
      instagram,
      instagramUrl,
      linkedin,
      linkedinUrl
    }`
  );
}

export async function getAreasOfInterest() {
  return client.fetch(
    `*[_type == "areaOfInterest"] | order(order asc) {
      _id,
      label,
      image
    }`
  );
}
