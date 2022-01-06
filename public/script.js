function openTab(evt, tab_name) {
    var i
    var x = document.getElementsByClassName("tab-content")
    var y = document.getElementsByClassName("tab")
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    for (i = 0; i < y.length; i++) {
        y[i].className = y[i].className.replace(" active", "")
    }
    document.getElementById(tab_name).style.display = "block"
    evt.currentTarget.className += " active"
}

function closeTab(tab_name) {
    var i
    var x = document.getElementsByClassName("tab-content")
    var y = document.getElementsByClassName("tab")
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    for (i = 0; i < y.length; i++) {
        y[i].className = y[i].className.replace(" active", "")
    }
}