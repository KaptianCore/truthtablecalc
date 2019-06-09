function ttcalc(n1, b1, b2) {
    if (n1 != ["XOR", "AND", "OR"]) {
        console.error("Uncaught Invalid bitwise operation. Please use 'AND', 'OR' or 'XOR'")
    }
    if(typeof(b1) != "boolean") {
        console.error("Uncaught Parameter b1 must be of type Boolean")
    }
    if(typeof(b2) != "boolean") {
        console.error("Uncaught Parameter b2 must be of type Boolean")
    }
    if(n1 == "XOR" ^ b1 ^ b2){ 
        return true;
    }
    else if (n1 == "AND" && b1 && b2) {
            return true;
    } 
    else if(n1 == "OR" || b1 || b2) {
        return true;
    }
    else{
        return;
    }
}
