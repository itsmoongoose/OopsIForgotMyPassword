//Defining variables
    const WrongPass = "Wrong password. Please try again: ";
    const WrongPassLast = "Wow you're bad at this. I'll let you try one more time. ";
    const SeeMenu = "If you forgot your password, try entering your username to see available options. "
    const NoRecon = "I have no idea what you're trying to type... Want to try again?"
    const QuitMessage = "I have no clue what you're typing. Maybe a picture game would be more up your alley."
    const SamePassMess = "New password cannot be the same as old password. "
    let Tries = 0;

//Function -- get password
async function GetPassword() {
    output("Please enter your password:")
    let Password = await input("");
    output(WrongPass);
    Password = await input("");
    output(WrongPassLast);
    Password = await input("");
    output(SeeMenu);
    ReTypeUser = await input("");


    //ERROR here? following code will not run...
    //Input username doesn't match actual username
    if (ReTypeUser != UserName1) {
        throw("QuitMessage");
    } else {
        output("It matches somehow...?");
    }
}

//Function -- Too many tries
async function TooManyTries() {
    if (Tries >= 3) {
        throw(QuitMessage);
    } else {
        output(NoRecon);
        MenuChoice = await input("");
    }
}

//Function -- Change Password
async function ChangePassword() {

    //Change Password -- answer security question
    if (MenuChoice == "1" || MenuChoice.includes("reset")) {
        output("To change your password, please answer this highly secure, skill-testing question:");
        output("What is 1 + 1?");
        let ResetPassInput = await input("");

        //Change Password -- pick new password
        if (ResetPassInput == 2) {
            output("Correct! Thank you for verifying your identity, " + UserName1 + ".");
            let SamePass = await input("Please enter a new password: ");
            output(SamePassMess);
            let NewPass = await input("Please enter a new password: ");
            while (SamePass == NewPass) {
                output(SamePassMess);
                NewPass = await input("Please enter a new Password: ");
            }

        } else {
            throw("Yikes... Even I know the answer to that. It's probably best to stop here...");
        }
    
        //Password could not be reset
        output("Unfortunately, your password could not be reset at this time. Now returning to the Sign-In page.");
    }
}

//Main Function
async function main() {
    try {

//List of usernames
    const UserList = [ "Shrek2onDVD", "makeawishkid", "real_name_hidden", "AllGoodNamesRGone",
        "test_name_please_ignore", "Babushka", "not.a.robot", "in_jail_out_soon", "afk",
        "LiveLaughToasterBath", "bulky_refrigerator", "blank" ];
    let randomNum = Math.round(Math.random() * 11);
    let UserName1 = UserList[randomNum];

//Program starts
    output("Welcome Back " + UserName1 + "!");

//Get Password -- for Phase1 (change password)
    await GetPassword();

//Menu Options
    let MenuOptions = [ "1. Reset Password" ];
    output("Please enter an option from the list below:");
    output(MenuOptions);
    MenuChoice = await input("");
    MenuChoice = MenuChoice.toLowerCase();

    //User input doesn't match menu options
    while (MenuChoice != "1" || !MenuChoice.includes("reset")) {
        Tries = (Tries + 1);
    }
    await TooManyTries();
    Tries = 0;

//Change Password
    await ChangePassword();

//Get Password -- for Phase2 (change username)
    await GetPassword();

    //Change Username -- options menu
    MenuOptions = [ "1. Reset Password", "2. Change Username" ];
    output("Please enter an option from the list below:");
    output(MenuOptions);
    let MenuChoice = await input("");
    MenuChoice = MenuChoice.toLowerCase();

    //User input doesn't match menu options
    while (MenuChoice != "1" || !MenuChoice.includes("reset") || MenuChoice != "2" || !MenuChoice.includes("change")) {
        Tries = (Tries + 1);
        await TooManyTries();
        Tries = 0;
    }
    //Change Password
    await ChangePassword();

    //Change Username
    if (MenuChoice == "2" || MenuChoice.includes(change)) {
        let UserSecQWrongAnswers = [ "Eliphant", "Elliphant", "Eliphent", "Elliphent", "Elaphant", "Ellaphant", "Elaphent", "Ellaphent", "Elephent", "Ellephent" ];
        output("To change your username, please verify your identity by answering this security question: Which animal rhymes with Smeliphant?");
        let UserSecQ = await input("");
        UserSecQ = UserSecQ.toLowerCase();
        while (UserSecQWrongAnswers.includes(UserSecQ)) {
            output("Oh dear. Maybe no more spelling questions...");
            output("Let's try that again: Which animal rhymes with Smeliphant?");
            UserSecQ = await input("");
            Tries = (Tries + 1);
            await TooManyTries();
            Tries = 0;
        }
        if (UserSecQ == "elephant") {
            output("Amazing! Nothing gets by you! Please enter your new username: ");
            let ChosenName = await input("");
            //CONTINUE HERE
        }
    }








    }

    //Catch Error Statements
    catch (error) {
        output("");
    }




}