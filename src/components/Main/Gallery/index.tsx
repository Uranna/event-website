import { slides } from '@/configs/gallery';
import {
	GalleryButton,
	GalleryButtonsContainer,
	GalleryContainer,
	GalleryImage,
} from '@/styled-component';
import { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';

interface GalleryProps {}

const Gallery: FunctionComponent<GalleryProps> = () => {
	const [slide, setSlide] = useState<number>(0);
    const timer = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => setSlide(slide + 1 >= slides.length ? 0 : slide + 1), 5000)
    }, [slide]);
	const changeSlide = useCallback((index: number) => setSlide(index), []);

	return (
		<GalleryContainer>
			{slides.map((image, index) => (
				<GalleryImage key={image.id} className={`${slide === index ? 'active' : ''}`} src={image.src} alt={''} />
			))}
			<GalleryButtonsContainer>
				{slides.map((image: any, index) => (
					<GalleryButton
                        className={`${slide === index ? 'active' : ''} `}
						key={image.id}
						onClick={() => {
							changeSlide(index);
						}}
					/>
				))}
			</GalleryButtonsContainer>
		</GalleryContainer>
	);
};

export default Gallery;
