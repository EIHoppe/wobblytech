shuffle(nouns);
shuffle(verbs);

for (var i = 0; i < nouns.length; i++) {
    $('#reel-one').append("<div>" + nouns[i] + "</div>");
}

for (var i = 0; i < verbs.length; i++) {
    $('#reel-two').append("<div>" + verbs[i] + "</div>");
}

const reelOneEl = document.querySelector('#reel-one');
const reelOne = new SlotMachine(reelOneEl, {
    active: 0,
    delay: nouns.length*10,
    spins: 2
});

const reelTwoEl = document.querySelector('#reel-two');
const reelTwo = new SlotMachine(reelTwoEl, {
    active: 0,
    delay: verbs.length*10,
    spins: 2
});

const reelThreeEl = document.querySelector('#reel-three');
const reelThree = new SlotMachine(reelThreeEl, {
    active: 0,
    delay: nouns.length*10,
    spins: 2
});

reelOne.run();
reelTwo.run();
reelThree.run();