const getuser = (id, cb) => {
    const user ={
        name: 'Adrian'
        id : id
    }

    if (id == 2 ) cb('User no existe')
    else cb(null,user)
}

getuser(1,(err,user) => {
    if(err) return console.log(err)
    console.log(`El nombre del usuario es ${user.name}`)
})