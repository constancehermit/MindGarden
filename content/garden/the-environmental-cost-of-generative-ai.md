---
title: The Environmental Cost of Generative AI
tags: 
    - carbon impact
    - ai
firstPlanted: "2023-12-11T00:00:00.000Z"
lastTended: "2023-12-14T00:00:00.000Z"
growthStage: seed
---

## Generative Tasks are power hungry

<note-quote
    quote="Recent years have seen a surge in the popularity of commercial AI products based on generative, multi-purpose AI systems promising a unified approach to building machine learning (ML) models into technology. However, this ambition of “generality” comes at a steep cost to the environment, given the amount of energy these systems require and the amount of carbon that they emit. "
    sourceLink="#Power-hungry-processing-watts-driving-the-cost-of-ai-deployment"
    sourceText="[1]">
</note-quote>

Since GPT-3, we've been seeing a *"paradigm shift away from smaller models finetuned for a specific task towards models that are meant to carry out a multitude of tasks at once, deployed to respond to a barrage of user queries in real time."* <a href="#Power-hungry-processing-watts-driving-the-cost-of-ai-deployment">[1]</a>. One of the key findings from Luccioni et al's study was that: 

<note-quote
    quote="Generative tasks are more energy- and carbon-intensive compared to discriminative tasks. [...] the most energy- and carbon-intensive tasks are those that generate new content: text generation, summarization, image captioning, and image generation."
    sourceLink="#Power-hungry-processing-watts-driving-the-cost-of-ai-deployment"
    sourceText="[1]">
</note-quote>

The study also found that *"Using multi-purpose models for discriminative tasks is more energy-intensive compared to task-specific models for these same tasks."*. This was especially the case for question answering, and *"the difference between multi-purpose models and task-specific models is amplified as the length of output gets longer"*. <a href="#Power-hungry-processing-watts-driving-the-cost-of-ai-deployment">[1]</a>

### Image generation in particular requires a lot of power

To give a tangible example: 

<note-quote
    quote="[...] charging the average smartphone requires 0.012 kWh of energy 4 , which means that the most efficient text generation model uses as much energy as 16% of a full smartphone charge for 1,000 inferences, whereas the least efficient image generation model uses as much energy as 950 smartphone charges (11.49 kWh), or nearly 1 charge per image generation."
    sourceLink="#Power-hungry-processing-watts-driving-the-cost-of-ai-deployment"
    sourceText="[1]">
</note-quote>

## Measuring the environmental impact of ML is not easy

Due in part to a lack of transparency, it's quite difficult to measure (and regulate) the environmental impact in this particular branch of the industry. Recent work has focused on *"quantifying the operational energy and carbon required to perform the training phase [...] due to the relative ease of measuring"* <a href="#Power-hungry-processing-watts-driving-the-cost-of-ai-deployment">[1]</a> the energy required. Examples include: 

- Energy and policy considerations for deep learning in NLP, 2019 <a href="#energy-and-policy-considerations-for-deep-learning-in-nlp">[2]</a>
- Carbon emissions and large neural network training, 2021 <a href="#carbon-emissions-and-large-neural-network-training">[3]</a>
- Measuring the carbon intensity of AI in cloud instances, 2022 <a href="#measuring-the-carbon-intensity-of-ai-in-cloud-instances">[4]</a>
- Counting carbon: A survey of factors influencing the emissions of machine learning, 2023 <a href="#couting-carbon-a-survey-of-factors-influencing-the-emissions-of-ml">[5]</a>

But what about other phases of the ML model life cycle? Phases that *"stand to impact the environment just as much, or more, than training due to the computational resources required to deploy modern models at scale"*? <a href="#Power-hungry-processing-watts-driving-the-cost-of-ai-deployment">[1]</a>

### We need more transparency

<note-quote
    quote="Given our findings and the increased deployment of generative, multi-purpose AI models, we hope that both ML researchers and practitioners will practice transparency regarding the nature and impacts of their models, to enable better understanding of their environmental impacts."
    sourceLink="#Power-hungry-processing-watts-driving-the-cost-of-ai-deployment"
    sourceText="[1]">
</note-quote>

---
References: 

<span 
 id="Power-hungry-processing-watts-driving-the-cost-of-ai-deployment"> 
 [1] [Power Hungry Processing: Watts Driving the Cost of AI Deployment?](https://arxiv.org/abs/2311.16863) - A. Luccioni, Y. Jernite, E. Strubell, Allen Institute for AI. 2023.
</span><br/>
<span
  id="energy-and-policy-considerations-for-deep-learning-in-nlp">
  [2] [Energy and Policy Considerations for Deep Learning in NLP.](https://aclanthology.org/P19-1355.pdf) - Emma Strubell, Ananya Ganesh, and Andrew McCallum. 2019.
</span><br/>
<span
  id="carbon-emissions-and-large-neural-network-training">
  [3] [Carbon Emissions and Large Neural Network Training](https://arxiv.org/abs/2104.10350) - David Patterson, Joseph Gonzalez, Quoc Le, Chen Liang, Lluis-Miquel Munguia, Daniel Rothchild, David So, Maud Texier, and Jeff Dean. 2021.
</span><br/>
<span
  id="measuring-the-carbon-intensity-of-ai-in-cloud-instances">
  [4] [Measuring the Carbon Intensity of AI in Cloud Instances](https://arxiv.org/abs/2206.05229) - Jesse Dodge, Taylor Prewitt, Remi Tachet des Combes, Erika Odmark, Roy Schwartz, Emma Strubell, Alexandra Sasha Luccioni, Noah A Smith, Nicole DeCario, and Will Buchanan. 2022.
</span><br/>
<span
  id="couting-carbon-a-survey-of-factors-influencing-the-emissions-of-ml">
  [5] [Counting carbon: A survey of factors influencing the emissions of machine learning](https://arxiv.org/abs/2302.08476) - Alexandra Sasha Luccioni and Alex Hernandez-Garcia. 2023.
</span><br/>