function condition1(word){
    return typeof(word) == 'string' && word.length >= 2;
}
function condition2(match){
    return typeof(match) == 'string' && match.length ==1;
}
function letterFinder(word, match) {
    if(condition1(word) == true && condition2(match) == true){
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
        }
    }
    } else{
        console.log("Please pass valid arguments");
    }
}
letterFinder('speed','d');