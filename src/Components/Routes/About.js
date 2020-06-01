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
import skills from '../../skills.png';

import { borders } from '@material-ui/system';

function About(props) {
    const {
    } = props;

    const classes = useAboutStyles();
    const theme = useTheme();

    return (
        <div className={classes.startColumn}>
            <div className={classes.startRow}
                 style={{
                 minHeight: 200
                 }}
            >
                <div className={classes.startColumn}>
                    <div className={classes.startRow}>
                        <Typography variant={'h4'}>
                            Schooling
                        </Typography>
                    </div>
                <ul>
                    <li>Graduated from the School of Environmental Studies in 2019</li>
                    <li>Currently a rising sophomore at Eckerd College</li>
                    <li>Majoring in Computer Science and Environmental Studies with a minor in Math</li>
                </ul>
                    <p></p>
                    <p></p>
                    <p></p>
                    <div className={classes.startColumn}>
                        <div className={classes.startRow}>
                            <Typography variant={'h4'}>
                                Skills
                            </Typography>
                        </div>
                        <ul>
                            <li>Experience in Python, Java Script, HTML, and CSS</li>
                            <li>Proficient in Microsoft</li>
                        </ul>
                    </div>
                    <p></p>
                <Typography className={classes.root}>
                    <div className={classes.startRow}>
                        <Link href={resume} target={'-blank'}>
                            View full resume here
                        </Link>
                    </div>
                </Typography>
                </div>
                <div className={classes.centerColumn}>
                    <div className={classes.centerRow}>
                        <img src={eckerd}
                             style={{
                                 width: '30%',
                                 height: '10%'
                             }}
                        />
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <div className={classes.centerColumn}>
                        <img src={skills}
                            style={{
                                width: '30%',
                                height: '10%'
                            }}
                        />
                    </div>
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

