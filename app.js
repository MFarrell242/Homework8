const fs = require("fs");
const inq = require("inquirer");
const engi = require("./lib/Engineer");
const int = require("./lib/Intern");
const man = require("./lib/Manager");

class Team{
    constructor(){
        this.members = [];
    }

    async addMember(){
        await inq.prompt({
            name: "empType",
            type: "list",
            message: "What kind of employee would you like to add?",
            choices: ["manager", "engineer", "intern"]
        }).then( (data)=>{
            this.newMember(data.empType);
        })
    }

    async newMember(type){
        await inq.prompt([
            {
                name: "name",
                type: "input",
                message: "Employee name:"
            },
            {
                name: "id",
                type: "input",
                message: "Employee ID:"
            },
            {
                name: "email",
                type: "input",
                message: "Employee's email:"
            }
        ]).then((data) => {
            if (type === "manager"){
                inq.prompt({name: "office", message: `What is ${data.name}'s office number?`}, (data)=>{
                    let bob = new man(data.name, data.id, data.email, data.office);
                    this.members.push(bob);
                })
                
            }
            else if (type === "engineer"){
                inq.prompt({name: "github", message: `What is ${data.name}'s github?`}, (data)=>{
                    let bob = new engi(data.name, data.id, data.email, data.github);
                    this.members.push(bob);
                })
            }
            else {
                inq.prompt({name: "skool", message: `What is ${data.name}'s school?`}, (data)=>{
                    let bob = new int(data.name, data.id, data.email, data.skool);
                    this.members.push(bob);
                })
            }
        })
    }
}

const corp = new Team;
teamMake();
async function teamMake(){
    
    corp.addMember().then(
    inq.prompt({prompt: "add another employee?", type: "list", choices: ["Y", "N"], name: "cont"}, (data)=>{
        console.log(data);
        if (data.cont === "Y"){
            teamMake()
        }
        else {
            corp.members.forEach((member)=>{
                const card = fs.readFile(`./templates/${member.role}`, "utf8", )
                fs.appendFile("./output/")
            })
            console.log("team built");
        }
    }));
    
}

// async function teamBuilder() {
//     await inq.prompt({
//         name: "empType",
//         type: "list",
//         message: "What kind of employee would you like to add?",
//         choices: ["manager", "engineer", "intern"]
//     }).then((data)=>{
//         let mem = newMember(data.empType);
//         newTeam.push(mem);
//         console.log(newTeam);
//     });

//     inq.prompt("Add another member? (y/n):", (res)=>{
//         if (res === "y"){
//             teamBuilder();
//         }
//         else {

//         }
//     })
// }

// function newMember(type){
//     inq.prompt([
//         {
//             name: "name",
//             type: "input",
//             message: "Employee name:"
//         },
//         {
//             name: "id",
//             type: "input",
//             message: "Employee ID:"
//         },
//         {
//             name: "email",
//             type: "input",
//             message: "Employee's email:"
//         }
//     ]).then((data) => {
//         if (type === "manager"){
//             inq.prompt({name: "office", message: `What is ${data.name}'s office number?`}, (data)=>{
//                 let bob = new man(data.name, data.id, data.email, data.office);
//                 return bob;
//             })
            
//         }
//         else if (type === "engineer"){
//             let git =  inq.prompt(`What is ${data.name}'s github?`)
//             let bob = new engi(data.name, data.id, data.email, git);
//             return bob;
//         }
//         else {
//             let skool =  inq.prompt(`What is ${data.name}'s school?`)
//             let bob = new int(data.name, data.id, data.email, skool);
//             return bob;
//         }
//     })
// }

// teamBuilder();