var myInput = document.getElementById("myInput");
var countNumber = document.getElementById("number");
var counter = 0;

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) 
{
  if (ev.target.tagName === 'LI') 
  {
    // if (ev.target.classList[0]==='checked') {
    //   counter--;
    // }else{
    //   counter++;
    // }
    ev.target.classList[0]==='checked' ? counter-- : counter++;
    ev.target.classList.toggle('checked');
    countNumber.textContent = counter;
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("UY MI REYNA :0, you need write somenting");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



// Execute a function when the user presses a key on the keyboard
myInput.addEventListener("keypress", function(event) 
{
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") 
    {
        console.log("ENTER!!");
        newElement();
    }

});

    