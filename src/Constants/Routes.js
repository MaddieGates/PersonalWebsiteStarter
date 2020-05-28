import Home from "../Components/Routes/Home";
import About from "../Components/Routes/About";
import Calculator from "../Components/Routes/Projects/Calculator";
import LoginForm from "../Components/Routes/Projects/LoginForm";

export const RouteDefinitions = {
    HOME: {
        label: "Home",
        id: "HOME",
    },
    ABOUT: {
        label: "About",
        id: 'ABOUT'
    },
    CALCULATOR: {
        label: "Calculator",
        id: 'CALCULATOR'
    },
    LOGIN_FORM: {
        label: "Login Form",
        id: 'LOGIN_FORM'
    }
}

export default [
    {
        title: RouteDefinitions.HOME.label,
        path: '/',
        routeId: RouteDefinitions.HOME.id,
        Component: Home
    },
    {
        title: RouteDefinitions.ABOUT.label,
        path: '/about',
        routeId: RouteDefinitions.ABOUT.id,
        Component: About
    }, {
        title: RouteDefinitions.CALCULATOR.label,
        path: '/projects/calculator',
        routeId: RouteDefinitions.CALCULATOR.id,
        Component: Calculator

    }, { title: RouteDefinitions.LOGIN_FORM.label,
        path: '/projects/loginForm',
        routeId: RouteDefinitions.LOGIN_FORM.id,
        Component: LoginForm
    }
];