# React + Vite + Tailwindcss + Daisyui

# INITIAL Work To Do First
### To Install Node Modules
~~~
npm i
~~~
### To Run on Local Server
~~~
npm run dev
~~~
then press "o" to open in browser

- press u to show server url   
- press r to restart the server
- press o to open in browser   
- press c to clear console     
- press q to quit
<hr/>

### To Build To Set Live Link
~~~
npm run build
~~~
<hr/>
## Surge Setup
### To Install Surge
- Make a File named "CNAME" in [Public] Folder
- Save your domain as your wish inside the "CNAME" File.
~~~
npm install --global surge
~~~
### To Publish on Surge Server
~~~
surge dist
~~~

- [CPY the domain] given from surge.
- Make a File named "CNAME" in [Public] Folder
- Save The domain inside the "CNAME" File.

<hr/>

## To Publish On netlify
- After npm run build Copy-Paste the "dist" folder on Netlify

<hr/>
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
