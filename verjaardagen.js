//arrays voor dagen en maanden aanmaken
var dagrij = [];
var maandrij = [];
for (var i = 0; i < 31; i++) {
    dagrij.push(i + 1);
}
for (var i = 0; i < 12; i++) {
    maandrij.push(i + 1);
}
//viewModel
var viewModel = {
    verjaardagen: ko.observableArray(),
    dagen: dagrij,
    maanden: maandrij,
    toevoegen: function () {
        var verjaardag = {
            naam: ko.observable(''), dag: ko.observable(1), maand: ko.observable(1)
        };
        verjaardag.naam.subscribe(function () { opslaan(); });
        verjaardag.dag.subscribe(function () { opslaan() });
        verjaardag.maand.subscribe(function () { opslaan() });
        this.verjaardagen.push(verjaardag);
        document.querySelector("tbody tr:last-child td:first-child input").focus();
    },
    jarig: function(dag, maand) {
        var dezeMaand = new Date().getMonth() + 1; //januari is blijkbaar maand 0
        var dezeDag = new Date().getDate();
        return dezeDag == dag && dezeMaand == maand;
    }
};
ko.applyBindings(viewModel);
//storage opties
function opslaan() {
    window.localStorage.setItem("verjaardagen", ko.toJSON(viewModel.verjaardagen));
}
function laden() {
    var verjaardagen = window.localStorage.getItem("verjaardagen");
    var verjaardagMetObservables;
    if (verjaardagen !== null) {
        verjaardagen = JSON.parse(verjaardagen);
        verjaardagen.forEach(function (verjaardag) {
            verjaardagMetObservables = {
                naam: ko.observable(verjaardag.naam),
                dag: ko.observable(verjaardag.dag),
                maand: ko.observable(verjaardag.maand)
            };
            viewModel.verjaardagen.push(verjaardagMetObservables);
            verjaardagMetObservables.naam.subscribe(function () { opslaan(); });
            verjaardagMetObservables.dag.subscribe(function () { opslaan() });
            verjaardagMetObservables.maand.subscribe(function () { opslaan() });
        });
    }
}
laden();