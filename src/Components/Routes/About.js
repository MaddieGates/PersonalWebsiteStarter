import React from 'react';
import { connect } from 'react-redux';
import { RouteDefinitions } from "../../Constants/Routes";
import { useTheme } from '@material-ui/core/styles';
import { Typography,AppBar,Toolbar } from "@material-ui/core";
import Link from '@material-ui/core/Link';

import useAboutStyles from '../../Styles/AboutStyles';

import resume from '../../resume.pdf';
import houserater from '../../houserater.png';
import eckerd from '../../Eckerd.png';

import { borders } from '@material-ui/system';

function About(props) {
    const {
    } = props;

    const classes = useAboutStyles();
    const theme = useTheme();

    return (
        <div className={classes.column1}>
            <div
                className={classes.row1}
                style={{
                    minHeight: 250
                }}
            >
                <div
                    className={classes.column1}>
                <Typography variant={'h4'}>
                    Schooling
                </Typography>
                <ul>
                    <li>Graduated from the School of Environmental Studies in 2019</li>
                    <li>Currently a rising sophomore at Eckerd College</li>
                    <li>Majoring in Computer Science and Environmental Studies with a minor in Math</li>
                </ul>
                <Typography className={classes.root}>
                    <Link href={resume} target={'_blank'}>
                        View full resume here
                    </Link>
                </Typography>
                </div>
            <div className={classes.column2}>
                <img src={eckerd}
                     style={{
                         width: '30%',
                         height: '10%'
                     }}
                />
            </div>
            <AppBar className={classes.AppBar} position={'fixed'}>
                <Toolbar>
                     <Typography variant={'h5'}>
                         Contact Information:
                     </Typography>
                    <Toolbar>
                        <Typography variant={'h6'}>
                            maddie.gates@houserater.com
                        </Typography>
                    </Toolbar>
                </Toolbar>
            </AppBar>
            </div>
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

