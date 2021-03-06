import React from 'react';
import { connect } from 'react-redux';
import { RouteDefinitions } from "../../Constants/Routes";
import { useTheme } from '@material-ui/core/styles';

import Photo from '../../photo.jpg'


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
                    <Typography  variant={'h6'}>
                        Software Development Intern at HouseRater
                    </Typography>
                    <p>

                    </p>

                </div>
                <div className={classes.column}>
                   <img src={Photo} border={1}
                        style={{
                            width: '81%',
                            height: '100%'

                        }}
                    />
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