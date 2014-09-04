var viewModel = { voornaam: "Jean", familienaam: "Smits", wedde: 2500,
    nettoWedde: function () {
        alert(this.wedde / 2);
    },
    auto: function () {
        return this.wedde < 7000 ? "golf" : "audi";
    }
};
ko.applyBindings(viewModel);