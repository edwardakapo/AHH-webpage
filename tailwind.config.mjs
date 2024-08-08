/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    screens:{
			'mobile' : { 'max' : '600px'},
			'mobile-md' : { 'max' : '760px'},
			'tablet' : { 'min' : '601px', 'max' : '859px'},
      'tablet-sm' : {'min' : '601px', 'max' : '760px'},
      'tablet-md' : {'min' : '761px', 'max' : '1023px'},
			'laptop' : { 'min' : '860px', 'max' : '1279px'},
      'laptop-sm' : { 'min' : '860px', 'max' : '1023px'},
      'laptop-md' : {'min': '1024px', 'max' : '1279px'},
			'desktop' : { 'min' : '1280px'},

			'md-min': '860px',
			// => @media (min-width: 860px) { ... }
			'md-max': {'max' : '859px' },
			// => @media (min-width: 860px) { ... }
      'sm-max' : {'max' : '601px'},

      'tb-max' : {'max' : '1023px'},
		},
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily : {
        FatFace : [ 'Abril Fatface' , 'serif'],
        NotoSans : [' Noto Sans', 'sans-serif'],
        Noticia : [' Noticia Text', 'serif']
      },
      colors: {
        'button' : '#3B4323',
				'logo' : "#3B4323" ,
				cards : {
          50 : '#dde3c9a4',
					100 : '#DDE3C9',
					200 : '#D6DEC2',
					300 : '#A9BA78',
				},
				'footer' : '#555E3E',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-in-out",
        "accordion-up": "accordion-up 0.25s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}