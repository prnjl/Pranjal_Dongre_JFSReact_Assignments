//a

let add=(a=2,b=4)=>console.log(`a is ${a} b is ${b} and addtion is ${a+b}`);

add();
add(7);


//b

let userFriendslist = (userName, ...userFriends) => console.log(`{userName: "${userName}", list of Friends is: "${userFriends}"}`);


userFriendslist('pranjal','swati','pankaj','rushali',"sawan");
userFriendslist('zakir','dino',"devine",'ranveer');


//c

var capitalName=(...names)=>{
    let outp=[];

    names.forEach(element => {
        outp.push(element.toUpperCase())
    });
    console.log(`names in Upper case:"${outp}"`);
}

let list=["pranjal", "munnawar" , "zakir", "dino"];
console.log(list);

capitalName(...list)