import Home from "@material-ui/icons/Home"
import Dashboard from "@material-ui/icons/Dashboard"
import Business from "@material-ui/icons/Business"
import GraphicEq from "@material-ui/icons/GraphicEq"
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { RouteDefinitions } from "./Routes";

export default [
    {
        title: RouteDefinitions.HOME.label,
        routeId: RouteDefinitions.HOME.id,
        Icon: Home
    },
    {
        title: 'Projects',
        Icon: Dashboard,
        children: [
            {
                title: 'Assembly RValue Calculator',
                routeId: RouteDefinitions.CALCULATOR.id,
                Icon: GraphicEq,
            }, {
                title: 'Login Form',
                routeId: RouteDefinitions.LOGIN_FORM.id,
                Icon: PeopleAltIcon,
            }
        ]
    }, {
        title: 'About',
        routeId: RouteDefinitions.ABOUT.id,
        Icon: Business,
    },
];