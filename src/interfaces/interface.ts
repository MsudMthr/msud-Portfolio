export interface Project {
  id: string;
  name: string;
  link: string;
  feature: string[];
  technologies: string[];
  slug: string;
  cover: {
    url: string;
  };
  description?: {
    html: string;
  };
}
