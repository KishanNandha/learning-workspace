const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());


const courses = [
    { id: 1, name: "course 1"},
    { id: 2, name: "course 2"},
    { id: 3, name: "course 3"},
    { id: 4, name: "course 4"}
];

// root
app.get('/',(request,response) => {
    response.write("Hello!!!!!!!!!!!!!");
    response.end();
});

//get
app.get('/api/courses',(request,response) => {
    response.send(courses);
});

//post
app.post('/api/courses',(request,response) => {
    //without joi
    /*  if(!request.body.name || request.body.name.length <3)
    {
        response.status(400).send("BAD REQUEST");
        return;
    } */
    //with joi
    const schema = {
        name : Joi.string().min(3).required()
    };

    const result = Joi.validate(request.body,schema);

    if(result.error)
    {
        response.status(400).send(result.error);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: request.body.name
    };
    courses.push(course);
    response.send(courses);
});

//get with id
app.get('/api/courses/:id',(request,response) => {
   let course = courses.find(c => c.id === parseInt(request.params.id));
   if(!course)
    response.status(404).send("404 course not found");
   else
    response.send(course);
   
});

//put
app.put('/api/courses/:id',(request,response) => {
    //we will get reference of course obj inside array!
    let course = courses.find(c => c.id === parseInt(request.params.id));
    if(!course)
    {
        response.status(404).send("404 course not found");
        return;
    }

    const schema = {
        name : Joi.string().min(3).required()
    };
    const result = Joi.validate(request.body,schema);
    if(result.error)
    {
        response.status(400).send(result.error);
        return;
    }

    course.name = request.body.name;

    response.send(course);
 });
 
//delete
app.delete('/api/courses/:id',(request,response) => {
    let course = courses.find(c => c.id === parseInt(request.params.id));
    if(!course)
    {
        response.status(404).send("404 course not found");
        return;
    }
     
    courses.splice(courses.indexOf(course),1);
    response.send(course);
 });

//get with multiple id's
app.get('/api/posts/:year/:months',(request,response) => {
    response.send(JSON.stringify(request.params));
   
});

const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})