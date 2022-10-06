import React, {useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material'
import { useDispatch } from "react-redux";
import { getPosts} from './actions/posts'
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <Container maxWidth="lg">
            <AppBar sx={{borderRadius: '15px',
                        margin: '30px 0',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',}} position="static" color="inherit">
                <Typography sx={{color: 'rgba(0, 183, 255, 1)'}} variant="h2" align="center">
                    Game Reviews
                <img sx={{marginLeft: '15px'}} src="https://img.freepik.com/premium-vector/letter-c-game-logo-icon-vector-template_10060-695.jpg?w=2000" alt="" height="60" />
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    );
}

export default App;