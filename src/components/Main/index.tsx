import React from 'react';
import {
	Container,
	Section,
	Title2,
	Paragraph,
	Flex,
	HiddenBlock,
	WelcomeParagraph,
	Table,
	OverflowBlock,
} from '@/styled-component';
import { example } from '@/configs/example';
import { speakers } from '@/configs/speakers';
import SpeakerCard from './SpeakerCard';
import Gallery from './Gallery';
import { price } from '@/configs/price';

function Main() {
	return (
		<main>
			<Section id='registration'>
				<Container>
					<Flex gapX='30px' gapY='5.75rem' className='tablet'>
						<HiddenBlock className='flex mobile-hidden'>
							<WelcomeParagraph>Дорогие друзья!</WelcomeParagraph>
							<WelcomeParagraph>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur.
							</WelcomeParagraph>
							<WelcomeParagraph>
								Excepteur sint occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</WelcomeParagraph>
						</HiddenBlock>

						<div className='flex'>
							<Title2>Регистрация</Title2>
							<Paragraph margin='0 0 1rem 0'>
								Пожалуйста, проверьте правильность введенных данных:
							</Paragraph>
							<div>
								{example.map(({ field, text, id }) => (
									<Flex key={id}>
										<Paragraph className='basic '>{field}</Paragraph>
										<Paragraph className='flex'>{text}</Paragraph>
									</Flex>
								))}
							</div>
						</div>
					</Flex>
				</Container>
			</Section>

			<Section background='transparent' id='cost-of-participation'>
				<Container>
					<Title2 margin='0 0 2rem 0' className='title-cost'>
						Стоимость участия
						<br />
						<span className='small-text'>(на 1 человека)</span>
					</Title2>

					<OverflowBlock>
						<Table minWidth='640px'>
							<thead>
								<tr>
									{price.header.map((cell) => (
										<th key={cell.id}>{cell.title}</th>
									))}
								</tr>
							</thead>
							<tbody>
								{price.body.map((row) => (
									<tr key={row.id}>
										{row.cell.map((cell) => (
											<td key={cell.id}>{cell.title}</td>
										))}
									</tr>
								))}
							</tbody>
						</Table>
					</OverflowBlock>
				</Container>
			</Section>

			<Section>
				<Container>
					<Title2 margin='0 0 2rem 0'>Галерея</Title2>
				</Container>
				<Gallery />
			</Section>

			<Section background='transparent' id='speakers'>
				<Container>
					<Title2 margin='0 0 2rem 0'>
						<span className='pc'>Наши спикеры</span>
						<span className='tablet mobile'>Готовятся к общению</span>
					</Title2>

					<Flex justify='center' wrap='wrap' gapX='2rem' gapY='1.5rem'>
						{speakers.map(({ id, ...props }) => (
							<SpeakerCard key={id} {...props} />
						))}
					</Flex>
				</Container>
			</Section>
		</main>
	);
}

export default Main;
