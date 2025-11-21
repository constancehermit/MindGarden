---
title: What are Marker Tests?
tags: 
    - ai
firstPlanted: "2024-12-10T00:00:00.000Z"
lastTended: "2023-12-10T00:00:00.000Z"
growthStage: seed
---

## What are Marker Tests?

They **evaluate specific capabilities of AI systems**, often using **predetermined inputs** to detect whether the AI demonstrates expected patterns/traits. They are **commonly used during development** and evaluation to ensure the AI meets design goals.

They are crafted to **validate specific functionality** (such as factual accuracy, coherence, reasoning), in order to **detect problematic behaviours** (such as hallucinations, bias, overfitting to training data).

They are **not exhaustive**, but a manually created list of key scenarios. We should use **risk assessment** to decide which problems are **critical** and which are not.

<note-quote
    quote="The key is to balance between the potential benefits and risks of the application. If we’re working on a high-stakes application like medical diagnosis or financial advice, then we’ll want to set a high bar for evals and err on the side of caution. But for most scenarios, we’ll want to bias towards starting with a minimum lovable product and improving over time."
    sourceLink="#calibrate-your-evaluation-bar-to-the-level-of-risk"
    sourceText="[1]">
</note-quote>

--- 
References: 

<span
  id="calibrate-your-evaluation-bar-to-the-level-of-risk">
  [1] [Calibrate your evaluation bar to the level of risk](https://eugeneyan.com/writing/evals/#calibrate-your-evaluation-bar-to-the-level-of-risk) - Eugene Yan
</span><br/>