export const API_HOST = 'http://lifestealer86.ru/api-shop';

module.exports = {
    devServer: {
        proxy: {
            '/api-shop': {
                target: 'http://lifestealer86.ru',
                changeOrigin: true,
            },
        },
    },
};