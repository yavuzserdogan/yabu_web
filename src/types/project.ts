export type ProjectCategory =
  | 'Web'
  | 'Mobil'
  | 'UI/UX'
  | 'Sosyal Medya'
  | string;

export interface Project {
  title: string;
  category: ProjectCategory;
  image: string;

  id?: number;
  description?: string;
  tags?: string[];
  link?: string;
}
