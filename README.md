# Nautilus Explorer Dashboard
Welcome to Nautilus, the world's most advanced, electrical-powered submersible. You will be coming aboard to build tools for the Captain to use en route and at destinations across the globe.
While on board, you can see, create, edit and delete data that is needed for our adventure: Crew Members, Destinations, Environmental readings, Log entries, Species and Excursions.

## Deployed Sites
### Week 1 [Deployed Site](https://e14-nautilus-explorer.netlify.app/)
### Week 2-3 [Deployed Site](https://nautilusexplorerdashboard.netlify.app)

## ERDs
### Week 1 [ERD](https://dbdiagram.io/d/604d0f78fcdcb6230b240157)
### Week 2-3 [ERD](https://dbdiagram.io/d/606d0d7cecb54e10c33f0262)

## Wireframes/Diagram
### Week 1 [Workflow Diagram](https://docs.google.com/presentation/d/1lBstv8ilRRyP87Sqn62cQ8Q2JMju-SF3ofdo6_suoSs/edit?usp=sharing)
### Week 1 [Wireframe](https://www.figma.com/file/j9kRS7JW3I9rVwHrCYtbfy/NAUTILUS?node-id=0%3A1)
### Week 2-3 [Excursion Wireframes](https://docs.google.com/presentation/d/1Np1UAKau3zsBrOXaGgmTrNRJBCOsROhosOb60ruXa9Q/edit?usp=sharing)

## Description
### Week 1:
Welcome to Nautilus, the world's most advanced, electrical-powered submersible. You will be coming aboard to build tools for the Captain to use en route and at destinations across the globe.

Your task is to build a management dashboard for the Captain to keep track of the Crew Members, Destinations, Environmental readings, Log entries, and Species. The Captain should be able to perform full CRUD on each of those 4 topics.  Additionally he should be able to authenticate into the application - if he is not authenticated the dashboard should perform READ only operations.

Captain Nemo expects to see themes throughout the application that radiate the classic opulence and grandeur of Nautilus.
*Mobilis in mobili*.

### Week 2:
The captain was very impressed with the first team, but they have reached their destination and will be disembarking. Now that Nautilus operators able to perform full CRUD on Crew Members, Destinations, Environmental Data, Log entries, and Species they would like to be able to bring all these modules together and create Excursions that include Crew Members, Destinations, Environmental Data, Log Entries, and Species associated with them. Captain Nemo would also like the be able do some reporting and graphing to easily visualize locations and their corresponding data sets as well as restrict some data from being accessed. Good luck! *Mobilis in mobili*. 

## Week 1
### Week 1 Requirements
* Authenticate to perform any actions (CUD)
* Crew Members
* Destinations - longitude, latitude
* Log Entries
* Environmental Readings - temperature, depth, current, pressure
* **Stretch goal:** Excursions

### Week 1 User Stories
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

## Week 2
### Week 2 Requirements
* Species
* Excursions
* Graphing (am charts)
* **Stretch goal:** Authentication Roles
* **Stretch goal:** Captain's Log
* **Stretch goal:** Connect captains log to destination points, species, and readings

### Week 2 User Stories
#### Excursions

* As a user, I should be able to add Excursions.
* As a user, I should be able to see all my Excursions.
* As a user, I should be able to edit my Excursions.
* As a user, I should be able to delete my Excursions.
* As a user, I should be able to add Crew Members to an Excursion I have created.
* As a user, I should be able to add a Destination to an Excursion I have created.
* As a user, I should be able to add Environmental Data to an Excursion I have created.
* As a user, I should be able to add Species to an Excursion I have created.
* As a user, I should be able to delete Crew Members from an Excursion I have created.
* As a user, I should be able to delete a Destination from an Excursion I have created.
* As a user, I should be able to delete Environmental Data from an Excursion I have created.
* As a user, I should be able to delete Species from an Excursion I have created.
* As a user, from an Excursion dashboard I should be able to read an entire Excursion with all the Crew Members, the Destination, Environmental Data, Species and Log Entries. (There should be no duplicated data in an excursion, but the data should be aggregated from multiple personal excursions for a destination)

#### Authentication
* As a user, when I am logged in I should have access to an excursions dashboard.
* As a user, when I am logged out I should NOT have access to an excursions dashboard.

#### Graphing
* As a developer, I would like to use AmCharts to make all charts - use the free version.
* As a user, I should be able to view a graph that examines the relationship between depth and pressure.
* As a user, I should be able to view a chart that examines the relationship between depth and temperature.
* As a user, I should be able to view a graph that examines the relationship between temperature and pressure.
* As a user, I should be able to view a chart that examines the relationship between depth, temperature and current.

### Stretch Goals
#### Authentication Roles
* As a developer, I would like to use Firebase Authentication roles to differentiate users.
* As a user, when I am logged in as the captain I should have full access to CRUD for all modules.
* As a user, when I am logged in as a crew member I should have full access to only Environmental Data, Species and Excursions.
* As a user, when I am logged in as a crew member I should only have read access for Crew, Destinations, Excursions and shared Log Entries.

#### Crew Logs
* As a user, I should be able to add log entries to an excursion I have created.
* As a user, I should be able to delete Log Entries from an Excursion I have created.

#### Captain's Log
* As a user, when I am logged in as the captain I should be able to share a Captain's Log entry.
* As a user, when I am logged in as a crew member I should have access to only shared Captain's Logs.

#### Excursions
* As a user, I should be able to add Log Entries to an Excursion I have created.
* As a user, when I am logged in as the captain I should have the option to add an excursion to a Captain's Log entry and see that log entry appear on the aggregated Excursion dashboard.


[Github Repository](https://github.com/nss-evening-cohort-14/nautilus-explorer-dashboard-nautilus-explorer-dashboard)

## Project Boards
### Week 1 [Project Board](https://github.com/nss-evening-cohort-14/nautilus-explorer-dashboard-nautilus-explorer-dashboard/projects/2)
### Week 2-3 [Project Board](https://github.com/nss-evening-cohort-14/nautilus-explorer-dashboard-nautilus-explorer-dashboard/projects/2)

### Screenshots
![2021-04-05 (2)](https://user-images.githubusercontent.com/76795299/113638655-5ea95e80-9645-11eb-9aec-a8286cfb7547.png)
![2021-04-05 (1)](https://user-images.githubusercontent.com/76795299/113638643-4f2a1580-9645-11eb-967e-dfb0ffd6ea6f.png)


## Loom Video Walkthroughs

### Week 1
[Dashboard and Destinations](https://www.loom.com/share/490b8072f6364a34841740141551df73)
[Crew Members](https://www.loom.com/share/4121f4b3b7d44a22bba6da2d4456f4ac)
[Log Entries](https://www.loom.com/share/f02cdef2215a49efa206ed6021ca852e)
[Species and Excursions](https://www.loom.com/share/77e13f0c5ef84c5aa4d0e7455ddd34f8)

## Contributors
### Week 1
[Chris Meffley](https://github.com/cmeffley)
[Matthew Gonzales](https://github.com/GonzalesMatthew)
[Hunter Juneau](https://github.com/HunterJuneau)
[Honey-Rae Swan](https://github.com/thedigitalmenagerie)

### Week 2-3
[Juan Davila](https://github.com/JuanDavila1101)
[Mitchell Crumbley](https://github.com/Mitchell-Crumbley)
[Martin Sisk](https://github.com/fimoefive)
[Jim Conner](https://github.com/jim-conner)
