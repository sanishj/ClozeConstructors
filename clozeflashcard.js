var ClozeFlashCard = function(text, cloze) {
    this.fullText = text; 
    this.cloze = cloze; 
    this.partial = function(text, cloze) {
        text.replace(cloze, '....');   
    }
}

module.exports = ClozeFlashCard;