const router = require('express').Router(); 
const { notes } = require('../../data/db.json');

// router.get('/notes', (req,res) => {
//     let results = notes; 
//     if (req.query) {
//         results = filterByQuery(req.query, results)
//     }
//     res.json(results);
// }); 


router.post('/notes', (req,res) => {
    req.body.id = animals.length.toString(); 

    if (!validateNotes (req.body)) {
        res.status(400).send('The notes is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
}); 

module.exports = router; 