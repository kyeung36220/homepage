import "./styles.css"
import openIcon from "./images/open.svg"

//Project images
import todoJpg from "./projectImages/todo.jpg"
import battleshipJpg from "./projectImages/battleship.jpg"
import weatherappJpg from "./projectImages/weatherapp.jpg"
import evaJpg from "./projectImages/eva.jpg"
import tictactoeJpg from "./projectImages/tictactoe.jpg"
import libJpg from "./projectImages/lib.jpg"

function addProjects() {
    const projects = [
        {
            name: "To-Do List", 
            desc: "Adjustable and locally stored to-do list that make any list of tasks easy to remember!", 
            image: todoJpg,
            githubLink: "https://github.com/kyeung36220/todo-list",
            livePreviewLink: "https://kyeung36220.github.io/todo-list/",
        },
        {
            name: "Battleship", 
            desc: "A classic game with a choice of PvC or PvP. Computer comes with custom Ai that can be quite hard to beat!", 
            image: battleshipJpg,
            githubLink: "https://github.com/kyeung36220/battleship",
            livePreviewLink: "https://kyeung36220.github.io/battleship/",
        },
        {
            name: "Drip Drop", 
            desc: "Using Visual Crossing API, this app shows any weather and temperature of any city you search!", 
            image: weatherappJpg,
            githubLink: "https://github.com/kyeung36220/weather-app",
            livePreviewLink: "https://kyeung36220.github.io/weather-app/",
        },
        {
            name: "Nerv Café", 
            desc: "Based off the popular show, Neon Genesis Evangelion, this restaurant page makes the show come to life with customized menu items and pictures!", 
            image: evaJpg,
            githubLink: "https://github.com/kyeung36220/restaurant-page",
            livePreviewLink: "https://kyeung36220.github.io/restaurant-page/",
        },
        {
            name: "Tic-Tac-Toe", 
            desc: "A 2-player game where the goal is to get three in a row! Comes with comforting UI and customizable names.", 
            image: tictactoeJpg,
            githubLink: "https://github.com/kyeung36220/tic-tac-toe",
            livePreviewLink: "https://kyeung36220.github.io/tic-tac-toe/",
        },
        {
            name: "Library Tracker", 
            desc: "Tracking books has never become easier with this app! Just enter the book and it will keep track of what books you have in this digital bookshelf!", 
            image: libJpg,
            githubLink: "https://github.com/kyeung36220/library",
            livePreviewLink: "https://kyeung36220.github.io/library/",
        }
    ]

    const workContainer = document.querySelector("#workContainer")
    for (let project of projects) {
        const projectContainer = document.createElement("div")
        projectContainer.classList.add("projectContainer")
        workContainer.appendChild(projectContainer)
    
        const image = document.createElement("img")
        image.src = project.image
        projectContainer.appendChild(image)

        const textContainer = document.createElement("div")
        textContainer.classList.add("textContainer")
        projectContainer.appendChild(textContainer)

        const headerContainer = document.createElement("div")
        headerContainer.classList.add("headerContainer")
        textContainer.appendChild(headerContainer)

        const header = document.createElement("div")
        header.textContent = project.name
        header.classList.add("header")
        headerContainer.appendChild(header)

        const iconContainer = document.createElement("div")
        iconContainer.classList.add("iconContainer")
        headerContainer.appendChild(iconContainer)

        const githubLinker = document.createElement("a")
        githubLinker.href = project.githubLink
        githubLinker.target = "_blank"
        iconContainer.appendChild(githubLinker)

        const githubLogo = document.createElement("img")
        githubLogo.classList.add("github")
        githubLogo.classList.add("icon")
        githubLogo.classList.add("clickable")
        githubLogo.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        githubLinker.appendChild(githubLogo)

        const openNewLinker = document.createElement("a")
        openNewLinker.href = project.livePreviewLink
        openNewLinker.target = "_blank"
        iconContainer.appendChild(openNewLinker)

        const openNewIcon = document.createElement("img")
        openNewIcon.classList.add("openNew")
        openNewIcon.classList.add("icon")
        openNewIcon.classList.add("clickable")
        openNewIcon.src = openIcon
        openNewLinker.appendChild(openNewIcon)

        const desc = document.createElement("div")
        desc.classList.add("desc")
        desc.textContent = project.desc
        textContainer.appendChild(desc)
    }

}

addProjects()