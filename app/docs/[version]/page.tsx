import { UNDICi_VERSION, LASTEST_UNDICi_VERSION } from '~/data/version';
import type { FC } from 'react';
import BaseLayout from '~/components/Layout/Base';
import VersionSelector from '~/components/Docs/VersionSelector';
import DocsSidebar from '~/components/Docs/DocsSidebar';

type PageProps = {
    params: { version: string };
};

export const generateStaticParams =  () => UNDICi_VERSION.map((v) => ({ version: v.url }));

const Page: FC<PageProps> = ({ params }) => {

    return (
        <BaseLayout>
            <VersionSelector />
            <DocsSidebar version={params.version} />
        </BaseLayout>
    );
};

export default Page;