var viewModel = {
    voornaam: ko.observable("Jean"),
    familienaam: ko.observable("Smits"),
    wedde: ko.observable(2500),
    gehuwd: ko.observable(true),
    rijbewijs: ko.observable(),
    rijbewijzen: ['A3', 'A', 'B', 'B + E', 'C', 'C + E', 'D1', 'D1 + E', 'D', 'D + E'],
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