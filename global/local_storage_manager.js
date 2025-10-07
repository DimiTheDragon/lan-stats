function setItem(itemName, value) {
    localStorage.setItem(itemName, value);
}

function getItem(itemName) {
    return localStorage.getItem(itemName);
}

function removeItem(itemName) {
    localStorage.removeItem(itemName);
}

function clearStorage() {
    localStorage.clear();
}