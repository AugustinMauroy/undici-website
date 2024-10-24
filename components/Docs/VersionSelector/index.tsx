'use client';
import { usePathname, useRouter } from 'next/navigation';
import Select from '~/components/Common/Select';
import { UNDICi_VERSION, LASTEST_UNDICi_VERSION } from '~/data/version';
import type { FC } from 'react';

const VersionSelector: FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const defautlValue = UNDICi_VERSION.find((version) => pathname.startsWith(`/docs/${version.url}`))?.url;

    return (
        <Select
            values={UNDICi_VERSION.map((version) => ({
                label: `Undici v${version.major}`,
                value: version.url
            }))}
            defaultValue={defautlValue ?? LASTEST_UNDICi_VERSION.url}
            onChange={(value) => {
                router.push(`/docs/${value}`);
            }
            }
        />
    );
};

export default VersionSelector;