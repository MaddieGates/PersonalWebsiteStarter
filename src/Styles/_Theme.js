import _ from 'lodash'
import { createMuiTheme } from '@material-ui/core/styles';


// Got the themes from https://material-ui.com/customization/palette/#type-light-dark-theme
// can check this in the console by running window.theme.palette
const lightTheme = {
    "common": {
        "black": "#000",
        "white": "#fff"
    },
    "type": "light",
    "primary": {
        "main": "#417828",
        "light": "rgb(71, 145, 219)",
        "dark": "rgb(17, 82, 147)",
        "contrastText": "#fff"
    },
    "secondary": {
        "main": "rgb(220, 0, 78)",
        "light": "rgb(227, 51, 113)",
        "dark": "rgb(154, 0, 54)",
        "contrastText": "#fff"
    },
    "error": {
        "light": "#e57373",
        "main": "#f44336",
        "dark": "#d32f2f",
        "contrastText": "#fff"
    },
    "grey": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
        "500": "#9e9e9e",
        "600": "#757575",
        "700": "#616161",
        "800": "#424242",
        "900": "#212121",
        "A100": "#d5d5d5",
        "A200": "#aaaaaa",
        "A400": "#303030",
        "A700": "#616161"
    },
    "contrastThreshold": 3,
    "tonalOffset": 0.2,
    "text": {
        "primary": "rgba(0, 0, 0, 0.87)",
        "secondary": "rgba(0, 0, 0, 0.54)",
        "disabled": "rgba(0, 0, 0, 0.38)",
        "hint": "rgba(0, 0, 0, 0.38)"
    },
    "divider": "rgba(0, 0, 0, 0.12)",
    "background": {
        "paper": "#fff",
        "default": "#fff",
        "level2": "#f5f5f5",
        "level1": "#fff"
    },
    "action": {
        "active": "rgba(0, 0, 0, 0.54)",
        "hover": "rgba(0, 0, 0, 0.08)",
        "hoverOpacity": 0.08,
        "selected": "rgba(0, 0, 0, 0.14)",
        "disabled": "rgba(0, 0, 0, 0.26)",
        "disabledBackground": "rgba(0, 0, 0, 0.12)"
    }
};

const darkTheme = {
    "common": {
        "black": "#000",
        "white": "#fff"
    },
    "type": "dark",
    "primary": {
        "main": "#90eaf6",
        "light": "rgb(166, 212, 250)",
        "dark": "rgb(100, 141, 174)",
        "contrastText": "rgba(0, 0, 0, 0.87)"
    },
    "secondary": {
        "main": "#f48fb1",
        "light": "rgb(246, 165, 192)",
        "dark": "rgb(170, 100, 123)",
        "contrastText": "rgba(0, 0, 0, 0.87)"
    },
    "error": {
        "light": "#e57373",
        "main": "#f44336",
        "dark": "#d32f2f",
        "contrastText": "#fff"
    },
    "grey": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
        "500": "#9e9e9e",
        "600": "#757575",
        "700": "#616161",
        "800": "#424242",
        "900": "#212121",
        "A100": "#d5d5d5",
        "A200": "#aaaaaa",
        "A400": "#303030",
        "A700": "#616161"
    },
    "contrastThreshold": 3,
    "tonalOffset": 0.2,
    "text": {
        "primary": "#fff",
        "secondary": "rgba(255, 255, 255, 0.7)",
        "disabled": "rgba(255, 255, 255, 0.5)",
        "hint": "rgba(255, 255, 255, 0.5)",
        "icon": "rgba(255, 255, 255, 0.5)"
    },
    "divider": "rgba(255, 255, 255, 0.12)",
    "background": {
        "paper": "#424242",
        "default": "#121212",
        "level2": "#333",
        "level1": "#212121"
    },
    "action": {
        "active": "#fff",
        "hover": "rgba(255, 255, 255, 0.1)",
        "hoverOpacity": 0.1,
        "selected": "rgba(255, 255, 255, 0.2)",
        "disabled": "rgba(255, 255, 255, 0.3)",
        "disabledBackground": "rgba(255, 255, 255, 0.12)"
    }
};

const themes = {
    light: lightTheme,
    dark: darkTheme
};

export default (type = 'light', fontSize = 14) => {
    const shared = {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: 'rgba(28,126,154,0.82)',
            // dark: will be calculated from palette.primary.main,
            contrastText: '#eeeeee',
        },
        secondary: {
            main: '#eeeeee',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#555555',
        },
    };

    const preferredTheme = _.get(themes, type);

    return createMuiTheme({
        palette: {
            type,
            ...preferredTheme,
            primary: {
                ...preferredTheme.primary,
                ...shared.primary
            },
            secondary: {
                ...preferredTheme.secondary,
                ...shared.secondary
            }
        },
        paletteExtras: {
            warning: {
                main: '#ff0000',
                contrastText: '#eeeeee'
            },
            danger: {
                main: '#FD9427',
                contrastText: '#eeeeee'
            },
            success: {
                main: '#42B66B',
                contrastText: '#eeeeee'
            }
        },
        typography: {
            fontSize: fontSize,
        }
    })
}