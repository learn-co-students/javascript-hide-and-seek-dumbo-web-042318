function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div div div div.target')
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list')
  for(let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n).toString()
  }
}
