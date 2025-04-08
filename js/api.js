function checkApacheStatus() {
    token = atob("R1ZEUVVaNTY3ODohOzo7YnF1emQ=");
    let url = "https://noctave.fr"
    const apiUrl = url+'/api.php?status&token='+token;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            alert(data.status);
            if (data.status === "1") {window.location.href = url;}
        })
        .catch(error => {alert(data.message);});
}

checkApacheStatus();