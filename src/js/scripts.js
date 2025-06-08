//Defining variables
    const WrongPass = "Wrong password. Please try again: ";
    const WrongPassLast = "Wow you're bad at this. I'll let you try one more time. ";
    const ChangePass = "If you forgot your password, try entering your username to see available options. "
    const NoRecon = "I have no idea what you're trying to type... Want to try again?"
    const QuitMessage = "I still have no clue what you're typing. Maybe a picture game would be more up your alley."
    let Tries = 0;

//Main Function
async function main() {

//List of usernames
    const UserList = [ "Shrek2onDVD", "makeawishkid", "real_name_hidden", "AllGoodNamesRGone",
        "test_name_please_ignore", "Babushka", "not.a.robot", "in_jail_out_soon", "afk",
        "LiveLaughToasterBath", "bulky_refrigerator", "blank" ];
    let randomNum = Math.round(Math.random() * 12);
    let UserName1 = UserList[randomNum];

//Program starts
    output ("Welcome Back " + UserName1 + "!");

//Get Password
    let Password = await input("Please enter your password: ");
    Password = await input(WrongPass);
    Password = await input(WrongPassLast);
    Password = await input(ChangePass);

//Menu Options
    let MenuOptions = [ "1. Reset Password" ];
    output("Please enter an option from the list below:");
    output(MenuOptions);
    let MenuChoice = await input("");
    MenuChoice = MenuChoice.toLowerCase();

    //User input doesn't match menu options
    while (!MenuChoice == "1" || !MenuChoice.includes("reset")) {
        output(NoRecon);
        let Tries = (Tries + 1);

        //Too many tries -- program terminates
        if (Tries >= 3) {
            output(QuitMessage);
            process.exit();
        } else {
            MenuChoice = await input(" ");
        }
    
    //Change Password -- answer security question
    } if (MenuChoice == "1" || MenuChoice.includes("reset")) {
        output("To change your password, please answer this security question: What is 1 + 1? ");
        let ResetPassInput = await input("");

        //Change Password -- pick new password
        if (ResetPassInput == 2) {
            output("Correct! Thank you for verifying your identity, " + UserName1 + ".");
            let NewPass = await input("Please enter a new password: ");
        } else {
            output("Yikes... Even I know the answer to that. It's probably best to stop here...");
            process.exit();
        }
    }





}  