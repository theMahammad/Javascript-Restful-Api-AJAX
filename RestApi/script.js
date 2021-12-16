document.querySelector("#getOne").addEventListener('click',getOne);
document.querySelector("#getAll").addEventListener('click',getAll);
document.querySelector("#post").addEventListener('click',post);



function getOne(){
    
    var postId = document.getElementById("postId").value;
    console.log(postId)
    var url = "https://jsonplaceholder.typicode.com/posts/"+postId;   
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    
    xhr.onload = function(){
        
        if(this.status===200){
            
         
            var post = JSON.parse(this.responseText);
            var html = "";
           
                html+= `
                <div class="card">
  <div class="card-header">
    ${post.title} 
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${post.body}</p>
      <footer class="blockquote-footer">${post.userId}</footer>
    </blockquote>
  </div>
</div>
                
                
                `

         
            document.querySelector("#results").innerHTML = html;

}

    }
    xhr.send();
}


function getAll(){
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts";   
    xhr.open('GET',url,true);
    xhr.onload = function(){
        if(this.status===200){
            var posts = JSON.parse(this.responseText);
            var html = "";
            posts.forEach(post => {
                html+= `
                <div class="card">
  <div class="card-header">
    ${post.title} 
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${post.body}</p>
      <footer class="blockquote-footer">${post.userId}</footer>
    </blockquote>
  </div>
</div>
                
                
                `

            });
            document.querySelector("#results").innerHTML = html;
        }
    }
    xhr.send();
}

function post(){
  const data = {

    userId : 1,
    title : "I'm a title",
    body : "I'm a body"
  }
  var json = JSON.stringify(data);
  
  const xhr = new XMLHttpRequest();
  var url = "https://jsonplaceholder.typicode.com/posts"
  xhr.open('POST',url,true);
  xhr.setRequestHeader('Content-type','application/json; charset = utf-8');
  xhr.onload= function(){
    if(this.status === 201 && this.readyState === 4 ){ //201 means creating data
      console.log('Data have been sent!\n',this.responseText)
    }
  }
  xhr.send(json);

}
