shuffle(nouns);
shuffle(verbs);
shuffle(emotions);

for (var i = 0; i < nouns.length; i++) {
    $('#reel-one').append("<div class=\"reel-item\">" + nouns[i] + "</div>");
}

for (var i = 0; i < verbs.length; i++) {
    $('#reel-two').append("<div class=\"reel-item\">" + verbs[i] + "</div>");
}

for (var i = 0; i < emotions.length; i++) {
    $('#reel-three').append("<div class=\"reel-item\">" + emotions[i] + "</div>");
}

const reelOneEl = document.querySelector('#reel-one');
const reelOne = new SlotMachine(reelOneEl, {
    active: 0,
    delay: 1000
});

const reelTwoEl = document.querySelector('#reel-two');
const reelTwo = new SlotMachine(reelTwoEl, {
    active: 0,
    delay: 1000
});

const reelThreeEl = document.querySelector('#reel-three');
const reelThree = new SlotMachine(reelThreeEl, {
    active: 0,
    delay: 1000
});

function spinTheReels() {
    if((!reelOne.running) && (!reelTwo.running) && (!reelThree.running))
    {
    var reelOneShuffles = Math.floor(Math.random() * 4) + 4;
    var reelTwoShuffles = Math.floor(Math.random() * 4) + 1 + reelOneShuffles;
    var reelThreeShuffles = Math.floor(Math.random() * 4) + 1 + reelTwoShuffles;

    reelOne.shuffle(reelOneShuffles);
    reelTwo.shuffle(reelTwoShuffles);
    reelThree.shuffle(reelThreeShuffles);
    }
}

$(document).click(spinTheReels);