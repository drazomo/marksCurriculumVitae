import React, { useState, useRef, useEffect } from 'react'
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents'
import { TimeLineData } from '@/src/constants'
import {
	CarouselButton,
	CarouselButtonDot,
	CarouselButtons,
	CarouselContainer,
	CarouselItem,
	CarouselItemImg,
	CarouselItemText,
	CarouselItemTitle,
	CarouselMobileScrollNode,
} from './Timeline.styled'

const TOTAL_CAROUSEL_COUNT = TimeLineData.length

const Timeline = () => {
	const [activeItem, setActiveItem] = useState(0)
	const carouselRef = useRef() as React.MutableRefObject<HTMLUListElement>

	const scroll = (node: HTMLUListElement | undefined, left: number) => {
		return (node as HTMLUListElement).scrollTo({ left, behavior: 'smooth' })
	}

	const handleClick = (
		e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>,
		i: number
	) => {
		e.preventDefault()

		//Does the carousel reference exist
		if (carouselRef.current) {
			const scrollLeft = Math.floor(
				carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
			)

			scroll(carouselRef.current, scrollLeft)
		}
	}

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft /
					(carouselRef.current.scrollWidth * 0.7)) *
					TimeLineData.length
			)

			setActiveItem(index)
		}
	}

	// snap back to beginning of scroll when window is resized
	// avoids a bug where content is covered up if coming from smaller screen
	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0)
		}

		window.addEventListener('resize', handleResize)
	}, [])

	return (
		<Section id="about">
			<SectionTitle>About Me</SectionTitle>
			<SectionText>
				My journey, spanning from teaching English to successfully deploying my
				inaugural fullstack web application, unveiled my passion for the dynamic
				realm of software development. The tech landscape has granted me
				boundless avenues for growth, enabling me to channel theoretical
				concepts into tangible, high-quality software solutions. I am an
				enthusiastic, focused, and motivated developer, eager to bridge theory
				and practice for exceptional results.
			</SectionText>
			<CarouselContainer ref={carouselRef} onScroll={handleScroll}>
				<>
					{TimeLineData.map((item, index) => (
						<CarouselMobileScrollNode
							key={`timelineNode_${Math.random()}`}
							final={index === TOTAL_CAROUSEL_COUNT - 1}
						>
							<CarouselItem
								index={index}
								id={`carousel__item-${index}`}
								active={activeItem}
								onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
									handleClick(e, index)
								}
							>
								<CarouselItemTitle>
									{item.year}
									<CarouselItemImg
										width="208"
										height="6"
										viewBox="0 0 208 6"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
											fill="url(#paint0_linear)"
											fillOpacity="0.33"
										/>
										<defs>
											<linearGradient
												id="paint0_linear"
												x1="-4.30412e-10"
												y1="0.5"
												x2="208"
												y2="0.500295"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="white" />
												<stop
													offset="0.79478"
													stopColor="white"
													stopOpacity="0"
												/>
											</linearGradient>
										</defs>
									</CarouselItemImg>
								</CarouselItemTitle>
								<CarouselItemText>{item.text}</CarouselItemText>
							</CarouselItem>
						</CarouselMobileScrollNode>
					))}
				</>
			</CarouselContainer>
			<CarouselButtons>
				{TimeLineData.map((item, index) => (
					<CarouselButton
						key={`timelineBtn_${Math.random()}`}
						index={index}
						active={activeItem}
						onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
							handleClick(e, index)
						}
						type="button"
					>
						<CarouselButtonDot />
					</CarouselButton>
				))}
			</CarouselButtons>
			<SectionDivider />
		</Section>
	)
}

export default Timeline
