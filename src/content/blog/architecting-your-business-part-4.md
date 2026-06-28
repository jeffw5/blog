---
title: Architecting Your Business (Part 4)
description: Making Business Architecture Actionable
pubDate: 2023-04-05T06:42:00
updatedDate: 2026-06-26T06:43:00
heroImage: /images/pasted-image-1782474171714.png
tags:
  - Business Model
  - Capability Map
  - Architecture
---

The [Business Architecture Guild](https://www.businessarchitectureguild.org/) introduced the idea of a Capability Map as a way to depict the "building blocks" used by organizations to create and deliver value for their stakeholders. Capability is represented as a concept, but I am going to introduce it as the basis for mapping the boundary points within an organization (vertically and horizontally) as an explicit object representing a domain. This is a very different treatment for the notion of a Capability, but one that provides an abstraction from any one organizational model and can be used to build an organic and adaptable representation for any organization.


![Capability Map  (BizDNA)](https://static.wixstatic.com/media/fb2cc9_a3708c7ba12c467fb8d33ebfa7c5e8b3~mv2.png/v1/fill/w_914,h_714,al_c,q_90,enc_avif,quality_auto/fb2cc9_a3708c7ba12c467fb8d33ebfa7c5e8b3~mv2.png "Capability Map  (BizDNA)")

The Capability Map is accompanied by a number of other maps, which are "connected" by one or more relationships (edges) between nodes (vertices) to help individuals navigate cause and effect when change is introduced (planned & unplanned). The model of maps is best depicted using a Graph DB to support the rich attribution required for the nodes & relationships ([see Part 1](https://www.enablingvalue.com/blog/navigating-change-to-drive-success)). Focusing on the Capability Map, we'll start with the DNA ([see Part 3](https://www.enablingvalue.com/blog/architecting-your-business-part-3)) as a baseline for aligning the capabilities as a common reference model for conceptualizing a business. The Capability Map represents a reference model depicting logical groupings for ways an organization plans, executes, and delivers value for its stakeholders.

Note: that the approach used is not revisiting FPA (function point analysis), as we did this 25 years ago and we want to move beyond repacking FPA by putting the marketing label of Capability on the same approach. I don’t believe FPA embraces the concept of a Capability and using this approach seems like a missed opportunity to design a better model. This is very common amongst “business” architects (former EAs or Biz Analysts) who are not schooled in design thinking or systems thinking. They are instantiating the organization’s structure and processes into Function Point decomposition.

I try to arrive at a common reference model for a Capability Map using OOA/OOD by relaxing the temptation to promote strong instantiation for each level of capability. Again, the idea is to promote polymorphism (bottom up) where I can use an iterative process to arrive at a better design for the Capability Reference Model.  Ultimately, the proof of the model will be born out when I demonstrate the model’s acceptance and resilience to scenarios (as a stress test of sorts). 

**Capability Map**

- Levels (1-3) Typically deliver Functional Value
- Level 1 - Standard Reference Model
- Level 2 - Combo of Standard & Biz Specific
- Levels (3-5) Some of these will be Non-Functional Value (enablers)

As a reminder, the Capability levels are derivative from prior levels, but not exclusively decomposed as was commonly done with function point analysis or ontological modeling. Attributes can be assigned to each capability and used to "measure" various aspects to guide planning and prioritization.
