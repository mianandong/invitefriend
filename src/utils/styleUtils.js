function addClassName(originName, addName) {
    var element = document.getElementsByClassName(originName)[0];
    if (element) {
        var classNameList = element.className.split(' ');
        if (classNameList.indexOf(addName) === -1) {
            classNameList.push(addName);
            element.className = classNameList.join(' ');
        }
    }
}

function removeClassName(originName, removeName) {
    var element = document.getElementsByClassName(originName)[0];
    if (element) {
        var classNameList = element.className.split(' ');
        var index = classNameList.indexOf(removeName);
        if (index !== -1) {
            classNameList.splice(index, 1);
            element.className = classNameList.join(' ');
        }
    }
}

module.exports = {
    addClassName,
    removeClassName
}