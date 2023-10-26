import { IconBrandGithub, IconBrandLinkedin, IconMail, TablerIconsProps } from '@tabler/icons-react';

interface IConfig {
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

const cnf: IConfig = {
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/Xavier2p',
      icon: IconBrandGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/xavier-de-place',
      icon: IconBrandLinkedin,
    },
    {
      name: 'Mail',
      url: 'mailto:contact@xavier2p.fr',
      icon: IconMail,
    },
  ],
  projects: [
    {
      name: 'Helix',
      description: 'Free, Open-Source and Self-Hosted Patient Management Tool for Osteopaths.',
      logo: 'https://github.com/Xavier2p/helix/blob/main/.github/assets/%20icon-wbg.png?raw=true',
      docs: 'https://github.com/xavier2p/helix/wiki',
      code: 'https://github.com/xavier2p/helix',
      deployment: 'https://xavier2p.github.io/helix/',
      tags: ['react', 'typescript'],
    },
    {
      name: 'Fortran.rs',
      description: 'Open-Source Interpreter for the Fortran Programming Language written in Rust.',
      logo: 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/rust.png',
      docs: 'https://xavier2p.github.io/fortran.rs/',
      code: 'https://github.com/xavier2p/fortran.rs',
      deployment: null,
      tags: ['rust', 'fortran'],
    },
    {
      name: 'Surreality',
      description: 'A NewGen Portfolio',
      logo: 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/piwigo.png',
      docs: null,
      deployment: 'https://xavier2p.github.io/surreality/',
      code: 'https://github.com/xavier2p/surreality',
      tags: ['react', 'typescript', 'rust'],
    },
    {
      name: '/forge',
      description: 'Personal Homelab, used for testing purposes and hosting my services.',
      logo: 'https://github.com/Xavier2p/assets/blob/main/forge-logos/cyan.png?raw=true',
      docs: null,
      code: 'https://github.com/the-forge-lab/infrastructure',
      deployment: 'https://public.xavier2p.fr',
      tags: ['docker', 'terraform'],
    },
  ],
};

export default cnf;
