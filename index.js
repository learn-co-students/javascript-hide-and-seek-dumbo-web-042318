addEventListener("DOMContentLoaded", () => mocha.run());

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild() {
  let currentNode = document.querySelector('#grand-node');
  while (currentNode.querySelector('div')) {
    currentNode = currentNode.querySelector('div')
  }
  return currentNode;
}

function increaseRankBy(n) {
  const ul = document.querySelectorAll('.ranked-list li');
  ul.forEach(li => li.innerHTML = parseInt(li.innerHTML) + n);
}
