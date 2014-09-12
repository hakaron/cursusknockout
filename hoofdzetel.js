var viewModel = {
    straat: "Keizerslaan", huisnummer: 10, postcode: 1000, gemeente: "Brussel",
    template: ko.observable("adres"),
    adres: function() {
        this.template("adres");
    },
    foto: function() {
        this.template("foto");
    }
};
ko.applyBindings(viewModel);