//Defining variables
    const WrongPass = "Incorrect password. Please try again: ";
    const WrongPassLast = "Incorrect password. This is your last attempt: ";
    const ChangePass = "If you have forgotten your password, enter your username to see available options: "


async function GetPass1() {

//Function starts
    let Password = await input("Please enter your password: ");
    Password = await input(WrongPass);
    Password = await input(WrongPassLast);
    Password = await input(ChangePass);
}







async function main() {


//List of usernames
    const UserList = [ "Shrek2onDVD", "makeawishkid", "real_name_hidden", "AllGoodNamesRGone",
        "test_name_please_ignore", "Babushka", "not.a.robot", "in_jail_out_soon", "afk",
        "LiveLaughToasterBath", "bulky_refrigerator", "blank" ];
    let randomNum = Math.round(Math.random() * 12);

//Function starts
    output ("Welcome Back " + UserList[randomNum] + "!");
    



}