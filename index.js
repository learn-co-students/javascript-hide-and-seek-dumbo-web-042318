
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return [].slice.call(document.querySelectorAll('#grand-node *'), 0).pop();
}

function increaseRankBy(n) {
  document.querySelectorAll('.ranked-list li').forEach(item => item.innerHTML = parseInt(item.innerHTML) + n);
}
