loadData()

function loadData(){
    fetch("http://localhost:3000/CountryInformation").then(
        res =>{
            res.json().then(
                data=>{
                    console.log(data)
                    if(data.length > 0){
                        var temp = "";
                        data.forEach((d) => {
                            temp += "<tr>";
                            temp += "<td>" + d.id + "</td>";
                            temp += "<td>" + d.country_name + "</td>";;
                            temp += "<td>" + d.language + "</td>";;
                            temp += "<td>" + d.region + "</td></tr>";;
                        })

                        document.getElementById("table").innerHTML = temp;
                    }
                }
            )
        }
    )
}

var formdata = {
    id : document.getElementById("id").value,
    country_name : document.getElementById('country_name').value,
    language : document.getElementById('language').value,
    region : document.getElementById("region").value
}

function addRecord() {
    var data = formdata
    fetch ("http://localhost:3000/CountryInformation", {
        method : "POST",
        headers : {"content-Type":"application/json"},
        body : JSON.stringify(formdata)
    }).then((res) => {
        res.json()
    })
}