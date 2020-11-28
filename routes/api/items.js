const express =require('express');
const router = express.Router();


//the model
const MovieItem = require('../../models/schema');


//@route GET api/items
router.get('/', (req,res)=>{
    // MovieItem.aggregate([{$sample:{size:50}}])
    // .then(items=>res.json(items))

    MovieItem.aggregate([
        { '$sort': { 'vote_average': -1 }}, 
        {'$limit':50}
    // {       
    //     '$group': {
    //         '_id': '$vote_average',
    //         'docs': { '$push': '$$ROOT' },
    //     }
    // },
    // {
    //     '$project': {
    //         'top_three': { 
    //             '$slice': ['$docs', 3]
    //         }
    //     }
    // }
    ])

   
    .then(items=>res.json(items))
   }); 



router.post('/singleItem',(req,res)=>{
    let movieTitle = req.body.title;
    // console.log(movieTitle);
    MovieItem.find({title:movieTitle})
        .then(items=>res.json(items))
});



module.exports = router;
