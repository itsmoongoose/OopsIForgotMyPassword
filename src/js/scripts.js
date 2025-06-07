//Defining variables
    const WrongPass = "Incorrect password. Please try again: ";
    const WrongPassLast = "Incorrect password. This is your last attempt: ";
    const ChangePass = "If you have forgotten your password, enter your username to see available options: "

//Function -- get password

/*
async function GetPass1() {
    let Password = await input("Please enter your password: ");
    Password = await input(WrongPass);
    Password = await input(WrongPassLast);
    Password = await input(ChangePass);
}
*/

//Function -- change password






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
    output("Please enter an option from the list below:");
    let MenuOptions = [ "1. Reset Password" ];
    let MenuChoice = await input("");
    MenuChoice = MenuChoice.toLowerCase();
    if (MenuChoice == "1" || MenuChoice.includes("reset")) {
        
    } else {
        while (MenuChoice) {
            output("Your input is not recognized. Please try again.")
        }
    }
  

    }
    



}