import styled from 'styled-components';

type Props = {
	width: string;
	height: string;
};

export const Image = styled.img.attrs<Props>((props) => ({
	width: props.width,
	height: props.height,
}))`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	object-fit: contain;
`;

export const RoundedImage = styled(Image)`
	border-radius: 50%;
	object-fit: cover;
	border: 1px solid #ffc107;
`;
