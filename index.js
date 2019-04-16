// acts as central router

// uses server.js which contains routes
const server = require('./server.js');


server.listen(4000, () => {
    console.log('API running on port 4000')
    
});


