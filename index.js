var viewModel = {
    voornaam: ko.observable("Jean"),
    familienaam: ko.observable("Smits"),
    wedde: ko.observable(2500),
    gehuwd: ko.observable(true),
    rijbewijs: ko.observable(),
    provincie: ko.observable(),
    geslacht: ko.observable("M"),
    rijbewijzen: ['A3', 'A', 'B', 'B + E', 'C', 'C + E', 'D1', 'D1 + E', 'D', 'D + E'],
    provincies:[{naam: 'West-Vlaanderen', hoofdstad: 'Brugge'},
                {naam: 'Oost-Vlaanderen', hoofdstad: 'Gent'},
                {naam: 'Antwerpen', hoofdstad: 'Antwerpen'},
                {naam: 'Limburg', hoofdstad: 'Hasselt'},
                {naam: 'Vlaams-Brabant', hoofdstad: 'Leuven'}],
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