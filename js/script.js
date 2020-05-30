const h1 = document.querySelector('h1');

//VERSION 1
// document.body.addEventListener('click', function(e) {
//   const x = e.clientX;
//   const y = e.clientY;
//   h1.textContent = `${x}, ${y}`;
//     if (x%2 === 0 && y%2 === 0) {
//     document.body.style.backgroundColor = 'red';
//   } else if (x%2 !== 0 && y%2 !== 0){
//     document.body.style.backgroundColor = 'blue';
//   } else {
//     document.body.style.backgroundColor = 'green';
//   }
//  console.log(x,y)
  
// })

//VERSION 2

document.body.addEventListener('click', function(event) {
  console.log(event.clientX, event.clientY)
  const color = getColor(event);
  h1.textContent = `${event.clientX}, ${event.clientY}`;
  document.body.style.backgroundColor = color;
 
  
})

const getColor = function(e) {
    if (e.clientX%2 === 0 && e.clientY%2 === 0) {
    return 'red';
  } else if (e.clientX%2 !== 0 && e.clientY%2 !== 0){
    return 'blue';
  } else {
    return 'green';
  }
}