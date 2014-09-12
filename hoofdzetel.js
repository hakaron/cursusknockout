var viewModel = {
    straat: "Keizerslaan", huisnummer: 10, postcode: 1000, gemeente: "Brussel",
    template: ko.observable()
};
Sammy(function() {
    this.get("#adres", function() {
        viewModel.template("adres");
    });
    this.get("#foto", function () {
        viewModel.template("foto");
    });
    this.get("", function () {
        viewModel.template("adres");
    });
}).run();
ko.applyBindings(viewModel);