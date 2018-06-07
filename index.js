function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < rankedLists.length; i++) {
    let rankedList = rankedLists[i];
    let children = rankedList.children;

    for (let j = 0; j < children.length; j++) {
      let child = children[j];

      child.innerHTML = parseInt(child.innerHTML) + n;
    }
  }
}
