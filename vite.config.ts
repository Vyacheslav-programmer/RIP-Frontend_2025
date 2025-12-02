import {ConfigEnv, defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths'
import {VitePWA, VitePWAOptions} from "vite-plugin-pwa";
import mkcert from 'vite-plugin-mkcert'
import fs from 'fs';
import path from 'path';

const manifestForPlugin: Partial<VitePWAOptions> = {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: {
        name: 'Оценка стоимости облачного хостинга для веб-проекта',
        short_name: 'Оценка стоимости облачного хостинга для веб-проекта',
        description: 'Description',
        theme_color: '#ffffff',
        icons: [
            {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            }
        ]
    }
};

export default ({ mode }:ConfigEnv) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return defineConfig({
        plugins: [
            react(),
            mkcert(),
            tsconfigPaths(),
            VitePWA(manifestForPlugin)
        ],
        clearScreen: false,
        server: {
            port: 3000,
            strictPort: true,
            host: true,
            proxy: {
                "/api": {
                    target: process.env.VITE_API_URL
                },
            },
            https: {
                key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
                cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
            },
        },
    });
}
