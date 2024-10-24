import GitHubIcon from '~/components/Icons/Social/GitHub';
import TwitterIcon from '~/components/Icons/Social/Twitter';
import { LASTEST_UNIDIC_VERSION } from '~/data/version';

export const NAVBAR_LINKS = {
  left: [
    {
      label: 'docs',
      href: `/docs/${LASTEST_UNIDIC_VERSION.url}`,
    },
    {
      label: 'benchmarks',
      href: '/benchmarks',
    },
    {
      label: 'examples',
      href: '/examples',
    },
  ],
  right: [
    {
      label: <GitHubIcon aria-label="GitHub" />,
      href: 'https://github.com/nodejs/undici',
    },
  ],
};

export const FOOTER_LINKS = {
  left: [
    {
      label: '© OpenJS Foundation',
      href: 'https://openjsf.org/',
    },
  ],
  right: [
    {
      label: <TwitterIcon aria-label="Twitter" />,
      href: 'https://twitter.com/nodejs',
    },
  ],
};
