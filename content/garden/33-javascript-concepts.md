---
title: 33 Javascript Concepts, Illustrated
tags: 
    - javascript
    - coding
firstPlanted: "2023-08-24T00:00:00.000Z"
lastTended: "2023-08-24T00:00:00.000Z"
growthStage: seed
thumbnail: ""
---


## Work In Progress
I'm still working on this! 
Why do it? Why do anything? It's more interesting for me if I document the journey.  
I learn better if I try to write about what I'm learning.  

## Everything is machine code eventually
A little reminder at we are, at a high level, controlling a bunch of microprocessors that understand only machine code.  
How are we going to get from Javascript to machine code? We're going to need an engine to do it for us, of course! 

### V8 Engine
Google's JS Engine for Chrome. Released in 2008. Written in C++. 

<note-polaroid-image
    src="33-javascript-concepts/v8-architecture-1.png"
    alt="Image shows an architectural diagram of Google's V8 engine. Named components include the Parser, AST, Interpreter, Heap, Profiler, and Compiler"
    caption="Here's a handy diagram"
    sourcelink="https://blog.bitsrc.io/how-does-javascript-really-work-part-1-7681dd54a36d"
    sourcetext="blog.bitsrc.io">
</note-polaroid-image>

## The JS Call Stack
Micro, macro, metaphor, where to begin? Let's start with something foundational. 

### Execution Context
When we talk about 'running' code, we're referring to a two-step process. **Compilation** (where an execution context is created) and then **Execution** (which updates the execution context as it goes along, line by line).



<note-illustration-image
    src="33-javascript-concepts/FILENAME.png"
    alt="tbd">
</note-illustration-image>


---
References: 
- [33 JS Concepts GitHub Repo](https://github.com/leonardomso/33-js-concepts)
- ['What the heck is the event loop anyway?' JSConf Talk by Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

