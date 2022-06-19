import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "src") },
            // fix less import by: @import ~
            // https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
            // { find: /^~/, replacement: "" },
        ],
    },
});
