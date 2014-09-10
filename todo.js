var viewModel = {todos : ko.observableArray(),
    toevoegen: function() {
        this.todos.push({ omschrijving: ko.observable(""), afgewerkt: ko.observable(false) });
        document.querySelector("tbody tr:last-child td:first-child input").focus();
    },
    verwijderen: function(teVerwijderenElement) {
        viewModel.todos.remove(teVerwijderenElement);
    },
    afgewerkteVerwijderen: function() {
        viewModel.todos.remove(function(element){return element.afgewerkt();});
    }
};
ko.applyBindings(viewModel);