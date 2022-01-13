function addRecord() {
    var formdata = {
        id : document.getElementById("id").value,
        country_name : document.getElementById('country_name').value,
        language : document.getElementById('language').value,
        region : document.getElementById("region").value
    }
    fetch ("http://localhost:3000/CountryInformation", {
        method : "POST",
        headers : {"content-Type":"application/json"},
        body : JSON.stringify(formdata)
    }).then((res) => {
        res.json()
    })
}

function deleteRecord() {
    var formdata = {
        id : document.getElementById("id").value,
        country_name : document.getElementById('country_name').value,
        language : document.getElementById('language').value,
        region : document.getElementById("region").value
    }
    if (formdata.id > 0) {
        fetch ("http://localhost:3000/CountryInformation/" + formdata.id, {
        method : "Delete",
        headers : {"content-Type":"application/json"},
    })
    }else {
        fetch ("http://localhost:3000/CountryInformation" , {
            method: "Delete",

        })
    }
    
}

function display_in_table() {
    fetch("http://localhost:3000/CountryInformation", {
        method : "GET",
    }).then((data) => {
        data.array.forEach(element => {
            row = 
            `<tr>  
                <td>Country_ID</td>
                <td>Country_Name</td>
                <td>Language</td>
                <td>Region</td>
            </tr>`
        });
    })
}
