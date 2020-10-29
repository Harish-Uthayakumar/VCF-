console.log('Client-side code running');

const button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
  
    axios.get('/download')
      .then(function (response) {
        console.log(response.data)
        
        
      })
      .catch(function (error) {
        console.log(error);
      });

    location.replace('/download')



//     const rows = [
//         ["name1", "city1", "some other info"],
//         ["name2", "city2", "more info"]
//     ];
    
//     let csvContent = "data:text/csv;charset=utf-8," 
//         + rows.map(e => e.join(",")).join("\n");

//         var encodedUri = encodeURI(csvContent);
// window.open(encodedUri);

});


