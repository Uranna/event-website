import React, {useCallback, useState} from 'react'
import {
	Container,
	Flex,
	HeaderStyled,
	Title,
	HeaderParagraph,
	Image,
	Button,
} from '@/styled-component';

import logo from '@/assets/image/logo.png';
import Nav  from './Nav';
import Registration from './Registaration';
import Modal from '@/components/Modal';

function Header() {
	const [showModal, setModal] = useState<boolean>(false)
	const closeModal = useCallback(() => setModal(false), [showModal])

	return (
		<HeaderStyled id="about-event">
			<Container>
				<Nav />
				<Flex direction='column' items='center'>
					<Image width={'142px'} height={'142px'} src={logo} alt='' />
					<Title>НАЗВАНИЕ МЕРОПРИЯТИЯ</Title>
					<HeaderParagraph transform='uppercase'>4 МАЯ 2049</HeaderParagraph>
					<HeaderParagraph>в самом сердце страны</HeaderParagraph>
					<Button onClick={() => setModal(true)}>Регистрация</Button>
				</Flex>
			</Container>
			<Modal in={showModal} closeModal={closeModal} title='Регистрация'>
				<Registration callback={closeModal} />
			</Modal>
		</HeaderStyled>
	);
}

export default Header;
