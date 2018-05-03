import React, { Component } from 'react';
import styled from 'styled-components';
import Section1Background from '../../images/retrospillmessen-kids.jpg';
import Section2Background from '../../images/ka-sonicbeads.jpg';
import Section3Background from '../../images/ka-pancakebot.jpg';
import Section4Background from '../../images/ka-legov3.jpg';
import Section5Background from '../../images/ka-minecraft.jpg';
import Section6Background from '../../images/ka-brikkelauget.jpg';

import { TopTitle, HeaderTitleWrapper, Header, Wrapper } from '../Title/Title';


const Section = styled.div`
    padding: 0;
    display: flex;
    justify-content: ${props => props.justified};
    align-items: stretch;
    position: relative;
    min-height: 600px;
    background-color: black;
    @media (max-device-width: 1100px) {
      flex-direction: column;
      padding: 0;
    } 
`;

const ContentSection = styled.div`
  position: relative;
  display: block;
  width: 40%;
  min-height: 100%;
  padding: 40px;
  text-align: center;
  background: linear-gradient(${props => (props.alignment === 'left' ? '-90deg': '90deg')}, black 80%, transparent);

  @media (max-device-width: 1100px) {
    width: 100%;
    border-radius: 0;
    padding: 20px;
    background: black;
  } 

`;

const ImageSection = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 104%;
  height: 100%;
  display: block;
  opacity: 1;
  overflow: hidden;
  border: 0 solid black;
  box-shadow: 0 0 20px rgba(0,0,0,0.4);
  &:after {
    content: "";
    position: absolute;
    left: ${props => (props.alignment === 'right' ? 'auto': '0')};
    right: ${props => (props.alignment === 'right' ? '0': 'auto')};
    top: 0;
    width: 100%;
    height: 110%;
    background: url(${props => props.backgroundImage});
    background-size: cover;  
    background-position:center ${props => (props.alignment === 'right' ? 'right': 'left')};
    background-repeat: no-repeat;
  }
  @media (max-device-width: 1100px) {
    position: relative;
    height: 300px;
    width: 100%;
   
    opacity: 1;
    text-align: center;
    &:after {
      width: 100%;
      left: 0;
      right: auto;
      top: 0;
      height: 100%;

    }
  } 
`;

const ImageDescription = styled.span`
  font-family: "Rubik", sans-serif;
  position: absolute;
  text-transform: uppercase;
  font-size: 0.8em;
  right: ${props => (props.alignment === 'right' ? '40px': 'auto')};
  left: ${props => (props.alignment === 'left' ? '40px': 'auto')};
  top: 40px;
  display: inline-block;
  padding: 20px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 20px;
  color: white;
  @media (max-device-width: 1100px) {
    position: relative;
    opacity: 1;
    right: auto;
    left: auto;
    top: auto;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
  } 
`;


const ContentSectionHeader = styled.h2`
  font-family: "Rubik", sans-serif;
  font-size: 2em;
  color: #fff142;
  position: relative;
  font-weight: bold;
`;

const ContentSectionParagraph = styled.p`
  font-family: "Rubik", sans-serif;
  font-size: 1em;
  line-height: 1.6em;
  color: white;
  position: relative;
  
`;


export default class KidsActivities extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		const language = localStorage.language || 'no';
		const translations = {
			no: {
				title: 'Barneaktiviteter',
				subtitle: 'Retrospillmessen er gøy for barn!',
				videotitle: 'Videos from Retrospillmessen',
				videosubtitle: 'Videos on our facebook page',
				sections: [
					{
						backgroundImage: Section1Background,
						imageDescription: 'Vi har eget område for barneaktiviteter',
						header: 'Gøyalt for barnefamilier',
						paragraphs: [
							`På Retrospillmessen har vi full fokus på barnefamilier. 
              Vi er en trygg og åpen messe, hvor man får god oversikt over hele hallen uansett hvor man er. Vårt hardtarbeidende crew på
              Over 80 gutter og jenter passer på at alt går rolig for seg.`,
							`Barn kjeder seg ikke på Retrospillmessen heller. De fleste unger elsker å prøve maskinene vi har utstilt. I tillegg har vi
              egne aktiviteter for barn, som perling og ansiktsmaling (PS. det er lov for voksne å være med også).`,
						],
					},
					{
						backgroundImage: Section2Background,
						imageDescription: 'Perling og ansiktsmaling',
						header: 'Retro-perling og ansiktsmaling',
						paragraphs: [
							'Vi som holder på med Retrospillmessen ønsker å inspirere til artige hobbyer for barn. Derfor har vi et eget hobbyområde med aktiviteter',
							'Retro-perling eller pikselperling har blitt en egen subkultur under retrospilling, og det er supergøy for alle! På Retrospillmessen legger vi frem egne maler og lar kidsa prøve seg på perling selv. Hvem vet, kanskje dette blir den nye hobbyen i hjemmet?',
							'På årets messe, som tidligere, kommer vi også til å tilby gratis ansiktsmaling, og flere andre hobbyaktiviteter',
						],
					},
					{
						backgroundImage: Section3Background,
						imageDescription: 'Pancakebot',
						header: 'Pancakebot (pannekakerobot)',
						paragraphs: [
							'Har du noen gang hørt om en robot som kan printe pannekaker? På Retrospillmessen får vi besøk av en!',
							'Her har du sjansen til å få din egen printede pannekake for kun 10 kr. Et must å prøve!',
							'Pancakebot kommer i samarbeid med Byskolen i Sandefjord og deres Makerspace 2087',
						],
					},
					{
						backgroundImage: Section4Background,
						imageDescription: 'LEGO Mindstorm EV3 og WeDo Roboter',
						header: 'LEGO Mindstorm EV3 og WeDo Roboter',
						paragraphs: [
							'Nysgjerring på LEGO Mindstorm? I år vil elever fra Byskolen i Sandefjord og deres Makerspace 2087 demonstrere hva de bruker Mindstorm-roboter til.',
							'Perfekt for inspirasjon til poden!',
						],
					},
					{
						backgroundImage: Section5Background,
						imageDescription: 'Minecraft i utdanning',
						header: 'Minecraft i utdanning',
						paragraphs: [
							'Fler og fler skolen bruker Minecraft i utdanning, og i rette hender kan det være et fantastisk læringsverktøy!',
							'Elevene fra Byskolen i Sandefjord og deres Makerspace 2087 vil demonstrere hvordan det blir tatt i bruk i utdanningsøyemed',
						],
					},
					{
						backgroundImage: Section6Background,
						imageDescription: 'Brikkelauget',
						header: 'Brikkelauget viser frem LEGO-kreasjoner',
						paragraphs: [
							'Brikkelauget er en norsk forening for voksne LEGO-entusiaster i alle aldre. I år kommer de til messa vår med en kul stand!',
							'Bli inspirert av deres artige LEGO-kreasjoner',
						],
					},
				],
			},
			en: {
				title: 'Welcome to Retrospillmessen',
				subtitle: 'Norwegian festival for retrofans!',
				videotitle: 'Videos from the convention',
				videosubtitle: 'There are plenty more videos on our facebook page',
				sections: [
					{
						backgroundImage: Section1Background,
						imageDescription: 'Vi har eget område for barneaktiviteter',
						header: 'Gøyalt for barnefamilier',
						paragraphs: [
							`På Retrospillmessen har vi full fokus på barnefamilier. 
              Vi er en trygg og åpen messe, hvor man får god oversikt over hele hallen uansett hvor man er. Vårt hardtarbeidende crew på
              Over 80 gutter og jenter passer på at alt går rolig for seg.`,
							`Barn kjeder seg ikke på Retrospillmessen heller. De fleste unger elsker å prøve maskinene vi har utstilt. I tillegg har vi
              egne aktiviteter for barn, som perling og ansiktsmaling (PS. det er lov for voksne å være med også).`,
						],
					},
					{
						backgroundImage: Section2Background,
						imageDescription: 'Perling og ansiktsmaling',
						header: 'Retro-perling og ansiktsmaling',
						paragraphs: [
							'Vi som holder på med Retrospillmessen ønsker å inspirere til artige hobbyer for barn. Derfor har vi et eget hobbyområde med aktiviteter',
							'Retro-perling eller pikselperling har blitt en egen subkultur under retrospilling, og det er supergøy for alle! På Retrospillmessen legger vi frem egne maler og lar kidsa prøve seg på perling selv. Hvem vet, kanskje dette blir den nye hobbyen i hjemmet?',
							'På årets messe, som tidligere, kommer vi også til å tilby gratis ansiktsmaling, og flere andre hobbyaktiviteter',
						],
					},
					{
						backgroundImage: Section3Background,
						imageDescription: 'Pancakebot',
						header: 'Pancakebot (pannekakerobot)',
						paragraphs: [
							'Har du noen gang hørt om en robot som kan printe pannekaker? På Retrospillmessen får vi besøk av en!',
							'Her har du sjansen til å få din egen printede pannekake for kun 10 kr. Et must å prøve!',
							'Pancakebot kommer i samarbeid med Byskolen i Sandefjord og deres Makerspace 2087',
						],
					},
					{
						backgroundImage: Section4Background,
						imageDescription: 'LEGO Mindstorm EV3 og WeDo Roboter',
						header: 'LEGO Mindstorm EV3 og WeDo Roboter',
						paragraphs: [
							'Nysgjerring på LEGO Mindstorm? I år vil elever fra Byskolen i Sandefjord og deres Makerspace 2087 demonstrere hva de bruker Mindstorm-roboter til.',
							'Perfekt for inspirasjon til poden!',
						],
					},
					{
						backgroundImage: Section5Background,
						imageDescription: 'Minecraft i utdanning',
						header: 'Minecraft i utdanning',
						paragraphs: [
							'Fler og fler skolen bruker Minecraft i utdanning, og i rette hender kan det være et fantastisk læringsverktøy!',
							'Elevene fra Byskolen i Sandefjord og deres Makerspace 2087 vil demonstrere hvordan det blir tatt i bruk i utdanningsøyemed',
						],
					},
					{
						backgroundImage: Section6Background,
						imageDescription: 'Brikkelauget',
						header: 'Brikkelauget viser frem LEGO-kreasjoner',
						paragraphs: [
							'Brikkelauget er en norsk forening for voksne LEGO-entusiaster i alle aldre. I år kommer de til messa vår med en kul stand!',
							'Bli inspirert av deres artige LEGO-kreasjoner',
						],
					},
				],
			},
		};
		let sectionToggle = false;
		const translation = translations[language];
		const sections = translation.sections.map((a, k) => {
			const flex = sectionToggle ? 'flex-start': 'flex-end';
			const imageAligment = sectionToggle ? 'right': 'left';
			sectionToggle = !sectionToggle;
			return (
				<Section justified={flex} key={k}>

					<ImageSection backgroundImage={a.backgroundImage} alignment={imageAligment} />
					<ImageDescription alignment={imageAligment}>{a.imageDescription}</ImageDescription>
					<ContentSection alignment={imageAligment}>
						<ContentSectionHeader>{a.header}</ContentSectionHeader>
						{a.paragraphs.map((c, ck) => (
							<ContentSectionParagraph key={ck}>
								{c}
							</ContentSectionParagraph>
						))}
					</ContentSection>
				</Section>
			);
		});

		return (
			<Wrapper>
				<Header>
					<HeaderTitleWrapper>
						<TopTitle>{translation.title}</TopTitle>
						<p>{translation.subtitle}</p>
					</HeaderTitleWrapper>
				</Header>

				{sections}
			</Wrapper>
		);
	}
}
