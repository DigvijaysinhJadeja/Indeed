

import {AppBar,Toolbar , styled} from '@mui/material';
import {Link} from 'react-router-dom';
import { routhPath } from '../routes/route';
import logo from './logo2.png'

const StyledAppBar = styled(AppBar)({ // used for background colour and change the css of material UI little bit
    background: "#2d2d2d",
    height: 64,
    '& > div >*':{
        textDecoration: 'none',
        color: 'inherit',
        marginRight: 20,
        fontSize: 14
    }
}) 

const Header = () => {
    //const logo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";
    return (
        <StyledAppBar>
            <Toolbar>
                <Link to ={routhPath.home}>
                <img src = {logo} alt="logo" style = {{ width: 150, marginBottom: 0 }}/>
                </Link>
                <Link to = {routhPath.create}>Post a Job</Link>
                <Link to = {routhPath.posts}>Find Jobs</Link>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;

//https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png