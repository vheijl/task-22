function init() {
    requestData();
}

function requestData() {
    // THIS ENSURES THAT THE REQUEST METHOD WILL WORK FOR IE6!
    // 
    let xhr;
    if (XMLHttpRequest) { xhr = new XMLHttpRequest(); }
    else if (ActiveXObject) { xhr = new ActiveXObject("Microsoft.XMLHTTP"); }
    
    xhr.open("GET", "/data", true);
    xhr.send(null);
    
    xhr.addEventListener("readystatechange", function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            createPetView(JSON.parse(xhr.responseText));
        }
    });
}

function createPetView(petObj) {
    const el = document.getElementsByClassName("petInfo")[0];
    for (var i = 0; i < petObj.length; i++) {
        let p = document.createElement("p");
        p.textContent = `🤖  Hello, I'm a ${petObj[i].type} and my name is ${petObj[i].name}, and I am ${petObj[i].age} years old`;
        el.appendChild(p);
    }

    console.log(petObj);
}

window.addEventListener("load", init);