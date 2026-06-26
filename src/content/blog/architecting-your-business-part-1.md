---
title: Architecting Your Business (Part 1)
description: Making Business Architecture Actionable
pubDate: 2023-04-05T07:22:00
updatedDate: 2026-06-26T07:22:00
heroImage: /blog/images/pasted-image-1782476579282.png
tags:
  - Business Model
  - Architecture
---

This is the first of a multi-part series introducing concepts from cartography to build a scalable and adaptable model for understanding the elements of change that drive your business as well as laying a foundation for driving success.

Every business leader understands the need to "deal" with change. The manner in which change is introduced and understood varies across all business. There are always new methodologies, terminologies, and approaches that are being introduced to help companies with planning and implementing change. Sometimes, the amount of change is significant (perhaps due to a business decision and/or event) and the changes are built into a large program(s) and managed as transformation. As the volume and velocity of change continues to accelerate, the complexity to manage change compounds (exponentiates).

To address these challenges and many others (beyond your organization, but that increasingly may be impacting your organization), I want to introduce the concept of building a "multi-dimensional model of maps" to create a virtual cartography for navigating change in any organization. The model has multi-dimensional because it incorporates all of the various facets of change and needs to provide a way to trace impact from change. I use the term "map" since it provides an adaptable framework for blending structures (ontologies, patterns, function points, and functional decomposition) without being overly prescriptive. The concept of a cartography fits nicely over the landscape of the business and can be extended to other businesses over time. The elegance of using a cartographic approach is that it incorporates a multitude of architecture disciplines while minimizing the impact on the existing structures, systems, organization, and processes for a business.

So, here are a few visuals to introduce the Biz Arch Cartography Model. The first image shows the core business maps (centered around a business object / concept) and provides a general idea of the relationships that exist (high level) between these maps. While the maps themselves are important to consider, the real emphasis is on the relationships that provide traceability and "impact from changes" between the maps.

![BizArch Portfolio of Maps](https://static.wixstatic.com/media/fb2cc9_5100aa2d7a1b4ad48acf4a5cc17dda0c~mv2.png/v1/fill/w_1480,h_798,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb2cc9_5100aa2d7a1b4ad48acf4a5cc17dda0c~mv2.png "BizArch Portfolio of Maps")

While this is a useful view to conceptualize the idea of a cartographic model, native architects and technologists will want a more concrete model to construct the scaffold for delivering value in a progressive manner. So, I decided to design the topology using a Graph DB (using NEO4j) to emphasize the importance of the relationships (= edges) while referencing each of the biz object maps as nodes (= vertices). Below is a view I build in NEO4j to serve as a reference model, where each map will have it's own Graph DB design and the larger reference model will provide the "glue" that helps build the "inter-map" relationships (showing impact, dependencies, and causality).

![BizArch Cartography](https://static.wixstatic.com/media/fb2cc9_917f6cc9fe60420abafa576fcebf6c4b~mv2.png/v1/fill/w_1480,h_846,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb2cc9_917f6cc9fe60420abafa576fcebf6c4b~mv2.png "BizArch Cartography")

The benefit if using a Graph DB to build the scaffolding is the flexibility and scalability as relationships are added (intra-map and inter-map) over time. Ideally, this organic model of architecture now becomes part of the change management responsibilities to ensure it thrives and provides increased levels of value and insight to guide decision making as the business grows and adapts over time.

Each map in the Biz Arch Cartography will be described in future posts (in this series) and will serve as a digital twin for aligning your current business infrastructure to create digital model for navigating change. The maps allow us to create a cartesian model for navigating change (within the organization and outside of the organization) and the impacts these may have on your strategy and operations. The maps are interrelated using links between the various members in each map. These links are established using a baseline of common scenarios to inform the model with context and key relationships (traceable understanding of cause & effect). The benefits of building a model of maps is the flexibility and adaptability they offer and the ability to integrate the model into the unique aspects of an organization's structures.
