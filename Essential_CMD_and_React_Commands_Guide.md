# 🧭 Essential CMD and React Commands Guide

## 📂 CMD (Command Prompt / Terminal) File Navigation

  -----------------------------------------------------------------------
  Command              Description                   Example
  -------------------- ----------------------------- --------------------
  `cd`                 Change directory              `cd Desktop`

  `cd ..`              Move one directory up         `cd ..`

  `dir` (Windows) /    List files and folders        `ls -la`
  `ls` (Linux/Mac)                                   

  `mkdir`              Create a new directory        `mkdir myproject`

  `rmdir`              Remove a directory            `rmdir oldfolder`

  `del` / `rm`         Delete files                  `rm file.txt`

  `cls` (Windows) /    Clear terminal screen         `clear`
  `clear` (Linux/Mac)                                

  `pwd`                Show current working          `pwd`
                       directory                     

  `exit`               Close the terminal            `exit`
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## ⚛️ React & Node.js Commands

### 🔧 NPM (Node Package Manager) Basics

  -----------------------------------------------------------------------
  Command                       Description
  ----------------------------- -----------------------------------------
  `npm init`                    Initialize a new Node.js project (creates
                                package.json)

  `npm install` or `npm i`      Install dependencies from package.json

  `npm install express` or      Install Express.js framework
  `npm i express`               

  `npm install -g <package>`    Install a package globally

  `npm uninstall <package>`     Remove a package

  `npm update`                  Update all dependencies

  `npm run <script>`            Run a custom script defined in
                                package.json
  -----------------------------------------------------------------------

------------------------------------------------------------------------

### ⚛️ React-Specific Commands

  Command                          Description
  -------------------------------- -------------------------------------
  `npx create-react-app myapp`     Create a new React project
  `npm start`                      Start the React development server
  `npm run build`                  Build the project for production
  `npm test`                       Run test cases
  `npm install react-router-dom`   Install React Router for navigation
  `npm install axios`              Install Axios for HTTP requests

------------------------------------------------------------------------

## 💡 Useful Tips

-   Always use **`npx create-react-app`** instead of global installs for
    updated setups.\
-   Use **`npm install`** after cloning a project to restore
    dependencies.\
-   Keep your terminal clean using `clear` frequently.\
-   Learn to combine commands using `&&` (e.g.,
    `cd myapp && npm start`).

------------------------------------------------------------------------

## 🚀 Summary

These commands are the foundation for web developers to manage files and
React projects efficiently.\
Mastering them boosts productivity and helps you debug and deploy
faster!
