module.exports.changeExcusesController = (req, res) => {
    res.json([{
        "code_http": 701,
        "tag": "Inexcusable",
        "message": "Meh"
    },
    {
        "code_http": 702,
        "tag": "Inexcusable",
        "message": "Emacs"
    }])
}