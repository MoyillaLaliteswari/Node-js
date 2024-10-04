const userDB={
    users:require('../model/users.json'),
    setUsers:function(data){this.users=data}
}
const fsPromises=require('fs').promises;
const path=require('path');
const bcypt=require('bcrypt');

const handleNewUser=async(req,res)=>{
    const{user,pwd}=req.body.id;
    if(!user || !pwd) return res.status(400).json({'message':'Username and password are required'});
    const duplicate=userDB.users.find(person=>person.username===user);
    if(duplicate){
        res.sendStatus(409);
    }
    try{
        const hashedPwd=await bcrypt.hash(pwd,10);
        const newUser={
            "username":user,
            "roles":{"User":2001},
            "password":hashedpwd};
        userDB.setUsers([...userDB.users,newUser]);
        await fsPromises.writeFile(
            path.join(__dirname,'..',model,'users.json'),
            JSON.stringify(userDB.users)
        );
        console.log(userDB.users);
        res.status(201).json({'success':`NEW USER ${user} created`});
    }catch(err){
        res.status(500).json({'message':err.message});
    }
}

module.exports={handleNewUser};