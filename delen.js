var viewModel = {
    teller: ko.observable(),
    noemer: ko.observable(),
    deling: function() {
        if (this.isValid()) {
            return this.teller() / this.noemer();
        } else {
            return "";
        }
    }
}
ko.validation.init({
    parseInputAttributes: true
});
ko.applyBindings(ko.validatedObservable(viewModel));