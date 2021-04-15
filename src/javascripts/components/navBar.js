import crewOptionTwo from '../../assets/crewOptionTwo.png';
import destination from '../../assets/destination.png';
import excursions from '../../assets/excursions.png';
import krakenIcon from '../../assets/krakenIcon.png';
import log from '../../assets/log.png';
import logoOnly from '../../assets/logoOnly.png';
import environmentalVariables from '../../assets/environmentalVariables.png';

const navBar = () => {
  document.querySelector('#navigation').innerHTML = `<nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#" id="navbarLogo"><img src=${logoOnly}></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#" id="readCrew" data-toggle="tooltip" data-placement="top" title="Crew Members"><img src=${crewOptionTwo}></a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#" id="readDestinations" data-toggle="tooltip" data-placement="top" title="Destinations"><img src=${destination}></a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#" id="readLogEntries" data-toggle="tooltip" data-placement="top" title="Log Entries"><img src=${log}></a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#" id="readEnvironmentalVariables" data-toggle="tooltip" data-placement="top" title="Environmental Variables"><img src=${environmentalVariables}></a>
</li>
<li class="nav-item">
<a class="nav-link" href="#" id="readSpecies" data-toggle="tooltip" data-placement="top" title="Species"><img src=${krakenIcon}></a>
</li>
<li class="nav-item">
<a class="nav-link" href="#" id="readExcursions" data-toggle="tooltip" data-placement="top" title="Excursions"><img src=${excursions}></a>
</li>
    </ul>
    <div class="form-inline my-2 my-lg-0">
    <button class="btn" id="loginLogoutButton"></button>
  </div>
  </div>
</nav>`;
};

export default navBar;
