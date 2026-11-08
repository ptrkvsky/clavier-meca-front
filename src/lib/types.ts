/** Sanity documents have heterogeneous, schema-owned slice fields. */
export interface SanityDocument {
  [field: string]: any;
  _id: string;
  _type: string;
  slug: { current: string };
  categories: SanityDocument[];
  content: SanityDocument[];
  keyboards?: SanityDocument[];
  products?: SanityDocument[];
  switchCategory?: SanityDocument[];
  postComparatifs: SanityDocument[];
  postGuides: SanityDocument[];
  menuItem: { menuItemName: string; menuItemSlug: { current: string } }[];
}
export interface SiteContent {
  home?: SanityDocument;
  menu?: SanityDocument;
  posts: SanityDocument[];
  authors: SanityDocument[];
  categories: SanityDocument[];
}
