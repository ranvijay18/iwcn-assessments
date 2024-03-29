const Notes = require('../models/notes')




exports.getNotes = async(req, res) => {
    const notes = await Notes.findAll()
    res.json(notes)
}


exports.postNote = async(req, res) => {
    const newNote = req.body.note


   const note = await Notes.create({
                note: newNote
                })

    await res.json(note);
}

exports.deleteNote = async(req, res) => {

    try{
        const id = req.params.id;
        const note = await Notes.findAll({where: {id: id}});
        note[0].destroy()
    
        res.json(true);
    }catch(err){
        res.json(false)
    }
   
}