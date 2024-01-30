import {Link, useLocation} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

function Header() {
    const location = useLocation();

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/allcats" style={{textDecoration: 'none', color: 'white'}}>
                        <Button
                            color="inherit"
                            size="large"
                            sx={{
                                textTransform: 'none',
                                backgroundColor: location.pathname === '/allcats' ? '#1E88E5' : 'transparent',
                                '&:hover': {
                                    backgroundColor: location.pathname === '/allcats' ? '#1E88E5' : 'rgba(255, 255, 255, 0.08)',
                                },
                            }}
                        >
                            Все котики
                        </Button>
                    </Link>
                    <Link to="/lovelycats" style={{textDecoration: 'none', color: 'white'}}>
                        <Button
                            color="inherit"
                            size="large"
                            sx={{
                                textTransform: 'none',
                                backgroundColor: location.pathname === '/lovelycats' ? '#1E88E5' : 'transparent',
                                '&:hover': {
                                    backgroundColor: location.pathname === '/lovelycats' ? '#1E88E5' : 'rgba(255, 255, 255, 0.08)',
                                },
                            }}
                        >
                            Любимые котики
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
