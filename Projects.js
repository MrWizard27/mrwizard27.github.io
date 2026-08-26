const Projects = [
    {Name:"Pancake Project",Description:"This script automates every game/task given by a discord bot named pancake bot, This project was used to take over the leaderboard in a discord server while teaching me about making web requests with code",Link:"https://github.com/MrWizard27/CodingProjects/tree/main/Python%20Projects/PancakeProject"},
    {Name:"LogWeb",Description:"This Project hosts a flask web server that displays the visit log to show newcomers what a website see's when you visit it. This project was made to teach me how websites worked and how you could do more than just filesharing with it",Link:"https://github.com/MrWizard27/CodingProjects/blob/main/Python%20Projects/Webstuff/ClubFairWeb/LogWeb.py"},
    {Name:"FlipperControl.py",Description:"This is a simple serial terminal program I made to talk to my flipper zero, I made this to learn how to interact with serial devices",Link:"https://github.com/MrWizard27/CodingProjects/blob/main/Python%20Projects/Webstuff/ClubFairWeb/FlipperControl.py"},
    {Name:"Pxviewer",Description:"This was made for a CTF competition where you had to decode pixel data into an image, This taught me how to better manipulate strings as well as how to display images with python",Link:"https://github.com/MrWizard27/CodingProjects/tree/main/Python%20Projects/Pxviewer"}
]
let front = 0;

function updateTable(direction){
    if (direction < 0){
        if (front > 0){
            front -= 1;
            document.getElementById("rightScroll").style.cursor = "pointer";
            document.getElementById("rightScroll").style.color = "rgb(204,204,204)";

            document.getElementById("Project1Title").innerHTML = Projects[front].Name;
            document.getElementById("Project1Desc").innerHTML = Projects[front].Description;
            document.getElementById("Project1Attribute").href = Projects[front].Link;

            document.getElementById("Project2Title").innerHTML = Projects[front+1].Name;
            document.getElementById("Project2Desc").innerHTML = Projects[front+1].Description;
            document.getElementById("Project2Attribute").href = Projects[front+1].Link;
            
            document.getElementById("Project3Title").innerHTML = Projects[front+2].Name;
            document.getElementById("Project3Desc").innerHTML = Projects[front+2].Description;
            document.getElementById("Project3Attribute").href = Projects[front+2].Link;
        }
        if ( front == 0){
            document.getElementById("leftScroll").style.cursor = "default";
            document.getElementById("leftScroll").style.color = "black";
        }
    }else if(direction > 0){
        if (front < Projects.length-3){
            front += 1;
            document.getElementById("leftScroll").style.cursor = "pointer";
            document.getElementById("leftScroll").style.color = "rgb(204,204,204)";

            document.getElementById("Project1Title").innerHTML = Projects[front].Name;
            document.getElementById("Project1Desc").innerHTML = Projects[front].Description;
            document.getElementById("Project1Attribute").href = Projects[front].Link;

            document.getElementById("Project2Title").innerHTML = Projects[front+1].Name;
            document.getElementById("Project2Desc").innerHTML = Projects[front+1].Description;
            document.getElementById("Project2Attribute").href = Projects[front+1].Link;

            document.getElementById("Project3Title").innerHTML = Projects[front+2].Name;
            document.getElementById("Project3Desc").innerHTML = Projects[front+2].Description;
            document.getElementById("Project3Attribute").href = Projects[front+2].Link;
        }
        if (front == Projects.length-3){
            document.getElementById("rightScroll").style.cursor = "default";
            document.getElementById("rightScroll").style.color = "black";
        }

    }else{
        document.getElementById("Project1Title").innerHTML = Projects[front].Name;
        document.getElementById("Project1Desc").innerHTML = Projects[front].Description;
        document.getElementById("Project1Attribute").href = Projects[front].Link;

        document.getElementById("Project2Title").innerHTML = Projects[front+1].Name;
        document.getElementById("Project2Desc").innerHTML = Projects[front+1].Description;
        document.getElementById("Project2Attribute").href = Projects[front+1].Link;

        document.getElementById("Project3Title").innerHTML = Projects[front+2].Name;
        document.getElementById("Project3Desc").innerHTML = Projects[front+2].Description;
        document.getElementById("Project3Attribute").href = Projects[front+2].Link;

        if ( front == 0){
            document.getElementById("leftScroll").style.cursor = "default";
            document.getElementById("leftScroll").style.color = "black";
        }

        if (front == Projects.length-3){
            document.getElementById("rightScroll").style.cursor = "default";
            document.getElementById("rightScroll").style.color = "black";
        }
    }

}
