import { UNIDIC_VERSION } from '~/data/version';
import type { FC } from 'react';
import BaseLayout from '~/components/Layout/Base';

type PageProps = {
    params: { version: string };
};

export const generateStaticParams =  () => UNIDIC_VERSION.map((v) => ({ version: v.url }));

const Page: FC<PageProps> = ({ params }) => {

    return (
        <BaseLayout>
            <h1>Version {params.version}</h1>
        </BaseLayout>
    );
};

export default Page;