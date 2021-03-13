# Nautilus Explorer Dashboard

### Product Owner
Your PO is assigned as an approver and feedback for your application. They are not there to guide you through code. If you have code related needs, submit a completed issue ticket.

PO: **Aja**

## Description
Welcome to Nautilus, the world's most advanced, electrical-powered submersible. You will be coming aboard to build tools for the Captain to use en route and at destinations across the globe.

Your task is to build a management dashboard for the Captain to keep track of the Crew Members, Destinations, Environmental readings, Log entries, and Species. The Captain should be able to perform full CRUD on each of those 4 topics.  Additionally he should be able to authenticate into the application - if he is not authenticated the dashboard should perform READ only operations.

Captain Nemo expects to see themes throughout the application that radiate the classic opulence and grandeur of Nautilus.
*Mobilis in mobili*.

### Requirements
* Complete Planning
    * Make sure to break down tickets into milestones, include an ERD and a Workflow Diagram of how you will tackle each part of the application
    * NOTE: This includes setting up a development branch that branches off of the main branch to test your team's code and for review by the PO
* Set up deployment EARLY and deploy with every milestone so that the PO can see the web interface
* Add Webpack to the Project
* Authenticate to perform any actions (CUD)
* Crew Members
* Destinations - longitude, latitude
* Log Entries
* Environmental Readings - temperature, depth, current, pressure
* **Stretch goal:** Excursions

### User Stories
#### Authentication
* As a user, when I am unauthenticated I should be able to see the dashboard (Read only).
* As a user, when I am authenticated I should be able to perform all actions on the dashboard (full CRUD).
* As a user, I should be able to login via google.
* As a user, I should be able to logout.

#### Crew Members
* As a user, I should be able to on board (add) Crew Members to the Nautilus.
* As a user, I should be able to see all Crew Members on the Nautilus.
* As a user, I should be able to edit Crew Members.
* As a user, I should be able to have a Crew Members disembark (delete) from the Nautilus.

#### Destinations
* As a user, I should be able to add possible destinations.
* As a user, I should be able to read all possible destinations.
* As a user, I should be able to edit destinations.
* As a user, I should be able to delete a destination.

#### Log Entries
* As a user, I should be able to add log entries.
* As a user, I should be able to read all my log entries.
* As a user, I should be able to edit my log entries.
* As a user, I should be able to delete my log entries.
* As a user, I should be able to share my long entries.

#### Environmental Data
* As a user, I should be able to add environmental readings (latitude, longitude, temperature, depth, current, pressure).
* As a user, I should be able to read all environmental readings.
* As a user, I should be able to edit environmental readings.
* As a user, I should be able to delete an environmental reading.

#### Species
* As a user, I should be able to add species.
* As a user, I should be able to read all species.
* As a user, I should be able to edit species.
* As a user, I should be able to delete species.

### Stretch Goals
#### Excursions
* As a user, I should be able to add excursions.
* As a user, I should be able to read all my excursions.
* As a user, I should be able to edit my excursions.
* As a user, I should be able to delete my excursions.
