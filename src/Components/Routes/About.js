import React from 'react';
import { connect } from 'react-redux';
import { RouteDefinitions } from "../../Constants/Routes";
import { useTheme } from '@material-ui/core/styles';
import { Typography,AppBar,Toolbar } from "@material-ui/core";
import Link from '@material-ui/core/Link';

import useAboutStyles from '../../Styles/AboutStyles'

import resume from '../../resume.pdf'

function About(props) {
    const {
    } = props;

    const classes = useAboutStyles();
    const theme = useTheme();

    return (
        <div className={classes.column}>
            <Typography>
                Hi, my name is Maddie Gates and I am currently a rising sophomore at Eckerd College.
            </Typography>
            <Typography className={classes.root}>
                <Link href={resume} target={'_blank'}>
                    View resume here
                </Link>
            </Typography>
            <AppBar className={classes.AppBar} position={'fixed'}>
                <Toolbar>
                    <Typography variant={'h5'}>
                        Contact Information:
                    </Typography>
                 <Toolbar>
                     <Typography variant={'subtitle1'}>
                         Email: maddie.gates@houserater.com
                     </Typography>
                 </Toolbar>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About)