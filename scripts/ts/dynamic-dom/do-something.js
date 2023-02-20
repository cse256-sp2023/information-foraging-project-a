export function doSomething() {
  console.log("Put some code in here!");
}


// var selectedElement = null;

// export function highlight_current_page() {
//   var dropBtns = document.getElementsByClassName("dropbtn");
 
//   for (let i = 0; i < dropBtns.length; i++) {
//     dropBtns[i].onclick = function() { toggleSelected(this) };
//   }
 
// }

// export function toggleSelected(element) {
//   console.log("click");
//   console.log("toggle " + element.id);
  
//   selectedElement = element;
//   console.log("selected Element is " + element.id);

//   update_nav_bar();
  
//   // element.classList.add("my-class");
//   // element.classList.remove("my-class");
  
//   }

//   function update_nav_bar() {
//     var dropBtns = document.getElementsByClassName("dropbtn");
//     console.log("Setting selection for " + selectedElement);
    
//     // get all the dropbtns, set up the appropriate selections
//     for (let i = 0; i < dropBtns.length; i++) {
    
//       // if this is the selected item
//       if ( (selectedElement != null) &&  (dropBtns[i].id == selectedElement.id) ) {
//           // element.classList.add("my-class");
//           // dropBtns[i].classList.add(", selected");
//           dropBtns[i].className = "dropbtn, selected"
//       } else {
//           dropBtns[i].className = "dropbtn"
//       }
//     }
//   }