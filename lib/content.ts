const UNDICiI_DOCS_URL = (branch: string) =>
  // https://raw.githubusercontent.com/nodejs/undici/refs/heads/main/docs/docsify/sidebar.md
  `https://raw.githubusercontent.com/nodejs/undici/refs/heads/${branch}`;


export const getRawContent = async (branch: string, slug: string | string[]) => {
  const url = Array.isArray(slug) ?
    `${UNDICiI_DOCS_URL(branch)}/${slug.join('/')}` :
    `${UNDICiI_DOCS_URL(branch)}/${slug}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch content from ${url}`);
  }

  return response.text();
};

/**
 * PFFFFFF 😒 undici didn't have same location for sidebar.md
 * v5.X : https://raw.githubusercontent.com/nodejs/undici/refs/heads/v5.x/docsify/sidebar.md
 * v6.X : https://raw.githubusercontent.com/nodejs/undici/refs/heads/v6.x/docs/docsify/sidebar.md
 */
export const getDocSidebar = (version: string) => {
  const links = version.startsWith('v5') ? ['docsify', 'sidebar.md'] : ['docs', 'docsify', 'sidebar.md'];

  return getRawContent(version, links);
};

