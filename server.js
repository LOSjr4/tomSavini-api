const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const project = {
    'deathdream':{
        'year': '1974',
        'type': 'Film',
        'role': 'make-up/special effects technician',
        'image': 'null'
    },
    'deranged':{
        'year': '1974',
        'type': 'Film',
        'role': 'make-up/special effects technician',
        'image': 'null'
    },
    'martin':{
        'year': '1978',
        'type': 'Film',
        'role': 'make-up/special effects technician',
        'image': 'null'
    },
    'dawn of the dead':{
        'year': '1978',
        'type': 'Film',
        'role': 'make-up/special effects technician',
        'image': 'null'
    },
    'unknown':{
        'year': 'unknown',
        'type': 'unknown',
        'role': 'unknown',
        'image': 'null'
    }
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const projectName = request.params.name.toLowerCase()
    if( project[projectName] ){
        response.json(project[projectName])
    }else{
        response.json(project['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log('The server is running on port ${PORT}')
})