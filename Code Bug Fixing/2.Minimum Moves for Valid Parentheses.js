var minAddToMakeValid = function(s) {
    let open = 0, close = 0;
    
    for (let c of s) {
        if (c === '(') {
            open++;
        } else if (open > 0) {
            // Matching with an open parenthesis
            open--;
        } else {
            // No matching open parenthesis, need to add a closing parenthesis
            close++;
        }
    }
    
    // The sum of open and close represents the total number of additions needed
    return open + close;
};