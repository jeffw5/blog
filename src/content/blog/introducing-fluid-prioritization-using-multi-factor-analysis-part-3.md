---
title: Introducing Fluid Prioritization using Multi-Factor Analysis (Part 3)
description: Fluid Prioritization
pubDate: 2022-06-03T22:22:00
updatedDate: ''
heroImage: /blog/images/pasted-image-1782443778792.png
tags:
  - Prioritization
---

## Steps for implementing Fluid Prioritization

Establishing a prioritization model is a journey that will yield progressive value as it matures. The initial scaffolding is outlined below and will culminate in a knowledge fabric that encapsulates demand (source for change), a digital twin (logical representation of the business built atop the Biz:DNAⓒ and used to conduct impact assessment), and the multi-tier prioritization model (built using a set of progressively maturing algorithms to provide insights and recommend options for decision pathing).

By instantiating the digital twin as a digital layer residing atop the organization’s infrastructure & operations is to minimize disruption while it is under construction, separate compute cycles for analytics from existing operations concerns, and to support iterative change and evolution of the framework from ongoing change and operations used to run the business. Over time, the knowledge fabric and accompanying analytics used for supporting the next generation demand management will provide a sensory capability for the organization to identify and assess change from any source. The prioritization algorithms combined with the digital twin will provide the understanding and impact from change to guide decision making used to inform prioritization.

### **Step 1:**

 Formalize Demand Management encompassing all manner of demand for change as sourced from each of the Biz:DNAⓒ components:

- Strategic demand - originates from internal and external forces, where internal forces are business driven change used to achieve goals and objectives towards a short term or long term set of plans typically driven by opportunity to drive growth (products, services, platforms, business model extensions). External forces include, but are not limited to competitive challenges, policy changes driven by one or more 3rd parties (laws, regulations, standards, etc.), shifts in customer or market segment needs and/or behaviors,
- Execution based demand - is recursive in nature since it generates demand from requirements management which promotes discovery of new requirements to support initiatives, from refinement of existing requirements, from defects originating from testing cycles, and from solution design which may identify one or more components towards addressing one or more initiatives.
- Operational demand - includes internal policy changes driven by Quality, and operational changes driven by optimization to achieve continuous improvement.

### **Step 2:** 

Establish the Digital Twin as a knowledge fabric using the Biz:DNAⓒ core components covering Strategy, Execution, and Operation. The digital twin provides a lightweight scaffolding for conducting impact assessments informing the prioritization algorithms with causal data and lineage to improve the efficiency and accuracy of the algorithms. The initial footprint should be designed to support a subset of scenarios where accuracy is placed at a premium. Over time, the digital twin will be expanded and enhanced to accommodate additional scenarios within each area of demand.

### 
**Step 3:**

 Develop the Prioritization Models

Recursive decision making model using the 3 core input sources from Demand and running simulations of impact on static Biz:DNAⓒ models. Initially, the number of factors used for analysis is small to conduct triage for demand that is time sensitive (temporal in nature).

An initial evaluation of impact for a given demand item may reveal a previously unknown (hidden) pattern of connected demand items. A pattern of demand needs to be explored to determine its nature, if there is a cascading effect then it requires backward chaining through the pattern of related demand items to find the root cause (triggering instance).

The prioritization model can be established using basic analytics and extended by introducing progressive levels of complexity. Start by setting up the analytic models and algorithms:

- Identify the analysis to support the business
- Identify the analysis to support the data supply chain
- Clarify the problem domains for the analysis
- Listing out the initial factors required to support the analytics
- Identify weighting criteria for each factor
    - Covering data reliability & quality
    - Covering impact on the Biz:DNA


Identify decisions that need to be made (for prioritization)

- Classify decisions using a 4-box analysis
- Determine the type of analysis required to support each type of decision
- Quantitative analysis
- Qualitative analysis
- Semantic analysis and perceptual impact analysis
- Structural analysis using the above mentioned models
- Introduction of machine learning to augment the processes and extend the models ○ Introduction of neural nets to support recursive analysis within the Demand repositories and across the digital twin

### 
Step 4: 

Implement a proof of concept to ensure the prioritization model is able to analyze a subset of demand for impact on the digital twin footprint. Tasks include:

- Design initial set of analytics for a subset of demand scenarios
- Setup one or more visualizations to simplify consumption of the analysis
- Apply a small decision model to one or two demand scenarios in the Biz:DNAⓒ (Strategy, Execution, Operation) and perform data analysis
- Apply the prioritization model against one of the portfolio repositories
    - Input queue of initiatives
    - Work in progress (active projects)
- Conduct an impact assessment across Biz:DNAⓒ for each decision
    - Perform reflective analysis after each decision
    - Incorporate into visualization (360 Dashboard)
