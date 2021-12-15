var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){

if(xhr.readyState===4 && xhr.status === 200){
    console.log(xhr.responseText);
}

}

xhr.open('GET','msg.txt',true); //Request Type,File Location,whether is or isn't asynchronous
xhr.send(); // Sending to server

 


/*
readystate
Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request receiveds
3: processing request
4: request finished and response is ready
*/
/*
status	
200: "OK"
403: "Forbidden"
404: "Page not found"

*/