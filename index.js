var viewModel = { voornaam: "Jean", familienaam: "Smits", wedde: ko.observable(2500),
    nettoWedde: function () {
        alert(this.wedde() / 2);
    },
    auto: function () {
        return this.wedde() < 7000 ? "golf" : "audi";
    },
    opslag: function () {
        this.wedde(this.wedde() + 1000);
    }
};
ko.applyBindings(viewModel);