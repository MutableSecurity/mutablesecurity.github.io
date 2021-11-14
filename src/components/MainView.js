import React from 'react';
import LandingPage from './LandingPage';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import logo from '../mutable-security-500.png';

class MainView extends React.Component {
    render() {
        const styles = { 
            minHeight: '100vh', 
            margin: '0 auto',
            fontFamily: 'Open Sans'
        };
        return(
        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                style={styles}
            >
                <Toolbar className="toolbar">
                    <div className="header">
                        <img src={logo} alt="logo" style={{maxWidth: '250px'}} />
                    </div>
                </Toolbar>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    justify="center"
                    style={{ minHeight: '85vh' }}
                >
                    <LandingPage/>
                </Grid>  
            </Grid>   
        </div>
        );
    }
}

export default MainView;
