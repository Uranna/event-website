import React from 'react';
import { Flex, Paragraph, RoundedImage, Card } from '../../styled-component';

interface SpeakerCardProps {
	image: string;
	name: string;
	info: string;
}

const SpeakerCard: React.FunctionComponent<SpeakerCardProps> = ({
	image,
	name,
	info,
}) => {
	return (
		<Card direction='column' items='center'>
			<RoundedImage width={'120px'} height={'120px'} src={image} alt='' />
			<Paragraph
				size={'1.25rem'}
				leading='1.75rem'
				align='center'
				weight={600}
				margin='0.5rem 0'>
				{name}
			</Paragraph>
			<Paragraph align='center' fontStyle='italic'>
				{info}
			</Paragraph>
		</Card>
	);
};

export default SpeakerCard;
