var dagrij = [];
var maandrij = [];
for (var i = 0; i < 31; i++) {
    dagrij.push(i + 1);
}
for (var i = 0; i < 12; i++) {
    maandrij.push(i + 1);
}
var viewModel = {
    verjaardagen: ko.observableArray(),
    dagen: dagrij,
    maanden: maandrij,
    toevoegen: function () {
        var verjaardag = {
            naam: ko.observable(), dag: ko.observable(1), maand: ko.observable()
        };
        this.verjaardagen.push(verjaardag);
        document.querySelector("tbody tr:last-child td:first-child input").focus();
    },
    jarig: function(dag, maand) {
        var dezeMaand = new Date().getMonth();
        var dezeDag = new Date().getDay();
        return dezeDag == dag && dezeMaand == maand;
    }
};
ko.applyBindings(viewModel);