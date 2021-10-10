import React from 'react';
import selfBust from '../images/selfBustShot.jpg';
import Fade from 'react-reveal/Fade';
import Contact from './Contact';
import styled from 'styled-components';
import { colors, mq } from '../styles/themes';

export default function About() {
	return (
		<AboutSection>
			<DescriptionContact>
				<SelfDescription>
					<Fade bottom cascade>
						<div>
							<p>
								I enjoy overcoming obstacles
								and seeing a project from
								conception to deployment.
								I'm capable of working on
								both the front and back end
								but I have an affinity for
								UI/UX design.
							</p>
							<p>
								I always love learning
								anything about software
								engineering whether it's a
								tool, framework, workflow
								enhancement or a new
								language. I particularly
								relish working in a group
								but am adept at working
								independently to find my own
								solutions.
							</p>
						</div>
					</Fade>
				</SelfDescription>
				<Contact />
			</DescriptionContact>
			<Image className="image">
				<img
					src={selfBust}
					alt="Peter Lofland bust shot"
				/>
			</Image>
		</AboutSection>
	);
}

const AboutSection = styled.div`
	text-align: center;
	border: 1px solid green;
	height: 100vh;
	display: flex;
	${mq({ flexDirection: ['column', 'column', 'row'] })};
	justify-content: space-evenly;
	align-items: center;
	${mq({ fontSize: ['.75rem', '1rem', '1rem'] })};
`;

const DescriptionContact = styled.div`
	${mq({ margin: ['1rem 0', '0 2rem', '2rem'] })};
	${mq({ flexGrow: ['1', '1', '2'] })};
	border: 1px solid green;
`;

const SelfDescription = styled.div`
	${mq({ padding: ['1rem 0', '2rem 0', '0 8rem'] })};
	flex-direction: column;
	border: 1px solid black;
	p{
		padding: 1rem;
	}
`;

const Image = styled.div`
	${mq({ height: ['200px', '400px', '600px'] })};
	flex-grow: 1;
	border: 3px solid white;
	${mq({ margin: ['2rem', '0 0 2rem 0', '3rem 6rem 3rem 0'] })};

	img {
		height: 100%;
		border-radius: 50px 20px;
		padding: 1rem;
		background-image: linear-gradient(
			45deg,
			${colors.midnightBlue},
			${colors.turquoise}
		);
		background-origin: border-box;
		box-shadow: rgba(0, 0, 0, 0.45) 1px 1px 2px;
	}
`;
