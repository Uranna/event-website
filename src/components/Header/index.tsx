import {
	Container,
	Flex,
	HeaderStyled,
	Title,
	HeaderParagraph,
	Image,
} from '../../styled-component';
import logo from './../../assets/image/logo.png';

function Header() {
	return (
		<HeaderStyled>
			<Container>
				<Flex direction='column' items='center'>
					<Image width={'142px'} height={'142px'} src={logo} alt='' />
					<Title>НАЗВАНИЕ МЕРОПРИЯТИЯ</Title>
					<HeaderParagraph transform='uppercase'>4 МАЯ 2049</HeaderParagraph>
					<HeaderParagraph>в самом сердце страны</HeaderParagraph>
				</Flex>
			</Container>
		</HeaderStyled>
	);
}

export default Header;
