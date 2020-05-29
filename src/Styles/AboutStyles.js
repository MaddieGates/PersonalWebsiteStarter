import { makeStyles, useTheme } from '@material-ui/core/styles';



const drawerWidth = 240;
const drawerWidth1 = 40

export default makeStyles((theme) => ({
    column1: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    row1: {
        width: '90%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth1}px)`,
            marginLeft: drawerWidth1,
        }
    },
    column2: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    AppBar: {
        top: 'auto',
        bottom: 0,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },

    }

}))