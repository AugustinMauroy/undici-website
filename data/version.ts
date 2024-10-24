/**
 * Unidic version we want on the website
 * `url` is the possbile version to be used in the website's URL
 */
export const UNIDIC_VERSION = [
    {
        major: 6,
        branch: "v6.x",
        url: "v6.x"
    },
    {
        major: 5,
        branch: "v5.x",
        url: "v5.x"
    },
];

export const LASTEST_UNIDIC_VERSION = UNIDIC_VERSION.reduce((acc, version) => {
    if (version.major > acc.major) {
        return version;
    }
    return acc;
}, UNIDIC_VERSION[0]);
