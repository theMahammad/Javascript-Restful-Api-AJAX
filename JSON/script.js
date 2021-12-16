
    document.querySelector("#getEmployees").addEventListener('click',function(){
        var loadingImage = document.querySelector("#loading");
        loadingImage.style.display = 'block';
        
        
        const xhr = new XMLHttpRequest();
        
        xhr.open('GET','data.json',true);
        setTimeout(() => {
            xhr.onload = function(){

                if(this.status===200){
                    loadingImage.style.display = 'none';
                    var employeesList = JSON.parse(this.responseText);
                    let html="";
                    employeesList.forEach(employee => {
                        html+=`
                        <tr>
                        <td>${employee.firstName}</td>
                        <td>${employee.lastName}</td>
                        <td>${employee.age}</td>
                        <td>${employee.retired}</td>
                        
                        </tr>
                        `
                    });
                    document.querySelector("#employees").innerHTML = html;
            }
           
    
        }
        xhr.send();
        }, 2000);
        
        
    
}
    );


    
