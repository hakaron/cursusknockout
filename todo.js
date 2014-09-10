var viewModel = {todos : ko.observableArray(),
    toevoegen: function() {
        var nieuweLijn = {
            omschrijving: ko.observable(""),
            afgewerkt: ko.observable(false)
        };
        this.todos.push(nieuweLijn);
        document.querySelector("tbody tr:last-child td:first-child input").focus();
        nieuweLijn.omschrijving.subscribe(function () { opslaan() });
        nieuweLijn.afgewerkt.subscribe(function () { opslaan() });
    },
    verwijderen: function(teVerwijderenElement) {
        viewModel.todos.remove(teVerwijderenElement);
        opslaan();
    },
    afgewerkteVerwijderen: function() {
        viewModel.todos.remove(function (element) { return element.afgewerkt(); });
        opslaan();
    }
};
ko.applyBindings(viewModel);
function opslaan() {
    window.localStorage.setItem("todos", ko.toJSON(viewModel.todos));
}
function laden() {
    var todos = window.localStorage.getItem("todos");
    var todoMetObservables;
    if (todos !== null) {
        todos = JSON.parse(todos);
        todos.forEach(function (todo) {
            todoMetObservables = {
                omschrijving: ko.observable(todo.omschrijving),
                afgewerkt: ko.observable(todo.afgewerkt)
            };
            viewModel.todos.push(todoMetObservables);
            todoMetObservables.omschrijving.subscribe(function () { opslaan(); });
            todoMetObservables.afgewerkt.subscribe(function () { opslaan() });
        });
    }
}
laden();