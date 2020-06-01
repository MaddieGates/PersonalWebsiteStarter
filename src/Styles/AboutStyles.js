import { makeStyles, useTheme } from '@material-ui/core/styles';



const drawerWidth = 240;
const drawerWidth1 = 30


export default makeStyles((theme) => ({
    startColumn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    centerColumn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    startRow: {
        width: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
       [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth1}px)`,
            marginLeft: drawerWidth1,
        }
    },
    centerRow: {
        width: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth1}px)`,
            marginLeft: drawerWidth1,
        }
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