---
title: Architecting Your Business (Part 6)
description: How To Architect Your Business
pubDate: 2021-11-15T12:42:00
updatedDate: 2026-06-25T12:39:00
heroImage: /blog/images/pasted-image-1782409189592.png
---

The Prioritization Model is designed to provide a holistic understanding around change and (designed properly) provides clear and unbiased guidance for informing decisions for investing in change (guiding and optimizing portfolio-based investments = ALL investments). Given the complexity and scale of measures involved in building a holistic Prioritization Model, tools are a necessary aid. This is not something a BI (Business Intelligence) solution can easily pull off, given the complexity of relationships and data that needs to be culled from the Capability Heat Map.

In the next post, I will dive into the

**Capability Heat Map (Biz Driven)**

- Prioritization Model used to identify gaps (Top Down)
- Aligned with Strategy (inferred for now)
- Aligned with Scorecard (Efficiency, Value Delivery, Quality, Agility)

Instead of referring to projects or "items" in an Agile Backlog, or enhancements, or resolutions for issues and/or defects, we'll use the term "initiative" since it provides abstraction from the size of any planned effort and offers a more flexible way to organize, refactor, and rationalize activities into one or more portfolios. Further, the Initiative Map allows us to assign a more in-depth set of attributes (we'll call Metadata) and it allows us to create a more "interesting" (a richer set) of relationships between initiatives and other business objects (referenced above and below). Each node in the map refers to a specific initiative ID (within a portfolio repository = tool). 

**Initiative Map (Stakeholder Driven)**

- Metadata used to attribute a portfolio
- Process for breaking initiatives into smaller units of work (items)
- Structural attributes to align items into Products, Value Streams, etc.

Requirements are typically captured in spreadsheets and/or repositories and linked back to one or more sets of documents and business artifacts. We'll introduce a new model for capturing and managing requirements in a Graph DB, since it provides superior handling of relationships between requirement objects. Requirements objects can include (but are not limited to): Customer Needs, Business needs, compliance needs, features [multiple levels], user stories, process flows, events, decisions, data inputs, data outputs, reports, and one or more sets of measures). Aligning all of this using a conventional traceability matrix is too difficult to change and does not scale. Further, impact assessment is far easier and more efficient when storing requirements in a Graph DB.

**Requirements Map**

- Metadata used to align Capabilities, Capability Heat Map
- Feature Decomposition (Functional & Non-Functional)
- Customer Journeys, Jobs (To Be Done) J2BD, Outcomes

**Product Map**

- Products & Services Breakdown
- Align with Feature Matrix (Functional & Non-Functional)

**Organization Map**

- Functional / BU Breakdown
- Mapping of Org Areas to Capability Map

**Stakeholder Map**

- Product owners
- Domain owners
- Customers
- Consumers
