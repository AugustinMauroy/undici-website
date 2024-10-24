import Sidebar from "~/components/Common/Sidebar";
import type { FC, ComponentProps } from 'react';
import { getDocSidebar } from "~/lib/content";

const BANNED_LINKS = ['/'];

type DocsSidebarProps = {
    version: string;
};

const DocsSidebar: FC<DocsSidebarProps> = async ({ version }) => {
    const content = await getDocSidebar(version);

    if (!content.includes('<!-- Sidebar for Docsify -->'))
        throw new Error('Invalid sidebar content \n You should verify if undici repo has a valid sidebar.md file');

    const lines = content.split('\n');
    const sidebar = [] as ComponentProps<typeof Sidebar>['items'];
    for (const line of lines) {
        if (!line.includes('*')) continue;

        const level = line.search(/\S/);
        // [Client](/docs/api/Client.md "Undici API - Client")
        // to title and link and description
        const [, label, link] = line.match(/\[(.*)\]\((.*) "(.*)"\)/) || [];

        if (BANNED_LINKS.includes(link)) continue;

        if (level === 0) {
            sidebar.push({
                label,
                link,
                items: [],
            });
        } else {
            const parent = sidebar[sidebar.length - 1];
            parent.items.push({
                label,
                link,
            });
        }
    }

    return (
        <Sidebar items={sidebar} />
    );
};


export default DocsSidebar;