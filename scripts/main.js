document.getElementById("addButton").addEventListener("click", function () {
    var संख्या१ = +document.getElementById("संख्या१").value;
    var संख्या२ = +document.getElementById("संख्या२").value;
    var उत्तर = document.getElementById("उत्तर");
    उत्तर.textContent = "उत्तर: " +(बेरीज(संख्या१,संख्या२));
});


function बेरीज(अ, ब) {
    var क = अ + ब;
    return क;
}

function गुणाकार(अ, ब) {
    var क = अ * ब;
    return क;
}

function वजाबाकीकरा() {
    var संख्या१ = document.getElementById("संख्या१").value;
    var संख्या२ = document.getElementById("संख्या२").value;
    var उत्तर = document.getElementById("उत्तर");
    उत्तर.textContent = "उत्तर: " +(+संख्या१ - +संख्या२);
}


function गुणाकारकरा() {
    var संख्या१ = document.getElementById("संख्या१").value;
    var संख्या२ = document.getElementById("संख्या२").value;
    var उत्तर = document.getElementById("उत्तर");
    उत्तर.textContent = "उत्तर: " +(गुणाकार(+संख्या१, +संख्या२));
}

function भागाकारकरा() {
    var संख्या१ = document.getElementById("संख्या१").value;
    var संख्या२ = document.getElementById("संख्या२").value;
    var उत्तर = document.getElementById("उत्तर");
    if (संख्या२ === "0"){
        उत्तर.textContent = "उत्तर: शून्याने कशालाही भाग जात नाही" ;
    } else {
        उत्तर.textContent = "उत्तर: " +(+संख्या१ / +संख्या२);
    }
}

function पाढातयारकरा() {
    var संख्या३ = +document.getElementById("संख्या३").value;

    var उत्तर = document.getElementById("उत्तर");

    उत्तर.textContent = "";
    // उत्तर.textContent = "उत्तर: " +(+संख्या३ * 1) + "," + (+संख्या३ * 2) + "," + (+संख्या३ * 3);
    for (var i = 1; i < 11; i++) {
        उत्तर.textContent += (गुणाकार(संख्या३, i)) + ",";
    }
}