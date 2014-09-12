var viewModel = {
    gekozen: ko.observable(),
    template: ko.observable("personeel"),
    toonPersoneel: function() {
        this.template("personeel");
    },
    detail: function(keuze) {
        viewModel.gekozen(keuze);
        viewModel.template("detail");
    }
};
var request = new XMLHttpRequest();
request.open("GET", "personeel.json", true);
request.onload = function () {
    if (this.status === 200) {
        viewModel.personeel = JSON.parse(this.responseText);
        viewModel.gekozen(viewModel.personeel[0])
        ko.applyBindings(viewModel);
    }
}
request.send();