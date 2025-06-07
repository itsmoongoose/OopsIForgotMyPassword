//Defining variables
    const WrongPass = "Incorrect password. Please try again: ";
    const WrongPassLast = "Incorrect password. This is your last attempt: ";
    const ChangePass = "If you have forgotten your password, enter your username exactly as you see it to see available options: "
    let Tries = 0;

//Main Function
async function main() {

//List of usernames
    const UserList = [ "Shrek2onDVD", "makeawishkid", "real_name_hidden", "AllGoodNamesRGone",
        "test_name_please_ignore", "Babushka", "not.a.robot", "in_jail_out_soon", "afk",
        "LiveLaughToasterBath", "bulky_refrigerator", "blank" ];
    let randomNum = Math.round(Math.random() * 12);

//Program starts
    output ("Welcome Back " + UserList[randomNum] + "!");

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
        output("Your input is not recognized. Please try again.");
        let Tries = (Tries + 1);

        //Too many tries -- program terminates
        if (Tries >= 3) {
            output("Unrecognized input limit reached. This connection may have been compromised; the program will terminate immediately and all your data will be destroyed.");
            break;
        } else {
            MenuChoice = await input(" ");
        }
    
    //Change Password -- answer security question
    } if (MenuChoice == "1" || MenuChoice.includes("reset")) {
        output("To change your password, please verify your identity by entering your email address or choosing to answer your self-created security question with 'Q'");

    }





}  