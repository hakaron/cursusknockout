var viewModel = {
    gekozen: ko.observable(),
    template: ko.observable()
};
Sammy(function () {
    this.get("#personeel/:nummer", function () {
        var nummer = parseInt(this.params["nummer"]);
        var request = new XMLHttpRequest();
        if (viewModel.personeel === undefined) {
            request.open("GET", "personeel.json", true);
            request.onload = function () {
                if (request.status === 200) {
                    viewModel.personeel = JSON.parse(request.responseText);
                    vulDetail(nummer);
                    viewModel.template("detail");
                    ko.applyBindings(viewModel);
                }
            }
            request.send();
        } else {
            vulDetail(nummer);
            viewModel.template("detail");
        }
    });
    this.get("", function () {
        if (viewModel.personeel === undefined) {
            var request = new XMLHttpRequest();
            request.open("GET", "personeel.json", true);
            request.onload = function () {
                if (request.status === 200) {
                    viewModel.personeel = JSON.parse(request.responseText);
                    viewModel.template("personeel");
                    ko.applyBindings(viewModel);
                }
            }
            request.send();
        } else {
            viewModel.template("personeel");
        }
    });
}).run();
function vulDetail(nummer) {
    var personeelslid = null;
    var personeel = viewModel.personeel;
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