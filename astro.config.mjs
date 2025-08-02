// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://umm-actually.com",
    redirects: {
        "/linkedin": {
            status: 301,
            destination: "https://www.linkedin.com/in/leonardo-corona-garza-8b4847269/"
        },
        "/ajedrez": {
            status: 301,
            destination: "https://open.spotify.com/track/09pjlooexSLZuAgaylvmCA"
        },
        "/semitones": {
            status: 301,
            destination: "https://apps.apple.com/us/app/semitones-chromatic-tuner/id6740186119"
        },
        "/rola-del-clima": {
            status: 301,
            destination: "https://youtube.com/watch?v=LKXrcDCfV-c"
        }
    }
});
