module.exports = {
    artifactsDir: 'artifacts',
    ignoreFiles: [
        '.git/',
        '.idea/',
        'artifacts/',
        'node_modules/',
        'wiki/',
        'MIT-license.txt',
        'package.json',
        'package-lock.json',
        'privacy.md',
        'README.md',
        'web-ext-config.js',
    ],
    build: {
        overwriteDest: true,
    },
    sign: {
        channel: 'unlisted'
    }
};
