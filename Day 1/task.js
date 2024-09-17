// Invoke this api and find if ID 8 exists
// If not throw error
// If present print the name
// Mock API : https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user

// use fetch api to get the data from the api

const res=fetch('https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user')
.then(response=>response.json())
.then(data=>{
    let flag=false;
    data.forEach(element => {
        if(element.id==8){
            flag=true;
            console.log(element.name);
        }
    });
    if(!flag){
        throw new Error("ID 8 not found");
    }
})
.catch(error=>console.log(error));




// use async await to get the data from the api and use filter to find the id 8

const fetchData=async()=>{
    const response=await fetch('https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user');
    const data=await response.json();
    const result=data.filter(element=>element.id==8);
    if(result.length==0){
        throw new Error("ID 8 not found");
    }
    else{
        console.log(result[0].name);
    }
}

fetchData().catch(error=>console.log(error));


