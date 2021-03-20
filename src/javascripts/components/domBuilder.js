const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id=navigation></div>
  <div id="mainContainer">
  <div id="addButton"></div>    
  <div id="formContainer"></div>
  <div id="cardContainer"></div>
</div>`;
};

export default domBuilder;
