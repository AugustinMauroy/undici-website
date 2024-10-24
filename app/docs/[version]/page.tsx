import { UNDICi_VERSION } from '~/data/version';
import BaseLayout from '~/components/Layout/Base';
import VersionSelector from '~/components/Docs/VersionSelector';
import DocsSidebar from '~/components/Docs/DocsSidebar';
import type { FC } from 'react';

type PageProps = {
  params: { version: string };
};

export const generateStaticParams = () =>
  UNDICi_VERSION.map(v => ({ version: v.url }));

const Page: FC<PageProps> = ({ params }) => {
  return (
    <BaseLayout>
      <VersionSelector />
      <DocsSidebar version={params.version} />
    </BaseLayout>
  );
};

export default Page;
