## Description
### Revised instructions from Dr. T
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
