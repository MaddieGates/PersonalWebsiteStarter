import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 200;

export default makeStyles((theme) => ({
    column: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        width: '90%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }



}))