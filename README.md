# [**PlatziFood**]()
This is a project coming from the **Víctor Yoalli Domínguez**'s course of **Tailwind Css** on the **Platzi** platform. The goal with this course is learn how to use Tailwind in the best way possible (this includes good practices), likewise to apply the knowledge in a real-life project.

> **Note:** I'll try to add my notes here in order to get a better experience while learning, furthermore, this way I'll be able to remember the things seen in this course for a longer time.

## **Table of contents**
- [Installation and workflow](#installation-and-workflow)
- [Personalization and configuration](#personalization-and-configuration) 
- [Responsive Design, Mobile First and Utility First](#responsive-design-mobile-first-and-utility-first)
- [Resources](#resources)

![](https://static.platzi.com/media/courses/Opengraph-tailwind-css_2.png)

### **Installation and workflow**
* First, a few things you'll need to install in your computer to get up-and-running with the project are the **tailwind**, **autoprefixer**, and **postcss-cli** dependencies by running the **npm install** command (this will install the dependencies locally in the project).

```
    npm install tailwind autoprefixer postcss-cli
```

> **Important:** This will allow you to compile the code with PostCss thanks to the **CLI** version that'll be installed.

* Then, you must initialize the **npm** project to generate the package.json, here you can use the **npm init** command or **npm init -y** if you'd like to skip the configuration related to the information of the project.

```
    npm init -y
```

* Just after it, initialize Tailwind to create the config file by running the **npx tailwind init**

```
    npx tailwind init
```

> **Important:** npx isn't anything else that you must install to use it, it's installed alongside npm, therefore, you won't need to do anything extra. The main differences between them is that npm cannot run packages by itself unless it's either installed globally or declared on the package.json file as a script (this is what we'll do in a moment).

* Now, how it was mentioned before, you'll need to add the  **postcss input.css -o output.css -m** command to the *scripts* object on the *package.json* file, there you'll need to assign the name you'll use to run it with the **npm run** command.

```
   "scripts": {
       "build": "postcss input.css -o output.css -m" 
   } 
```

> **Note:** that command is available thanks to the implementation of **postcss-cli** locally.

* But, how do we tell Tailwind which things to import specefically? Well, we'll use the **Tailwind** directives which are instructions that tell Tailwind what to import on the compiled stylesheet. The three directives available on Tailwind are: **base**, **components** and **utilities**, being the latter the most important due to it's meant to be the part of the framework that imports the utilities for its use.

```
    // This is meant to be the part of Tailwind that gives you the normalize:
    @tailwind base;
    // This is meant to be the part of Tailwind that gives you basic tools to build your layout easier:
    @tailwind components; 
    // This imports all the utilities that Tailwind can offer:
    @tailwind utilities; 
```

- Next you'll have to run the script by using the **npm run build** command. This will create you the whole Tailwind stylesheet for your project.

### **Personalization and configuration**
If you'd like to personalize your Tailwind stylesheet, then, you have to make tweaks to the **module.exports** array on the **tailwind.config.js** file, I could write an extense guide about how to use this part but tbh is better redacted on the Tailwind's official documentation. Anyways I'll explain a few basic and important concepts.

* If you'd like to overwrite the defualt configuration, then you have to add the keys for the main agroupation of values such as **colors** (here you can change the default palette or add yours), **screens** (for media-queries breakpoints), and **spacing** (for everything related to sizes). Or, otherwise, you can edit the values from the called **corePlugins** (the agroupation of utilities that are related because of their properties, such as **borderRadius**). Or both.

* If you'd like to add new versions of a utility (**red-500**, **red-600**, **red-700**, etc.) you'll have to do something similar to above but in the **extend** object. 

> **Note:** anyways, the recommendation is to go ahead and read the [documentation](https://tailwindcss.com/docs/theme) for more details because the mentioned above it's just an attempt of a tiny summary in order of having a little concern of the possibilities of personalization.

> **Note:** you can also generate the full version of the default configuration by using the **npx tailwindcss init tailwind.config.full.js --full** (it's possible to indicate the name of the file just by writing it after the **init** flag, just remember to reference it on the PostCss config file, for more information check the documentation mentioned before).

```
    npx tailwindcss init tailwind.config.full.js --full
```

### **Responsive Design, Mobile First and Utility First**
Tailwind has three concepts in its banner, **Responsiv  e Design**, **Mobile First** and **Utility First**, therefore stuff like breakpoints are available with a certain facility in order to give to developers a better experience while coding. Some breakpoints available as default on Tailwind are: 

* **default:** more than 0px.
* **sm:** more than 640px.
* **md:** more than 768px.
* **lg:** more than 1024px.
* **xl:** more than 1280px.

## Resources 📚
- [Curso de Tailwind CSS](https://platzi.com/cursos/tailwind-css/)
- [Configuration](https://tailwindcss.com/docs/configuration)
- [Theme](https://tailwindcss.com/docs/theme)
- [Diferencia entre npx y npm](https://www.it-swarm-es.com/es/javascript/diferencia-entre-npx-y-npm/838393291/)
