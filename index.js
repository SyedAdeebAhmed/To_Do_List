import inquirer from "inquirer";
async function main() {
    const items = await inquirer.prompt([
        {
            name: "itemCount",
            type: "number",
            message: "How many items do you want to add to the list?",
        },
    ]);
    let arr = [];
    while (items.itemCount > 0) {
        const item = await inquirer.prompt([
            {
                name: "itemName",
                type: "input",
                message: "Enter item name: ",
            },
        ]);
        arr.push(item.itemName);
        items.itemCount--;
    }
    console.log("Your List:");
    console.log(arr);
    const choice = await inquirer.prompt([
        {
            name: "decision",
            type: "list",
            message: "Do you want to delete items from the list?",
            choices: ["Yes", "No"],
        },
    ]);
    if (choice.decision === "Yes") {
        const noOfItems = await inquirer.prompt([
            {
                name: "count",
                type: "number",
                message: "How many items do you want to delete?",
            },
        ]);
        for (let i = 0; i < noOfItems.count; i++) {
            const itemToDelete = await inquirer.prompt([
                {
                    name: "itemName",
                    type: "input",
                    message: "Which item do you want to delete?",
                },
            ]);
            const index = arr.indexOf(itemToDelete.itemName);
            if (index !== -1) {
                arr.splice(index, 1);
                console.log(`${itemToDelete.itemName} has been deleted.`);
            }
            else {
                console.log("Item not found.");
            }
        }
        console.log("List After Deletion:");
        console.log(arr);
    }
    else if (choice.decision === "No") {
        console.log("Thank you.");
    }
}
main();
