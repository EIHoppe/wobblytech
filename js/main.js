shuffle(nouns);
shuffle(verbs);

var nounDivs = $();
for (var i = 0; i < nouns.length; i++) {
    nounDivs.add("<div>" + nouns[i] + "</div>");
}

var verbDivs = $();
for (var i = 0; i < verbs.length; i++) {
    verbDivs.add("<div>" + verbs[i] + "</div>");
}

$('#reel-one').html(nounDivs);
$('#reel-two').html(verbDivs);