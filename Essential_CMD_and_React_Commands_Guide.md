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

# ⚛️ React-Specific Commands and Setup Guide

## 📦 Common React Commands
| Command | Description |
|----------|--------------|
| `npx create-react-app myapp` | Create a new React project using Create React App |
| `npm start` | Start the React development server |
| `npm run build` | Build the project for production |
| `npm test` | Run test cases |
| `npm install react-router-dom` | Install React Router for navigation |
| `npm install axios` | Install Axios for making API requests |

---

## ⚡ Creating a React App with **Vite**
Vite is a **faster and more modern** alternative to Create React App (CRA). It provides lightning-fast development and optimized builds. To create a React app using Vite, run `npm create vite@latest myapp`, then select **React** as the framework and **JavaScript** or **TypeScript** as the variant. After that, navigate into your project folder with `cd myapp`, install dependencies using `npm install`, and start the development server with `npm run dev`. ✅ Your Vite + React app is now running locally (default: [http://localhost:5173](http://localhost:5173)).

---

## 💡 Useful Tips
Always use **`npx create-react-app`** or **`npm create vite@latest`** for the latest setup. Run **`npm install`** after cloning any project to install missing dependencies. Use **`clear`** (Linux/Mac) or **`cls`** (Windows) to keep your terminal clean. Combine commands for efficiency, e.g., `cd myapp && npm run dev`. Prefer **Vite** for new projects — it’s faster and more lightweight.

---

## 🚀 Summary
Both **Create React App** and **Vite** let you start building React projects quickly. However, **Vite** is now widely preferred for its speed, modern tooling, and simplicity.

------------------------------------------------------------------------

## 🚀 Summary

These commands are the foundation for web developers to manage files and
React projects efficiently.\
Mastering them boosts productivity and helps you debug and deploy
faster!
