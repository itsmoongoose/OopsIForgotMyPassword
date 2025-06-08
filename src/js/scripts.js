//Defining variables
    const WrongPass = "Wrong password. Please try again: ";
    const WrongPassLast = "Wow you're bad at this. I'll let you try one more time. ";
    const ChangePass = "If you forgot your password, try entering your username to see available options. "
    const NoRecon = "I have no idea what you're trying to type... Want to try again?"
    const QuitMessage = "I still have no clue what you're typing. Maybe a picture game would be more up your alley."
    const SamePassMess = "New password cannot be the same as old password. "
    let Tries = 0;

//Main Function
async function main() {
    try {

//List of usernames
    const UserList = [ "Shrek2onDVD", "makeawishkid", "real_name_hidden", "AllGoodNamesRGone",
        "test_name_please_ignore", "Babushka", "not.a.robot", "in_jail_out_soon", "afk",
        "LiveLaughToasterBath", "bulky_refrigerator", "blank" ];
    let randomNum = Math.round(Math.random() * 12);
    let UserName1 = UserList[randomNum];

//Program starts
    output("Welcome Back " + UserName1 + "!");

//Get Password
    output("Please enter your password:")
    let Password = await input("");
    output(WrongPass);
    Password = await input("");
    output(WrongPassLast);
    Password = await input("");
    output(ChangePass);
    Password = await input("");

//Menu Options
    let MenuOptions = [ "1. Reset Password" ];
    output("Please enter an option from the list below:");
    output(MenuOptions);
    let MenuChoice = await input("");
    MenuChoice = MenuChoice.toLowerCase();

    //User input doesn't match menu options
    while (!MenuChoice == "1" || !MenuChoice.includes("reset")) {
        Tries = (Tries + 1);

        //Too many tries -- program terminates
        if (Tries >= 3) {
            output(QuitMessage);
            throw(QuitMessage);
        } else {
            output(NoRecon);
            MenuChoice = await input(" ");
        }
    
    //Change Password -- answer security question
    } if (MenuChoice == "1" || MenuChoice.includes("reset")) {
        output("To change your password, please answer this security question: What is 1 + 1? ");
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
    }
    }
    catch (error) {
        output("");
    }




}  