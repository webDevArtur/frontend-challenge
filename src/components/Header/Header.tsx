import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

function Header() {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/allcats" style={{ textDecoration: 'none', color: 'white'}}>
                        <Button color="inherit" size="large">
                            Все котики
                        </Button>
                    </Link>
                    <Link to="/lovelycats" style={{ textDecoration: 'none', color: 'white'}}>
                        <Button color="inherit" size="large">
                            Любимые котики
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header