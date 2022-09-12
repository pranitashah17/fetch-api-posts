let form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    let title = document.getElementById('title').value
    let body = document.getElementByID('body').value

    // let _data = {
    //     title: "title",
    //     body: "bar", 
    //     userId: 1
    //   }
      
      fetch("https://jsonplaceholder.typicode.com/posts", {
         method: "POST",
         body: JSON.stringify({
            userId: 1,
            id: 1,
            title: "title",
            body: "body",
    }),
         headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 .then(response => response.json())
 .then(json => console.log(json));
})


