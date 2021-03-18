const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id=navigation></div>
  <div id="mainContainer">
    <div id="button"></div>
    <div id="seeCrew" class="row justify-content-center p-5 mx-5 mt-3 mb-5 rounded shadow-lg"></div>
    <div id="readLogEntry" class="row justify-content-center p-5 mx-5 mt-3 mb-5 rounded shadow-lg"></div>
  </div>`;
};

export default domBuilder;
