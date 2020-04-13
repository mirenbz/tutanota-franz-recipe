// module.exports = Franz => {
//     function getMessages() {
//         const count = document.querySelector('div.folder-row:first-child .folder-counter').innerText
//         Franz.setBadge(count ? Number(count.substring(1, count.length - 1)) : 0)
//     }
//     Franz.loop(getMessages)
// }


module.exports = Franz => {
    function getMessages() {
        const count = document.querySelector('div.folder-row:first-child .folder-counter').innerText
        Franz.setBadge(count ? Number(count.substring(1, count.length - 1)) : 0)
    }
    Franz.loop(getMessages)
}
// var myElem = document.getElementById('myElementId');
// if (myElem === null) alert('does not exist!');

