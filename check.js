function sum(user){
    let n=user.length;

    for(i=0;i<n;i++){
        if(user[i].age>=18 && user[i].gender=="Male"){
            console.log(user[i]);
        }
    }

    
}

let user=[{first:"ansh",age:21,gender:"Male"},{first:"pateriya",age:22,gender:"Male"},{first:"s",age:20,gender:"Female"},{first:"R",age:15,gender:"Female"},{first:"R",age:18,gender:"Male"}]


sum(user);
