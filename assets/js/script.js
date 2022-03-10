let bool = false;

function setBool(value) {
    bool = value;
}

function getBool() {
    return bool;
}

function isFalse() {
    if(getBool() === false) {
        alert("This Website is just a Fanpage");
        setBool(true);
    }
    
}


isFalse();