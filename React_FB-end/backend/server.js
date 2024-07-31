import express from 'express';

const app= express();


// app.get('/',(req,res)=>{
//     res.send('Server is ready');
    
// });



//get a list of jokes.

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'Another joke',
            content:'This is another joke'
        },
        {
            id:3,
            title:'A third jokes',
            content:'This is a forth joke'
        },

    ];
    res.send(jokes);
});

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);

}
);

