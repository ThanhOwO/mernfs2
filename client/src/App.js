import React from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material'


const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Game Reviews
                <img src="https://img.freepik.com/premium-vector/letter-c-game-logo-icon-vector-template_10060-695.jpg?w=2000" alt="" height="100" />
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