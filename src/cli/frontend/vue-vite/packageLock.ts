import fs from "fs";
import { expandToString } from "langium/generate";
import path from "path";

export function generatePackageLock(target_folder: string) : void {

    fs.writeFileSync(path.join(target_folder, 'package-lock.json'),generatePackageLockText());

}  

function generatePackageLockText(): string {
    return expandToString`
{
    "name": "flexy",
    "version": "3.0.0",
    "lockfileVersion": 3,
    "requires": true,
    "packages": {
        "": {
            "name": "flexy",
            "version": "3.0.0",
            "dependencies": {
                "@fullcalendar/core": "6.1.10",
                "@fullcalendar/daygrid": "6.1.10",
                "@fullcalendar/interaction": "6.1.10",
                "@fullcalendar/timegrid": "6.1.10",
                "@fullcalendar/vue3": "6.1.10",
                "@tiptap/pm": "2.2.2",
                "@tiptap/starter-kit": "2.2.2",
                "@tiptap/vue-3": "2.2.2",
                "@types/aos": "3.0.7",
                "aos": "2.3.4",
                "apexcharts": "3.45.2",
                "axios": "1.6.7",
                "axios-mock-adapter": "1.22.0",
                "chance": "^1.1.8",
                "date-fns": "^2.29.3",
                "lodash": "^4.17.21",
                "maska": "^1.5.0",
                "pinia": "2.1.7",
                "remixicon": "4.1.0",
                "svgmap": "^2.10.1",
                "sweetalert2": "^11.12.2",
                "vee-validate": "4.6.7",
                "vite-plugin-vuetify": "2.0.1",
                "vue": "3.4.17",
                "vue-clipboard3": "2.0.0",
                "vue-draggable-next": "2.2.1",
                "vue-i18n": "^9.2.2",
                "vue-router": "4.0.12",
                "vue-scrollto": "2.20.0",
                "vue-tabler-icons": "^2.21.0",
                "vue3-apexcharts": "1.5.2",
                "vue3-carousel": "0.3.1",
                "vue3-easy-data-table": "1.5.47",
                "vue3-perfect-scrollbar": "^2.0.0",
                "vue3-print-nb": "0.1.4",
                "vuedraggable": "2.24.3",
                "vuetify": "3.5.3",
                "yup": "1.3.3"
            },
            "devDependencies": {
                "@mdi/font": "7.4.47",
                "@rushstack/eslint-patch": "1.7.2",
                "@types/chance": "^1.1.6",
                "@types/lodash": "^4.14.202",
                "@types/node": "20.11.17",
                "@vitejs/plugin-vue": "5.0.4",
                "@vue/eslint-config-prettier": "^9.0.0",
                "@vue/eslint-config-typescript": "^12.0.0",
                "@vue/tsconfig": "^0.1.3",
                "esbuild": "^0.20.0",
                "eslint": "^8.5.0",
                "eslint-plugin-vue": "^9.21.1",
                "prettier": "3.2.5",
                "sass": "1.70.0",
                "sass-loader": "14.1.0",
                "typescript": "^5.3.3",
                "vite": "^5.1.1",
                "vue-cli-plugin-vuetify": "2.5.8",
                "vue-tsc": "^2.0.26",
                "vuetify-loader": "1.9.2"
            }
        },
        "node_modules/@babel/parser": {
            "version": "7.24.7",
            "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.24.7.tgz",
            "integrity": "sha512-9uUYRm6OqQrCqQdG1iCBwBPZgN8ciDBro2nIOFaiRz1/BCxaI7CNvQbDHvsArAC7Tw9Hda/B3U+6ui9u4HWXPw==",
            "license": "MIT",
            "bin": {
                "parser": "bin/babel-parser.js"
            },
            "engines": {
                "node": ">=6.0.0"
            }
        },
        "node_modules/@babel/runtime": {
            "version": "7.24.7",
            "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.24.7.tgz",
            "integrity": "sha512-UwgBRMjJP+xv857DCngvqXI3Iq6J4v0wXmwc6sapg+zyhbwmQX67LUEFrkK5tbyJ30jGuG3ZvWpBiB9LCy1kWw==",
            "license": "MIT",
            "dependencies": {
                "regenerator-runtime": "^0.14.0"
            },
            "engines": {
                "node": ">=6.9.0"
            }
        },
        "node_modules/@esbuild/win32-x64": {
            "version": "0.20.2",
            "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.20.2.tgz",
            "integrity": "sha512-N49X4lJX27+l9jbLKSqZ6bKNjzQvHaT8IIFUy+YIqmXQdjYCToGWwOItDrfby14c78aDd5NHQl29xingXfCdLQ==",
            "cpu": [
                "x64"
            ],
            "dev": true,
            "license": "MIT",
            "optional": true,
            "os": [
                "win32"
            ],
            "engines": {
                "node": ">=12"
            }
        },
        "node_modules/@eslint-community/eslint-utils": {
            "version": "4.4.0",
            "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.4.0.tgz",
            "integrity": "sha512-1/sA4dwrzBAyeUoQ6oxahHKmrZvsnLCg4RfxW3ZFGGmQkSNQPFNLV9CUEFQP1x9EYXHTo5p6xdhZM1Ne9p/AfA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "eslint-visitor-keys": "^3.3.0"
            },
            "engines": {
                "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
            },
            "peerDependencies": {
                "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
            }
        },
        "node_modules/@eslint-community/regexpp": {
            "version": "4.11.0",
            "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.11.0.tgz",
            "integrity": "sha512-G/M/tIiMrTAxEWRfLfQJMmGNX28IxBg4PBz8XqQhqUHLFI6TL2htpIB1iQCj144V5ee/JaKyT9/WZ0MGZWfA7A==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
            }
        },
        "node_modules/@eslint/eslintrc": {
            "version": "2.1.4",
            "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.1.4.tgz",
            "integrity": "sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "ajv": "^6.12.4",
                "debug": "^4.3.2",
                "espree": "^9.6.0",
                "globals": "^13.19.0",
                "ignore": "^5.2.0",
                "import-fresh": "^3.2.1",
                "js-yaml": "^4.1.0",
                "minimatch": "^3.1.2",
                "strip-json-comments": "^3.1.1"
            },
            "engines": {
                "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
            },
            "funding": {
                "url": "https://opencollective.com/eslint"
            }
        },
        "node_modules/@eslint/eslintrc/node_modules/brace-expansion": {
            "version": "1.1.11",
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
            "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "balanced-match": "^1.0.0",
                "concat-map": "0.0.1"
            }
        },
        "node_modules/@eslint/eslintrc/node_modules/minimatch": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
            "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "brace-expansion": "^1.1.7"
            },
            "engines": {
                "node": "*"
            }
        },
        "node_modules/@eslint/js": {
            "version": "8.57.0",
            "resolved": "https://registry.npmjs.org/@eslint/js/-/js-8.57.0.tgz",
            "integrity": "sha512-Ys+3g2TaW7gADOJzPt83SJtCDhMjndcDMFVQ/Tj9iA1BfJzFKD9mAUXT3OenpuPHbI6P/myECxRJrofUsDx/5g==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
            }
        },
        "node_modules/@fullcalendar/core": {
            "version": "6.1.10",
            "resolved": "https://registry.npmjs.org/@fullcalendar/core/-/core-6.1.10.tgz",
            "integrity": "sha512-oTXGJSAGpCf1oY+CKp5qYjMHkJCPBkJ3SHitl63n8Q6xKeiwQ4EF6Au451euUovREwJpLmD1AyZrCnWmtB9AVg==",
            "license": "MIT",
            "dependencies": {
                "preact": "~10.12.1"
            }
        },
        "node_modules/@fullcalendar/daygrid": {
            "version": "6.1.10",
            "resolved": "https://registry.npmjs.org/@fullcalendar/daygrid/-/daygrid-6.1.10.tgz",
            "integrity": "sha512-Z4GRm1IyHKgxXFTWGcEI0nTsvYOIkpE0aMt3/o3ER2SZkF+hfwcDFhtj0c9+WhMjXFIWYeoTnA9rUOY7Zl/nxA==",
            "license": "MIT",
            "peerDependencies": {
                "@fullcalendar/core": "~6.1.10"
            }
        },
        "node_modules/@fullcalendar/interaction": {
            "version": "6.1.10",
            "resolved": "https://registry.npmjs.org/@fullcalendar/interaction/-/interaction-6.1.10.tgz",
            "integrity": "sha512-aZRlwCpmDasq2RNeWV0ub20Uevare9Cb6iMlxCacx0fhOC14H28G9d1FsduJIecInL84SPGwt5ItqAYMsWv7zw==",
            "license": "MIT",
            "peerDependencies": {
                "@fullcalendar/core": "~6.1.10"
            }
        },
        "node_modules/@fullcalendar/timegrid": {
            "version": "6.1.10",
            "resolved": "https://registry.npmjs.org/@fullcalendar/timegrid/-/timegrid-6.1.10.tgz",
            "integrity": "sha512-hFKyQXJaPbNyq1reZmvkCmM64O99krHoIcJAbDS+dntCm3FzZUcDtAcRKIbMiantHrezCG/1MEYk3m9e3aKvIQ==",
            "license": "MIT",
            "dependencies": {
                "@fullcalendar/daygrid": "~6.1.10"
            },
            "peerDependencies": {
                "@fullcalendar/core": "~6.1.10"
            }
        },
        "node_modules/@fullcalendar/vue3": {
            "version": "6.1.10",
            "resolved": "https://registry.npmjs.org/@fullcalendar/vue3/-/vue3-6.1.10.tgz",
            "integrity": "sha512-YMYBQx0TlWNuN4G6ra2dkf5cCF5aVi/2zDLGLvLqe2Nk2o7uNbTkrCSG40061OepWQlJv+hYqm1JukLRmyqi4Q==",
            "license": "MIT",
            "peerDependencies": {
                "@fullcalendar/core": "~6.1.10",
                "vue": "^3.0.11"
            }
        },
        "node_modules/@humanwhocodes/config-array": {
            "version": "0.11.14",
            "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.11.14.tgz",
            "integrity": "sha512-3T8LkOmg45BV5FICb15QQMsyUSWrQ8AygVfC7ZG32zOalnqrilm018ZVCw0eapXux8FtA33q8PSRSstjee3jSg==",
            "deprecated": "Use @eslint/config-array instead",
            "dev": true,
            "license": "Apache-2.0",
            "dependencies": {
                "@humanwhocodes/object-schema": "^2.0.2",
                "debug": "^4.3.1",
                "minimatch": "^3.0.5"
            },
            "engines": {
                "node": ">=10.10.0"
            }
        },
        "node_modules/@humanwhocodes/config-array/node_modules/brace-expansion": {
            "version": "1.1.11",
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
            "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "balanced-match": "^1.0.0",
                "concat-map": "0.0.1"
            }
        },
        "node_modules/@humanwhocodes/config-array/node_modules/minimatch": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
            "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "brace-expansion": "^1.1.7"
            },
            "engines": {
                "node": "*"
            }
        },
        "node_modules/@humanwhocodes/module-importer": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
            "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
            "dev": true,
            "license": "Apache-2.0",
            "engines": {
                "node": ">=12.22"
            },
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/nzakas"
            }
        },
        "node_modules/@humanwhocodes/object-schema": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz",
            "integrity": "sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==",
            "deprecated": "Use @eslint/object-schema instead",
            "dev": true,
            "license": "BSD-3-Clause"
        },
        "node_modules/@intlify/core-base": {
            "version": "9.13.1",
            "resolved": "https://registry.npmjs.org/@intlify/core-base/-/core-base-9.13.1.tgz",
            "integrity": "sha512-+bcQRkJO9pcX8d0gel9ZNfrzU22sZFSA0WVhfXrf5jdJOS24a+Bp8pozuS9sBI9Hk/tGz83pgKfmqcn/Ci7/8w==",
            "license": "MIT",
            "dependencies": {
                "@intlify/message-compiler": "9.13.1",
                "@intlify/shared": "9.13.1"
            },
            "engines": {
                "node": ">= 16"
            },
            "funding": {
                "url": "https://github.com/sponsors/kazupon"
            }
        },
        "node_modules/@intlify/message-compiler": {
            "version": "9.13.1",
            "resolved": "https://registry.npmjs.org/@intlify/message-compiler/-/message-compiler-9.13.1.tgz",
            "integrity": "sha512-SKsVa4ajYGBVm7sHMXd5qX70O2XXjm55zdZB3VeMFCvQyvLew/dLvq3MqnaIsTMF1VkkOb9Ttr6tHcMlyPDL9w==",
            "license": "MIT",
            "dependencies": {
                "@intlify/shared": "9.13.1",
                "source-map-js": "^1.0.2"
            },
            "engines": {
                "node": ">= 16"
            },
            "funding": {
                "url": "https://github.com/sponsors/kazupon"
            }
        },
        "node_modules/@intlify/shared": {
            "version": "9.13.1",
            "resolved": "https://registry.npmjs.org/@intlify/shared/-/shared-9.13.1.tgz",
            "integrity": "sha512-u3b6BKGhE6j/JeRU6C/RL2FgyJfy6LakbtfeVF8fJXURpZZTzfh3e05J0bu0XPw447Q6/WUp3C4ajv4TMS4YsQ==",
            "license": "MIT",
            "engines": {
                "node": ">= 16"
            },
            "funding": {
                "url": "https://github.com/sponsors/kazupon"
            }
        },
        "node_modules/@jridgewell/sourcemap-codec": {
            "version": "1.4.15",
            "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.15.tgz",
            "integrity": "sha512-eF2rxCRulEKXHTRiDrDy6erMYWqNw4LPdQ8UQA4huuxaQsVeRPFl2oM8oDGxMFhJUWZf9McpLtJasDDZb/Bpeg==",
            "license": "MIT"
        },
        "node_modules/@mdi/font": {
            "version": "7.4.47",
            "resolved": "https://registry.npmjs.org/@mdi/font/-/font-7.4.47.tgz",
            "integrity": "sha512-43MtGpd585SNzHZPcYowu/84Vz2a2g31TvPMTm9uTiCSWzaheQySUcSyUH/46fPnuPQWof2yd0pGBtzee/IQWw==",
            "dev": true,
            "license": "Apache-2.0"
        },
        "node_modules/@nodelib/fs.scandir": {
            "version": "2.1.5",
            "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
            "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@nodelib/fs.stat": "2.0.5",
                "run-parallel": "^1.1.9"
            },
            "engines": {
                "node": ">= 8"
            }
        },
        "node_modules/@nodelib/fs.stat": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
            "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">= 8"
            }
        },
        "node_modules/@nodelib/fs.walk": {
            "version": "1.2.8",
            "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
            "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@nodelib/fs.scandir": "2.1.5",
                "fastq": "^1.6.0"
            },
            "engines": {
                "node": ">= 8"
            }
        },
        "node_modules/@pkgr/core": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/@pkgr/core/-/core-0.1.1.tgz",
            "integrity": "sha512-cq8o4cWH0ibXh9VGi5P20Tu9XF/0fFXl9EUinr9QfTM7a7p0oTA4iJRCQWppXR1Pg8dSM0UCItCkPwsk9qWWYA==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
            },
            "funding": {
                "url": "https://opencollective.com/unts"
            }
        },
        "node_modules/@popperjs/core": {
            "version": "2.11.8",
            "resolved": "https://registry.npmjs.org/@popperjs/core/-/core-2.11.8.tgz",
            "integrity": "sha512-P1st0aksCrn9sGZhp8GMYwBnQsbvAWsZAX44oXNNvLHGqAOcoVxmjZiohstwQ7SqKnbR47akdNi+uleWD8+g6A==",
            "license": "MIT",
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/popperjs"
            }
        },
        "node_modules/@remirror/core-constants": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/@remirror/core-constants/-/core-constants-2.0.2.tgz",
            "integrity": "sha512-dyHY+sMF0ihPus3O27ODd4+agdHMEmuRdyiZJ2CCWjPV5UFmn17ZbElvk6WOGVE4rdCJKZQCrPV2BcikOMLUGQ==",
            "license": "MIT"
        },
        "node_modules/@rollup/rollup-win32-x64-msvc": {
            "version": "4.18.0",
            "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.18.0.tgz",
            "integrity": "sha512-UOo5FdvOL0+eIVTgS4tIdbW+TtnBLWg1YBCcU2KWM7nuNwRz9bksDX1bekJJCpu25N1DVWaCwnT39dVQxzqS8g==",
            "cpu": [
                "x64"
            ],
            "dev": true,
            "license": "MIT",
            "optional": true,
            "os": [
                "win32"
            ]
        },
        "node_modules/@rushstack/eslint-patch": {
            "version": "1.7.2",
            "resolved": "https://registry.npmjs.org/@rushstack/eslint-patch/-/eslint-patch-1.7.2.tgz",
            "integrity": "sha512-RbhOOTCNoCrbfkRyoXODZp75MlpiHMgbE5MEBZAnnnLyQNgrigEj4p0lzsMDyc1zVsJDLrivB58tgg3emX0eEA==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/@tiptap/core": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/core/-/core-2.4.0.tgz",
            "integrity": "sha512-YJSahk8pkxpCs8SflCZfTnJpE7IPyUWIylfgXM2DefjRQa5DZ+c6sNY0s/zbxKYFQ6AuHVX40r9pCfcqHChGxQ==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/pm": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-blockquote": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-blockquote/-/extension-blockquote-2.4.0.tgz",
            "integrity": "sha512-nJJy4KsPgQqWTTDOWzFRdjCfG5+QExfZj44dulgDFNh+E66xhamnbM70PklllXJgEcge7xmT5oKM0gKls5XgFw==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-bold": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-bold/-/extension-bold-2.4.0.tgz",
            "integrity": "sha512-csnW6hMDEHoRfxcPRLSqeJn+j35Lgtt1YRiOwn7DlS66sAECGRuoGfCvQSPij0TCDp4VCR9if5Sf8EymhnQumQ==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-bubble-menu": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-bubble-menu/-/extension-bubble-menu-2.4.0.tgz",
            "integrity": "sha512-s99HmttUtpW3rScWq8rqk4+CGCwergNZbHLTkF6Rp6TSboMwfp+rwL5Q/JkcAG9KGLso1vGyXKbt1xHOvm8zMw==",
            "license": "MIT",
            "dependencies": {
                "tippy.js": "^6.3.7"
            },
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0",
                "@tiptap/pm": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-bullet-list": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-bullet-list/-/extension-bullet-list-2.4.0.tgz",
            "integrity": "sha512-9S5DLIvFRBoExvmZ+/ErpTvs4Wf1yOEs8WXlKYUCcZssK7brTFj99XDwpHFA29HKDwma5q9UHhr2OB2o0JYAdw==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-code": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-code/-/extension-code-2.4.0.tgz",
            "integrity": "sha512-wjhBukuiyJMq4cTcK3RBTzUPV24k5n1eEPlpmzku6ThwwkMdwynnMGMAmSF3fErh3AOyOUPoTTjgMYN2d10SJA==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-code-block": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-code-block/-/extension-code-block-2.4.0.tgz",
            "integrity": "sha512-QWGdv1D56TBGbbJSj2cIiXGJEKguPiAl9ONzJ/Ql1ZksiQsYwx0YHriXX6TOC//T4VIf6NSClHEtwtxWBQ/Csg==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0",
                "@tiptap/pm": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-document": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-document/-/extension-document-2.4.0.tgz",
            "integrity": "sha512-3jRodQJZDGbXlRPERaloS+IERg/VwzpC1IO6YSJR9jVIsBO6xC29P3cKTQlg1XO7p6ZH/0ksK73VC5BzzTwoHg==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-dropcursor": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-dropcursor/-/extension-dropcursor-2.4.0.tgz",
            "integrity": "sha512-c46HoG2PEEpSZv5rmS5UX/lJ6/kP1iVO0Ax+6JrNfLEIiDULUoi20NqdjolEa38La2VhWvs+o20OviiTOKEE9g==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0",
                "@tiptap/pm": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-floating-menu": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-floating-menu/-/extension-floating-menu-2.4.0.tgz",
            "integrity": "sha512-vLb9v+htbHhXyty0oaXjT3VC8St4xuGSHWUB9GuAJAQ+NajIO6rBPbLUmm9qM0Eh2zico5mpSD1Qtn5FM6xYzg==",
            "license": "MIT",
            "dependencies": {
                "tippy.js": "^6.3.7"
            },
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0",
                "@tiptap/pm": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-gapcursor": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-gapcursor/-/extension-gapcursor-2.4.0.tgz",
            "integrity": "sha512-F4y/0J2lseohkFUw9P2OpKhrJ6dHz69ZScABUvcHxjznJLd6+0Zt7014Lw5PA8/m2d/w0fX8LZQ88pZr4quZPQ==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0",
                "@tiptap/pm": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-hard-break": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-hard-break/-/extension-hard-break-2.4.0.tgz",
            "integrity": "sha512-3+Z6zxevtHza5IsDBZ4lZqvNR3Kvdqwxq/QKCKu9UhJN1DUjsg/l1Jn2NilSQ3NYkBYh2yJjT8CMo9pQIu776g==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-heading": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-heading/-/extension-heading-2.4.0.tgz",
            "integrity": "sha512-fYkyP/VMo7YHO76YVrUjd95Qeo0cubWn/Spavmwm1gLTHH/q7xMtbod2Z/F0wd6QHnc7+HGhO7XAjjKWDjldaw==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-history": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-history/-/extension-history-2.4.0.tgz",
            "integrity": "sha512-gr5qsKAXEVGr1Lyk1598F7drTaEtAxqZiuuSwTCzZzkiwgEQsWMWTWc9F8FlneCEaqe1aIYg6WKWlmYPaFwr0w==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0",
                "@tiptap/pm": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-horizontal-rule": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-horizontal-rule/-/extension-horizontal-rule-2.4.0.tgz",
            "integrity": "sha512-yDgxy+YxagcEsBbdWvbQiXYxsv3noS1VTuGwc9G7ZK9xPmBHJ5y0agOkB7HskwsZvJHoaSqNRsh7oZTkf0VR3g==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0",
                "@tiptap/pm": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-italic": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-italic/-/extension-italic-2.4.0.tgz",
            "integrity": "sha512-aaW/L9q+KNHHK+X73MPloHeIsT191n3VLd3xm6uUcFDnUNvzYJ/q65/1ZicdtCaOLvTutxdrEvhbkrVREX6a8g==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-list-item": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-list-item/-/extension-list-item-2.4.0.tgz",
            "integrity": "sha512-reUVUx+2cI2NIAqMZhlJ9uK/+zvRzm1GTmlU2Wvzwc7AwLN4yemj6mBDsmBLEXAKPvitfLh6EkeHaruOGymQtg==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-ordered-list": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-ordered-list/-/extension-ordered-list-2.4.0.tgz",
            "integrity": "sha512-Zo0c9M0aowv+2+jExZiAvhCB83GZMjZsxywmuOrdUbq5EGYKb7q8hDyN3hkrktVHr9UPXdPAYTmLAHztTOHYRA==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-paragraph": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-paragraph/-/extension-paragraph-2.4.0.tgz",
            "integrity": "sha512-+yse0Ow67IRwcACd9K/CzBcxlpr9OFnmf0x9uqpaWt1eHck1sJnti6jrw5DVVkyEBHDh/cnkkV49gvctT/NyCw==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-strike": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-strike/-/extension-strike-2.4.0.tgz",
            "integrity": "sha512-pE1uN/fQPOMS3i+zxPYMmPmI3keubnR6ivwM+KdXWOMnBiHl9N4cNpJgq1n2eUUGKLurC2qrQHpnVyGAwBS6Vg==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0"
            }
        },
        "node_modules/@tiptap/extension-text": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@tiptap/extension-text/-/extension-text-2.4.0.tgz",
            "integrity": "sha512-LV0bvE+VowE8IgLca7pM8ll7quNH+AgEHRbSrsI3SHKDCYB9gTHMjWaAkgkUVaO1u0IfCrjnCLym/PqFKa+vvg==",
            "license": "MIT",
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0"
            }
        },
        "node_modules/@tiptap/pm": {
            "version": "2.2.2",
            "resolved": "https://registry.npmjs.org/@tiptap/pm/-/pm-2.2.2.tgz",
            "integrity": "sha512-TcUxqevVcqLYOcbAGlmvZfOB5LL5zZmb6jxSHyevl41SRpGZLe9Jt0e1v98jS0o9GMS7nvcTK/scYQu9e0HqTA==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-changeset": "^2.2.1",
                "prosemirror-collab": "^1.3.1",
                "prosemirror-commands": "^1.5.2",
                "prosemirror-dropcursor": "^1.8.1",
                "prosemirror-gapcursor": "^1.3.2",
                "prosemirror-history": "^1.3.2",
                "prosemirror-inputrules": "^1.3.0",
                "prosemirror-keymap": "^1.2.2",
                "prosemirror-markdown": "^1.12.0",
                "prosemirror-menu": "^1.2.4",
                "prosemirror-model": "^1.19.4",
                "prosemirror-schema-basic": "^1.2.2",
                "prosemirror-schema-list": "^1.3.0",
                "prosemirror-state": "^1.4.3",
                "prosemirror-tables": "^1.3.5",
                "prosemirror-trailing-node": "^2.0.7",
                "prosemirror-transform": "^1.8.0",
                "prosemirror-view": "^1.32.7"
            },
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            }
        },
        "node_modules/@tiptap/starter-kit": {
            "version": "2.2.2",
            "resolved": "https://registry.npmjs.org/@tiptap/starter-kit/-/starter-kit-2.2.2.tgz",
            "integrity": "sha512-J8nbrVBggGJwO7CPEwdUqG6Q8btiQJjjnYWZEs+ImM9GMUfXJ8lyaGT0My3wDvTeq537N9BjTEcQ88pMtOqbOw==",
            "license": "MIT",
            "dependencies": {
                "@tiptap/core": "^2.2.2",
                "@tiptap/extension-blockquote": "^2.2.2",
                "@tiptap/extension-bold": "^2.2.2",
                "@tiptap/extension-bullet-list": "^2.2.2",
                "@tiptap/extension-code": "^2.2.2",
                "@tiptap/extension-code-block": "^2.2.2",
                "@tiptap/extension-document": "^2.2.2",
                "@tiptap/extension-dropcursor": "^2.2.2",
                "@tiptap/extension-gapcursor": "^2.2.2",
                "@tiptap/extension-hard-break": "^2.2.2",
                "@tiptap/extension-heading": "^2.2.2",
                "@tiptap/extension-history": "^2.2.2",
                "@tiptap/extension-horizontal-rule": "^2.2.2",
                "@tiptap/extension-italic": "^2.2.2",
                "@tiptap/extension-list-item": "^2.2.2",
                "@tiptap/extension-ordered-list": "^2.2.2",
                "@tiptap/extension-paragraph": "^2.2.2",
                "@tiptap/extension-strike": "^2.2.2",
                "@tiptap/extension-text": "^2.2.2"
            },
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            }
        },
        "node_modules/@tiptap/vue-3": {
            "version": "2.2.2",
            "resolved": "https://registry.npmjs.org/@tiptap/vue-3/-/vue-3-2.2.2.tgz",
            "integrity": "sha512-4QNjruL7qiOgSANczipKtbYmMZS/gGuqV2UeBKKXTXIGFr5qA5R5n9Icy+El0oJOUZ8MNDFOVSGaHh/ts+pY3g==",
            "license": "MIT",
            "dependencies": {
                "@tiptap/extension-bubble-menu": "^2.2.2",
                "@tiptap/extension-floating-menu": "^2.2.2"
            },
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/ueberdosis"
            },
            "peerDependencies": {
                "@tiptap/core": "^2.0.0",
                "@tiptap/pm": "^2.0.0",
                "vue": "^3.0.0"
            }
        },
        "node_modules/@types/aos": {
            "version": "3.0.7",
            "resolved": "https://registry.npmjs.org/@types/aos/-/aos-3.0.7.tgz",
            "integrity": "sha512-sEhyFqvKauUJZDbvAB3Pggynrq6g+2PS4XB3tmUr+mDL1gfDJnwslUC4QQ7/l8UD+LWpr3RxZVR/rHoZrLqZVg==",
            "license": "MIT"
        },
        "node_modules/@types/chance": {
            "version": "1.1.6",
            "resolved": "https://registry.npmjs.org/@types/chance/-/chance-1.1.6.tgz",
            "integrity": "sha512-V+pm3stv1Mvz8fSKJJod6CglNGVqEQ6OyuqitoDkWywEODM/eJd1eSuIp9xt6DrX8BWZ2eDSIzbw1tPCUTvGbQ==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/@types/estree": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.5.tgz",
            "integrity": "sha512-/kYRxGDLWzHOB7q+wtSUQlFrtcdUccpfy+X+9iMBpHK8QLLhx2wIPYuS5DYtR9Wa/YlZAbIovy7qVdB1Aq6Lyw==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/@types/json-schema": {
            "version": "7.0.15",
            "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
            "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/@types/lodash": {
            "version": "4.17.6",
            "resolved": "https://registry.npmjs.org/@types/lodash/-/lodash-4.17.6.tgz",
            "integrity": "sha512-OpXEVoCKSS3lQqjx9GGGOapBeuW5eUboYHRlHP9urXPX25IKZ6AnP5ZRxtVf63iieUbsHxLn8NQ5Nlftc6yzAA==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/@types/node": {
            "version": "20.11.17",
            "resolved": "https://registry.npmjs.org/@types/node/-/node-20.11.17.tgz",
            "integrity": "sha512-QmgQZGWu1Yw9TDyAP9ZzpFJKynYNeOvwMJmaxABfieQoVoiVOS6MN1WSpqpRcbeA5+RW82kraAVxCCJg+780Qw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "undici-types": "~5.26.4"
            }
        },
        "node_modules/@types/semver": {
            "version": "7.5.8",
            "resolved": "https://registry.npmjs.org/@types/semver/-/semver-7.5.8.tgz",
            "integrity": "sha512-I8EUhyrgfLrcTkzV3TSsGyl1tSuPrEDzr0yd5m90UgNxQkyDXULk3b6MlQqTCpZpNtWe1K0hzclnZkTcLBe2UQ==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/@typescript-eslint/eslint-plugin": {
            "version": "6.21.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-6.21.0.tgz",
            "integrity": "sha512-oy9+hTPCUFpngkEZUSzbf9MxI65wbKFoQYsgPdILTfbUldp5ovUuphZVe4i30emU9M/kP+T64Di0mxl7dSw3MA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@eslint-community/regexpp": "^4.5.1",
                "@typescript-eslint/scope-manager": "6.21.0",
                "@typescript-eslint/type-utils": "6.21.0",
                "@typescript-eslint/utils": "6.21.0",
                "@typescript-eslint/visitor-keys": "6.21.0",
                "debug": "^4.3.4",
                "graphemer": "^1.4.0",
                "ignore": "^5.2.4",
                "natural-compare": "^1.4.0",
                "semver": "^7.5.4",
                "ts-api-utils": "^1.0.1"
            },
            "engines": {
                "node": "^16.0.0 || >=18.0.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/typescript-eslint"
            },
            "peerDependencies": {
                "@typescript-eslint/parser": "^6.0.0 || ^6.0.0-alpha",
                "eslint": "^7.0.0 || ^8.0.0"
            },
            "peerDependenciesMeta": {
                "typescript": {
                    "optional": true
                }
            }
        },
        "node_modules/@typescript-eslint/parser": {
            "version": "6.21.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-6.21.0.tgz",
            "integrity": "sha512-tbsV1jPne5CkFQCgPBcDOt30ItF7aJoZL997JSF7MhGQqOeT3svWRYxiqlfA5RUdlHN6Fi+EI9bxqbdyAUZjYQ==",
            "dev": true,
            "license": "BSD-2-Clause",
            "dependencies": {
                "@typescript-eslint/scope-manager": "6.21.0",
                "@typescript-eslint/types": "6.21.0",
                "@typescript-eslint/typescript-estree": "6.21.0",
                "@typescript-eslint/visitor-keys": "6.21.0",
                "debug": "^4.3.4"
            },
            "engines": {
                "node": "^16.0.0 || >=18.0.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/typescript-eslint"
            },
            "peerDependencies": {
                "eslint": "^7.0.0 || ^8.0.0"
            },
            "peerDependenciesMeta": {
                "typescript": {
                    "optional": true
                }
            }
        },
        "node_modules/@typescript-eslint/scope-manager": {
            "version": "6.21.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-6.21.0.tgz",
            "integrity": "sha512-OwLUIWZJry80O99zvqXVEioyniJMa+d2GrqpUTqi5/v5D5rOrppJVBPa0yKCblcigC0/aYAzxxqQ1B+DS2RYsg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@typescript-eslint/types": "6.21.0",
                "@typescript-eslint/visitor-keys": "6.21.0"
            },
            "engines": {
                "node": "^16.0.0 || >=18.0.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/typescript-eslint"
            }
        },
        "node_modules/@typescript-eslint/type-utils": {
            "version": "6.21.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-6.21.0.tgz",
            "integrity": "sha512-rZQI7wHfao8qMX3Rd3xqeYSMCL3SoiSQLBATSiVKARdFGCYSRvmViieZjqc58jKgs8Y8i9YvVVhRbHSTA4VBag==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@typescript-eslint/typescript-estree": "6.21.0",
                "@typescript-eslint/utils": "6.21.0",
                "debug": "^4.3.4",
                "ts-api-utils": "^1.0.1"
            },
            "engines": {
                "node": "^16.0.0 || >=18.0.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/typescript-eslint"
            },
            "peerDependencies": {
                "eslint": "^7.0.0 || ^8.0.0"
            },
            "peerDependenciesMeta": {
                "typescript": {
                    "optional": true
                }
            }
        },
        "node_modules/@typescript-eslint/types": {
            "version": "6.21.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-6.21.0.tgz",
            "integrity": "sha512-1kFmZ1rOm5epu9NZEZm1kckCDGj5UJEf7P1kliH4LKu/RkwpsfqqGmY2OOcUs18lSlQBKLDYBOGxRVtrMN5lpg==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": "^16.0.0 || >=18.0.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/typescript-eslint"
            }
        },
        "node_modules/@typescript-eslint/typescript-estree": {
            "version": "6.21.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-6.21.0.tgz",
            "integrity": "sha512-6npJTkZcO+y2/kr+z0hc4HwNfrrP4kNYh57ek7yCNlrBjWQ1Y0OS7jiZTkgumrvkX5HkEKXFZkkdFNkaW2wmUQ==",
            "dev": true,
            "license": "BSD-2-Clause",
            "dependencies": {
                "@typescript-eslint/types": "6.21.0",
                "@typescript-eslint/visitor-keys": "6.21.0",
                "debug": "^4.3.4",
                "globby": "^11.1.0",
                "is-glob": "^4.0.3",
                "minimatch": "9.0.3",
                "semver": "^7.5.4",
                "ts-api-utils": "^1.0.1"
            },
            "engines": {
                "node": "^16.0.0 || >=18.0.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/typescript-eslint"
            },
            "peerDependenciesMeta": {
                "typescript": {
                    "optional": true
                }
            }
        },
        "node_modules/@typescript-eslint/utils": {
            "version": "6.21.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-6.21.0.tgz",
            "integrity": "sha512-NfWVaC8HP9T8cbKQxHcsJBY5YE1O33+jpMwN45qzWWaPDZgLIbo12toGMWnmhvCpd3sIxkpDw3Wv1B3dYrbDQQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@eslint-community/eslint-utils": "^4.4.0",
                "@types/json-schema": "^7.0.12",
                "@types/semver": "^7.5.0",
                "@typescript-eslint/scope-manager": "6.21.0",
                "@typescript-eslint/types": "6.21.0",
                "@typescript-eslint/typescript-estree": "6.21.0",
                "semver": "^7.5.4"
            },
            "engines": {
                "node": "^16.0.0 || >=18.0.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/typescript-eslint"
            },
            "peerDependencies": {
                "eslint": "^7.0.0 || ^8.0.0"
            }
        },
        "node_modules/@typescript-eslint/visitor-keys": {
            "version": "6.21.0",
            "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-6.21.0.tgz",
            "integrity": "sha512-JJtkDduxLi9bivAB+cYOVMtbkqdPOhZ+ZI5LC47MIRrDV4Yn2o+ZnW10Nkmr28xRpSpdJ6Sm42Hjf2+REYXm0A==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@typescript-eslint/types": "6.21.0",
                "eslint-visitor-keys": "^3.4.1"
            },
            "engines": {
                "node": "^16.0.0 || >=18.0.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/typescript-eslint"
            }
        },
        "node_modules/@ungap/structured-clone": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.2.0.tgz",
            "integrity": "sha512-zuVdFrMJiuCDQUMCzQaD6KL28MjnqqN8XnAqiEq9PNm/hCPTSGfrXCOfwj1ow4LFb/tNymJPwsNbVePc1xFqrQ==",
            "dev": true,
            "license": "ISC"
        },
        "node_modules/@vitejs/plugin-vue": {
            "version": "5.0.4",
            "resolved": "https://registry.npmjs.org/@vitejs/plugin-vue/-/plugin-vue-5.0.4.tgz",
            "integrity": "sha512-WS3hevEszI6CEVEx28F8RjTX97k3KsrcY6kvTg7+Whm5y3oYvcqzVeGCU3hxSAn4uY2CLCkeokkGKpoctccilQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": "^18.0.0 || >=20.0.0"
            },
            "peerDependencies": {
                "vite": "^5.0.0",
                "vue": "^3.2.25"
            }
        },
        "node_modules/@volar/language-core": {
            "version": "2.4.0-alpha.15",
            "resolved": "https://registry.npmjs.org/@volar/language-core/-/language-core-2.4.0-alpha.15.tgz",
            "integrity": "sha512-mt8z4Fm2WxfQYoQHPcKVjLQV6PgPqyKLbkCVY2cr5RSaamqCHjhKEpsFX66aL4D/7oYguuaUw9Bx03Vt0TpIIA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@volar/source-map": "2.4.0-alpha.15"
            }
        },
        "node_modules/@volar/source-map": {
            "version": "2.4.0-alpha.15",
            "resolved": "https://registry.npmjs.org/@volar/source-map/-/source-map-2.4.0-alpha.15.tgz",
            "integrity": "sha512-8Htngw5TmBY4L3ClDqBGyfLhsB8EmoEXUH1xydyEtEoK0O6NX5ur4Jw8jgvscTlwzizyl/wsN1vn0cQXVbbXYg==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/@volar/typescript": {
            "version": "2.4.0-alpha.15",
            "resolved": "https://registry.npmjs.org/@volar/typescript/-/typescript-2.4.0-alpha.15.tgz",
            "integrity": "sha512-U3StRBbDuxV6Woa4hvGS4kz3XcOzrWUKgFdEFN+ba1x3eaYg7+ytau8ul05xgA+UNGLXXsKur7fTUhDFyISk0w==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@volar/language-core": "2.4.0-alpha.15",
                "path-browserify": "^1.0.1",
                "vscode-uri": "^3.0.8"
            }
        },
        "node_modules/@vue/compiler-core": {
            "version": "3.4.17",
            "resolved": "https://registry.npmjs.org/@vue/compiler-core/-/compiler-core-3.4.17.tgz",
            "integrity": "sha512-SLECdJMmOSfQhRom6WqisORfZe5cgfOypXuwK3UEeDXbof5J0fK2pj0sc79E9Z+o4npACzrF3eqf3FhPOZcXyw==",
            "license": "MIT",
            "dependencies": {
                "@babel/parser": "^7.23.9",
                "@vue/shared": "3.4.17",
                "entities": "^4.5.0",
                "estree-walker": "^2.0.2",
                "source-map-js": "^1.0.2"
            }
        },
        "node_modules/@vue/compiler-dom": {
            "version": "3.4.17",
            "resolved": "https://registry.npmjs.org/@vue/compiler-dom/-/compiler-dom-3.4.17.tgz",
            "integrity": "sha512-gXWh0G6rJjuOg62RGNM5sIj/AdcVXfJYRpaxexujaJqHmqdUP/9J3QzKUNadrLw5U98UWvVPpfriT2RVSUmx/w==",
            "license": "MIT",
            "dependencies": {
                "@vue/compiler-core": "3.4.17",
                "@vue/shared": "3.4.17"
            }
        },
        "node_modules/@vue/compiler-sfc": {
            "version": "3.4.17",
            "resolved": "https://registry.npmjs.org/@vue/compiler-sfc/-/compiler-sfc-3.4.17.tgz",
            "integrity": "sha512-rYWyfugylV69bFzWuyCS2VgQY9XpY1yfWRQrykct1dORhA57ppss1LtIo9pAzMf+XIe+ZZV8IPGSw6fbV+8SYg==",
            "license": "MIT",
            "dependencies": {
                "@babel/parser": "^7.23.9",
                "@vue/compiler-core": "3.4.17",
                "@vue/compiler-dom": "3.4.17",
                "@vue/compiler-ssr": "3.4.17",
                "@vue/shared": "3.4.17",
                "estree-walker": "^2.0.2",
                "magic-string": "^0.30.6",
                "postcss": "^8.4.33",
                "source-map-js": "^1.0.2"
            }
        },
        "node_modules/@vue/compiler-ssr": {
            "version": "3.4.17",
            "resolved": "https://registry.npmjs.org/@vue/compiler-ssr/-/compiler-ssr-3.4.17.tgz",
            "integrity": "sha512-08S6EZkAOsQSuIt6djF3wbkKwlUCvB/DlKCHgirVpLTSIkwLEw7E8K0fGsgTbbGtO3nsY8Y6uBbWm9ZGFif70Q==",
            "license": "MIT",
            "dependencies": {
                "@vue/compiler-dom": "3.4.17",
                "@vue/shared": "3.4.17"
            }
        },
        "node_modules/@vue/devtools-api": {
            "version": "6.6.3",
            "resolved": "https://registry.npmjs.org/@vue/devtools-api/-/devtools-api-6.6.3.tgz",
            "integrity": "sha512-0MiMsFma/HqA6g3KLKn+AGpL1kgKhFWszC9U29NfpWK5LE7bjeXxySWJrOJ77hBz+TBrBQ7o4QJqbPbqbs8rJw==",
            "license": "MIT"
        },
        "node_modules/@vue/eslint-config-prettier": {
            "version": "9.0.0",
            "resolved": "https://registry.npmjs.org/@vue/eslint-config-prettier/-/eslint-config-prettier-9.0.0.tgz",
            "integrity": "sha512-z1ZIAAUS9pKzo/ANEfd2sO+v2IUalz7cM/cTLOZ7vRFOPk5/xuRKQteOu1DErFLAh/lYGXMVZ0IfYKlyInuDVg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "eslint-config-prettier": "^9.0.0",
                "eslint-plugin-prettier": "^5.0.0"
            },
            "peerDependencies": {
                "eslint": ">= 8.0.0",
                "prettier": ">= 3.0.0"
            }
        },
        "node_modules/@vue/eslint-config-typescript": {
            "version": "12.0.0",
            "resolved": "https://registry.npmjs.org/@vue/eslint-config-typescript/-/eslint-config-typescript-12.0.0.tgz",
            "integrity": "sha512-StxLFet2Qe97T8+7L8pGlhYBBr8Eg05LPuTDVopQV6il+SK6qqom59BA/rcFipUef2jD8P2X44Vd8tMFytfvlg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@typescript-eslint/eslint-plugin": "^6.7.0",
                "@typescript-eslint/parser": "^6.7.0",
                "vue-eslint-parser": "^9.3.1"
            },
            "engines": {
                "node": "^14.17.0 || >=16.0.0"
            },
            "peerDependencies": {
                "eslint": "^6.2.0 || ^7.0.0 || ^8.0.0",
                "eslint-plugin-vue": "^9.0.0",
                "typescript": "*"
            },
            "peerDependenciesMeta": {
                "typescript": {
                    "optional": true
                }
            }
        },
        "node_modules/@vue/language-core": {
            "version": "2.0.26",
            "resolved": "https://registry.npmjs.org/@vue/language-core/-/language-core-2.0.26.tgz",
            "integrity": "sha512-/lt6SfQ3O1yDAhPsnLv9iSUgXd1dMHqUm/t3RctfqjuwQf1LnftZ414X3UBn6aXT4MiwXWtbNJ4Z0NZWwDWgJQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@volar/language-core": "~2.4.0-alpha.15",
                "@vue/compiler-dom": "^3.4.0",
                "@vue/shared": "^3.4.0",
                "computeds": "^0.0.1",
                "minimatch": "^9.0.3",
                "muggle-string": "^0.4.1",
                "path-browserify": "^1.0.1",
                "vue-template-compiler": "^2.7.14"
            },
            "peerDependencies": {
                "typescript": "*"
            },
            "peerDependenciesMeta": {
                "typescript": {
                    "optional": true
                }
            }
        },
        "node_modules/@vue/reactivity": {
            "version": "3.4.17",
            "resolved": "https://registry.npmjs.org/@vue/reactivity/-/reactivity-3.4.17.tgz",
            "integrity": "sha512-xpgg9b8XI+o+vALHHt/260bd4rZtHo8hp5djrF7kz3jU5NDWfVliXyF8y67sIDyLihkjbFG1vRKSeJfxCBpViQ==",
            "license": "MIT",
            "dependencies": {
                "@vue/shared": "3.4.17"
            }
        },
        "node_modules/@vue/runtime-core": {
            "version": "3.4.17",
            "resolved": "https://registry.npmjs.org/@vue/runtime-core/-/runtime-core-3.4.17.tgz",
            "integrity": "sha512-XtHbp01ycEnOEjNvwFhuEnhaXF0NvcYc1SsWW5u15jj0IZRUGzx3qnIt3pl+i/uhwNDerfEL1mvgRpcVPc4osw==",
            "license": "MIT",
            "dependencies": {
                "@vue/reactivity": "3.4.17",
                "@vue/shared": "3.4.17"
            }
        },
        "node_modules/@vue/runtime-dom": {
            "version": "3.4.17",
            "resolved": "https://registry.npmjs.org/@vue/runtime-dom/-/runtime-dom-3.4.17.tgz",
            "integrity": "sha512-19U7LLsDALEpKMSoSH60yUCh7YnJZoUNYnXoV6tahQj4jYAuQVvbcFOJi7er5m7Cm2P79iTNfpYEHtTAUtU9rw==",
            "license": "MIT",
            "dependencies": {
                "@vue/runtime-core": "3.4.17",
                "@vue/shared": "3.4.17",
                "csstype": "^3.1.3"
            }
        },
        "node_modules/@vue/server-renderer": {
            "version": "3.4.17",
            "resolved": "https://registry.npmjs.org/@vue/server-renderer/-/server-renderer-3.4.17.tgz",
            "integrity": "sha512-ImmlPjysrWO8R8i6puoa0WbMWXW7gUAq4EHqjniNDWEWzcggp+KL2VLFKYLHAZl5FcgK0nyXgufEiXbbUwUd8g==",
            "license": "MIT",
            "dependencies": {
                "@vue/compiler-ssr": "3.4.17",
                "@vue/shared": "3.4.17"
            },
            "peerDependencies": {
                "vue": "3.4.17"
            }
        },
        "node_modules/@vue/shared": {
            "version": "3.4.17",
            "resolved": "https://registry.npmjs.org/@vue/shared/-/shared-3.4.17.tgz",
            "integrity": "sha512-BKloFjdOdVMnYVEKHzPHhJA5wW4iNzuUdEtj1F3phjHMSC269XcQl+L4cZ9EgbYyC/XuEYgn/ICV3VNmnDoH6g==",
            "license": "MIT"
        },
        "node_modules/@vue/tsconfig": {
            "version": "0.1.3",
            "resolved": "https://registry.npmjs.org/@vue/tsconfig/-/tsconfig-0.1.3.tgz",
            "integrity": "sha512-kQVsh8yyWPvHpb8gIc9l/HIDiiVUy1amynLNpCy8p+FoCiZXCo6fQos5/097MmnNZc9AtseDsCrfkhqCrJ8Olg==",
            "dev": true,
            "license": "MIT",
            "peerDependencies": {
                "@types/node": "*"
            },
            "peerDependenciesMeta": {
                "@types/node": {
                    "optional": true
                }
            }
        },
        "node_modules/@vuetify/loader-shared": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/@vuetify/loader-shared/-/loader-shared-2.0.3.tgz",
            "integrity": "sha512-Ss3GC7eJYkp2SF6xVzsT7FAruEmdihmn4OCk2+UocREerlXKWgOKKzTN5PN3ZVN5q05jHHrsNhTuWbhN61Bpdg==",
            "license": "MIT",
            "dependencies": {
                "upath": "^2.0.1"
            },
            "peerDependencies": {
                "vue": "^3.0.0",
                "vuetify": "^3.0.0"
            }
        },
        "node_modules/@yr/monotone-cubic-spline": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/@yr/monotone-cubic-spline/-/monotone-cubic-spline-1.0.3.tgz",
            "integrity": "sha512-FQXkOta0XBSUPHndIKON2Y9JeQz5ZeMqLYZVVK93FliNBFm7LNMIZmY6FrMEB9XPcDbE2bekMbZD6kzDkxwYjA==",
            "license": "MIT"
        },
        "node_modules/acorn": {
            "version": "8.12.0",
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.12.0.tgz",
            "integrity": "sha512-RTvkC4w+KNXrM39/lWCUaG0IbRkWdCv7W/IOW9oU6SawyxulvkQy5HQPVTKxEjczcUvapcrw3cFx/60VN/NRNw==",
            "dev": true,
            "license": "MIT",
            "bin": {
                "acorn": "bin/acorn"
            },
            "engines": {
                "node": ">=0.4.0"
            }
        },
        "node_modules/acorn-jsx": {
            "version": "5.3.2",
            "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
            "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
            "dev": true,
            "license": "MIT",
            "peerDependencies": {
                "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
            }
        },
        "node_modules/acorn-walk": {
            "version": "8.3.3",
            "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.3.tgz",
            "integrity": "sha512-MxXdReSRhGO7VlFe1bRG/oI7/mdLV9B9JJT0N8vZOhF7gFRR5l3M8W9G8JxmKV+JC5mGqJ0QvqfSOLsCPa4nUw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "acorn": "^8.11.0"
            },
            "engines": {
                "node": ">=0.4.0"
            }
        },
        "node_modules/ajv": {
            "version": "6.12.6",
            "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
            "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "fast-deep-equal": "^3.1.1",
                "fast-json-stable-stringify": "^2.0.0",
                "json-schema-traverse": "^0.4.1",
                "uri-js": "^4.2.2"
            },
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/epoberezkin"
            }
        },
        "node_modules/ajv-keywords": {
            "version": "3.5.2",
            "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.5.2.tgz",
            "integrity": "sha512-5p6WTN0DdTGVQk6VjcEju19IgaHudalcfabD7yhDGeA6bcQnmL+CpveLJq/3hvfwd1aof6L386Ougkx6RfyMIQ==",
            "dev": true,
            "license": "MIT",
            "peerDependencies": {
                "ajv": "^6.9.1"
            }
        },
        "node_modules/ansi-regex": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
            "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/ansi-styles": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
            "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "color-convert": "^2.0.1"
            },
            "engines": {
                "node": ">=8"
            },
            "funding": {
                "url": "https://github.com/chalk/ansi-styles?sponsor=1"
            }
        },
        "node_modules/anymatch": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
            "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "normalize-path": "^3.0.0",
                "picomatch": "^2.0.4"
            },
            "engines": {
                "node": ">= 8"
            }
        },
        "node_modules/aos": {
            "version": "2.3.4",
            "resolved": "https://registry.npmjs.org/aos/-/aos-2.3.4.tgz",
            "integrity": "sha512-zh/ahtR2yME4I51z8IttIt4lC1Nw0ktsFtmeDzID1m9naJnWXhCoARaCgNOGXb5CLy3zm+wqmRAEgMYB5E2HUw==",
            "license": "MIT",
            "dependencies": {
                "classlist-polyfill": "^1.0.3",
                "lodash.debounce": "^4.0.6",
                "lodash.throttle": "^4.0.1"
            }
        },
        "node_modules/apexcharts": {
            "version": "3.45.2",
            "resolved": "https://registry.npmjs.org/apexcharts/-/apexcharts-3.45.2.tgz",
            "integrity": "sha512-PpuM4sJWy70sUh5U1IFn1m1p45MdHSChLUNnqEoUUUHSU2IHZugFrsVNhov1S8Q0cvfdrCRCvdBtHGSs6PSAWQ==",
            "license": "MIT",
            "dependencies": {
                "@yr/monotone-cubic-spline": "^1.0.3",
                "svg.draggable.js": "^2.2.2",
                "svg.easing.js": "^2.0.0",
                "svg.filter.js": "^2.0.2",
                "svg.pathmorphing.js": "^0.1.3",
                "svg.resize.js": "^1.4.3",
                "svg.select.js": "^3.0.1"
            }
        },
        "node_modules/argparse": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
            "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
            "license": "Python-2.0"
        },
        "node_modules/array-union": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
            "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/asynckit": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
            "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
            "license": "MIT"
        },
        "node_modules/axios": {
            "version": "1.6.7",
            "resolved": "https://registry.npmjs.org/axios/-/axios-1.6.7.tgz",
            "integrity": "sha512-/hDJGff6/c7u0hDkvkGxR/oy6CbCs8ziCsC7SqmhjfozqiJGc8Z11wrv9z9lYfY4K8l+H9TpjcMDX0xOZmx+RA==",
            "license": "MIT",
            "dependencies": {
                "follow-redirects": "^1.15.4",
                "form-data": "^4.0.0",
                "proxy-from-env": "^1.1.0"
            }
        },
        "node_modules/axios-mock-adapter": {
            "version": "1.22.0",
            "resolved": "https://registry.npmjs.org/axios-mock-adapter/-/axios-mock-adapter-1.22.0.tgz",
            "integrity": "sha512-dmI0KbkyAhntUR05YY96qg2H6gg0XMl2+qTW0xmYg6Up+BFBAJYRLROMXRdDEL06/Wqwa0TJThAYvFtSFdRCZw==",
            "license": "MIT",
            "dependencies": {
                "fast-deep-equal": "^3.1.3",
                "is-buffer": "^2.0.5"
            },
            "peerDependencies": {
                "axios": ">= 0.17.0"
            }
        },
        "node_modules/balanced-match": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
            "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/bezier-easing": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/bezier-easing/-/bezier-easing-2.1.0.tgz",
            "integrity": "sha512-gbIqZ/eslnUFC1tjEvtz0sgx+xTK20wDnYMIA27VA04R7w6xxXQPZDbibjA9DTWZRA2CXtwHykkVzlCaAJAZig==",
            "license": "MIT"
        },
        "node_modules/big.js": {
            "version": "5.2.2",
            "resolved": "https://registry.npmjs.org/big.js/-/big.js-5.2.2.tgz",
            "integrity": "sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": "*"
            }
        },
        "node_modules/binary-extensions": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
            "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=8"
            },
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/boolbase": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
            "integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==",
            "dev": true,
            "license": "ISC"
        },
        "node_modules/brace-expansion": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
            "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "balanced-match": "^1.0.0"
            }
        },
        "node_modules/braces": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
            "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "fill-range": "^7.1.1"
            },
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/callsite": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/callsite/-/callsite-1.0.0.tgz",
            "integrity": "sha512-0vdNRFXn5q+dtOqjfFtmtlI9N2eVZ7LMyEV2iKC5mEEFvSg/69Ml6b/WU2qF8W1nLRa0wiSrDT3Y5jOHZCwKPQ==",
            "dev": true,
            "engines": {
                "node": "*"
            }
        },
        "node_modules/callsites": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
            "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=6"
            }
        },
        "node_modules/chalk": {
            "version": "4.1.2",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
            "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "ansi-styles": "^4.1.0",
                "supports-color": "^7.1.0"
            },
            "engines": {
                "node": ">=10"
            },
            "funding": {
                "url": "https://github.com/chalk/chalk?sponsor=1"
            }
        },
        "node_modules/chance": {
            "version": "1.1.11",
            "resolved": "https://registry.npmjs.org/chance/-/chance-1.1.11.tgz",
            "integrity": "sha512-kqTg3WWywappJPqtgrdvbA380VoXO2eu9VCV895JgbyHsaErXdyHK9LOZ911OvAk6L0obK7kDk9CGs8+oBawVA==",
            "license": "MIT"
        },
        "node_modules/chokidar": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
            "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "anymatch": "~3.1.2",
                "braces": "~3.0.2",
                "glob-parent": "~5.1.2",
                "is-binary-path": "~2.1.0",
                "is-glob": "~4.0.1",
                "normalize-path": "~3.0.0",
                "readdirp": "~3.6.0"
            },
            "engines": {
                "node": ">= 8.10.0"
            },
            "funding": {
                "url": "https://paulmillr.com/funding/"
            },
            "optionalDependencies": {
                "fsevents": "~2.3.2"
            }
        },
        "node_modules/chokidar/node_modules/glob-parent": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
            "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "is-glob": "^4.0.1"
            },
            "engines": {
                "node": ">= 6"
            }
        },
        "node_modules/classlist-polyfill": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/classlist-polyfill/-/classlist-polyfill-1.2.0.tgz",
            "integrity": "sha512-GzIjNdcEtH4ieA2S8NmrSxv7DfEV5fmixQeyTmqmRmRJPGpRBaSnA2a0VrCjyT8iW8JjEdMbKzDotAJf+ajgaQ==",
            "license": "Unlicense"
        },
        "node_modules/clipboard": {
            "version": "2.0.11",
            "resolved": "https://registry.npmjs.org/clipboard/-/clipboard-2.0.11.tgz",
            "integrity": "sha512-C+0bbOqkezLIsmWSvlsXS0Q0bmkugu7jcfMIACB+RDEntIzQIkdr148we28AfSloQLRdZlYL/QYyrq05j/3Faw==",
            "license": "MIT",
            "dependencies": {
                "good-listener": "^1.2.2",
                "select": "^1.1.2",
                "tiny-emitter": "^2.0.0"
            }
        },
        "node_modules/color-convert": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
            "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "color-name": "~1.1.4"
            },
            "engines": {
                "node": ">=7.0.0"
            }
        },
        "node_modules/color-name": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
            "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/combined-stream": {
            "version": "1.0.8",
            "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
            "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
            "license": "MIT",
            "dependencies": {
                "delayed-stream": "~1.0.0"
            },
            "engines": {
                "node": ">= 0.8"
            }
        },
        "node_modules/computeds": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/computeds/-/computeds-0.0.1.tgz",
            "integrity": "sha512-7CEBgcMjVmitjYo5q8JTJVra6X5mQ20uTThdK+0kR7UEaDrAWEQcRiBtWJzga4eRpP6afNwwLsX2SET2JhVB1Q==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/concat-map": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
            "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/crelt": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/crelt/-/crelt-1.0.6.tgz",
            "integrity": "sha512-VQ2MBenTq1fWZUH9DJNGti7kKv6EeAuYr3cLwxUWhIu1baTaXh4Ib5W2CqHVqib4/MqbYGJqiL3Zb8GJZr3l4g==",
            "license": "MIT"
        },
        "node_modules/cross-spawn": {
            "version": "7.0.3",
            "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
            "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "path-key": "^3.1.0",
                "shebang-command": "^2.0.0",
                "which": "^2.0.1"
            },
            "engines": {
                "node": ">= 8"
            }
        },
        "node_modules/cssesc": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
            "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
            "dev": true,
            "license": "MIT",
            "bin": {
                "cssesc": "bin/cssesc"
            },
            "engines": {
                "node": ">=4"
            }
        },
        "node_modules/csstype": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
            "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
            "license": "MIT"
        },
        "node_modules/date-fns": {
            "version": "2.30.0",
            "resolved": "https://registry.npmjs.org/date-fns/-/date-fns-2.30.0.tgz",
            "integrity": "sha512-fnULvOpxnC5/Vg3NCiWelDsLiUc9bRwAPs/+LfTLNvetFCtCTN+yQz15C/fs4AwX1R9K5GLtLfn8QW+dWisaAw==",
            "license": "MIT",
            "dependencies": {
                "@babel/runtime": "^7.21.0"
            },
            "engines": {
                "node": ">=0.11"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/date-fns"
            }
        },
        "node_modules/de-indent": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/de-indent/-/de-indent-1.0.2.tgz",
            "integrity": "sha512-e/1zu3xH5MQryN2zdVaF0OrdNLUbvWxzMbi+iNA6Bky7l1RoP8a2fIbRocyHclXt/arDrrR6lL3TqFD9pMQTsg==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/debug": {
            "version": "4.3.5",
            "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.5.tgz",
            "integrity": "sha512-pt0bNEmneDIvdL1Xsd9oDQ/wrQRkXDT4AUWlNZNPKvW5x/jyO9VFXkJUP07vQ2upmw5PlaITaPKc31jK13V+jg==",
            "license": "MIT",
            "dependencies": {
                "ms": "2.1.2"
            },
            "engines": {
                "node": ">=6.0"
            },
            "peerDependenciesMeta": {
                "supports-color": {
                    "optional": true
                }
            }
        },
        "node_modules/decache": {
            "version": "4.6.2",
            "resolved": "https://registry.npmjs.org/decache/-/decache-4.6.2.tgz",
            "integrity": "sha512-2LPqkLeu8XWHU8qNCS3kcF6sCcb5zIzvWaAHYSvPfwhdd7mHuah29NssMzrTYyHN4F5oFy2ko9OBYxegtU0FEw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "callsite": "^1.0.0"
            }
        },
        "node_modules/deep-is": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
            "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/delayed-stream": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
            "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
            "license": "MIT",
            "engines": {
                "node": ">=0.4.0"
            }
        },
        "node_modules/delegate": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/delegate/-/delegate-3.2.0.tgz",
            "integrity": "sha512-IofjkYBZaZivn0V8nnsMJGBr4jVLxHDheKSW88PyxS5QC4Vo9ZbZVvhzlSxY87fVq3STR6r+4cGepyHkcWOQSw==",
            "license": "MIT"
        },
        "node_modules/dir-glob": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
            "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "path-type": "^4.0.0"
            },
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/doctrine": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
            "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
            "dev": true,
            "license": "Apache-2.0",
            "dependencies": {
                "esutils": "^2.0.2"
            },
            "engines": {
                "node": ">=6.0.0"
            }
        },
        "node_modules/emojis-list": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-3.0.0.tgz",
            "integrity": "sha512-/kyM18EfinwXZbno9FyUGeFh87KC8HRQBQGildHZbEuRyWFOmv1U10o9BBp8XVZDVNNuQKyIGIu5ZYAAXJ0V2Q==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">= 4"
            }
        },
        "node_modules/entities": {
            "version": "4.5.0",
            "resolved": "https://registry.npmjs.org/entities/-/entities-4.5.0.tgz",
            "integrity": "sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==",
            "license": "BSD-2-Clause",
            "engines": {
                "node": ">=0.12"
            },
            "funding": {
                "url": "https://github.com/fb55/entities?sponsor=1"
            }
        },
        "node_modules/esbuild": {
            "version": "0.20.2",
            "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.20.2.tgz",
            "integrity": "sha512-WdOOppmUNU+IbZ0PaDiTst80zjnrOkyJNHoKupIcVyU8Lvla3Ugx94VzkQ32Ijqd7UhHJy75gNWDMUekcrSJ6g==",
            "dev": true,
            "hasInstallScript": true,
            "license": "MIT",
            "bin": {
                "esbuild": "bin/esbuild"
            },
            "engines": {
                "node": ">=12"
            },
            "optionalDependencies": {
                "@esbuild/aix-ppc64": "0.20.2",
                "@esbuild/android-arm": "0.20.2",
                "@esbuild/android-arm64": "0.20.2",
                "@esbuild/android-x64": "0.20.2",
                "@esbuild/darwin-arm64": "0.20.2",
                "@esbuild/darwin-x64": "0.20.2",
                "@esbuild/freebsd-arm64": "0.20.2",
                "@esbuild/freebsd-x64": "0.20.2",
                "@esbuild/linux-arm": "0.20.2",
                "@esbuild/linux-arm64": "0.20.2",
                "@esbuild/linux-ia32": "0.20.2",
                "@esbuild/linux-loong64": "0.20.2",
                "@esbuild/linux-mips64el": "0.20.2",
                "@esbuild/linux-ppc64": "0.20.2",
                "@esbuild/linux-riscv64": "0.20.2",
                "@esbuild/linux-s390x": "0.20.2",
                "@esbuild/linux-x64": "0.20.2",
                "@esbuild/netbsd-x64": "0.20.2",
                "@esbuild/openbsd-x64": "0.20.2",
                "@esbuild/sunos-x64": "0.20.2",
                "@esbuild/win32-arm64": "0.20.2",
                "@esbuild/win32-ia32": "0.20.2",
                "@esbuild/win32-x64": "0.20.2"
            }
        },
        "node_modules/escape-string-regexp": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
            "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
            "license": "MIT",
            "engines": {
                "node": ">=10"
            },
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/eslint": {
            "version": "8.57.0",
            "resolved": "https://registry.npmjs.org/eslint/-/eslint-8.57.0.tgz",
            "integrity": "sha512-dZ6+mexnaTIbSBZWgou51U6OmzIhYM2VcNdtiTtI7qPNZm35Akpr0f6vtw3w1Kmn5PYo+tZVfh13WrhpS6oLqQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@eslint-community/eslint-utils": "^4.2.0",
                "@eslint-community/regexpp": "^4.6.1",
                "@eslint/eslintrc": "^2.1.4",
                "@eslint/js": "8.57.0",
                "@humanwhocodes/config-array": "^0.11.14",
                "@humanwhocodes/module-importer": "^1.0.1",
                "@nodelib/fs.walk": "^1.2.8",
                "@ungap/structured-clone": "^1.2.0",
                "ajv": "^6.12.4",
                "chalk": "^4.0.0",
                "cross-spawn": "^7.0.2",
                "debug": "^4.3.2",
                "doctrine": "^3.0.0",
                "escape-string-regexp": "^4.0.0",
                "eslint-scope": "^7.2.2",
                "eslint-visitor-keys": "^3.4.3",
                "espree": "^9.6.1",
                "esquery": "^1.4.2",
                "esutils": "^2.0.2",
                "fast-deep-equal": "^3.1.3",
                "file-entry-cache": "^6.0.1",
                "find-up": "^5.0.0",
                "glob-parent": "^6.0.2",
                "globals": "^13.19.0",
                "graphemer": "^1.4.0",
                "ignore": "^5.2.0",
                "imurmurhash": "^0.1.4",
                "is-glob": "^4.0.0",
                "is-path-inside": "^3.0.3",
                "js-yaml": "^4.1.0",
                "json-stable-stringify-without-jsonify": "^1.0.1",
                "levn": "^0.4.1",
                "lodash.merge": "^4.6.2",
                "minimatch": "^3.1.2",
                "natural-compare": "^1.4.0",
                "optionator": "^0.9.3",
                "strip-ansi": "^6.0.1",
                "text-table": "^0.2.0"
            },
            "bin": {
                "eslint": "bin/eslint.js"
            },
            "engines": {
                "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
            },
            "funding": {
                "url": "https://opencollective.com/eslint"
            }
        },
        "node_modules/eslint-config-prettier": {
            "version": "9.1.0",
            "resolved": "https://registry.npmjs.org/eslint-config-prettier/-/eslint-config-prettier-9.1.0.tgz",
            "integrity": "sha512-NSWl5BFQWEPi1j4TjVNItzYV7dZXZ+wP6I6ZhrBGpChQhZRUaElihE9uRRkcbRnNb76UMKDF3r+WTmNcGPKsqw==",
            "dev": true,
            "license": "MIT",
            "bin": {
                "eslint-config-prettier": "bin/cli.js"
            },
            "peerDependencies": {
                "eslint": ">=7.0.0"
            }
        },
        "node_modules/eslint-plugin-prettier": {
            "version": "5.1.3",
            "resolved": "https://registry.npmjs.org/eslint-plugin-prettier/-/eslint-plugin-prettier-5.1.3.tgz",
            "integrity": "sha512-C9GCVAs4Eq7ZC/XFQHITLiHJxQngdtraXaM+LoUFoFp/lHNl2Zn8f3WQbe9HvTBBQ9YnKFB0/2Ajdqwo5D1EAw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "prettier-linter-helpers": "^1.0.0",
                "synckit": "^0.8.6"
            },
            "engines": {
                "node": "^14.18.0 || >=16.0.0"
            },
            "funding": {
                "url": "https://opencollective.com/eslint-plugin-prettier"
            },
            "peerDependencies": {
                "@types/eslint": ">=8.0.0",
                "eslint": ">=8.0.0",
                "eslint-config-prettier": "*",
                "prettier": ">=3.0.0"
            },
            "peerDependenciesMeta": {
                "@types/eslint": {
                    "optional": true
                },
                "eslint-config-prettier": {
                    "optional": true
                }
            }
        },
        "node_modules/eslint-plugin-vue": {
            "version": "9.27.0",
            "resolved": "https://registry.npmjs.org/eslint-plugin-vue/-/eslint-plugin-vue-9.27.0.tgz",
            "integrity": "sha512-5Dw3yxEyuBSXTzT5/Ge1X5kIkRTQ3nvBn/VwPwInNiZBSJOO/timWMUaflONnFBzU6NhB68lxnCda7ULV5N7LA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@eslint-community/eslint-utils": "^4.4.0",
                "globals": "^13.24.0",
                "natural-compare": "^1.4.0",
                "nth-check": "^2.1.1",
                "postcss-selector-parser": "^6.0.15",
                "semver": "^7.6.0",
                "vue-eslint-parser": "^9.4.3",
                "xml-name-validator": "^4.0.0"
            },
            "engines": {
                "node": "^14.17.0 || >=16.0.0"
            },
            "peerDependencies": {
                "eslint": "^6.2.0 || ^7.0.0 || ^8.0.0 || ^9.0.0"
            }
        },
        "node_modules/eslint-scope": {
            "version": "7.2.2",
            "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.2.tgz",
            "integrity": "sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==",
            "dev": true,
            "license": "BSD-2-Clause",
            "dependencies": {
                "esrecurse": "^4.3.0",
                "estraverse": "^5.2.0"
            },
            "engines": {
                "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
            },
            "funding": {
                "url": "https://opencollective.com/eslint"
            }
        },
        "node_modules/eslint-visitor-keys": {
            "version": "3.4.3",
            "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
            "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
            "dev": true,
            "license": "Apache-2.0",
            "engines": {
                "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
            },
            "funding": {
                "url": "https://opencollective.com/eslint"
            }
        },
        "node_modules/eslint/node_modules/brace-expansion": {
            "version": "1.1.11",
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
            "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "balanced-match": "^1.0.0",
                "concat-map": "0.0.1"
            }
        },
        "node_modules/eslint/node_modules/minimatch": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
            "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "brace-expansion": "^1.1.7"
            },
            "engines": {
                "node": "*"
            }
        },
        "node_modules/espree": {
            "version": "9.6.1",
            "resolved": "https://registry.npmjs.org/espree/-/espree-9.6.1.tgz",
            "integrity": "sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==",
            "dev": true,
            "license": "BSD-2-Clause",
            "dependencies": {
                "acorn": "^8.9.0",
                "acorn-jsx": "^5.3.2",
                "eslint-visitor-keys": "^3.4.1"
            },
            "engines": {
                "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
            },
            "funding": {
                "url": "https://opencollective.com/eslint"
            }
        },
        "node_modules/esquery": {
            "version": "1.5.0",
            "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.5.0.tgz",
            "integrity": "sha512-YQLXUplAwJgCydQ78IMJywZCceoqk1oH01OERdSAJc/7U2AylwjhSCLDEtqwg811idIS/9fIU5GjG73IgjKMVg==",
            "dev": true,
            "license": "BSD-3-Clause",
            "dependencies": {
                "estraverse": "^5.1.0"
            },
            "engines": {
                "node": ">=0.10"
            }
        },
        "node_modules/esrecurse": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
            "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
            "dev": true,
            "license": "BSD-2-Clause",
            "dependencies": {
                "estraverse": "^5.2.0"
            },
            "engines": {
                "node": ">=4.0"
            }
        },
        "node_modules/estraverse": {
            "version": "5.3.0",
            "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
            "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
            "dev": true,
            "license": "BSD-2-Clause",
            "engines": {
                "node": ">=4.0"
            }
        },
        "node_modules/estree-walker": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-2.0.2.tgz",
            "integrity": "sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w==",
            "license": "MIT"
        },
        "node_modules/esutils": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
            "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
            "dev": true,
            "license": "BSD-2-Clause",
            "engines": {
                "node": ">=0.10.0"
            }
        },
        "node_modules/fast-deep-equal": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
            "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
            "license": "MIT"
        },
        "node_modules/fast-diff": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/fast-diff/-/fast-diff-1.3.0.tgz",
            "integrity": "sha512-VxPP4NqbUjj6MaAOafWeUn2cXWLcCtljklUtZf0Ind4XQ+QPtmA0b18zZy0jIQx+ExRVCR/ZQpBmik5lXshNsw==",
            "dev": true,
            "license": "Apache-2.0"
        },
        "node_modules/fast-glob": {
            "version": "3.3.2",
            "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.2.tgz",
            "integrity": "sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@nodelib/fs.stat": "^2.0.2",
                "@nodelib/fs.walk": "^1.2.3",
                "glob-parent": "^5.1.2",
                "merge2": "^1.3.0",
                "micromatch": "^4.0.4"
            },
            "engines": {
                "node": ">=8.6.0"
            }
        },
        "node_modules/fast-glob/node_modules/glob-parent": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
            "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "is-glob": "^4.0.1"
            },
            "engines": {
                "node": ">= 6"
            }
        },
        "node_modules/fast-json-stable-stringify": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
            "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/fast-levenshtein": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
            "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/fastq": {
            "version": "1.17.1",
            "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.17.1.tgz",
            "integrity": "sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "reusify": "^1.0.4"
            }
        },
        "node_modules/file-entry-cache": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
            "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "flat-cache": "^3.0.4"
            },
            "engines": {
                "node": "^10.12.0 || >=12.0.0"
            }
        },
        "node_modules/file-loader": {
            "version": "6.2.0",
            "resolved": "https://registry.npmjs.org/file-loader/-/file-loader-6.2.0.tgz",
            "integrity": "sha512-qo3glqyTa61Ytg4u73GultjHGjdRyig3tG6lPtyX/jOEJvHif9uB0/OCI2Kif6ctF3caQTW2G5gym21oAsI4pw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "loader-utils": "^2.0.0",
                "schema-utils": "^3.0.0"
            },
            "engines": {
                "node": ">= 10.13.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/webpack"
            },
            "peerDependencies": {
                "webpack": "^4.0.0 || ^5.0.0"
            }
        },
        "node_modules/fill-range": {
            "version": "7.1.1",
            "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
            "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "to-regex-range": "^5.0.1"
            },
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/find-up": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
            "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "locate-path": "^6.0.0",
                "path-exists": "^4.0.0"
            },
            "engines": {
                "node": ">=10"
            },
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/flat-cache": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz",
            "integrity": "sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "flatted": "^3.2.9",
                "keyv": "^4.5.3",
                "rimraf": "^3.0.2"
            },
            "engines": {
                "node": "^10.12.0 || >=12.0.0"
            }
        },
        "node_modules/flatted": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.1.tgz",
            "integrity": "sha512-X8cqMLLie7KsNUDSdzeN8FYK9rEt4Dt67OsG/DNGnYTSDBG4uFAJFBnUeiV+zCVAvwFy56IjM9sH51jVaEhNxw==",
            "dev": true,
            "license": "ISC"
        },
        "node_modules/follow-redirects": {
            "version": "1.15.6",
            "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.6.tgz",
            "integrity": "sha512-wWN62YITEaOpSK584EZXJafH1AGpO8RVgElfkuXbTOrPX4fIfOyEpW/CsiNd8JdYrAoOvafRTOEnvsO++qCqFA==",
            "funding": [
                {
                    "type": "individual",
                    "url": "https://github.com/sponsors/RubenVerborgh"
                }
            ],
            "license": "MIT",
            "engines": {
                "node": ">=4.0"
            },
            "peerDependenciesMeta": {
                "debug": {
                    "optional": true
                }
            }
        },
        "node_modules/form-data": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.0.tgz",
            "integrity": "sha512-ETEklSGi5t0QMZuiXoA/Q6vcnxcLQP5vdugSpuAyi6SVGi2clPPp+xgEhuMaHC+zGgn31Kd235W35f7Hykkaww==",
            "license": "MIT",
            "dependencies": {
                "asynckit": "^0.4.0",
                "combined-stream": "^1.0.8",
                "mime-types": "^2.1.12"
            },
            "engines": {
                "node": ">= 6"
            }
        },
        "node_modules/fs.realpath": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
            "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
            "dev": true,
            "license": "ISC"
        },
        "node_modules/function-bind": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
            "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
            "dev": true,
            "license": "MIT",
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/glob": {
            "version": "7.2.3",
            "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
            "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
            "deprecated": "Glob versions prior to v9 are no longer supported",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "fs.realpath": "^1.0.0",
                "inflight": "^1.0.4",
                "inherits": "2",
                "minimatch": "^3.1.1",
                "once": "^1.3.0",
                "path-is-absolute": "^1.0.0"
            },
            "engines": {
                "node": "*"
            },
            "funding": {
                "url": "https://github.com/sponsors/isaacs"
            }
        },
        "node_modules/glob-parent": {
            "version": "6.0.2",
            "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
            "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "is-glob": "^4.0.3"
            },
            "engines": {
                "node": ">=10.13.0"
            }
        },
        "node_modules/glob/node_modules/brace-expansion": {
            "version": "1.1.11",
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
            "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "balanced-match": "^1.0.0",
                "concat-map": "0.0.1"
            }
        },
        "node_modules/glob/node_modules/minimatch": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
            "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "brace-expansion": "^1.1.7"
            },
            "engines": {
                "node": "*"
            }
        },
        "node_modules/globals": {
            "version": "13.24.0",
            "resolved": "https://registry.npmjs.org/globals/-/globals-13.24.0.tgz",
            "integrity": "sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "type-fest": "^0.20.2"
            },
            "engines": {
                "node": ">=8"
            },
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/globby": {
            "version": "11.1.0",
            "resolved": "https://registry.npmjs.org/globby/-/globby-11.1.0.tgz",
            "integrity": "sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "array-union": "^2.1.0",
                "dir-glob": "^3.0.1",
                "fast-glob": "^3.2.9",
                "ignore": "^5.2.0",
                "merge2": "^1.4.1",
                "slash": "^3.0.0"
            },
            "engines": {
                "node": ">=10"
            },
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/good-listener": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/good-listener/-/good-listener-1.2.2.tgz",
            "integrity": "sha512-goW1b+d9q/HIwbVYZzZ6SsTr4IgE+WA44A0GmPIQstuOrgsFcT7VEJ48nmr9GaRtNu0XTKacFLGnBPAM6Afouw==",
            "license": "MIT",
            "dependencies": {
                "delegate": "^3.1.2"
            }
        },
        "node_modules/graphemer": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
            "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/has-flag": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
            "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/hasown": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
            "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "function-bind": "^1.1.2"
            },
            "engines": {
                "node": ">= 0.4"
            }
        },
        "node_modules/he": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
            "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
            "dev": true,
            "license": "MIT",
            "bin": {
                "he": "bin/he"
            }
        },
        "node_modules/ignore": {
            "version": "5.3.1",
            "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.1.tgz",
            "integrity": "sha512-5Fytz/IraMjqpwfd34ke28PTVMjZjJG2MPn5t7OE4eUCUNf8BAa7b5WUS9/Qvr6mwOQS7Mk6vdsMno5he+T8Xw==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">= 4"
            }
        },
        "node_modules/immutable": {
            "version": "4.3.6",
            "resolved": "https://registry.npmjs.org/immutable/-/immutable-4.3.6.tgz",
            "integrity": "sha512-Ju0+lEMyzMVZarkTn/gqRpdqd5dOPaz1mCZ0SH3JV6iFw81PldE/PEB1hWVEA288HPt4WXW8O7AWxB10M+03QQ==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/import-fresh": {
            "version": "3.3.0",
            "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
            "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "parent-module": "^1.0.0",
                "resolve-from": "^4.0.0"
            },
            "engines": {
                "node": ">=6"
            },
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/imurmurhash": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
            "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=0.8.19"
            }
        },
        "node_modules/inflight": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
            "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
            "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "once": "^1.3.0",
                "wrappy": "1"
            }
        },
        "node_modules/inherits": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
            "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
            "dev": true,
            "license": "ISC"
        },
        "node_modules/interpret": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/interpret/-/interpret-1.4.0.tgz",
            "integrity": "sha512-agE4QfB2Lkp9uICn7BAqoscw4SZP9kTE2hxiFI3jBPmXJfdqiahTbUuKGsMoN2GtqL9AxhYioAcVvgsb1HvRbA==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">= 0.10"
            }
        },
        "node_modules/is-binary-path": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
            "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "binary-extensions": "^2.0.0"
            },
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/is-buffer": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-2.0.5.tgz",
            "integrity": "sha512-i2R6zNFDwgEHJyQUtJEk0XFi1i0dPFn/oqjK3/vPCcDeJvW5NQ83V8QbicfF1SupOaB0h8ntgBC2YiE7dfyctQ==",
            "funding": [
                {
                    "type": "github",
                    "url": "https://github.com/sponsors/feross"
                },
                {
                    "type": "patreon",
                    "url": "https://www.patreon.com/feross"
                },
                {
                    "type": "consulting",
                    "url": "https://feross.org/support"
                }
            ],
            "license": "MIT",
            "engines": {
                "node": ">=4"
            }
        },
        "node_modules/is-core-module": {
            "version": "2.14.0",
            "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.14.0.tgz",
            "integrity": "sha512-a5dFJih5ZLYlRtDc0dZWP7RiKr6xIKzmn/oAYCDvdLThadVgyJwlaoQPmRtMSpz+rk0OGAgIu+TcM9HUF0fk1A==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "hasown": "^2.0.2"
            },
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/is-extglob": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
            "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=0.10.0"
            }
        },
        "node_modules/is-glob": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
            "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "is-extglob": "^2.1.1"
            },
            "engines": {
                "node": ">=0.10.0"
            }
        },
        "node_modules/is-number": {
            "version": "7.0.0",
            "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
            "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=0.12.0"
            }
        },
        "node_modules/is-path-inside": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
            "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/isexe": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
            "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
            "dev": true,
            "license": "ISC"
        },
        "node_modules/js-yaml": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
            "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "argparse": "^2.0.1"
            },
            "bin": {
                "js-yaml": "bin/js-yaml.js"
            }
        },
        "node_modules/json-buffer": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
            "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/json-schema-traverse": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
            "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/json-stable-stringify-without-jsonify": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
            "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/json5": {
            "version": "2.2.3",
            "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
            "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
            "dev": true,
            "license": "MIT",
            "bin": {
                "json5": "lib/cli.js"
            },
            "engines": {
                "node": ">=6"
            }
        },
        "node_modules/keyv": {
            "version": "4.5.4",
            "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
            "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "json-buffer": "3.0.1"
            }
        },
        "node_modules/levn": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
            "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "prelude-ls": "^1.2.1",
                "type-check": "~0.4.0"
            },
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/linkify-it": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/linkify-it/-/linkify-it-5.0.0.tgz",
            "integrity": "sha512-5aHCbzQRADcdP+ATqnDuhhJ/MRIqDkZX5pyjFHRRysS8vZ5AbqGEoFIb6pYHPZ+L/OC2Lc+xT8uHVVR5CAK/wQ==",
            "license": "MIT",
            "dependencies": {
                "uc.micro": "^2.0.0"
            }
        },
        "node_modules/loader-utils": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-2.0.4.tgz",
            "integrity": "sha512-xXqpXoINfFhgua9xiqD8fPFHgkoq1mmmpE92WlDbm9rNRd/EbRb+Gqf908T2DMfuHjjJlksiK2RbHVOdD/MqSw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "big.js": "^5.2.2",
                "emojis-list": "^3.0.0",
                "json5": "^2.1.2"
            },
            "engines": {
                "node": ">=8.9.0"
            }
        },
        "node_modules/locate-path": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
            "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "p-locate": "^5.0.0"
            },
            "engines": {
                "node": ">=10"
            },
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/lodash": {
            "version": "4.17.21",
            "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
            "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
            "license": "MIT"
        },
        "node_modules/lodash.debounce": {
            "version": "4.0.8",
            "resolved": "https://registry.npmjs.org/lodash.debounce/-/lodash.debounce-4.0.8.tgz",
            "integrity": "sha512-FT1yDzDYEoYWhnSGnpE/4Kj1fLZkDFyqRb7fNt6FdYOSxlUWAtp42Eh6Wb0rGIv/m9Bgo7x4GhQbm5Ys4SG5ow==",
            "license": "MIT"
        },
        "node_modules/lodash.merge": {
            "version": "4.6.2",
            "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
            "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/lodash.throttle": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/lodash.throttle/-/lodash.throttle-4.1.1.tgz",
            "integrity": "sha512-wIkUCfVKpVsWo3JSZlc+8MB5it+2AN5W8J7YVMST30UrvcQNZ1Okbj+rbVniijTWE6FGYy4XJq/rHkas8qJMLQ==",
            "license": "MIT"
        },
        "node_modules/magic-string": {
            "version": "0.30.10",
            "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.10.tgz",
            "integrity": "sha512-iIRwTIf0QKV3UAnYK4PU8uiEc4SRh5jX0mwpIwETPpHdhVM4f53RSwS/vXvN1JhGX+Cs7B8qIq3d6AH49O5fAQ==",
            "license": "MIT",
            "dependencies": {
                "@jridgewell/sourcemap-codec": "^1.4.15"
            }
        },
        "node_modules/markdown-it": {
            "version": "14.1.0",
            "resolved": "https://registry.npmjs.org/markdown-it/-/markdown-it-14.1.0.tgz",
            "integrity": "sha512-a54IwgWPaeBCAAsv13YgmALOF1elABB08FxO9i+r4VFk5Vl4pKokRPeX8u5TCgSsPi6ec1otfLjdOpVcgbpshg==",
            "license": "MIT",
            "dependencies": {
                "argparse": "^2.0.1",
                "entities": "^4.4.0",
                "linkify-it": "^5.0.0",
                "mdurl": "^2.0.0",
                "punycode.js": "^2.3.1",
                "uc.micro": "^2.1.0"
            },
            "bin": {
                "markdown-it": "bin/markdown-it.mjs"
            }
        },
        "node_modules/maska": {
            "version": "1.5.2",
            "resolved": "https://registry.npmjs.org/maska/-/maska-1.5.2.tgz",
            "integrity": "sha512-zDalYGEVjQvnmedj6Yaae532g1RQVKppX8w4+L4q5HPuTUCJew/YDtTsKto4ReYSk5+nfacGyyz067o7qo4xTQ==",
            "license": "MIT"
        },
        "node_modules/mdurl": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/mdurl/-/mdurl-2.0.0.tgz",
            "integrity": "sha512-Lf+9+2r+Tdp5wXDXC4PcIBjTDtq4UKjCPMQhKIuzpJNW0b96kVqSwW0bT7FhRSfmAiFYgP+SCRvdrDozfh0U5w==",
            "license": "MIT"
        },
        "node_modules/merge2": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
            "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">= 8"
            }
        },
        "node_modules/micromatch": {
            "version": "4.0.7",
            "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.7.tgz",
            "integrity": "sha512-LPP/3KorzCwBxfeUuZmaR6bG2kdeHSbe0P2tY3FLRU4vYrjYz5hI4QZwV0njUx3jeuKe67YukQ1LSPZBKDqO/Q==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "braces": "^3.0.3",
                "picomatch": "^2.3.1"
            },
            "engines": {
                "node": ">=8.6"
            }
        },
        "node_modules/mime-db": {
            "version": "1.52.0",
            "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
            "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
            "license": "MIT",
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/mime-types": {
            "version": "2.1.35",
            "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
            "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
            "license": "MIT",
            "dependencies": {
                "mime-db": "1.52.0"
            },
            "engines": {
                "node": ">= 0.6"
            }
        },
        "node_modules/minimatch": {
            "version": "9.0.3",
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.3.tgz",
            "integrity": "sha512-RHiac9mvaRw0x3AYRgDC1CxAP7HTcNrrECeA8YYJeWnpo+2Q5CegtZjaotWTWxDG3UeGA1coE05iH1mPjT/2mg==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "brace-expansion": "^2.0.1"
            },
            "engines": {
                "node": ">=16 || 14 >=14.17"
            },
            "funding": {
                "url": "https://github.com/sponsors/isaacs"
            }
        },
        "node_modules/ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
            "license": "MIT"
        },
        "node_modules/muggle-string": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/muggle-string/-/muggle-string-0.4.1.tgz",
            "integrity": "sha512-VNTrAak/KhO2i8dqqnqnAHOa3cYBwXEZe9h+D5h/1ZqFSTEFHdM65lR7RoIqq3tBBYavsOXV84NoHXZ0AkPyqQ==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/nanoid": {
            "version": "3.3.7",
            "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.7.tgz",
            "integrity": "sha512-eSRppjcPIatRIMC1U6UngP8XFcz8MQWGQdt1MTBQ7NaAmvXDfvNxbvWV3x2y6CdEUciCSsDHDQZbhYaB8QEo2g==",
            "funding": [
                {
                    "type": "github",
                    "url": "https://github.com/sponsors/ai"
                }
            ],
            "license": "MIT",
            "bin": {
                "nanoid": "bin/nanoid.cjs"
            },
            "engines": {
                "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
            }
        },
        "node_modules/natural-compare": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
            "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/neo-async": {
            "version": "2.6.2",
            "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
            "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/normalize-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
            "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=0.10.0"
            }
        },
        "node_modules/nth-check": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz",
            "integrity": "sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==",
            "dev": true,
            "license": "BSD-2-Clause",
            "dependencies": {
                "boolbase": "^1.0.0"
            },
            "funding": {
                "url": "https://github.com/fb55/nth-check?sponsor=1"
            }
        },
        "node_modules/null-loader": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/null-loader/-/null-loader-4.0.1.tgz",
            "integrity": "sha512-pxqVbi4U6N26lq+LmgIbB5XATP0VdZKOG25DhHi8btMmJJefGArFyDg1yc4U3hWCJbMqSrw0qyrz1UQX+qYXqg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "loader-utils": "^2.0.0",
                "schema-utils": "^3.0.0"
            },
            "engines": {
                "node": ">= 10.13.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/webpack"
            },
            "peerDependencies": {
                "webpack": "^4.0.0 || ^5.0.0"
            }
        },
        "node_modules/once": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
            "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "wrappy": "1"
            }
        },
        "node_modules/optionator": {
            "version": "0.9.4",
            "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
            "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "deep-is": "^0.1.3",
                "fast-levenshtein": "^2.0.6",
                "levn": "^0.4.1",
                "prelude-ls": "^1.2.1",
                "type-check": "^0.4.0",
                "word-wrap": "^1.2.5"
            },
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/orderedmap": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/orderedmap/-/orderedmap-2.1.1.tgz",
            "integrity": "sha512-TvAWxi0nDe1j/rtMcWcIj94+Ffe6n7zhow33h40SKxmsmozs6dz/e+EajymfoFcHd7sxNn8yHM8839uixMOV6g==",
            "license": "MIT"
        },
        "node_modules/p-limit": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
            "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "yocto-queue": "^0.1.0"
            },
            "engines": {
                "node": ">=10"
            },
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/p-locate": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
            "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "p-limit": "^3.0.2"
            },
            "engines": {
                "node": ">=10"
            },
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/parent-module": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
            "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "callsites": "^3.0.0"
            },
            "engines": {
                "node": ">=6"
            }
        },
        "node_modules/path-browserify": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-1.0.1.tgz",
            "integrity": "sha512-b7uo2UCUOYZcnF/3ID0lulOJi/bafxa1xPe7ZPsammBSpjSWQkjNxlt635YGS2MiR9GjvuXCtz2emr3jbsz98g==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/path-exists": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
            "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/path-is-absolute": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
            "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=0.10.0"
            }
        },
        "node_modules/path-key": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
            "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/path-parse": {
            "version": "1.0.7",
            "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
            "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/path-type": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
            "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/perfect-scrollbar": {
            "version": "1.5.5",
            "resolved": "https://registry.npmjs.org/perfect-scrollbar/-/perfect-scrollbar-1.5.5.tgz",
            "integrity": "sha512-dzalfutyP3e/FOpdlhVryN4AJ5XDVauVWxybSkLZmakFE2sS3y3pc4JnSprw8tGmHvkaG5Edr5T7LBTZ+WWU2g==",
            "license": "MIT"
        },
        "node_modules/picocolors": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.1.tgz",
            "integrity": "sha512-anP1Z8qwhkbmu7MFP5iTt+wQKXgwzf7zTyGlcdzabySa9vd0Xt392U0rVmz9poOaBj0uHJKyyo9/upk0HrEQew==",
            "license": "ISC"
        },
        "node_modules/picomatch": {
            "version": "2.3.1",
            "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
            "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=8.6"
            },
            "funding": {
                "url": "https://github.com/sponsors/jonschlinkert"
            }
        },
        "node_modules/pinia": {
            "version": "2.1.7",
            "resolved": "https://registry.npmjs.org/pinia/-/pinia-2.1.7.tgz",
            "integrity": "sha512-+C2AHFtcFqjPih0zpYuvof37SFxMQ7OEG2zV9jRI12i9BOy3YQVAHwdKtyyc8pDcDyIc33WCIsZaCFWU7WWxGQ==",
            "license": "MIT",
            "dependencies": {
                "@vue/devtools-api": "^6.5.0",
                "vue-demi": ">=0.14.5"
            },
            "funding": {
                "url": "https://github.com/sponsors/posva"
            },
            "peerDependencies": {
                "@vue/composition-api": "^1.4.0",
                "typescript": ">=4.4.4",
                "vue": "^2.6.14 || ^3.3.0"
            },
            "peerDependenciesMeta": {
                "@vue/composition-api": {
                    "optional": true
                },
                "typescript": {
                    "optional": true
                }
            }
        },
        "node_modules/postcss": {
            "version": "8.4.39",
            "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.39.tgz",
            "integrity": "sha512-0vzE+lAiG7hZl1/9I8yzKLx3aR9Xbof3fBHKunvMfOCYAtMhrsnccJY2iTURb9EZd5+pLuiNV9/c/GZJOHsgIw==",
            "funding": [
                {
                    "type": "opencollective",
                    "url": "https://opencollective.com/postcss/"
                },
                {
                    "type": "tidelift",
                    "url": "https://tidelift.com/funding/github/npm/postcss"
                },
                {
                    "type": "github",
                    "url": "https://github.com/sponsors/ai"
                }
            ],
            "license": "MIT",
            "dependencies": {
                "nanoid": "^3.3.7",
                "picocolors": "^1.0.1",
                "source-map-js": "^1.2.0"
            },
            "engines": {
                "node": "^10 || ^12 || >=14"
            }
        },
        "node_modules/postcss-selector-parser": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.0.tgz",
            "integrity": "sha512-UMz42UD0UY0EApS0ZL9o1XnLhSTtvvvLe5Dc2H2O56fvRZi+KulDyf5ctDhhtYJBGKStV2FL1fy6253cmLgqVQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "cssesc": "^3.0.0",
                "util-deprecate": "^1.0.2"
            },
            "engines": {
                "node": ">=4"
            }
        },
        "node_modules/preact": {
            "version": "10.12.1",
            "resolved": "https://registry.npmjs.org/preact/-/preact-10.12.1.tgz",
            "integrity": "sha512-l8386ixSsBdbreOAkqtrwqHwdvR35ID8c3rKPa8lCWuO86dBi32QWHV4vfsZK1utLLFMvw+Z5Ad4XLkZzchscg==",
            "license": "MIT",
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/preact"
            }
        },
        "node_modules/prelude-ls": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
            "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/prettier": {
            "version": "3.2.5",
            "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.2.5.tgz",
            "integrity": "sha512-3/GWa9aOC0YeD7LUfvOG2NiDyhOWRvt1k+rcKhOuYnMY24iiCphgneUfJDyFXd6rZCAnuLBv6UeAULtrhT/F4A==",
            "dev": true,
            "license": "MIT",
            "bin": {
                "prettier": "bin/prettier.cjs"
            },
            "engines": {
                "node": ">=14"
            },
            "funding": {
                "url": "https://github.com/prettier/prettier?sponsor=1"
            }
        },
        "node_modules/prettier-linter-helpers": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/prettier-linter-helpers/-/prettier-linter-helpers-1.0.0.tgz",
            "integrity": "sha512-GbK2cP9nraSSUF9N2XwUwqfzlAFlMNYYl+ShE/V+H8a9uNl/oUqB1w2EL54Jh0OlyRSd8RfWYJ3coVS4TROP2w==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "fast-diff": "^1.1.2"
            },
            "engines": {
                "node": ">=6.0.0"
            }
        },
        "node_modules/property-expr": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/property-expr/-/property-expr-2.0.6.tgz",
            "integrity": "sha512-SVtmxhRE/CGkn3eZY1T6pC8Nln6Fr/lu1mKSgRud0eC73whjGfoAogbn78LkD8aFL0zz3bAFerKSnOl7NlErBA==",
            "license": "MIT"
        },
        "node_modules/prosemirror-changeset": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/prosemirror-changeset/-/prosemirror-changeset-2.2.1.tgz",
            "integrity": "sha512-J7msc6wbxB4ekDFj+n9gTW/jav/p53kdlivvuppHsrZXCaQdVgRghoZbSS3kwrRyAstRVQ4/+u5k7YfLgkkQvQ==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-transform": "^1.0.0"
            }
        },
        "node_modules/prosemirror-collab": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/prosemirror-collab/-/prosemirror-collab-1.3.1.tgz",
            "integrity": "sha512-4SnynYR9TTYaQVXd/ieUvsVV4PDMBzrq2xPUWutHivDuOshZXqQ5rGbZM84HEaXKbLdItse7weMGOUdDVcLKEQ==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-state": "^1.0.0"
            }
        },
        "node_modules/prosemirror-commands": {
            "version": "1.5.2",
            "resolved": "https://registry.npmjs.org/prosemirror-commands/-/prosemirror-commands-1.5.2.tgz",
            "integrity": "sha512-hgLcPaakxH8tu6YvVAaILV2tXYsW3rAdDR8WNkeKGcgeMVQg3/TMhPdVoh7iAmfgVjZGtcOSjKiQaoeKjzd2mQ==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-model": "^1.0.0",
                "prosemirror-state": "^1.0.0",
                "prosemirror-transform": "^1.0.0"
            }
        },
        "node_modules/prosemirror-dropcursor": {
            "version": "1.8.1",
            "resolved": "https://registry.npmjs.org/prosemirror-dropcursor/-/prosemirror-dropcursor-1.8.1.tgz",
            "integrity": "sha512-M30WJdJZLyXHi3N8vxN6Zh5O8ZBbQCz0gURTfPmTIBNQ5pxrdU7A58QkNqfa98YEjSAL1HUyyU34f6Pm5xBSGw==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-state": "^1.0.0",
                "prosemirror-transform": "^1.1.0",
                "prosemirror-view": "^1.1.0"
            }
        },
        "node_modules/prosemirror-gapcursor": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/prosemirror-gapcursor/-/prosemirror-gapcursor-1.3.2.tgz",
            "integrity": "sha512-wtjswVBd2vaQRrnYZaBCbyDqr232Ed4p2QPtRIUK5FuqHYKGWkEwl08oQM4Tw7DOR0FsasARV5uJFvMZWxdNxQ==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-keymap": "^1.0.0",
                "prosemirror-model": "^1.0.0",
                "prosemirror-state": "^1.0.0",
                "prosemirror-view": "^1.0.0"
            }
        },
        "node_modules/prosemirror-history": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/prosemirror-history/-/prosemirror-history-1.4.0.tgz",
            "integrity": "sha512-UUiGzDVcqo1lovOPdi9YxxUps3oBFWAIYkXLu3Ot+JPv1qzVogRbcizxK3LhHmtaUxclohgiOVesRw5QSlMnbQ==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-state": "^1.2.2",
                "prosemirror-transform": "^1.0.0",
                "prosemirror-view": "^1.31.0",
                "rope-sequence": "^1.3.0"
            }
        },
        "node_modules/prosemirror-inputrules": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/prosemirror-inputrules/-/prosemirror-inputrules-1.4.0.tgz",
            "integrity": "sha512-6ygpPRuTJ2lcOXs9JkefieMst63wVJBgHZGl5QOytN7oSZs3Co/BYbc3Yx9zm9H37Bxw8kVzCnDsihsVsL4yEg==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-state": "^1.0.0",
                "prosemirror-transform": "^1.0.0"
            }
        },
        "node_modules/prosemirror-keymap": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/prosemirror-keymap/-/prosemirror-keymap-1.2.2.tgz",
            "integrity": "sha512-EAlXoksqC6Vbocqc0GtzCruZEzYgrn+iiGnNjsJsH4mrnIGex4qbLdWWNza3AW5W36ZRrlBID0eM6bdKH4OStQ==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-state": "^1.0.0",
                "w3c-keyname": "^2.2.0"
            }
        },
        "node_modules/prosemirror-markdown": {
            "version": "1.13.0",
            "resolved": "https://registry.npmjs.org/prosemirror-markdown/-/prosemirror-markdown-1.13.0.tgz",
            "integrity": "sha512-UziddX3ZYSYibgx8042hfGKmukq5Aljp2qoBiJRejD/8MH70siQNz5RB1TrdTPheqLMy4aCe4GYNF10/3lQS5g==",
            "license": "MIT",
            "dependencies": {
                "markdown-it": "^14.0.0",
                "prosemirror-model": "^1.20.0"
            }
        },
        "node_modules/prosemirror-menu": {
            "version": "1.2.4",
            "resolved": "https://registry.npmjs.org/prosemirror-menu/-/prosemirror-menu-1.2.4.tgz",
            "integrity": "sha512-S/bXlc0ODQup6aiBbWVsX/eM+xJgCTAfMq/nLqaO5ID/am4wS0tTCIkzwytmao7ypEtjj39i7YbJjAgO20mIqA==",
            "license": "MIT",
            "dependencies": {
                "crelt": "^1.0.0",
                "prosemirror-commands": "^1.0.0",
                "prosemirror-history": "^1.0.0",
                "prosemirror-state": "^1.0.0"
            }
        },
        "node_modules/prosemirror-model": {
            "version": "1.21.3",
            "resolved": "https://registry.npmjs.org/prosemirror-model/-/prosemirror-model-1.21.3.tgz",
            "integrity": "sha512-nt2Xs/RNGepD9hrrkzXvtCm1mpGJoQfFSPktGa0BF/aav6XsnmVGZ9sTXNWRLupAz5SCLa3EyKlFeK7zJWROKg==",
            "license": "MIT",
            "dependencies": {
                "orderedmap": "^2.0.0"
            }
        },
        "node_modules/prosemirror-schema-basic": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/prosemirror-schema-basic/-/prosemirror-schema-basic-1.2.2.tgz",
            "integrity": "sha512-/dT4JFEGyO7QnNTe9UaKUhjDXbTNkiWTq/N4VpKaF79bBjSExVV2NXmJpcM7z/gD7mbqNjxbmWW5nf1iNSSGnw==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-model": "^1.19.0"
            }
        },
        "node_modules/prosemirror-schema-list": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/prosemirror-schema-list/-/prosemirror-schema-list-1.4.0.tgz",
            "integrity": "sha512-nZOIq/AkBSzCENxUyLm5ltWE53e2PLk65ghMN8qLQptOmDVixZlPqtMeQdiNw0odL9vNpalEjl3upgRkuJ/Jyw==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-model": "^1.0.0",
                "prosemirror-state": "^1.0.0",
                "prosemirror-transform": "^1.7.3"
            }
        },
        "node_modules/prosemirror-state": {
            "version": "1.4.3",
            "resolved": "https://registry.npmjs.org/prosemirror-state/-/prosemirror-state-1.4.3.tgz",
            "integrity": "sha512-goFKORVbvPuAQaXhpbemJFRKJ2aixr+AZMGiquiqKxaucC6hlpHNZHWgz5R7dS4roHiwq9vDctE//CZ++o0W1Q==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-model": "^1.0.0",
                "prosemirror-transform": "^1.0.0",
                "prosemirror-view": "^1.27.0"
            }
        },
        "node_modules/prosemirror-tables": {
            "version": "1.3.7",
            "resolved": "https://registry.npmjs.org/prosemirror-tables/-/prosemirror-tables-1.3.7.tgz",
            "integrity": "sha512-oEwX1wrziuxMtwFvdDWSFHVUWrFJWt929kVVfHvtTi8yvw+5ppxjXZkMG/fuTdFo+3DXyIPSKfid+Be1npKXDA==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-keymap": "^1.1.2",
                "prosemirror-model": "^1.8.1",
                "prosemirror-state": "^1.3.1",
                "prosemirror-transform": "^1.2.1",
                "prosemirror-view": "^1.13.3"
            }
        },
        "node_modules/prosemirror-trailing-node": {
            "version": "2.0.8",
            "resolved": "https://registry.npmjs.org/prosemirror-trailing-node/-/prosemirror-trailing-node-2.0.8.tgz",
            "integrity": "sha512-ujRYhSuhQb1Jsarh1IHqb2KoSnRiD7wAMDGucP35DN7j5af6X7B18PfdPIrbwsPTqIAj0fyOvxbuPsWhNvylmA==",
            "license": "MIT",
            "dependencies": {
                "@remirror/core-constants": "^2.0.2",
                "escape-string-regexp": "^4.0.0"
            },
            "peerDependencies": {
                "prosemirror-model": "^1.19.0",
                "prosemirror-state": "^1.4.2",
                "prosemirror-view": "^1.31.2"
            }
        },
        "node_modules/prosemirror-transform": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/prosemirror-transform/-/prosemirror-transform-1.9.0.tgz",
            "integrity": "sha512-5UXkr1LIRx3jmpXXNKDhv8OyAOeLTGuXNwdVfg8x27uASna/wQkr9p6fD3eupGOi4PLJfbezxTyi/7fSJypXHg==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-model": "^1.21.0"
            }
        },
        "node_modules/prosemirror-view": {
            "version": "1.33.8",
            "resolved": "https://registry.npmjs.org/prosemirror-view/-/prosemirror-view-1.33.8.tgz",
            "integrity": "sha512-4PhMr/ufz2cdvFgpUAnZfs+0xij3RsFysreeG9V/utpwX7AJtYCDVyuRxzWoMJIEf4C7wVihuBNMPpFLPCiLQw==",
            "license": "MIT",
            "dependencies": {
                "prosemirror-model": "^1.20.0",
                "prosemirror-state": "^1.0.0",
                "prosemirror-transform": "^1.1.0"
            }
        },
        "node_modules/proxy-from-env": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
            "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==",
            "license": "MIT"
        },
        "node_modules/punycode": {
            "version": "2.3.1",
            "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
            "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=6"
            }
        },
        "node_modules/punycode.js": {
            "version": "2.3.1",
            "resolved": "https://registry.npmjs.org/punycode.js/-/punycode.js-2.3.1.tgz",
            "integrity": "sha512-uxFIHU0YlHYhDQtV4R9J6a52SLx28BCjT+4ieh7IGbgwVJWO+km431c4yRlREUAsAmt/uMjQUyQHNEPf0M39CA==",
            "license": "MIT",
            "engines": {
                "node": ">=6"
            }
        },
        "node_modules/queue-microtask": {
            "version": "1.2.3",
            "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
            "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
            "dev": true,
            "funding": [
                {
                    "type": "github",
                    "url": "https://github.com/sponsors/feross"
                },
                {
                    "type": "patreon",
                    "url": "https://www.patreon.com/feross"
                },
                {
                    "type": "consulting",
                    "url": "https://feross.org/support"
                }
            ],
            "license": "MIT"
        },
        "node_modules/readdirp": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
            "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "picomatch": "^2.2.1"
            },
            "engines": {
                "node": ">=8.10.0"
            }
        },
        "node_modules/rechoir": {
            "version": "0.6.2",
            "resolved": "https://registry.npmjs.org/rechoir/-/rechoir-0.6.2.tgz",
            "integrity": "sha512-HFM8rkZ+i3zrV+4LQjwQ0W+ez98pApMGM3HUrN04j3CqzPOzl9nmP15Y8YXNm8QHGv/eacOVEjqhmWpkRV0NAw==",
            "dev": true,
            "dependencies": {
                "resolve": "^1.1.6"
            },
            "engines": {
                "node": ">= 0.10"
            }
        },
        "node_modules/regenerator-runtime": {
            "version": "0.14.1",
            "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.14.1.tgz",
            "integrity": "sha512-dYnhHh0nJoMfnkZs6GmmhFknAGRrLznOu5nc9ML+EJxGvrx6H7teuevqVqCuPcPK//3eDrrjQhehXVx9cnkGdw==",
            "license": "MIT"
        },
        "node_modules/remixicon": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/remixicon/-/remixicon-4.1.0.tgz",
            "integrity": "sha512-N5dmpN6bjB7GyHi8RqhKp8Fy1cfOch0m75KZQv4ZNFa2ffpXJY2FQ4TdgigZulTdwOoTwLKjBQ7GCC+bEw8LHg==",
            "license": "Apache-2.0"
        },
        "node_modules/resolve": {
            "version": "1.22.8",
            "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.8.tgz",
            "integrity": "sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "is-core-module": "^2.13.0",
                "path-parse": "^1.0.7",
                "supports-preserve-symlinks-flag": "^1.0.0"
            },
            "bin": {
                "resolve": "bin/resolve"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/resolve-from": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
            "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=4"
            }
        },
        "node_modules/reusify": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
            "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "iojs": ">=1.0.0",
                "node": ">=0.10.0"
            }
        },
        "node_modules/rimraf": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
            "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
            "deprecated": "Rimraf versions prior to v4 are no longer supported",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "glob": "^7.1.3"
            },
            "bin": {
                "rimraf": "bin.js"
            },
            "funding": {
                "url": "https://github.com/sponsors/isaacs"
            }
        },
        "node_modules/rollup": {
            "version": "4.18.0",
            "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.18.0.tgz",
            "integrity": "sha512-QmJz14PX3rzbJCN1SG4Xe/bAAX2a6NpCP8ab2vfu2GiUr8AQcr2nCV/oEO3yneFarB67zk8ShlIyWb2LGTb3Sg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@types/estree": "1.0.5"
            },
            "bin": {
                "rollup": "dist/bin/rollup"
            },
            "engines": {
                "node": ">=18.0.0",
                "npm": ">=8.0.0"
            },
            "optionalDependencies": {
                "@rollup/rollup-android-arm-eabi": "4.18.0",
                "@rollup/rollup-android-arm64": "4.18.0",
                "@rollup/rollup-darwin-arm64": "4.18.0",
                "@rollup/rollup-darwin-x64": "4.18.0",
                "@rollup/rollup-linux-arm-gnueabihf": "4.18.0",
                "@rollup/rollup-linux-arm-musleabihf": "4.18.0",
                "@rollup/rollup-linux-arm64-gnu": "4.18.0",
                "@rollup/rollup-linux-arm64-musl": "4.18.0",
                "@rollup/rollup-linux-powerpc64le-gnu": "4.18.0",
                "@rollup/rollup-linux-riscv64-gnu": "4.18.0",
                "@rollup/rollup-linux-s390x-gnu": "4.18.0",
                "@rollup/rollup-linux-x64-gnu": "4.18.0",
                "@rollup/rollup-linux-x64-musl": "4.18.0",
                "@rollup/rollup-win32-arm64-msvc": "4.18.0",
                "@rollup/rollup-win32-ia32-msvc": "4.18.0",
                "@rollup/rollup-win32-x64-msvc": "4.18.0",
                "fsevents": "~2.3.2"
            }
        },
        "node_modules/rope-sequence": {
            "version": "1.3.4",
            "resolved": "https://registry.npmjs.org/rope-sequence/-/rope-sequence-1.3.4.tgz",
            "integrity": "sha512-UT5EDe2cu2E/6O4igUr5PSFs23nvvukicWHx6GnOPlHAiiYbzNuCRQCuiUdHJQcqKalLKlrYJnjY0ySGsXNQXQ==",
            "license": "MIT"
        },
        "node_modules/run-parallel": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
            "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
            "dev": true,
            "funding": [
                {
                    "type": "github",
                    "url": "https://github.com/sponsors/feross"
                },
                {
                    "type": "patreon",
                    "url": "https://www.patreon.com/feross"
                },
                {
                    "type": "consulting",
                    "url": "https://feross.org/support"
                }
            ],
            "license": "MIT",
            "dependencies": {
                "queue-microtask": "^1.2.2"
            }
        },
        "node_modules/sass": {
            "version": "1.70.0",
            "resolved": "https://registry.npmjs.org/sass/-/sass-1.70.0.tgz",
            "integrity": "sha512-uUxNQ3zAHeAx5nRFskBnrWzDUJrrvpCPD5FNAoRvTi0WwremlheES3tg+56PaVtCs5QDRX5CBLxxKMDJMEa1WQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "chokidar": ">=3.0.0 <4.0.0",
                "immutable": "^4.0.0",
                "source-map-js": ">=0.6.2 <2.0.0"
            },
            "bin": {
                "sass": "sass.js"
            },
            "engines": {
                "node": ">=14.0.0"
            }
        },
        "node_modules/sass-loader": {
            "version": "14.1.0",
            "resolved": "https://registry.npmjs.org/sass-loader/-/sass-loader-14.1.0.tgz",
            "integrity": "sha512-LS2mLeFWA+orYxHNu+O18Xe4jR0kyamNOOUsE3NyBP4DvIL+8stHpNX0arYTItdPe80kluIiJ7Wfe/9iHSRO0Q==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "neo-async": "^2.6.2"
            },
            "engines": {
                "node": ">= 18.12.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/webpack"
            },
            "peerDependencies": {
                "@rspack/core": "0.x || 1.x",
                "node-sass": "^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0 || ^9.0.0",
                "sass": "^1.3.0",
                "sass-embedded": "*",
                "webpack": "^5.0.0"
            },
            "peerDependenciesMeta": {
                "@rspack/core": {
                    "optional": true
                },
                "node-sass": {
                    "optional": true
                },
                "sass": {
                    "optional": true
                },
                "sass-embedded": {
                    "optional": true
                },
                "webpack": {
                    "optional": true
                }
            }
        },
        "node_modules/schema-utils": {
            "version": "3.3.0",
            "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.3.0.tgz",
            "integrity": "sha512-pN/yOAvcC+5rQ5nERGuwrjLlYvLTbCibnZ1I7B1LaiAz9BRBlE9GMgE/eqV30P7aJQUf7Ddimy/RsbYO/GrVGg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@types/json-schema": "^7.0.8",
                "ajv": "^6.12.5",
                "ajv-keywords": "^3.5.2"
            },
            "engines": {
                "node": ">= 10.13.0"
            },
            "funding": {
                "type": "opencollective",
                "url": "https://opencollective.com/webpack"
            }
        },
        "node_modules/select": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/select/-/select-1.1.2.tgz",
            "integrity": "sha512-OwpTSOfy6xSs1+pwcNrv0RBMOzI39Lp3qQKUTPVVPRjCdNa5JH/oPRiqsesIskK8TVgmRiHwO4KXlV2Li9dANA==",
            "license": "MIT"
        },
        "node_modules/semver": {
            "version": "7.6.2",
            "resolved": "https://registry.npmjs.org/semver/-/semver-7.6.2.tgz",
            "integrity": "sha512-FNAIBWCx9qcRhoHcgcJ0gvU7SN1lYU2ZXuSfl04bSC5OpvDHFyJCjdNHomPXxjQlCBU67YW64PzY7/VIEH7F2w==",
            "dev": true,
            "license": "ISC",
            "bin": {
                "semver": "bin/semver.js"
            },
            "engines": {
                "node": ">=10"
            }
        },
        "node_modules/shebang-command": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
            "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "shebang-regex": "^3.0.0"
            },
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/shebang-regex": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
            "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/shelljs": {
            "version": "0.8.5",
            "resolved": "https://registry.npmjs.org/shelljs/-/shelljs-0.8.5.tgz",
            "integrity": "sha512-TiwcRcrkhHvbrZbnRcFYMLl30Dfov3HKqzp5tO5b4pt6G/SezKcYhmDg15zXVBswHmctSAQKznqNW2LO5tTDow==",
            "dev": true,
            "license": "BSD-3-Clause",
            "dependencies": {
                "glob": "^7.0.0",
                "interpret": "^1.0.0",
                "rechoir": "^0.6.2"
            },
            "bin": {
                "shjs": "bin/shjs"
            },
            "engines": {
                "node": ">=4"
            }
        },
        "node_modules/slash": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
            "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/sortablejs": {
            "version": "1.10.2",
            "resolved": "https://registry.npmjs.org/sortablejs/-/sortablejs-1.10.2.tgz",
            "integrity": "sha512-YkPGufevysvfwn5rfdlGyrGjt7/CRHwvRPogD/lC+TnvcN29jDpCifKP+rBqf+LRldfXSTh+0CGLcSg0VIxq3A==",
            "license": "MIT"
        },
        "node_modules/source-map-js": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.0.tgz",
            "integrity": "sha512-itJW8lvSA0TXEphiRoawsCksnlf8SyvmFzIhltqAHluXd88pkCd+cXJVHTDwdCr0IzwptSm035IHQktUu1QUMg==",
            "license": "BSD-3-Clause",
            "engines": {
                "node": ">=0.10.0"
            }
        },
        "node_modules/strip-ansi": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
            "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "ansi-regex": "^5.0.1"
            },
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/strip-json-comments": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
            "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=8"
            },
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/supports-color": {
            "version": "7.2.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
            "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "has-flag": "^4.0.0"
            },
            "engines": {
                "node": ">=8"
            }
        },
        "node_modules/supports-preserve-symlinks-flag": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
            "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">= 0.4"
            },
            "funding": {
                "url": "https://github.com/sponsors/ljharb"
            }
        },
        "node_modules/svg-pan-zoom": {
            "version": "3.6.1",
            "resolved": "https://registry.npmjs.org/svg-pan-zoom/-/svg-pan-zoom-3.6.1.tgz",
            "integrity": "sha512-JaKkGHHfGvRrcMPdJWkssLBeWqM+Isg/a09H7kgNNajT1cX5AztDTNs+C8UzpCxjCTRrG34WbquwaovZbmSk9g==",
            "license": "BSD-2-Clause"
        },
        "node_modules/svg.draggable.js": {
            "version": "2.2.2",
            "resolved": "https://registry.npmjs.org/svg.draggable.js/-/svg.draggable.js-2.2.2.tgz",
            "integrity": "sha512-JzNHBc2fLQMzYCZ90KZHN2ohXL0BQJGQimK1kGk6AvSeibuKcIdDX9Kr0dT9+UJ5O8nYA0RB839Lhvk4CY4MZw==",
            "license": "MIT",
            "dependencies": {
                "svg.js": "^2.0.1"
            },
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/svg.easing.js": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/svg.easing.js/-/svg.easing.js-2.0.0.tgz",
            "integrity": "sha512-//ctPdJMGy22YoYGV+3HEfHbm6/69LJUTAqI2/5qBvaNHZ9uUFVC82B0Pl299HzgH13rKrBgi4+XyXXyVWWthA==",
            "license": "MIT",
            "dependencies": {
                "svg.js": ">=2.3.x"
            },
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/svg.filter.js": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/svg.filter.js/-/svg.filter.js-2.0.2.tgz",
            "integrity": "sha512-xkGBwU+dKBzqg5PtilaTb0EYPqPfJ9Q6saVldX+5vCRy31P6TlRCP3U9NxH3HEufkKkpNgdTLBJnmhDHeTqAkw==",
            "license": "MIT",
            "dependencies": {
                "svg.js": "^2.2.5"
            },
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/svg.js": {
            "version": "2.7.1",
            "resolved": "https://registry.npmjs.org/svg.js/-/svg.js-2.7.1.tgz",
            "integrity": "sha512-ycbxpizEQktk3FYvn/8BH+6/EuWXg7ZpQREJvgacqn46gIddG24tNNe4Son6omdXCnSOaApnpZw6MPCBA1dODA==",
            "license": "MIT"
        },
        "node_modules/svg.pathmorphing.js": {
            "version": "0.1.3",
            "resolved": "https://registry.npmjs.org/svg.pathmorphing.js/-/svg.pathmorphing.js-0.1.3.tgz",
            "integrity": "sha512-49HWI9X4XQR/JG1qXkSDV8xViuTLIWm/B/7YuQELV5KMOPtXjiwH4XPJvr/ghEDibmLQ9Oc22dpWpG0vUDDNww==",
            "license": "MIT",
            "dependencies": {
                "svg.js": "^2.4.0"
            },
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/svg.resize.js": {
            "version": "1.4.3",
            "resolved": "https://registry.npmjs.org/svg.resize.js/-/svg.resize.js-1.4.3.tgz",
            "integrity": "sha512-9k5sXJuPKp+mVzXNvxz7U0uC9oVMQrrf7cFsETznzUDDm0x8+77dtZkWdMfRlmbkEEYvUn9btKuZ3n41oNA+uw==",
            "license": "MIT",
            "dependencies": {
                "svg.js": "^2.6.5",
                "svg.select.js": "^2.1.2"
            },
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/svg.resize.js/node_modules/svg.select.js": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/svg.select.js/-/svg.select.js-2.1.2.tgz",
            "integrity": "sha512-tH6ABEyJsAOVAhwcCjF8mw4crjXSI1aa7j2VQR8ZuJ37H2MBUbyeqYr5nEO7sSN3cy9AR9DUwNg0t/962HlDbQ==",
            "license": "MIT",
            "dependencies": {
                "svg.js": "^2.2.5"
            },
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/svg.select.js": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/svg.select.js/-/svg.select.js-3.0.1.tgz",
            "integrity": "sha512-h5IS/hKkuVCbKSieR9uQCj9w+zLHoPh+ce19bBYyqF53g6mnPB8sAtIbe1s9dh2S2fCmYX2xel1Ln3PJBbK4kw==",
            "license": "MIT",
            "dependencies": {
                "svg.js": "^2.6.5"
            },
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/svgmap": {
            "version": "2.10.1",
            "resolved": "https://registry.npmjs.org/svgmap/-/svgmap-2.10.1.tgz",
            "integrity": "sha512-5VbuhxD5+TLO5DXzq0t0BywtvG9iarVSGujc7Hej1x9lxV7S2ONH8Gxnhz3e4tcEjrziiIalywcSM61BTNkzcA==",
            "license": "MIT",
            "dependencies": {
                "svg-pan-zoom": "^3.6.1"
            }
        },
        "node_modules/sweetalert2": {
            "version": "11.12.2",
            "resolved": "https://registry.npmjs.org/sweetalert2/-/sweetalert2-11.12.2.tgz",
            "integrity": "sha512-Rwv5iRYlApkDSXeX22aLhhWMlWPzFxnNBVLZajkFKYhaVEfQkMOPQQRhBtSFxKBPCoko9U3SccWm9hI4o3Id0Q==",
            "license": "MIT",
            "funding": {
                "type": "individual",
                "url": "https://github.com/sponsors/limonte"
            }
        },
        "node_modules/synckit": {
            "version": "0.8.8",
            "resolved": "https://registry.npmjs.org/synckit/-/synckit-0.8.8.tgz",
            "integrity": "sha512-HwOKAP7Wc5aRGYdKH+dw0PRRpbO841v2DENBtjnR5HFWoiNByAl7vrx3p0G/rCyYXQsrxqtX48TImFtPcIHSpQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@pkgr/core": "^0.1.0",
                "tslib": "^2.6.2"
            },
            "engines": {
                "node": "^14.18.0 || >=16.0.0"
            },
            "funding": {
                "url": "https://opencollective.com/unts"
            }
        },
        "node_modules/text-table": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
            "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/tiny-case": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/tiny-case/-/tiny-case-1.0.3.tgz",
            "integrity": "sha512-Eet/eeMhkO6TX8mnUteS9zgPbUMQa4I6Kkp5ORiBD5476/m+PIRiumP5tmh5ioJpH7k51Kehawy2UDfsnxxY8Q==",
            "license": "MIT"
        },
        "node_modules/tiny-emitter": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/tiny-emitter/-/tiny-emitter-2.1.0.tgz",
            "integrity": "sha512-NB6Dk1A9xgQPMoGqC5CVXn123gWyte215ONT5Pp5a0yt4nlEoO1ZWeCwpncaekPHXO60i47ihFnZPiRPjRMq4Q==",
            "license": "MIT"
        },
        "node_modules/tippy.js": {
            "version": "6.3.7",
            "resolved": "https://registry.npmjs.org/tippy.js/-/tippy.js-6.3.7.tgz",
            "integrity": "sha512-E1d3oP2emgJ9dRQZdf3Kkn0qJgI6ZLpyS5z6ZkY1DF3kaQaBsGZsndEpHwx+eC+tYM41HaSNvNtLx8tU57FzTQ==",
            "license": "MIT",
            "dependencies": {
                "@popperjs/core": "^2.9.0"
            }
        },
        "node_modules/to-regex-range": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
            "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "is-number": "^7.0.0"
            },
            "engines": {
                "node": ">=8.0"
            }
        },
        "node_modules/toposort": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/toposort/-/toposort-2.0.2.tgz",
            "integrity": "sha512-0a5EOkAUp8D4moMi2W8ZF8jcga7BgZd91O/yabJCFY8az+XSzeGyTKs0Aoo897iV1Nj6guFq8orWDS96z91oGg==",
            "license": "MIT"
        },
        "node_modules/ts-api-utils": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-1.3.0.tgz",
            "integrity": "sha512-UQMIo7pb8WRomKR1/+MFVLTroIvDVtMX3K6OUir8ynLyzB8Jeriont2bTAtmNPa1ekAgN7YPDyf6V+ygrdU+eQ==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=16"
            },
            "peerDependencies": {
                "typescript": ">=4.2.0"
            }
        },
        "node_modules/tslib": {
            "version": "2.6.3",
            "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.6.3.tgz",
            "integrity": "sha512-xNvxJEOUiWPGhUuUdQgAJPKOOJfGnIyKySOc09XkKsgdUV/3E2zvwZYdejjmRgPCgcym1juLH3226yA7sEFJKQ==",
            "dev": true,
            "license": "0BSD"
        },
        "node_modules/type-check": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
            "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "prelude-ls": "^1.2.1"
            },
            "engines": {
                "node": ">= 0.8.0"
            }
        },
        "node_modules/type-fest": {
            "version": "0.20.2",
            "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
            "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
            "dev": true,
            "license": "(MIT OR CC0-1.0)",
            "engines": {
                "node": ">=10"
            },
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/typescript": {
            "version": "5.5.3",
            "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.5.3.tgz",
            "integrity": "sha512-/hreyEujaB0w76zKo6717l3L0o/qEUtRgdvUBvlkhoWeOVMjMuHNHk0BRBzikzuGDqNmPQbg5ifMEqsHLiIUcQ==",
            "dev": true,
            "license": "Apache-2.0",
            "bin": {
                "tsc": "bin/tsc",
                "tsserver": "bin/tsserver"
            },
            "engines": {
                "node": ">=14.17"
            }
        },
        "node_modules/uc.micro": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/uc.micro/-/uc.micro-2.1.0.tgz",
            "integrity": "sha512-ARDJmphmdvUk6Glw7y9DQ2bFkKBHwQHLi2lsaH6PPmz/Ka9sFOBsBluozhDltWmnv9u/cF6Rt87znRTPV+yp/A==",
            "license": "MIT"
        },
        "node_modules/undici-types": {
            "version": "5.26.5",
            "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz",
            "integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/upath": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/upath/-/upath-2.0.1.tgz",
            "integrity": "sha512-1uEe95xksV1O0CYKXo8vQvN1JEbtJp7lb7C5U9HMsIp6IVwntkH/oNUzyVNQSd4S1sYk2FpSSW44FqMc8qee5w==",
            "license": "MIT",
            "engines": {
                "node": ">=4",
                "yarn": "*"
            }
        },
        "node_modules/uri-js": {
            "version": "4.4.1",
            "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
            "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
            "dev": true,
            "license": "BSD-2-Clause",
            "dependencies": {
                "punycode": "^2.1.0"
            }
        },
        "node_modules/util-deprecate": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
            "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/vee-validate": {
            "version": "4.6.7",
            "resolved": "https://registry.npmjs.org/vee-validate/-/vee-validate-4.6.7.tgz",
            "integrity": "sha512-8W9cR/EGqPuHJpodYriAlp5BndQf/IWFifZLyIWeNs7RGB+B0jr50TACjzgtwtp5qE6hgRskOToEhcfhWJdgyw==",
            "license": "MIT",
            "dependencies": {
                "@vue/devtools-api": "^6.1.4"
            },
            "peerDependencies": {
                "vue": "^3.0.0"
            }
        },
        "node_modules/vite": {
            "version": "5.3.2",
            "resolved": "https://registry.npmjs.org/vite/-/vite-5.3.2.tgz",
            "integrity": "sha512-6lA7OBHBlXUxiJxbO5aAY2fsHHzDr1q7DvXYnyZycRs2Dz+dXBWuhpWHvmljTRTpQC2uvGmUFFkSHF2vGo90MA==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "esbuild": "^0.21.3",
                "postcss": "^8.4.38",
                "rollup": "^4.13.0"
            },
            "bin": {
                "vite": "bin/vite.js"
            },
            "engines": {
                "node": "^18.0.0 || >=20.0.0"
            },
            "funding": {
                "url": "https://github.com/vitejs/vite?sponsor=1"
            },
            "optionalDependencies": {
                "fsevents": "~2.3.3"
            },
            "peerDependencies": {
                "@types/node": "^18.0.0 || >=20.0.0",
                "less": "*",
                "lightningcss": "^1.21.0",
                "sass": "*",
                "stylus": "*",
                "sugarss": "*",
                "terser": "^5.4.0"
            },
            "peerDependenciesMeta": {
                "@types/node": {
                    "optional": true
                },
                "less": {
                    "optional": true
                },
                "lightningcss": {
                    "optional": true
                },
                "sass": {
                    "optional": true
                },
                "stylus": {
                    "optional": true
                },
                "sugarss": {
                    "optional": true
                },
                "terser": {
                    "optional": true
                }
            }
        },
        "node_modules/vite-plugin-vuetify": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/vite-plugin-vuetify/-/vite-plugin-vuetify-2.0.1.tgz",
            "integrity": "sha512-GlRVAruohE8b0FqmeYYh1cYg3n8THGOv066uMA44qLv9uhUxSLw55CS7fi2yU0wH363TJ2vq36zUsPTjRFrjGQ==",
            "license": "MIT",
            "dependencies": {
                "@vuetify/loader-shared": "^2.0.1",
                "debug": "^4.3.3",
                "upath": "^2.0.1"
            },
            "engines": {
                "node": "^18.0.0 || >=20.0.0"
            },
            "peerDependencies": {
                "vite": ">=5",
                "vue": "^3.0.0",
                "vuetify": "^3.0.0"
            }
        },
        "node_modules/vite/node_modules/@esbuild/win32-x64": {
            "version": "0.21.5",
            "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
            "integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
            "cpu": [
                "x64"
            ],
            "dev": true,
            "license": "MIT",
            "optional": true,
            "os": [
                "win32"
            ],
            "engines": {
                "node": ">=12"
            }
        },
        "node_modules/vite/node_modules/esbuild": {
            "version": "0.21.5",
            "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.21.5.tgz",
            "integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
            "dev": true,
            "hasInstallScript": true,
            "license": "MIT",
            "bin": {
                "esbuild": "bin/esbuild"
            },
            "engines": {
                "node": ">=12"
            },
            "optionalDependencies": {
                "@esbuild/aix-ppc64": "0.21.5",
                "@esbuild/android-arm": "0.21.5",
                "@esbuild/android-arm64": "0.21.5",
                "@esbuild/android-x64": "0.21.5",
                "@esbuild/darwin-arm64": "0.21.5",
                "@esbuild/darwin-x64": "0.21.5",
                "@esbuild/freebsd-arm64": "0.21.5",
                "@esbuild/freebsd-x64": "0.21.5",
                "@esbuild/linux-arm": "0.21.5",
                "@esbuild/linux-arm64": "0.21.5",
                "@esbuild/linux-ia32": "0.21.5",
                "@esbuild/linux-loong64": "0.21.5",
                "@esbuild/linux-mips64el": "0.21.5",
                "@esbuild/linux-ppc64": "0.21.5",
                "@esbuild/linux-riscv64": "0.21.5",
                "@esbuild/linux-s390x": "0.21.5",
                "@esbuild/linux-x64": "0.21.5",
                "@esbuild/netbsd-x64": "0.21.5",
                "@esbuild/openbsd-x64": "0.21.5",
                "@esbuild/sunos-x64": "0.21.5",
                "@esbuild/win32-arm64": "0.21.5",
                "@esbuild/win32-ia32": "0.21.5",
                "@esbuild/win32-x64": "0.21.5"
            }
        },
        "node_modules/vscode-uri": {
            "version": "3.0.8",
            "resolved": "https://registry.npmjs.org/vscode-uri/-/vscode-uri-3.0.8.tgz",
            "integrity": "sha512-AyFQ0EVmsOZOlAnxoFOGOq1SQDWAB7C6aqMGS23svWAllfOaxbuFvcT8D1i8z3Gyn8fraVeZNNmN6e9bxxXkKw==",
            "dev": true,
            "license": "MIT"
        },
        "node_modules/vue": {
            "version": "3.4.17",
            "resolved": "https://registry.npmjs.org/vue/-/vue-3.4.17.tgz",
            "integrity": "sha512-uRaVQNbCblmh8V5cEV0HzJoKHvzfKQPGr+ejfwDyCtsu+v/0F6iHesqvuO19iS4+dSENQcEEO1UXZirpDI+nkg==",
            "license": "MIT",
            "dependencies": {
                "@vue/compiler-dom": "3.4.17",
                "@vue/compiler-sfc": "3.4.17",
                "@vue/runtime-dom": "3.4.17",
                "@vue/server-renderer": "3.4.17",
                "@vue/shared": "3.4.17"
            },
            "peerDependencies": {
                "typescript": "*"
            },
            "peerDependenciesMeta": {
                "typescript": {
                    "optional": true
                }
            }
        },
        "node_modules/vue-cli-plugin-vuetify": {
            "version": "2.5.8",
            "resolved": "https://registry.npmjs.org/vue-cli-plugin-vuetify/-/vue-cli-plugin-vuetify-2.5.8.tgz",
            "integrity": "sha512-uqi0/URJETJBbWlQHD1l0pnY7JN8Ytu+AL1fw50HFlGByPa8/xx+mq19GkFXA9FcwFT01IqEc/TkxMPugchomg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "null-loader": "^4.0.1",
                "semver": "^7.1.2",
                "shelljs": "^0.8.3"
            },
            "peerDependencies": {
                "webpack": "^4.0.0 || ^5.0.0"
            },
            "peerDependenciesMeta": {
                "sass-loader": {
                    "optional": true
                },
                "vuetify-loader": {
                    "optional": true
                }
            }
        },
        "node_modules/vue-clipboard3": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/vue-clipboard3/-/vue-clipboard3-2.0.0.tgz",
            "integrity": "sha512-Q9S7dzWGax7LN5iiSPcu/K1GGm2gcBBlYwmMsUc5/16N6w90cbKow3FnPmPs95sungns4yvd9/+JhbAznECS2A==",
            "license": "MIT",
            "dependencies": {
                "clipboard": "^2.0.6"
            }
        },
        "node_modules/vue-demi": {
            "version": "0.14.8",
            "resolved": "https://registry.npmjs.org/vue-demi/-/vue-demi-0.14.8.tgz",
            "integrity": "sha512-Uuqnk9YE9SsWeReYqK2alDI5YzciATE0r2SkA6iMAtuXvNTMNACJLJEXNXaEy94ECuBe4Sk6RzRU80kjdbIo1Q==",
            "hasInstallScript": true,
            "license": "MIT",
            "bin": {
                "vue-demi-fix": "bin/vue-demi-fix.js",
                "vue-demi-switch": "bin/vue-demi-switch.js"
            },
            "engines": {
                "node": ">=12"
            },
            "funding": {
                "url": "https://github.com/sponsors/antfu"
            },
            "peerDependencies": {
                "@vue/composition-api": "^1.0.0-rc.1",
                "vue": "^3.0.0-0 || ^2.6.0"
            },
            "peerDependenciesMeta": {
                "@vue/composition-api": {
                    "optional": true
                }
            }
        },
        "node_modules/vue-draggable-next": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/vue-draggable-next/-/vue-draggable-next-2.2.1.tgz",
            "integrity": "sha512-EAMS1IRHF0kZO0o5PMOinsQsXIqsrKT1hKmbICxG3UEtn7zLFkLxlAtajcCcUTisNvQ6TtCB5COjD9a1raNADw==",
            "license": "MIT",
            "peerDependencies": {
                "sortablejs": "^1.14.0",
                "vue": "^3.2.2"
            }
        },
        "node_modules/vue-eslint-parser": {
            "version": "9.4.3",
            "resolved": "https://registry.npmjs.org/vue-eslint-parser/-/vue-eslint-parser-9.4.3.tgz",
            "integrity": "sha512-2rYRLWlIpaiN8xbPiDyXZXRgLGOtWxERV7ND5fFAv5qo1D2N9Fu9MNajBNc6o13lZ+24DAWCkQCvj4klgmcITg==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "debug": "^4.3.4",
                "eslint-scope": "^7.1.1",
                "eslint-visitor-keys": "^3.3.0",
                "espree": "^9.3.1",
                "esquery": "^1.4.0",
                "lodash": "^4.17.21",
                "semver": "^7.3.6"
            },
            "engines": {
                "node": "^14.17.0 || >=16.0.0"
            },
            "funding": {
                "url": "https://github.com/sponsors/mysticatea"
            },
            "peerDependencies": {
                "eslint": ">=6.0.0"
            }
        },
        "node_modules/vue-i18n": {
            "version": "9.13.1",
            "resolved": "https://registry.npmjs.org/vue-i18n/-/vue-i18n-9.13.1.tgz",
            "integrity": "sha512-mh0GIxx0wPtPlcB1q4k277y0iKgo25xmDPWioVVYanjPufDBpvu5ySTjP5wOrSvlYQ2m1xI+CFhGdauv/61uQg==",
            "license": "MIT",
            "dependencies": {
                "@intlify/core-base": "9.13.1",
                "@intlify/shared": "9.13.1",
                "@vue/devtools-api": "^6.5.0"
            },
            "engines": {
                "node": ">= 16"
            },
            "funding": {
                "url": "https://github.com/sponsors/kazupon"
            },
            "peerDependencies": {
                "vue": "^3.0.0"
            }
        },
        "node_modules/vue-router": {
            "version": "4.0.12",
            "resolved": "https://registry.npmjs.org/vue-router/-/vue-router-4.0.12.tgz",
            "integrity": "sha512-CPXvfqe+mZLB1kBWssssTiWg4EQERyqJZes7USiqfW9B5N2x+nHlnsM1D3b5CaJ6qgCvMmYJnz+G0iWjNCvXrg==",
            "license": "MIT",
            "dependencies": {
                "@vue/devtools-api": "^6.0.0-beta.18"
            },
            "peerDependencies": {
                "vue": "^3.0.0"
            }
        },
        "node_modules/vue-scrollto": {
            "version": "2.20.0",
            "resolved": "https://registry.npmjs.org/vue-scrollto/-/vue-scrollto-2.20.0.tgz",
            "integrity": "sha512-7i+AGKJTThZnMEkhIPgrZjyAX+fXV7/rGdg+CV283uZZwCxwiMXaBLTmIc5RTA4uwGnT+E6eJle3mXQfM2OD3A==",
            "license": "MIT",
            "dependencies": {
                "bezier-easing": "2.1.0"
            }
        },
        "node_modules/vue-tabler-icons": {
            "version": "2.21.0",
            "resolved": "https://registry.npmjs.org/vue-tabler-icons/-/vue-tabler-icons-2.21.0.tgz",
            "integrity": "sha512-rEZYPd37j1sd/9gBFtC1u8wj3Pz1S3gLP1tgexvnivzQPXphc6M+7XuTSOd7wtdpaLt1sQgDmuQxIgczzrvf0A==",
            "license": "MIT"
        },
        "node_modules/vue-template-compiler": {
            "version": "2.7.16",
            "resolved": "https://registry.npmjs.org/vue-template-compiler/-/vue-template-compiler-2.7.16.tgz",
            "integrity": "sha512-AYbUWAJHLGGQM7+cNTELw+KsOG9nl2CnSv467WobS5Cv9uk3wFcnr1Etsz2sEIHEZvw1U+o9mRlEO6QbZvUPGQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "de-indent": "^1.0.2",
                "he": "^1.2.0"
            }
        },
        "node_modules/vue-tsc": {
            "version": "2.0.26",
            "resolved": "https://registry.npmjs.org/vue-tsc/-/vue-tsc-2.0.26.tgz",
            "integrity": "sha512-tOhuwy2bIXbMhz82ef37qeiaQHMXKQkD6mOF6CCPl3/uYtST3l6fdNyfMxipudrQTxTfXVPlgJdMENBFfC1CfQ==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "@volar/typescript": "~2.4.0-alpha.15",
                "@vue/language-core": "2.0.26",
                "semver": "^7.5.4"
            },
            "bin": {
                "vue-tsc": "bin/vue-tsc.js"
            },
            "peerDependencies": {
                "typescript": ">=5.0.0"
            }
        },
        "node_modules/vue3-apexcharts": {
            "version": "1.5.2",
            "resolved": "https://registry.npmjs.org/vue3-apexcharts/-/vue3-apexcharts-1.5.2.tgz",
            "integrity": "sha512-rGbgUJDjtsyjfRF0uzwDjzt8+M7ICSRAbm1N9KCDiczW8BSpbEZuaEsJDJYnJuLFIIVXIGilYzIcjNBf6NbeYA==",
            "license": "MIT",
            "peerDependencies": {
                "apexcharts": "> 3.0.0",
                "vue": "> 3.0.0"
            }
        },
        "node_modules/vue3-carousel": {
            "version": "0.3.1",
            "resolved": "https://registry.npmjs.org/vue3-carousel/-/vue3-carousel-0.3.1.tgz",
            "integrity": "sha512-86vUkNPBzL2PVuR9w6hUsI90ccFjLp+K8cSFpRTISf+SjUQY3fMHc5CFF5MUL62v1xYYm27zEBmQupO9VQx9Kw==",
            "license": "MIT",
            "peerDependencies": {
                "vue": "^3.2.0"
            }
        },
        "node_modules/vue3-easy-data-table": {
            "version": "1.5.47",
            "resolved": "https://registry.npmjs.org/vue3-easy-data-table/-/vue3-easy-data-table-1.5.47.tgz",
            "integrity": "sha512-q0bZBlWIwQ3FIhB+F98ylFPfBJWiS3Xv7QqBe3xS5MbRNZP96RFjaQn7C0Pi0J/aaucNW8gFWxPyh9NESS1ehw==",
            "license": "MIT",
            "dependencies": {
                "vue": "^3.2.45"
            }
        },
        "node_modules/vue3-perfect-scrollbar": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/vue3-perfect-scrollbar/-/vue3-perfect-scrollbar-2.0.0.tgz",
            "integrity": "sha512-nSWVcRyViCgt0Pe3RhU3w/BllLcFSrEzYOGlRBjSyhVmiZlERHHziffW+9P8L0IMEWouC5t+uYrgNJGSAElqMA==",
            "dependencies": {
                "perfect-scrollbar": "^1.5.5"
            },
            "peerDependencies": {
                "vue": "^3.0.0"
            }
        },
        "node_modules/vue3-print-nb": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/vue3-print-nb/-/vue3-print-nb-0.1.4.tgz",
            "integrity": "sha512-LExI7viEzplR6ZKQ2b+V4U0cwGYbVD4fut/XHvk3UPGlT5CcvIGs6VlwGp107aKgk6P8Pgx4rco3Rehv2lti3A==",
            "dependencies": {
                "vue": "^3.0.5"
            }
        },
        "node_modules/vuedraggable": {
            "version": "2.24.3",
            "resolved": "https://registry.npmjs.org/vuedraggable/-/vuedraggable-2.24.3.tgz",
            "integrity": "sha512-6/HDXi92GzB+Hcs9fC6PAAozK1RLt1ewPTLjK0anTYguXLAeySDmcnqE8IC0xa7shvSzRjQXq3/+dsZ7ETGF3g==",
            "license": "MIT",
            "dependencies": {
                "sortablejs": "1.10.2"
            }
        },
        "node_modules/vuetify": {
            "version": "3.5.3",
            "resolved": "https://registry.npmjs.org/vuetify/-/vuetify-3.5.3.tgz",
            "integrity": "sha512-z2H1HYEfFeqHTp47VbFOLAv6Nard/eP4+qIXY9c6Z/uUflLhq5K8cyXL6MKhfIzyUsto+KszjVTyX+bu7zT2QA==",
            "license": "MIT",
            "engines": {
                "node": "^12.20 || >=14.13"
            },
            "funding": {
                "type": "github",
                "url": "https://github.com/sponsors/johnleider"
            },
            "peerDependencies": {
                "typescript": ">=4.7",
                "vite-plugin-vuetify": ">=1.0.0-alpha.12",
                "vue": "^3.3.0",
                "vue-i18n": "^9.0.0",
                "webpack-plugin-vuetify": ">=2.0.0-alpha.11"
            },
            "peerDependenciesMeta": {
                "typescript": {
                    "optional": true
                },
                "vite-plugin-vuetify": {
                    "optional": true
                },
                "vue-i18n": {
                    "optional": true
                },
                "webpack-plugin-vuetify": {
                    "optional": true
                }
            }
        },
        "node_modules/vuetify-loader": {
            "version": "1.9.2",
            "resolved": "https://registry.npmjs.org/vuetify-loader/-/vuetify-loader-1.9.2.tgz",
            "integrity": "sha512-8PP2w7aAs/rjA+Izec6qY7sHVb75MNrGQrDOTZJ5IEnvl+NiFhVpU2iWdRDZ3eMS842cWxSWStvkr+KJJKy+Iw==",
            "dev": true,
            "license": "MIT",
            "dependencies": {
                "acorn": "^8.4.1",
                "acorn-walk": "^8.2.0",
                "decache": "^4.6.0",
                "file-loader": "^6.2.0",
                "loader-utils": "^2.0.0"
            },
            "peerDependencies": {
                "gm": "^1.23.0",
                "pug": "^2.0.0 || ^3.0.0",
                "sharp": "*",
                "vue": "^2.7.2",
                "vuetify": "^1.3.0 || ^2.0.0",
                "webpack": "^4.0.0 || ^5.0.0"
            },
            "peerDependenciesMeta": {
                "gm": {
                    "optional": true
                },
                "pug": {
                    "optional": true
                },
                "sharp": {
                    "optional": true
                }
            }
        },
        "node_modules/w3c-keyname": {
            "version": "2.2.8",
            "resolved": "https://registry.npmjs.org/w3c-keyname/-/w3c-keyname-2.2.8.tgz",
            "integrity": "sha512-dpojBhNsCNN7T82Tm7k26A6G9ML3NkhDsnw9n/eoxSRlVBB4CEtIQ/KTCLI2Fwf3ataSXRhYFkQi3SlnFwPvPQ==",
            "license": "MIT"
        },
        "node_modules/which": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
            "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
            "dev": true,
            "license": "ISC",
            "dependencies": {
                "isexe": "^2.0.0"
            },
            "bin": {
                "node-which": "bin/node-which"
            },
            "engines": {
                "node": ">= 8"
            }
        },
        "node_modules/word-wrap": {
            "version": "1.2.5",
            "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
            "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=0.10.0"
            }
        },
        "node_modules/wrappy": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
            "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
            "dev": true,
            "license": "ISC"
        },
        "node_modules/xml-name-validator": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-4.0.0.tgz",
            "integrity": "sha512-ICP2e+jsHvAj2E2lIHxa5tjXRlKDJo4IdvPvCXbXQGdzSfmSpNVyIKMvoZHjDY9DP0zV17iI85o90vRFXNccRw==",
            "dev": true,
            "license": "Apache-2.0",
            "engines": {
                "node": ">=12"
            }
        },
        "node_modules/yocto-queue": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
            "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
            "dev": true,
            "license": "MIT",
            "engines": {
                "node": ">=10"
            },
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        },
        "node_modules/yup": {
            "version": "1.3.3",
            "resolved": "https://registry.npmjs.org/yup/-/yup-1.3.3.tgz",
            "integrity": "sha512-v8QwZSsHH2K3/G9WSkp6mZKO+hugKT1EmnMqLNUcfu51HU9MDyhlETT/JgtzprnrnQHPWsjc6MUDMBp/l9fNnw==",
            "license": "MIT",
            "dependencies": {
                "property-expr": "^2.0.5",
                "tiny-case": "^1.0.3",
                "toposort": "^2.0.2",
                "type-fest": "^2.19.0"
            }
        },
        "node_modules/yup/node_modules/type-fest": {
            "version": "2.19.0",
            "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-2.19.0.tgz",
            "integrity": "sha512-RAH822pAdBgcNMAfWnCBU3CFZcfZ/i1eZjwFU/dsLKumyuuP3niueg2UAukXYF0E2AAoc82ZSSf9J0WQBinzHA==",
            "license": "(MIT OR CC0-1.0)",
            "engines": {
                "node": ">=12.20"
            },
            "funding": {
                "url": "https://github.com/sponsors/sindresorhus"
            }
        }
    }
}`
}