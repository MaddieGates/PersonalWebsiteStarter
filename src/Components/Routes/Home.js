import React from 'react';
import { connect } from 'react-redux';
import { RouteDefinitions } from "../../Constants/Routes";
import { useTheme } from '@material-ui/core/styles';


import {
    Typography
}   from '@material-ui/core';

import useHomeStyles from '../../Styles/HomeStyles'

function Home(props) {
    const {
    } = props;

    const classes = useHomeStyles();
    const theme = useTheme();

    return (
        <div className={classes.column}>
            <div
                className={classes.row}
                style={{
                    minHeight: 500
                }}
            >
                <div className={classes.column}>
                    <Typography variant={'h2'}>
                        Maddie Gates
                    </Typography>
                    <Typography  variant={'subtitle 1'}>
                        Software Development Intern at HouseRater
                    </Typography>
                </div>
                <div classname={classes.column}>
                    <Typography variant={'h4'}>
                        put picture here
                    </Typography>
                </div>
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
)(Home)