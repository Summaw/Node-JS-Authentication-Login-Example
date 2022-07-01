const axios = require('axios');


let data = {
    'email': `youremail@gmail.com`,
    'password': `123456`
  }

async function main(res, req) {
    axios({
        method: "GET",
        url: "http://localhost:2400/api/auth/login",
        data: {email: `${data.email}`, password: `${data.password}`},
        validateStatus: () => true
    }).then(res => {
        console.log(res.data.message)
    }).catch((error) => {
        if(error.res){
            console.log(error.message)
        }
    })
}


main();
