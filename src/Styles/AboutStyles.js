import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
   /* column: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left'
    },*/
    AppBar: {
        top: 'auto',
        bottom: 0,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },

    }

}))