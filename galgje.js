var viewModel = {
    geradenLetters: [],
    pogingen: ko.observable(0),
    teRaden: '',
    weergave: ko.observable(''),
    gameOver: false,
    kiesWoord: function () {
        var woorden = ['cocktail', 'mayonaise', 'mosterd', 'tartare', 'vinaigrette'];
        var index = Math.floor(Math.random() * woorden.length);
        this.teRaden = woorden[index];
        this.nieuweWeergave();
    },
    nieuweWeergave: function () {
        var woord = this.teRaden;
        var weerTeGeven = '';
        for (var i = 0; i < woord.length; i++) {
            var zitErin = false;
            for (var j = 0; j < this.geradenLetters.length; j++) {
                if (!zitErin && this.geradenLetters[j] == woord[i]) {
                    weerTeGeven += woord[i];
                    zitErin = true;
                }
            }
            if (!zitErin) {
                weerTeGeven += '.';
            }
        }
        this.weergave(weerTeGeven);
    },
    raden: function () {
        if (!this.gameOver) {
            var ingave = document.getElementById('letter').value;
            if (ingave.length == 1) {
                var letter = ingave;
                var woord = this.teRaden;
                var zitErin = false;
                for (var i = 0; i < woord.length; i++) {
                    if (!zitErin && woord[i] == letter) {
                        zitErin = true;
                        this.geradenLetters.push(letter);
                    }
                }
                if (!zitErin) {
                    this.pogingen(this.pogingen() + 1);
                }
                this.nieuweWeergave();
            }
            if (this.weergave() == this.teRaden) {
                alert('U heeft gewonnen, de saus was ' + this.teRaden);
                this.gameOver = true;
            } else if (this.pogingen() == 10) {
                alert('U heeft verloren, de saus was ' + this.teRaden);
                this.gameOver = true;
            }
        }
    }
};
ko.applyBindings(viewModel);
viewModel.kiesWoord();