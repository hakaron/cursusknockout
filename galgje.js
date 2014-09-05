var geradenLetters = [];
var gameOver = false;
function kiesWoord() {
    var woorden = ['cocktail', 'mayonaise', 'mosterd', 'tartare', 'vinaigrette'];
    var index = Math.floor(Math.random() * woorden.length);
    return woorden[index];
}
var woord = kiesWoord();
function nieuweWeergave () {
    var weerTeGeven = '';
    for (var i = 0; i < woord.length; i++) {
        var zitErin = false;
        for (var j = 0; j < geradenLetters.length; j++) {
            if (!zitErin && geradenLetters[j] == woord[i]) {
                weerTeGeven += woord[i];
                zitErin = true;
            }
        }
        if (!zitErin) {
            weerTeGeven += '.';
        }
    }
    return weerTeGeven;
}
var viewModel = {
    pogingen: ko.observable(0),
    weergave: ko.observable(nieuweWeergave()),
    gameOver: false,
    raden: function () {
        if (!gameOver) {
            var ingave = document.getElementById('letter').value;
            if (ingave.length == 1) {
                var letter = ingave;
                var zitErin = false;
                for (var i = 0; i < woord.length; i++) {
                    if (!zitErin && woord[i] == letter) {
                        zitErin = true;
                        geradenLetters.push(letter);
                    }
                }
                if (!zitErin) {
                    this.pogingen(this.pogingen() + 1);
                }
                this.weergave(nieuweWeergave());
            }
            if (this.weergave() == woord) {
                alert('U heeft gewonnen, de saus was ' + woord);
                gameOver = true;
            } else if (this.pogingen() == 10) {
                alert('U heeft verloren, de saus was ' + woord);
                gameOver = true;
            }
        }
    }
};
ko.applyBindings(viewModel);