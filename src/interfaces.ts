import { TablerIconsProps } from '@tabler/icons-react';

export interface IConfig {
  socials: ISocial[];
  projects: IProject[];
}

export interface ISocial {
  name: string;
  url: string;
  icon: (props: TablerIconsProps) => JSX.Element;
}

export interface IProject {
  name: string;
  description: string;
  logo: string;
  docs: string | null;
  code: string;
  deployment: string | null;
  tags: string[];
}
