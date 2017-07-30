// Function for inserting date adn time into the log File.
function formatDate() {
    var d = new Date();
    d = d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2) + " "
        + ('0' + d.getHours()).slice(-2) + ":" + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2);
    return d;
}
var ClozeFlashCard = function (text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.dateTime = formatDate(new Date());
    this.partial = function (text, cloze) {
        text.replace(cloze, '....');
    }
}

module.exports = ClozeFlashCard;