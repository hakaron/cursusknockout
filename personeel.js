var viewModel = {
    personeel: ko.observableArray(),
    gekozen: ko.observable(),
    template: ko.observable()
};
Sammy(function () {
    this.get("#personeel/:nummer", function () {
        var nummer = parseInt(this.params["nummer"]);
        vulPersoneel();
        vulDetail(nummer);
        viewModel.template("detail")
    });
    this.get("", function () {
        vulPersoneel();
        viewModel.template("personeel");
    });
}).run();
function vulPersoneel() {
    var request = new XMLHttpRequest();
    request.open("GET", "personeel.json", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            viewModel.personeel(JSON.parse(request.responseText));
        }
    }
    request.send();
}
function vulDetail(nummer) {
    var personeelslid = null;
    var personeel = viewModel.personeel();
    for (var i = 0; i < personeel.length; i++) {
        if (personeel[i].nummer === nummer) {
            personeelslid = personeel[i];
        }
    }
    if (personeelslid === null) {
        personeelslid = { voornaam: "Ongeldig", familienaam: "personeelslid!", nummer: "N/A",
            wedde: "N/A", job: "N/A" };
    }
    viewModel.gekozen(personeelslid);
}
ko.applyBindings(viewModel);