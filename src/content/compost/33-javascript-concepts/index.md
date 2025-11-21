---
title: "JS Explorer Part 1: Call Stack & Event Loop"
tags: 
    - javascript
    - coding
firstPlanted: "2023-08-24T00:00:00.000Z"
lastTended: "2023-10-05T00:00:00.000Z"
growthStage: seed
thumbnail: ""
---

## Work In Progress

---

## JavaScript

What's JS? Knowing this is the minimum entry to continue. Maybe I'll add a short paragraph later. 

---

## Everything is machine code, eventually
A little reminder at we are, at a high level, controlling a bunch of microprocessors that understand only machine code.  
How are we going to get from Javascript to machine code? We're going to need an engine to do it for us, of course! 

### V8 Engine
Google's JS Engine for Chrome is called V8. Released in 2008. Written in C++. More on this later.

<note-polaroid-image
    src="33-javascript-concepts/v8-architecture-1.png"
    alt="Image shows an architectural diagram of Google's V8 engine. Named components include the Parser, AST, Interpreter, Heap, Profiler, and Compiler"
    caption="Here's a handy diagram"
    sourcelink="https://blog.bitsrc.io/how-does-javascript-really-work-part-1-7681dd54a36d"
    sourcetext="blog.bitsrc.io">
</note-polaroid-image>

---

## The JS Call Stack
Micro, macro, metaphor... where to begin? 

<NoteIllustration
    src="33-javascript-concepts/FILENAME.png"
    alt="The stack is a Last In First Out Structure, as illustrated by a stack of plates."
    caption="The stack is a Last In First Out Structure"
/>

### Execution Context
When we talk about 'running' code, we're referring to a two-step process:
- **Compilation** (where an execution context is created) 
- **Execution** (which updates the execution context as it goes along, line by line).


#### Tangent: What does it mean to compile something?
Compiling is the act of collecting, gathering, bringing together.   
Essentially, the taking from many places and putting into one place.  
The first compiler was written by Grace Hopper, in 1951, who said this at the History of Programming Languages conference in 1981:  

> And it was amazing how many times a 4 would turn into a delta which was our space symbol, or into an A--and even Bs turned into 13s. All sorts of interesting things happened when programmers tried to copy subroutines. And there of course stood a gadget whose whole purpose was to copy things accurately and do addition. And it therefore seemed sensible, instead of having programmers copy the subroutines, to have the computer copy the subroutines. Out of that came the A-0 compiler [...] The reason it got called a compiler was that each subroutine was given a "call word," because the subroutines were in a library, and when you pull stuff out of a library you compile things. It's as simple as that.

Anyway. Here's an example: 

---
References: 
- [33 JS Concepts](https://github.com/leonardomso/33-js-concepts) *GitHub Repo*
- ['JS Execution Context Part 1](https://cabulous.medium.com/javascript-execution-context-part-1-from-compiling-to-execution-84c11c0660f5), [2](https://cabulous.medium.com/javascript-execution-context-part-2-call-stack-and-multiple-execution-contexts-dbe428a94190), & [3](https://cabulous.medium.com/javascript-execution-context-lexical-environment-and-block-scope-part-3-fc2551c92ce0) *Medium Articles*
- ['What the heck is the event loop anyway?'](https://www.youtube.com/watch?v=8aGhZQkoFbQ) *YouTube Video of JSConf Talk by Philip Roberts*
- [Grace M. Hopper; Keynote Address](https://dl.acm.org/doi/10.1145/800025.1198341) to the ACM SIGPLAN History of Programming Languages (HOPL) Conference (June 1-3, 1978), in Richard L. Wexelblat (ed.); History of Programming Languages, p.10 (1981)
