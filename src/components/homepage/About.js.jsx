import React, { Component } from 'react';

import TopBar from './TopBar.js.jsx'
import Contact from './Contact.js.jsx'

class About extends Component {

	render() {
		return (
			<div className="About" >
				<TopBar />
				<div className='about-header'> ABOUT </div>
				Something about the goal of this project.
				<br />A study of onomastics, demographics, diaspora.
				<br />Looking at the credits. Structured, labelled data. 
				<div className='about-header'> WAIT BUT WHY </div>
				Something about why this project is a thing, who we are.
				<br />Hollywood has been getting a lot of heat, it's hard to ignore.
				<br />The thing I said about Hollywood being a black hole for heritage. This is an effort to measure how true that really is.
				<br />Quote from previous site
				<br />People aren't going to directly do anything about it. They don't care personally. Otherwise people would sit in theaters after the movie ends, write down the names that roll by, and call them up in the yellow pages to ask, "how are you doing?" 
				<br />As exasperating as it was to type that last sentence, imagine how exasperating it is for people who pour their time into film production, and don't even get their name in the credits? (https://stephenfollows.com/uncredited-movie-credits/)

				<div className='about-header'> OKAY, SO, HOW? </div>
				Well, databases.
				<br /> There's a lot to say about databases not having good data. 
				<br /> I'm learning from dealing with all this data that having clean, actionable data is really important. 
				<br /> It's important to me that it's structured correctly so I can feed it into visualizations cleanly. But that matters to nobody else besides myself. I'm still so concerned with the bottom tier of the pyramid. 
				<br /> Hopefully it's important to other people as well, like MovieLens's university.

				<div className='about-credits'> MAKE SURE TO PROVIDE LINKS TO EACH OF THE PHOTOGRAPHS (mostly imgur) </div>
				Media of interest: 
				<br /> - NYT Article (credits are getting longer), 
				<br /> - other NYT article (people change their names)
				<br /> - Spiderman: Into the Spider-verse
				<br /> - Annenberg research
				<br /> - NamSor
				<br /> - Origins of the photos / how they were doctored. (Including my own creations (star wars and something else...))
				<br /> - Origin of the lists I'll use (especially Starmeter and user-generated lists).
				<Contact />
			</div>
		);
	}
}

export default About;
