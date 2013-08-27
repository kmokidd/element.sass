#Element.sass

Based on [web-auto-build](https://npmjs.org:10020/package/web-auto-build) by [@tamamadesu](http://weibo.com/myjiejie) and [elements.less](https://github.com/dmitryf/elements/blob/master/elements.less), this is part of a back-end management system developed by [itValue](http://www.itvalue.com.cn/) team.

Element.sass focuses on the style of a website. So the core parts of this project is in `css/` and `sass/`, and they are sass/scss files and css files.

##Dependencies

Because this project is based on web-auto-build. So you need to have **node** environment and **npm** on you computer. You can go to [node.js](http://nodejs.org/) to get more information. The developer of web-auto-build used [Grunt](http://gruntjs.com/) to develop this tool.

And I used Sass/Scss to write website style. So Ruby and Sass environment is required. You can go to [Sass](http://sass-lang.com/) to find more information about configuration.

##File structure
	Element.sass/
	├── sass/
	│   ├── img/
	│   ├── buttons.sass
	│   ├── comments.sass
	│   ├── config.sass
	│   ├── forms.sass
	│   ├── functions.sass
	│   ├── global.sass
	│   ├── layout.sass
	│   ├── list.sass
	│   ├── normalize.scss
	│   ├── responsive.sass
	│   ├── sprites.sass
	│   ├── test.sass
	├── css/
	│   ├── style-min.css
	├── package.json
	└── Gruntfile.js

##Files content
All the real styles are in *.sass, and except config.sass, test.sass and functions.sass as well as global.sass. If you want to modify something, you need to change the dest files directly. For instance, if you want to change style of buttons, you need to modify the content in buttons.sass. Then run Gruntfile.js to pack up a new css file with the new style of buttons.

###Workflow
Sass files of components will be imported into `sass/config.sass` and run Gruntfile.js to transform and compress the `sass/config.sass` to `css/style-min.css`

###normalize.scss
This is the reset style sheet. We will keep modifying it with requirement of our product. But most of the reset style sheet are downloaded from [Normalize](http://necolas.github.io/normalize.css/). 

Actually, the code in normalize.scss are css but not scss/sass. However, I want to use `@import` to import all the sass sheets of components into config.sass, which is not supported to import css file. So I change the file  extension to scss.

So if you want to change the content there, you can directly write either css or scss code. And you need to `@import` it into `sass/config.sass` at the first.

###functions.sass
Referring to [Elements.less](https://github.com/dmitryf/elements/blob/master/elements.less), make this sass/scss version. But I am a freshman in sass, so there must be somewhere unreasonable or enhanced.

In functions.sass, there are plenty of attributes which are required browser prefix when using. 


###config.sass
All the compoents sass files will be used `@import` statement to be included into `config.sass`. So `config.sass` is likely the `.h` file in C, library in Java or modulas in Node.js.

This is the original file to be compressed and converted in `Gruntfile.js`. 

###test.sass
This is a test file. You can totally ignore it.