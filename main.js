import { shuffle } from './shuffle.js'

// TODO: figure out loading from files because apparently nothing is allowed to be nice
var list1 = ['noun1', 'noun2', 'other noun', 'hey neat\nthis is a thing\nwith linebreaks', 'this is a thing with words', 'wooorrrrrdsssss', 'words are hard'];
var list2 = ['verb1', 'verb2', 'other verb', 'hey neat\nthis is an act\nwith linebreaks', 'this is an act with words', 'accccttttsssssss', 'acts are hard'];
var list3 = ['emot1', 'emot2', 'other emot', 'hey neat\nthis is a feels\nwith linebreaks', 'this is a feels with words', 'feeeellllllssss', 'feels are hard'];

shuffle(list1);
shuffle(list2);
shuffle(list3);

