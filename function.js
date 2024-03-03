// Function to change image source to open eyes and show eye description
function openEyes() {
    document.getElementById('myImage').src = 'OpenEyes.gif';
    document.getElementById('eyeDescription').style.display = 'block';
}

// Function to change image source to close eyes and hide eye description
function closeEyes() {
    document.getElementById('myImage').src = 'CloseEyes.gif';
    document.getElementById('eyeDescription').style.display = 'none';
}
