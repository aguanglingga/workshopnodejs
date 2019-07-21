const URL_API = 'https://ghibliapi.herokuapp.com/films'

document.addEventListener("DOMContentLoaded", function() {

  const APP = document.getElementById('app'); 
  fetch(URL_API)
        .then(res => res.json())
        .then(data => {
            console.log('Hey ini response API...', data)

            data.forEach(element => {
                var div = document.createElement("div");
                
                var att = document.createAttribute("class");       // Create a "class" attribute
                att.value = "notification is-success";                           // Set the value of the class attribute
                div.setAttributeNode(att);
                
                var node = document.createTextNode(element.title);
                div.appendChild(node);

                APP.appendChild(div);
            });

            
    })

});



