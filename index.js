
// Define a function `getFirstSelector(selector)`, which accepts a selector and returns the first element that matches.
function getFirstSelector(selector){
  return document.querySelector(selector)
}

// // Define a function `nestedTarget()` that pulls a `.target` out of `#nested` (`#` is used for IDs in selectors
 function nestedTarget(){
   return document.querySelector('#nested .target')
 }

//  // Define a function `increaseRankBy(n)` that increases the ranks in all of the `.ranked-list`s by `n`. (You might need to make use of
 function increaseRankBy(n){
   const rankedlist = document.querySelectorAll(`.ranked-list li`);
   rankedlist.forEach(list => list.innerHTML = parseInt(list.innerHTML) + n);

 }

 // Define a function `deepestChild()` that pulls out the most deeply nested child
 // from `div#grand-node`. (Remember, you can iterate over elements and call
 // `querySelector()` and `querySelectorAll()` on them. This is challenging to
 // implement correctly, but not beyond your ability!)

  function deepestChild(){
    return document.querySelectorAll('div#grand-node div')[3];
  }
