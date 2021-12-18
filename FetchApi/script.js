
//Text
function getText(){

    fetch('text.txt').then(response=>{

        return response.text();
    }).then(data =>{
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
}
getText();


//Json

function getJson(){

    fetch('products.json').then(response =>{
        return response.json();
    }).then(data =>{
        for(var count in data){
            console.log(data[count].fullname);
        }
    })
}
getJson();


//external api
function getExternalApi(){

    fetch('https://randomuser.me/api/?results=5').then(response =>{
        return response.json();
    }).then(data =>{
        
        data.results.forEach(result => {
            console.log(`${result.gender} | ${result.name.first+" "+result.name.last} | ${result.email}`);
        });
    })
}
getExternalApi();