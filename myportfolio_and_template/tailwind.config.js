module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    plugins: [require("daisyui"),require('@tailwindcss/typography'),],
    daisyui: {
        themes: [{
            light: {
                ...require("daisyui/dist/base")["[data-theme=light]"],
                "info": "rgba(165,234,255,0.2)",
                "base-content": "black"
            },
            dracula: {
                ...require("daisyui/dist/base")["[data-theme=dracula]"],
                "base-100": "#606060",
                "base-content": "white",
                "info": "#0026A1"
            },
        }],
        darkTheme: "dracula"
    }
}