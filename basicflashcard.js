// Function for inserting date adn time into the log File.
function formatDate() {
    var d = new Date();
    d = d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2) + " "
        + ('0' + d.getHours()).slice(-2) + ":" + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2);
    return d;
}

BasicFlashcard = function (front, back) {
    this.front = front;
    this.back = back;
    this.dateTime = formatDate(new Date());
}

module.exports = BasicFlashcard;