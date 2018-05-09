const DayPick = {
	selectTitle: {
		no: 'Velg dag',
		en: 'Select day',
	},
	selectDays: [
		{
			no: 'Lørdag 12. mai 2018',
			en: 'Saturday May 12. 2018',
		},
		{
			no: 'Søndag 13. mai 2018',
			en: 'Sunday May 13. 2018',
		},
	],
};

const EventAttributes = {
	from: {
		no: 'Fra',
		en: 'From',
	},
	to: {
		no: 'Til',
		en: 'To',

	},
};

const EventData = [
	{
		no: {
			day: 'Lørdag 12.05.2018',

			schedule: [
				{
					name: 'Neo Geo Tournament',
					description: 'Varer hele dagen. Husk å møt opp tidlig, eller registrer deg online for å bli med! <a href=/neo-geo-world-tour>Les mer her</a>',
					start: '10:00',
					end: '18:00',
					type: 'allDay',
					typedesc: 'Varer hele dagen!',
				},
				{
					name: 'Dørene åpner for VIP',
					description: 'Har du VIP-billett kommer du inn en time før ordinær åpning',
					start: '10:00',
				},
				{
					name: 'Dørene åpner for alle!',
					description: '',
					start: '11:00',
				},
				{
					name: 'Hvordan slå seg opp som Youtuber i Skandinavia (panelet foregår på engelsk)',
					description: 'Profilene bak kanalene CommonWealth Realm (136 000 subs) og Dex The Swede (61 000 subs) forteller om sine kanaler og hvordan det er å være youtuber i Skandinavia',
					info: [
						{
							name: 'CommonWealth Realm',
							url: 'guests/commonwealth-realm',
							profile: 'commonwealth.jpg',
						},
						{
							name: 'Dex The Swede',
							url: 'guests/dex-the-swede',
							profile: 'dextheswede.jpg',
						},
					],
					start: '11:30',
					end: '12:00',
					location: 'panelrommet',
				},
				{
					name: 'Ron Gilbert Q&A',
					description: 'Møt mannen bak det legendariske eventyrspillet Monkey Island. Den selvtitulerte grumpy gamer svarer på dine spørsmål',
					info: [
						{
							name: 'Ron Gilbert',
							url: 'guests/ron-gilbert',
							profile: 'rongilbert.jpg',
						},
					],
					start: '12:20',
					end: '13:20',
					location: 'panelrommet',
				},
				{
					name: 'Owlboy og norsk spillbransje Q&A',
					description: 'Jo-Remi, utvikleren bak det norske smash-hit pixel-spillet Owlboy tar med noen venner fra norske spillbransjen og holder spørrerunde! Lurer du på å jobbe med spillutvikling? Da er dette panelet for deg!',
					info: [
					],
					start: '13:40',
					end: '14:40',
					location: 'panelrommet',
				},
				{
					name: 'Al Lowe Q&A',
					description: 'Den legendariske eventyrspill-skaperen svarer på spørsmål og forteller om sin karriere',
					info: [
						{
							name: 'Al Lowe',
							url: 'guests/al-lowe',
							profile: 'allowe.jpg',
						},
					],
					start: '15:00',
					end: '16:00',
					location: 'panelrommet',
				},
				{
					name: 'Rare / Conkers Bad Fur Day / Sea of Thieves Q&A med Chris Marlow og Shawn Pile',
					description: 'To veteraner fra spillselskapet RARE snakker om firmaets historie, og kultspillene de var med å lage',
					info: [
						{
							name: 'Chris Marlow',
							url: 'guests/chris-marlow',
							profile: 'chrismarlow.jpg',
						},
						{
							name: 'Shawn Pile',
							url: 'guests/shawn-pile',
							profile: 'shawnpile.jpg',
						},
					],
					start: '16:20',
					end: '17:20',
					location: 'panel room',
				},
				{
					name: 'Completionist / Beard Bros / The National Dex Q&A',
					description: 'The Completionist tar med seg et par gjester og holder Q&A for tredje året på rad. Alltid populært!',
					info: [
						{
							name: 'The Completionist',
							url: 'guests/the-completionist',
							profile: 'thecompletionist.jpg',
						},
					],
					start: '17:40',
					end: '18:40',
					location: 'panelrommet',
				},
				{
					name: 'Avslutningskonsert med Kyoshu Orchestra og gjester!',
					description: 'Vi avslutter hoveddagen på Retrospillmessen med konsert med Kyoshu Orchestra og spesialgjester! Følg med på facebook.com/retrospillmessen for mer info',
					start: '19:00',
					end: '20:00',
					location: 'hovedscenen',
					info: [
						{
							name: 'Chris Marlow',
							url: 'guests/chris-marlow-rare',
							profile: 'chrismarlow.jpg',
						},
						{
							name: '????',
							url: 'guests/',
							profile: 'pixel-logo.png',
						},
					],
				},
				{
					name: 'Dørene stenger i hallen',
					description: '',
					start: '20:00',
					end: '',
				},
			],
		},
		en: {
			day: 'Saturday 05.12.2018',
			schedule: [
				{
					name: 'Neo Geo Tournament',
					description: 'All day event. Remember to show up early or register online to compete! <a href=/neo-geo-world-tour>More info here</a>',
					start: '10:00',
					end: '18:00',
					type: 'allDay',
					typedesc: 'All day event!',
				},
				{
					name: 'Doors open for VIP ticket holders',
					description: 'If you have VIP ticket you may enter one hour before regular opening',
					start: '10:00',
				},
				{
					name: 'Doors open for all guests!',
					description: '',
					start: '11:00',
				},
				{
					name: 'how to be a scandinavian youtuber (english spoken panel)',
					description: 'The guys behind the Youtube-channels CommonWealth Realm (136 000 subs) and Dex The Swede (61 000 subs) talk about running scandinavian youtube-channels with english language',
					info: [
						{
							name: 'CommonWealth Realm',
							url: 'guests/commonwealth-realm',
							profile: 'commonwealth.jpg',
						},
						{
							name: 'Dex The Swede',
							url: 'guests/dex-the-swede',
							profile: 'dextheswede.jpg',
						},
					],
					start: '11:30',
					end: '12:00',
					location: 'panel room',
				},
				{
					name: 'Ron Gilbert Q&A',
					description: 'Meet the creator of the legendary Monkey Island adventure games',
					info: [
						{
							name: 'Ron Gilbert',
							url: 'guests/ron-gilbert',
							profile: 'rongilbert.jpg',
						},
					],
					start: '12:20',
					end: '13:20',
					location: 'panel room',
				},
				{
					name: 'Owlboy and the Norwegian gaming scene Q&A',
					description: 'Jo-Remi, the developer behind the now cult pixel game Owlboy brings some of his friends from the game industry along for a special Q&A. Thinking of becoming a game developer? This is the panel for you!',
					info: [
					],
					start: '13:40',
					end: '14:40',
				},
				{
					name: 'Al Lowe Q&A',
					description: 'The creator of cult game Leisure Suit Larry talks about the game and answers your questions',
					info: [
						{
							name: 'Al Lowe',
							url: 'guests/al-lowe',
							profile: 'allowe.jpg',
						},
					],
					start: '15:00',
					end: '16:00',
					location: 'panel room',
				},
				{
					name: ' Rare / Conkers Bad Fur Day / Sea of Thieves Q&A with Chris Marlow og Shawn Pile',
					description: 'Two veterans from RARE talk about the history of the company and their cult games',
					info: [
						{
							name: 'Chris Marlow',
							url: 'guests/chris-marlow',
							profile: 'chrismarlow.jpg',
						},
						{
							name: 'Shawn Pile',
							url: 'guests/shawn-pile',
							profile: 'shawnpile.jpg',
						},
					],
					start: '16:20',
					end: '17:20',
					location: 'panel room',
				},

				{
					name: 'Completionist / Beard Bros / The National Dex Q&A',
					description: 'For the third year in a row American Youtuber The Completionst takes the stage to answer questions from fans. Alex and Kellie from Beard Bros and National Dex will also be joining The Completionist on stage!',
					info: [
						{
							name: 'The Completionist',
							url: 'guests/the-completionist',
							profile: 'thecompletionist.jpg',
						},
					],
					start: '17:40',
					end: '18:40',
					location: 'panel room',
				},
				{
					name: 'Concert: Kyoshu Orchestra with special guests',
					description: 'We finish the main day of Retrospillmessen of with a concert with special guests. Follow this page and our facebook page facebook.com/retrospillmessen for more information',
					start: '19:00',
					end: '20:00',
					location: 'main stage',
					info: [
						{
							name: 'Chris Marlow',
							url: 'guests/chris-marlow-rare',
							profile: 'chrismarlow.jpg',
						},
					],
				},
				{
					name: 'Doors close',
					description: '',
					start: '20:00',
					end: '',
				},
			],
		},
	}, {
		no: {
			day: 'Søndag 13.05.2018',
			schedule: [
				{
					name: 'Retro cup! Street Figher 2, Super Bomberman',
					description: 'Varer hele dagen. Husk å møt opp tidlig, eller registrer deg online for å bli med! <a href=/retro-cup>Les mer her</a>',
					start: '10:00',
					end: '18:00',
					type: 'allDay',
					typedesc: 'Varer hele dagen!',
				},
				{
					name: 'Dørene åpner for VIP',
					description: 'Har du VIP-billett kommer du inn en time før ordinær åpning',
					start: '10:00',
				},
				{
					name: 'Dørene åpner for alle!',
					description: '',
					start: '11:00',
				},
				{
					name: 'Charles Martinet Q&A',
					description: 'Mannen bak Mario svarer på spørsmål fra salen!',
					info: [
						{
							name: 'Charles Martinet',
							url: 'guests/charles-martinet',
							profile: 'charlesmartinet.jpg',
						},
					],
					start: '11:15',
					end: '12:15',
					location: 'panelrommet',
				},
				{
					name: 'Al Lowe og Ron Gilbert eventyrpanel Q&A',
					description: 'To ytterpunkter fra eventyrsjangeren, sammen for første gang?',
					info: [
						{
							name: 'Al Lowe',
							url: 'guests/al-lowe',
							profile: 'allowe.jpg',
						},
						{
							name: 'Ron Gilbert',
							url: 'guests/ron-gilbert',
							profile: 'rongilbert.jpg',
						},
					],
					start: '12:45',
					end: '13:45',
					location: 'panelrommet',
				},
				{
					name: 'John De Lancie Q&A',
					description: 'Mannen bak Q på Star Trek, Discord fra My little Pony etc.. svarer på dine spørsmål',
					info: [
						{
							name: 'John De Lancie',
							url: 'guests/john-de-lancie',
							profile: 'johndelancie.jpg',
						},
					],
					start: '14:00',
					end: '15:00',
					location: 'panelrommet',
				},
				{
					name: 'Blaster Cast live med Jon and Ray',
					description: 'To av norges mest dedikerte lekesamlere tar med seg podcasten sin på scenen og kjører et live show. Er du fan av retroleker vil du ikke gå glipp av dette!',
					start: '15:20',
					end: '16:20',
					location: 'panel room',
				},
				{
					name: 'Mortal Kombat crew Q&A',
					description: 'Daniel Pesina (Sub Zero, Scorpion, Johnny Cage), Anthony Marquez (Kung Lao) and Philip Ahn (Shang Tsung) talk about their experiences with acting in Mortal Kombat',
					info: [
					],
					start: '16:40',
					end: '17:40',
					location: 'panel room',
				},
				{
					name: 'Dørene stenger',
					description: '',
					start: '18:00',
				},
			],
		},
		en: {
			day: 'Sunday 05.13.2018',
			schedule: [
				{
					name: 'Doors open for VIP ticket holders',
					description: 'If you have VIP ticket you may enter one hour before regular opening',
					start: '10:00',
				},
				{
					name: 'Doors open for all guests!',
					description: '',
					start: '11:00',
				},
				{
					name: 'Charles Martinet Q&A',
					description: 'The voice of Super Mario answers questions from the crowd!',
					info: [
						{
							name: 'Charles Martinet',
							url: 'guests/charles-martinet',
							profile: 'charlesmartinet.jpg',
						},
					],
					start: '11:15',
					end: '12:15',
					location: 'panel room',
				},
				{
					name: 'Al Lowe and Ron Gilbert adventure game Q&A',
					description: 'Two legends, together for the first time?',
					info: [
						{
							name: 'Al Lowe',
							url: 'guests/al-lowe',
							profile: 'allowe.jpg',
						},
						{
							name: 'Ron Gilbert',
							url: 'guests/ron-gilbert',
							profile: 'rongilbert.jpg',
						},
					],
					start: '12:45',
					end: '13:45',
					location: 'panel room',
				},
				{
					name: 'John De Lancie Q&A',
					description: 'The actor behind Q from Star Trek and Discord from My little Pony is ready to answer your questions',
					info: [
						{
							name: 'John De Lancie',
							url: 'guests/john-de-lancie',
							profile: 'johndelancie.jpg',
						},
					],
					start: '14:00',
					end: '15:00',
					location: 'panel room',
				},
				{
					name: 'Blaster Cast live with Jon and Ray',
					description: 'Two of Norways most dedicated toy collectors talk about collecting and toy memories. In Norwegian',
					start: '15:20',
					end: '16:20',
					location: 'panel room',
				},
				{
					name: 'Mortal Kombat crew Q&A',
					description: 'Daniel Pesina (Sub Zero, Scorpion, Johnny Cage), Anthony Marquez (Kung Lao) and Philip Ahn (Shang Tsung) talk about their experiences with acting in Mortal Kombat',
					info: [
					],
					start: '16:40',
					end: '17:40',
					location: 'panel room',
				},
				{
					name: 'Doors close',
					description: '',
					start: '18:00',
				},
			],
		},
	},
];

export default EventData;
export { EventData, DayPick, EventAttributes };
