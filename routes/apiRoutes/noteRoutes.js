const router = require('express').Router(); 
const { notes } = require('../../Develop/db/db.json');

// router.get('/notes', (req,res) => {
//     let results = notes; 
//     if (req.query) {
//         results = filterByQuery(req.query, results)
//     }
//     res.json(results);
// }); 

router.get("/notes/:id", (req,res) => {
    const result = findById(req.params.id, notes)
    if (result) {
        res.json(result); 
    } else {
        res.send(404)
    }
});

router.post('/animals', (req,res) => {
    req.body.id = animals.length.toString(); 

    if (!validateNotes (req.body)) {
        res.status(400).send('The notes is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
}); 

module.exports = router; 