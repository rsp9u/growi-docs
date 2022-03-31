(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{780:function(e,t,a){"use strict";a.r(t);var s=a(48),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"let-s-start-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-s-start-development","aria-hidden":"true"}},[e._v("#")]),e._v(" Let's start development")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("WESEEK Rule")]),e._v(" "),a("p",[e._v("Developers who are not used to Git functionality (branches, reset, rebase) should use a GUI client.\nGUI clients make it easy to develop while keeping in mind the tree structure of the Git repository and related considerations.")])]),e._v(" "),a("h2",{attrs:{id:"first-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-time","aria-hidden":"true"}},[e._v("#")]),e._v(" First Time")]),e._v(" "),a("p",[e._v("Perform the following steps in a terminal inside your GROWI-Dev devcontainer.")]),e._v(" "),a("h3",{attrs:{id:"install-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies","aria-hidden":"true"}},[e._v("#")]),e._v(" Install Dependencies")]),e._v(" "),a("p",[e._v("Execute with npx because lerna　package is not installed.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("npx lerna bootstrap\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("DO NOT USE "),a("code",[e._v("npm install")]),e._v(" or "),a("code",[e._v("yarn")])])]),e._v(" "),a("h3",{attrs:{id:"launch-frontend-and-backend-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-frontend-and-backend-server","aria-hidden":"true"}},[e._v("#")]),e._v(" Launch Frontend and Backend Server")]),e._v(" "),a("p",[e._v("In 2 separate terminals, run the frontend client and backend server."),a("br"),e._v("\nEither process can be terminated with "),a("code",[e._v("Ctrl-C")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"server-for-developing-frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-for-developing-frontend","aria-hidden":"true"}},[e._v("#")]),e._v(" Server for developing frontend")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("cd packages/app")])]),e._v(" "),a("li",[e._v("Use "),a("code",[e._v("yarn dev:client")]),e._v(" to:\n"),a("ul",[a("li",[e._v("Build client assets and launch webpack-dev-server.")]),e._v(" "),a("li",[e._v("Detect changes in client-side files and auto-rebuild the client assets.")])])])]),e._v(" "),a("h3",{attrs:{id:"server-for-developing-backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-for-developing-backend","aria-hidden":"true"}},[e._v("#")]),e._v(" Server for developing backend")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("cd packages/app")])]),e._v(" "),a("li",[e._v("Use "),a("code",[e._v("yarn dev:server")]),e._v(" to:\n"),a("ul",[a("li",[e._v("Launch the Express server.")]),e._v(" "),a("li",[e._v("Detect changes in server-side files and auto-restart the Express server.")])])])]),e._v(" "),a("h2",{attrs:{id:"additional-launches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-launches","aria-hidden":"true"}},[e._v("#")]),e._v(" Additional Launches")]),e._v(" "),a("p",[e._v("Each time the application is launched, repeat the steps under "),a("a",{attrs:{href:"#first-time"}},[e._v("First Time")]),e._v(".")]),e._v(" "),a("p",[e._v("Section "),a("a",{attrs:{href:"#install-dependencies"}},[e._v("Install Dependencies")]),e._v(" can be executed with yarn if the lerna package is installed in node_modules.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("yarn lerna bootstrap\n")])])]),a("h2",{attrs:{id:"list-of-npm-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-of-npm-commands","aria-hidden":"true"}},[e._v("#")]),e._v(" List of npm Commands")]),e._v(" "),a("p",[e._v("Here are the main commands used in development."),a("br"),e._v("\nCheck also the script section of "),a("code",[e._v("packages/app/package.json")]),e._v("\nto see all commands you can use.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Execute the following command under the "),a("code",[e._v("packages / app")]),e._v(" directory.")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("command")]),e._v(" "),a("th",[e._v("desc")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("dev:client")])]),e._v(" "),a("td",[e._v("Build client and launch webpack-dev-server for development."),a("br"),e._v("Watching file chages and rebuild automatically.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("dev:server")])]),e._v(" "),a("td",[e._v("Launch Express server for development."),a("br"),e._v("Watching file chages and restart automatically.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("test")])]),e._v(" "),a("td",[e._v("Run unit/integration tests.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("lint")])]),e._v(" "),a("td",[e._v("Run code linting.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("migrate:create")])]),e._v(" "),a("td",[e._v("Create a new migration file.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("migrate:status")])]),e._v(" "),a("td",[e._v("Check which migrations are applied (or not.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("migrate:up")])]),e._v(" "),a("td",[e._v("Apply all pending migrations.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("migrate:down")])]),e._v(" "),a("td",[e._v("Revert (only) the last applied migration.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("migrate")])]),e._v(" "),a("td",[a("em",[e._v("[Alias]")]),e._v(" Invoke "),a("code",[e._v("migrate:up")]),e._v(".")])])])]),e._v(" "),a("h2",{attrs:{id:"production-build-and-execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#production-build-and-execution","aria-hidden":"true"}},[e._v("#")]),e._v(" Production Build and Execution")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Execute the following command under the root directory of the repository.")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Install dependencies")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("npx lerna bootstrap\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Build the frontend client for production")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("yarn app:build\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Launch the backend server")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("yarn app:server\n")])])])])])])},[],!1,null,null,null);t.default=r.exports}}]);