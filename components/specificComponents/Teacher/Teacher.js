﻿import React, { Component } from "react";
import css from "./Teacher.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";
import Element from "../../genericComponents/Element/Element";

export default class Teacher extends Component {

	constructor(props) {
		super(props);
		this.props.blok.title = this.props.blok.firstname + " " + this.props.blok.lastname
		this.props.blok.tagline = "Location: " + this.props.blok.location;
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu>

				<main>
					<Hero blok={this.props.blok} contentTypeTag="course" />
					<div className={css["teacher-page__main-content"]}>
						<div id="teacher-page__short-description" key="teacher-page__short-description" className={css["teacher-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>Get to know the artist!</h2>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.bio })}</div>
							</section>
						</div>
						<div id="teacher-page__short-description" key="teacher-page__short-description" className={css["teacher-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
							<h2 className={css["rich-text-section__title"]}></h2>
								{this.props.blok.experiences && this.props.blok.experiences.map((nestedBlok) => (
									<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
								))}
							</section>
						</div>
						<div id="teacher-page__short-description" key="teacher-page__short-description" className={css["teacher-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
							<h2 className={css["rich-text-section__title"]}>The genre of this artist</h2>
								{this.props.blok.genre && this.props.blok.genre.map((nestedBlok) => (
									<Element blok={nestedBlok} key={nestedBlok._uid} />
								))}
							</section>
						</div>
						<div id="teacher-page__short-description" key="teacher-page__short-description" className={css["teacher-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
							<h2 className={css["rich-text-section__title"]}>Time and place of this artist</h2>
								{this.props.blok.lineupitem && this.props.blok.lineupitem.map((nestedBlok) => (
									<Element blok={nestedBlok} key={nestedBlok._uid} />
								))}
							</section>
						</div>
					</div>

				</main>
			</div>
		);

	}
}