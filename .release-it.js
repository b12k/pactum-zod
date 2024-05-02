const version = '${version}';

const config = {
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'conventionalcommits',
      },
    },
  },
  git: {
    pushRepo: 'git@github.com:b12k/contracted.git',
    commitMessage: `ci: released version v${version} [no ci]`,
    requireCommits: true,
  },
  npm: {
    publish: true,
  },
  github: {
    release: true,
    comments: {
      submit: true,
    },
  },
};

export default config;
