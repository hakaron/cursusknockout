var viewModel = {
    afstand: ko.observable(2.54),
    soort: ko.observable('CI'),
    converteren: function () {
        var test = this.afstand();
        if (this.soort() == 'CI') {
            return this.afstand() / 2.54;
        } else if (this.soort() == 'IC') {
            return this.afstand() * 2.54;
        }
    }
};
ko.applyBindings(viewModel);