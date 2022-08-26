export interface Project {
  id: string;
  name: string;
  link: string;
  features: string[];
  technologies: string[];
  slug: string;
  cover: {
    url: string;
  };
}
