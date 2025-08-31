/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'playfair': ['Playfair Display', 'Georgia', 'serif'],
        'means-web': ['Means Web', 'system-ui', '-apple-system', 'sans-serif'],
        'bevellier': ['Bevellier', 'Georgia', 'serif'],
      },
      colors: {
        // Cores da marca - Paleta Verde (Principal)
        brand: {
          green: {
            50: '#f6f7f6',   // Verde muito claro para fundos
            100: '#e8eae8',  // Verde claro para hover states
            200: '#d1d5d1',  // Verde suave
            300: '#babbb1',  // Verde claro (da marca)
            400: '#9ca09c',  // Verde intermediário
            500: '#748173',  // Verde médio (da marca)
            600: '#4f5b4f',  // Verde escuro (cor principal da marca)
            700: '#3d453d',  // Verde mais escuro
            800: '#2d332d',  // Verde muito escuro
            900: '#1f241f',  // Verde quase preto
            950: '#0f120f',  // Verde escuríssimo
          },
          orange: {
            50: '#fef7f3',   // Laranja muito claro
            100: '#fdeee6',  // Laranja claro para fundos
            200: '#fbd5c7',  // Laranja suave
            300: '#f8b8a3',  // Laranja intermediário
            400: '#f08159',  // Laranja fraco (da marca)
            500: '#be5e48',  // Laranja forte (da marca)
            600: '#a54d3a',  // Laranja mais escuro
            700: '#8a3f2f',  // Laranja escuro
            800: '#6f3326',  // Laranja muito escuro
            900: '#58281e',  // Laranja quase marrom
            950: '#2f1510',  // Laranja escuríssimo
          },
          beige: {
            50: '#fffef9',   // Bege muito claro
            100: '#fffcf0',  // Bege claro
            200: '#fff6d9',  // Bege suave
            300: '#ffe9c0',  // Bege (da marca)
            400: '#ffd89a',  // Bege mais saturado
            500: '#ffcc7a',  // Bege dourado
            600: '#e6b366',  // Bege escuro
            700: '#cc9952',  // Bege mais escuro
            800: '#b3803d',  // Bege marrom
            900: '#996629',  // Bege muito escuro
            950: '#4d3314',  // Bege escuríssimo
          },
        },
        
        // Cores neutras complementares
        neutral: {
          50: '#fafafa',   // Branco quase puro
          100: '#f5f5f5',  // Cinza muito claro
          200: '#e5e5e5',  // Cinza claro
          300: '#d4d4d4',  // Cinza médio claro
          400: '#a3a3a3',  // Cinza médio
          500: '#737373',  // Cinza
          600: '#525252',  // Cinza escuro
          700: '#404040',  // Cinza muito escuro
          800: '#262626',  // Quase preto
          900: '#171717',  // Preto suave
          950: '#0a0a0a',  // Preto
        },

        // Cores do sistema shadcn/ui
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

        // Cores de estado
        success: {
          50: '#f0f9f4',
          100: '#dcf4e3',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        info: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
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
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
