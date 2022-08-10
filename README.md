# Markdown Language

![Markdown](https://justyy.com/wp-content/uploads/2016/01/markdown-syntax-language.png)

## Lesson Overview
In this deliverable, we'll practice using one of the *easiest* and *simplest* languages that you will use regularly in web development: Markdown.  Markdown is a text-to-HTML conversion tool that makes plain text easy to write and easy to read. 

## Objectives
  - Review and practice common markdown syntax
  - Create our own ReadMe template that we will use for the rest of the immersive
## What You'll Be Building
![End Product](https://i.imgur.com/Onbj3eC.png)

## Getting Started
  - Fork and Clone this repo
  - Open the repo in VS Code with `code .`

## Instructions

### What is Markdown?
Markdown is a way to style text on the web. You control the display of the document; formatting words as
bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly,
Markdown is just regular text with a few non-alphabetic characters thrown in, like # or *.

It is the primary language that ReadMe files are written in.  A ReadMe file usually contains a description of the project, or instructions on how to get started, or both! This lesson is a ReadMe file.  The ` .md ` at the end of the file stands for **M**ark**D**own!
  
### Creating Our Project ReadMe Template
Markdown can be used to format text to any heading size, give them emphasis, placed into lists, add links, images, and much more.  Let's practice using markdown to set up our project ReadMe.

Let's start by creating a new markdown file. Open your terminal in VS Code with <kbd>Ctrl</kbd> + <kbd>`</kbd>.

Type and execute the following in the command line.
```markdown
touch project.md
```

### Text Sizes

In that file, let's start by adding a title at the top of the page. The ` # ` character can be used to denote the size of the text on our current line. So let's start by typing ` # Project Title ` on the top line.

Using the Preview feature in VS Code, we can see what our markdown will look like! Open by clicking the icon, or by hitting <kbd>Cmd</kbd> + <kbd>K</kbd> <kbd>V</kbd>. You can add more ` # ` to decrease the size of the text. Try it out!  

### You Do (2 mins)
Below the title, create *date* and *author* sections using different size text. Should look like this:
<br>
![Title Heading](https://i.imgur.com/xqUr8re.png)

### Links
You can also use markdown to add links.  Here's what that syntax looks like...

```markdown
[Link](http://www.duckduckgo.com)
```
The text of the link goes in brackets followed by the URL in parentheses.  Let's use what we learned to link to our social sites on our Project ReadMe!
### You Do (5 mins)
Create 2-3 links to your social sites right below your name. Should be any social sites you want to link.

Hint: You can combine text sizing using ` # ` with the line your links are on!

Add a "Horizontal Rule" right below your links with ` *** ` (3 asterisks).  Now create a quick "Description" section right below using one text size smaller than your "Date" above. After all is said and done, should look like this (give or take):

![Add Links](https://i.imgur.com/9acxp9f.png)

### Text Emphasis
You can also **bold** or *italicize* items by adding 1, 2, or 3 asterisks to each side of the item, like this:
```markdown
*italics*
**bold**
***both***
```

Let's make our section headings both **bold** and *italics*.
### Lists
Markdown can also be used to create ordered and unordered lists.  Let's create a "Technologies" section to list all of the tech we use in our project. Throw in another ` *** ` right after our Description section and let's get to it.  Lists can be done like this:
```markdown
* Item 1
* Item 2
  * Sub-item

1. Item 1
2. Item 2
  * Sub-item
```
We'll do our "Technologies Used" section together as well as a quick "Getting Started" section right below...

### Images
If you haven't guessed yet, you can also link images in markdown. It's very similar to a link, just add a ` ! ` right before the brackets, like this:
```markdown
![Image](http://www.imageURL.com)
```

Let's add a "Screenshots" section where we can link a few important images.

### You Do (5 mins)
Find any image on a quick DuckDuckGo search, right click it, and select "Copy Image Address". This will copy the direct link to the image so you can link it in markdown.

Practice linking a few images in your newly created "Screenshots" section. Should look like this:

![images](https://i.imgur.com/BRhpJCN.png)

### Task Lists
You can also create task lists in markdown with checked and unchecked items. We'll use this to create a "Future Updates" section on our Project ReadMe, like this:
```markdown
- [ ] Future Update 1
- [ ] Future Update 2
- [x] Completed Update
- [x] ~~Strikethrough~~ Items Also
```
Look how cool that looks! Use this section to mark items you want to come back and add to your projects in the future.

### You Do (5 mins)
Take what you've learned, and create a final section called "Credits".  It is ***critical*** that you always credit any external site or source that aided you in your project. Whether that is an image background, or a tutorial on a technology, or inspiration.  The internet is an open space (for now), but it stays that way if we act civilized and give credit where credit is due.  Set up some credits that *link* to the sources, like this:

![Credits](https://i.imgur.com/j3or5xj.png)

## Lesson Recap
We created a ReadMe template that we can use for all of our projects going forward in this class! The ReadMe is the advertisement for your product.  Have a beautiful ReadMe and people will expect the same quality from the project!  Feel free to change and expand on what we've built to make it your own.

We learned a lot about Markdown language, but there's so much more it can do including tables, highlighting text, blockquotes, code blocks, and much much more! I encourage you to review the cheatsheet and guide below to master this skill.

## Submission Guidelines
- Pull Request must be submitted utilizing these guidelines: [PR Guidelines](https://github.com/SEI-R-6-21/template_pull_request)

## Resources
 - [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)
 - [Markdown Guide](https://ia.net/writer/support/general/markdown-guide)
