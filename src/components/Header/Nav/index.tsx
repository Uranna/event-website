import React from 'react';
import { ReactComponent as Menu } from '@/assets/image/menu.svg';
import { FunctionComponent, useCallback, useState } from 'react';
import { Burger, NavLink, NavList, NavStyled } from '@/styled-component';
import { navLinks } from '@/configs/navigation';

interface NavProps {}

const Nav: FunctionComponent<NavProps> = () => {
	const [isOpenMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
	const toggleMenu = useCallback(
		() => setOpenMobileMenu(!isOpenMobileMenu),
		[isOpenMobileMenu]
	);

	return (
		<NavStyled>
			<Burger onClick={toggleMenu} className={`${isOpenMobileMenu ? 'open-mobile-menu' : ''}`}>
				<Menu width='100%' height='100%' />
			</Burger>
			<NavList className={`${isOpenMobileMenu ? 'show' : ''}`}>
				{navLinks.map((link) => (
					<li key={link.id}>
						<NavLink href={link.href}>{link.text}</NavLink>
					</li>
				))}
			</NavList>
		</NavStyled>
	);
};

export default Nav;
