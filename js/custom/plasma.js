$(document).ready(function(){
    var images = {
        "Varun": "../../images/team/plas/varun.png",
        "Gwyn": "../../images/team/plas/gwyn.png",
        "Katarina": "../../images/team/plas/kat.png",
        "Shrunal": "../../images/team/plas/shrunal.png",
        "Uday": "../../images/team/plas/uday.png",
        "Vignesh": "../../images/team/plas/viggy.png"
    };
    
    var dataName = "";
    $("#faces img").click(function(){
        dataName = $(this).data('name');
        $("#plasmid-container img").attr("src", images[dataName]);
    });
});