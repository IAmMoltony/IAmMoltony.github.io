var False = false;
var True = true;

function ShallPutA(Character) {
    var An = ShallPutAn(Character);
    if (An == False)
        return True;
    else if (An == True)
        return False;
    else
        return False;
}

function ShallPutAn(Character) {
    if (Character == TheLetterA())
        return True;
    else if (Character == TheUppercaseLetterA())
        return True;
    else if (Character == TheLetterE())
        return True;
    else if (Character == TheUppercaseLetterE())
        return True;
    else if (Character == TheLetterI())
        return True;
    else if (Character == TheUppercaseLetterI())
        return True;
    else if (Character == TheLetterO())
        return True;
    else if (Character == TheUppercaseLetterO())
        return True;
    else if (Character == TheLetterU())
        return True;
    else if (Character == TheUppercaseLetterU())
        return True;
    else
        return False;
}
