---
title: Architecting Your Business (Part 5)
description: Making Business Architecture Actionable
pubDate: 2024-04-05T06:39:00
updatedDate: 2026-06-26T06:40:00
heroImage: /blog/images/pasted-image-1782474040866.png
tags:
  - Business Model
  - Architecture
---

In [Part 4](https://www.enablingvalue.com/blog/architecting-your-business-part-4) of this series (Architecting Your Business), I shared a new perspective on mapping capabilities and introduced the idea of using a Graph DB to create and build the reference model and extend it (tailor it) to your business. At the end fo the post, I noted that attributes can be added to the Capability Map (for both the nodes & relationships). These attributes can be aggregated and analyzed in simple matrix (viewed as a Heat Map: Using stoplight colors to guide decision making). Here's an example visual that shows the 3-color scheme.


![Capability Heat Map](https://static.wixstatic.com/media/fb2cc9_939ba6fd30d540ee92b02a4247d865d5~mv2.jpeg/v1/fill/w_1480,h_926,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb2cc9_939ba6fd30d540ee92b02a4247d865d5~mv2.jpeg "Capability Heat Map")

Heat Maps have been used in many disciplines for creating a visual (aggregate of sorts) for assessing risk, maturity, opportunity, and performance. Many of the heat maps rely on a simple assessment (aggregate, weighted avg., etc) to arrive at a "score" for each level in the Capability Map. On a simplistic level this may appear fine. However, as we discussed in the prior posting ([Part 4](https://www.enablingvalue.com/blog/architecting-your-business-part-4)), the Capability Map is not built using a reductionist approach. You need to examine each capability relationship and it's impact on other capabilities (same level and above level) since a capability can impact more than one capability above it (e.g. does not rely on strict inheritance). So, once again we'll need to build a scoring model that takes these relationships into account in order to build a more accurate understanding of how well each capability is "performing" for the organization and understand the impact it has (horizontally and vertically).

So, now we have to define a set of attributes for each capability that we can use to measure the performance (within each domain) and the impact (between domains). This will require a set of common measures (for all capabilities) and domain specific measures (for each individual capability), plus weighting factors associated with impacts on other capabilities.

The Capability Heat Map provides the primary input for developing a prioritization model to guide investments for change (initiatives). However, this would only represent a top-down view and would not other stakeholder needs (derived from Bottom-Up analysis supporting key scenarios and stories = Jobs To Be Done). The stories are the point where we can measure (precisely) the value gaps:

- **Value Gap:** Difference between the outcomes embodied in products & services and the outcomes which the stakeholder (primarily, but not limited to customers) desires. I'll cover this in greater detail in future posts. For now, think of these measures as a way to capture outcome-driven value associated with Jobs To Be Done (stories).

In the next post, I'll explore the Prioritization Model and provide some guidance around tooling (criteria for selecting tools) to design and build the model.
