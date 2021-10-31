import React from 'react';
import styled from 'styled-components';
import { mq } from '../styles/themes';

export default function ProjectCard(props) {
	const { projectName, hrefLink, imgSrc, imgAlt } =
		props.project;

	return (
		<ProjectTile
			href={hrefLink}
			target="_blank"
			rel="noreferrer"
			{...props}
			className="horizontal-scrolling"
		>
			<ImageContainer>
				<img src={imgSrc} alt={imgAlt} />
			</ImageContainer>
			<ProjectTitle>{projectName}</ProjectTitle>
		</ProjectTile>
	);
}

const ProjectTile = styled.div`
	display: flex;
	flex-direction: column;
	text-decoration: none;
	${mq({ width: ['300px', '300px', '500px'] })};
	margin: 1rem;
	// border: 1px solid white;

	&:hover {
		h4 {
			transform: translateY(0);
		}
	}

	@media (max-width: 280px) {
		width: 110px;
	}
`;

const ImageContainer = styled.div`
	position: relative;
	display: flex;
	z-index: 2;
	
	img {
		border-radius: 5px;
		width: 100%;
	}
`;

const ProjectTitle = styled.h4`
	display: flex;
	flex-grow: 1;
	margin: 0;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	z-index: 1;

	transform: translateY(-3rem);
	${mq({
		transform: [
			'none',
			'translateY(-4rem)',
			'translateY(-4rem)'
		]
	})};
	transition: ease-in-out 0.4s;
`;
