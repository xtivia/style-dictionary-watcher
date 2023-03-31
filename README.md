
# Style Dictionary Watcher

A simple watch script for style-dictionary

* Triggers ``style-dictionary build`` when a design token is present in the projects folder. 
* Created to automatically build generated design tokens when they are exported using Figma's [Design Tokens](https://www.figma.com/community/plugin/888356646278934516) plugin, but any valid design token will work.
* Allows for multiple projects with a separate configuration for each project.

## How To Use

* Run ``npm install`` to install dependencies.
* Create a config.json file using this guide [Style Dictionary Documentation - Config](https://amzn.github.io/style-dictionary/#/config).
* Create a subdirectory inside of projects and add your config.json file to it.
* Type ``npm run watch`` in your terminal to start the watcher.
* Move or copy a design token with the filename pattern _*.tokens.json_ into the project subdirectory. The corresponding config file will be used.

You should see a success message printed to your terminal.

**Note:** The included example has a buildPath outside of this directory. It assumes that there's a directory named _design-token-example_ with a subdirectory named _design-tokens_.

## 🚀 About Me
I'm Lawrence, a UX designer and UI developer at Xtivia inc. I do my best to help make the internet shiny, easy to use, and accessible to everyone!
