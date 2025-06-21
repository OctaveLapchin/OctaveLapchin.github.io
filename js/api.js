function checkApacheStatus(){
    $.ajax({
    type: "POST",
    url: "https://noctave.fr/api/v1/service",
    data: {
        token: "GYVdbqiznd45678:!:;dqz",
        service: "apache2"
    },
    success: function(response) {
        console.log(response);
        window.location.href = "https://noctave.fr/portfolio";
    },
    error: function(xhr, status, error) {
        console.error("Erreur lors de la requête:", error);
    }
});
}

checkApacheStatus();
