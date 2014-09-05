var viewModel = {
    woord: ko.observable('lepel'),
    caseSensitive: ko.observable(false),
    palindroom: function () {
        var reverse = this.woord();
        reverse = reverse.split('').reverse().join('');
        var lower = this.woord();
        lower = lower.toLowerCase();
        if (this.caseSensitive()) {
            return reverse == this.woord();
        } else {
            return reverse.toLowerCase() == lower;
        }
    }
};
ko.applyBindings(viewModel);