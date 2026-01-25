import React, { useLayoutEffect } from 'react';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './error/fallback';
import Layout from './layout';
import consts from '../const';
import { colorTheme } from '../theme';
import '../css/font.css';

const themeOptions = {
    typography: {
        fontFamily: consts.fontFamily,
    },
    palette: {
        mode: 'dark' as const,
        background: {
            default: colorTheme.contrast.black,
        },
        primary: {
            main: colorTheme.blue.light,
        },
        secondary: {
            main: colorTheme.green.dark,
        },
        custom: {
            ...colorTheme,
            default: colorTheme.contrast.black,
            opposite: colorTheme.contrast.white,
        },
    },
    custom: {
        ...colorTheme,
        default: colorTheme.contrast.black,
        opposite: colorTheme.contrast.white,
    },
    components: {
        MuiCssBaseline: {
            // Font is loaded via link injected at runtime; keep baseline overrides minimal
            styleOverrides: {},
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 500,
            xm: 700,
            md: 900,
            lg: 1200,
            xl: 1500,
        },
    },
};

const theme = responsiveFontSizes(createTheme(themeOptions));
(theme.palette as any).custom = themeOptions.palette.custom;
(theme as any).custom = themeOptions.custom;

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    useLayoutEffect(() => {
        // Preconnect to Google fonts
        const links: HTMLLinkElement[] = [];

        const pre1 = document.createElement('link');
        pre1.rel = 'preconnect';
        pre1.href = 'https://fonts.googleapis.com';
        pre1.crossOrigin = '';
        document.head.appendChild(pre1);
        links.push(pre1);

        const pre2 = document.createElement('link');
        pre2.rel = 'preconnect';
        pre2.href = 'https://fonts.gstatic.com';
        pre2.crossOrigin = '';
        document.head.appendChild(pre2);
        links.push(pre2);

        // Load the stylesheet with display=swap to avoid invisible text
        const sheet = document.createElement('link');
        sheet.rel = 'stylesheet';
        sheet.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap';
        document.head.appendChild(sheet);
        links.push(sheet);

        // Apply background early to avoid blank page while theme hydrates
        const prevBg = document.body.style.background;
        document.body.style.background = colorTheme.contrast.black;

        return () => {
            links.forEach((l) => l.parentNode?.removeChild(l));
            document.body.style.background = prevBg;
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <ErrorBoundary FallbackComponent={Fallback}>
                <Layout>{children}</Layout>
            </ErrorBoundary>
        </ThemeProvider>
    );
};

export default AppWrapper;
