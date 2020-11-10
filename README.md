# Virtual-Collective

Link: virtualcollective.netlify.app

Virtual Collective was created by a cross-functional UX and Software Development team. We utilized the Gitflow method with frequent stand-ups to discuss each iteration of the application.

## Whimsical Diagram

https://whimsical.com/QTDaTCyr8SbKkyDw13vHm4

## Team Expectations

https://docs.google.com/document/d/1xS6DxpauDMYwPkVZWrjiPyiCryEzWWx_3KZgVs64eE8/edit?usp=sharing

## Overview

A full-stack, full-crud react-application for connecting people with local artistic events. Users are able to choose an artistic category and view details of upcoming events. Users will have the ability to add, delete and update events. User will also be able to pick their favorite events and save them within a dedicated favorites screen.

## MVP

https://github.com/mikanur10/Virtual-Collective/projects/1?add_cards_query=is%3Aopen

## Post-MVP

- Search function
- Addition of users
- Membership & billing
- Chat function (cosmetic)

## Schema

```
const Event = new Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  favorite: { type: Boolean, required: true },
});

```
