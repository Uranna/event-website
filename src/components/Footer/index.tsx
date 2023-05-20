import {
	Container,
	Flex,
	Paragraph,
	Image,
	FooterStyled,
} from '../../styled-component';

import logo from './../../assets/image/full-logo.png';

function Footer() {
	return (
		<FooterStyled>
			<Container>
				<Flex direction='column' items='center' gapY='1rem'>
					<Image width='130px' height='28px' src={logo} alt='' />
					<Paragraph align='center' color='inherit'>
						© DIRECTUM, 2019
					</Paragraph>
				</Flex>
			</Container>
		</FooterStyled>
	);
}

export default Footer;
