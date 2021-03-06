import React from 'react';
import logo from './logo.png';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';


const Navbar = () => {
return (
	<>
	<Nav className="main-body">
		<Bars />

		<NavMenu>
		 <img className="nav-logo" src={logo} alt="Logo" height="100%;" />
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/solutions' activeStyle>
			Solutions
		</NavLink>
		<NavLink to='/annual' activeStyle>
			Annual Report
		</NavLink>
		<NavLink to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/sign-up'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};


export default Navbar;
