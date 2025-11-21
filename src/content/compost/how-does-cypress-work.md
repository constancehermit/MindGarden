---
title: Understanding Cypress
tags: 
    - e2e testing
firstPlanted: "2023-01-23T00:00:00.000Z"
lastTended: "2023-01-23T00:00:00.000Z"
growthStage: seed
thumbnail: ""
---
This is a Work In Progress!
Pasting/dumping my thoughts and documentation excerpts (: 

# You can't work with return values
> You cannot assign or work with the return values of any Cypress command.  
> Commands are enqueued and run asynchronously. -- [Cypress Core Concepts](https://docs.cypress.io/guides/core-concepts/variables-and-aliases)

Cypress does not **return** subjects. Does not give them back to the previous thing.  
Cypress **yields** subjects. It pays them forward to the next thing.

## Then Closure
[JS Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

# Cypress is Asynchronous
The asynchronous nature of Cypress is perhaps the most crucial concept to understand.  
> [Cypress] manages a Promise chain on your behalf, with each command yielding a 'subject' to the next command, until the chain ends or an error is encountered. --[Cypress Docs](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Are-Asynchronous)

> **Core Concept**
> Cypress commands do not return their subjects, they yield them. Remember: Cypress commands are asynchronous and get queued for execution at a later time. During execution, subjects are yielded from one command to the next, and a lot of helpful Cypress code runs between each command to ensure everything is in order. --[Cypress Docs](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Are-Asynchronous)

```
// THIS WILL NOT WORK
const button = cy.get("button")
button.click()
```



```
it('changes the user's language setting' function() {}
  cy.visit('https://myExampleSite.com'); // nothing is executed, it's queued
  cy.get('.exampleSelectorForSettingsButton').click(); // still nothing executed
  cy.url().should('include', '/settings'); // nope not executed yet, still queueing
});
// now cypress has queued all the commands they will run in sequence
```

Cypress takes all the commands and queues them when it loads the test.  
When it starts executing the test, subjects are yielded from one command to the next.  
Lots of Cypress code, that we shouldn't/can't interrupt, runs in between commands.  
(stuff that tries to ensure that DOM changes and test commands line up, automatic waiting...)

Your test is a script that Cypress will play back at a later date.  
The async commands enables the best thing about Cypress: automatic waiting.

# Chains & Best Practice

> **Don't continue a chain after acting on the DOM**
> While it's possible in Cypress to act on the DOM and then continue chaining, this is usually unsafe, and can lead to stale elements. See the Retry-ability Guide for more details.
> But the rule of thumb is simple: If you perform an action, like navigating the page, clicking a button or scrolling the viewport, end the chain of commands there and start fresh from cy. --[Cypress Docs](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Are-Asynchronous)

# Cypress is Asynchronous
A lot of common JS patterns either won't work or aren't recommended for use in Cypress because of its asynchronous structure.  
Although Cypress commands appear to be normal JS functions, they are all asynchronous.  
Each time you use the cy command, you are creating something **like** a JS promise.  
To be clear, they are not the **same** as JS promises, and you can't mix the two. If you use async/await in a Cypress test, it won't put your code in the Cypress chain of commands. 
Cypress handles all of the promise-part internally and we don't have to return or handle anything.
Any subsequent commands are in the *then* clause of the preceding command, and only execute after the previous finished.  
When the command is run, it queues itself a list of commands and returns immediately. What we think of as the command itself (click, get, whatever) executes as part of this queue of promises.

## The implication being?
Normal JS assignment or logic does not see Cypress stuff and vice versa.  
If you write a normal let or const assignment - that will happen when the test loads. They won't see Cypress data, and Cypress commands won't see them. 
Everything you do in a Cypress test needs to go through the cy command.  
Cypress has constructs that allow you to do variable assignment etc inside cypress-land.  

## Aight so how can I do the things I expect to be able to do?? 

> To work around the need to reference elements, Cypress has a feature known as aliasing. Aliasing helps you to store and save references for future use. --[Cypress Docs](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Are-Asynchronous)

Using variables, making assertions, holding onto values for later, you gotta chain it all. 
Example being Aliases. `cy.get(“.concert”).first().as(“concert”)`
You'd have to chain, to be able to do stuff with that element: 
```
cy.get(".concert").first().then(element => {
​    // do whatever we want in here...
​ }
```

## Seems like a pain, why do they do this? 
Making **every** command async means that Cypress gets full control over how the test executes.  
One of the most common problems when testing JS are that the DOM elements are appearing, changing, disappearing...  
That makes the tests complicated to run. If the timing of DOM changes and test commands doesn't line up, you get flakes! 
It's one of Cypress' goals/marketable-qualities whatever that it's **not flaky**. 

## Ok no-one likes flakes, good reason. How does it work? 
Cypress attempts to avoid/reduce flakes by guaranteeing that each command is only executed when the previous command has fully completed. 
e.g: 
```
cy.visit(“/”)
cy.get(“#favorite-section”).as(“favorites”)
```
the second command (get) won't begin execution until visit has completed.  
& if the get command doesn't initially find the DOM element, it will automatically wait (default is 4s) for it to show up.  
Only once it has shown up will Cypress move on to execute the command. 

## So Cypress is making extra checks in the background
Side effect of this chain-in-order execution method is that Cypress commands (even ones not making assertions explicitly) are doing existence checks.  
A Cypress test using a get command is still making implicit assertions about the structure on the page.


# So how can I work with variables?? 

Let's say the ID is in our URL `https://mySite.com/article/1234`
Instinct would tell you to do a `const thingID = cy.location('pathname').split('/')[2];` but that will never work, because anything not written with/in the cy commands won't get queued, it'll happen at test load, not useful. Can't split the result of cy.location because cy.location **does not return a value, back** but **yields a value, forward**. It's a Cypress promise and we can't assign it like this.  

We can work with the result of the promise further along in the chain by using `.then()`
```
cy.location('pathname').then(path => {
  const articleID = path.split('/')[2];
  cy.wrap(articleID).as('articleID');
});
```

Even neater [via Gleb](https://dev.to/bahmutov/comment/ll1o)
```
cy.location('pathname').invoke('split', '/').its(2).as('articleID');
cy.get('@articleID').then(id => cy.log(`article **${id}**`))
```

---
References: 
- [Cypress Docs on Understanding the Asynchronous Nature of Cypress](https://learn.cypress.io/cypress-fundamentals/understanding-the-asynchronous-nature-of-cypress)
- [Cypress Docs on Working with Variables](https://docs.cypress.io/guides/core-concepts/variables-and-aliases)
- [The Pragmatic Programmers on How Cypress Works](https://medium.com/pragmatic-programmers/understanding-how-cypress-works-c0b2aa85be89)
- [Steven Hicks on Variables in Cypress](https://www.stevenhicks.me/blog/2020/02/working-with-variables-in-cypress-tests/)

