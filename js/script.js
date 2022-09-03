// start
let $ = document;
function _log(value) {
  console.log(value);
}
function _table(value) {
  console.table(value);
}

let inputRangeElem = $.getElementById('range');

function brightnessHandler(event) {
  let brightnessValue = event.target.value;

  //   $.body.style.filter = 'brightness(' + brightnessValue+'%)';
  $.body.style.filter = `brightness(${brightnessValue}%)`;
}

inputRangeElem.addEventListener('change', brightnessHandler);
