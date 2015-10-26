var text = "Jaz sem Tomaž, I am Tomaž, Ich bin Tomaž";
var word = "Tomaž";
var wordLength = word.length;
var textLength = text.length;

function getIndexes(text, word) {
    var arrayOfIndexesOnMatch = [];
    for (i=0; i<textLength; i++) {
        var wordToMatch = text.substr(i,wordLength);
        match(wordToMatch, word);
        if (match(wordToMatch, word))
            arrayOfIndexesOnMatch.push(i);
    }
    return arrayOfIndexesOnMatch;
}
function match (wordToMatch, word) {
	if (wordToMatch === word)
        return true;
    else
        return false;
}

getIndexes(text,word);