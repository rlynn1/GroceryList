function addItem(){

}
function createRemoveButton(){
  var close = document.createElement("button");
  close.classList.add("btn");
  close.classList.add("btn-danger");
  close.classList.add("btn-xs");
  //close.appendChild(document.createTextNode("X"));
  var icon = document.createElement("span");
  icon.classList.add("glyphicon");
  icon.classList.add("glyphicon-remove");
  close.appendChild(icon);
  return close;
}

function removeListItem(){
  console.log("Item: " + this);
  console.log("Parent: " + this.parentNode);
  var mom = this.parentNode;
  var itemRemove = mom.firstChild.textContent;
  var itemIndex = myList.indexOf(itemRemove);
  myList.splice(itemIndex,1);
  var grandma = mom.parentNode;
  grandma.removeChild(mom);
}

function saveList()
{
  setCookie("savedList",myList.toString(),1);
  var saved = getCookie("savedList");
}

function openList()
{
  var open = getCookie("savedList");
  var list = open.split(",");
  for(var i=0; i<list.length; i++)
  {
    console.log(list[i]);
  }
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
