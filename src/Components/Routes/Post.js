import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../Posts/postActions';

import { InstantManagment } from '../actions/InstantMagangment'


const Posts = ({ dispatch, loading, posts, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const renderPosts = () => {
        if (loading) return <p>Loading posts</p>
        if (hasErrors) return <p> This aint working</p>
        return posts.map(InstantMangament => InstantManagment key = {InstantManagment.id} InstantManagment={InstantManagment} />)
    }

    return (
        <section>
            <h1>Posts</h1>
            {renderPosts()}
        </section>
    )
}

const mapStateToProps = state => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
})
export default connect(mapStateToProps)(Post)