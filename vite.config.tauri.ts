import {ConfigEnv, defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths'

export default ({ mode }:ConfigEnv) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    const host = process.env.TAURI_DEV_HOST;

    return defineConfig({
        plugins: [
            react(),
            tsconfigPaths(),
        ],
        clearScreen: false,
        server: {
            port: 3000,
            strictPort: true,
            host: host || false,
            watch: {
                ignored: ["**/src-tauri/**"]
            },
            proxy: {
                "/api": {
                    target: process.env.VITE_API_URL
                },
            },
        },
    });
}
