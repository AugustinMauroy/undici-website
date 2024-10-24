/**
 * UNDICi version we want on the website
 * `url` is the possbile version to be used in the website's URL
 */
export const UNDICi_VERSION = [
  {
    major: 6,
    branch: 'v6.x',
    url: 'v6.x',
  },
  {
    major: 5,
    branch: 'v5.x',
    url: 'v5.x',
  },
];

export const LASTEST_UNDICi_VERSION = UNDICi_VERSION.reduce((acc, version) => {
  if (version.major > acc.major) {
    return version;
  }

  return acc;
}, UNDICi_VERSION[0]);
