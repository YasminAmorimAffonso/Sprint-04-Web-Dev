
/** @type {import('tailwindcss').Config} */

export default {


    content: [

        "./index.html",

        "./src/**/*.{js,ts,jsx,tsx}",

    ],

    theme: {

        extend: {

            fontFamily: {

                neubau: ["neubau", "sans-serif"],

                placard: ["placard", "sans-serif"],

                sf: ["sf", "sans-serif"],

            }

        },

        screens: {

            md: "768px",

            lg: "924px"

        },

    },

    plugins: [],


}