# WysiQ — Glossary

This glossary defines the core terms used in WysiQ.
They describe concepts that structure both the software and its analytical approach.

---

## WysiQ
Visual analytics software that uses the **graph as the primary workspace** for data analysis.
WysiQ is designed to explore, compare and reason directly on data through visual interaction.

---

## Wysiquery
A **Wysiquery** is the unit of work in WysiQ.

It represents a visual exploration of data and includes:
- selected and parameterized data series,
- the graph workspace configuration,
- analytic interactions (zones, measures, overlays),
- optionally, a query history (*query story*).

A Wysiquery is a **document of work**:
it can be created, iterated, compared, replayed and shared.
Saying that a graph comes from a Wysiquery means its sources and analytic path are traceable.

---

## Data source
The origin of the data used in WysiQ.
A data source may be:
- a spreadsheet or table-like file,
- a CSV or raw data file,
- an extract from a database.

---

## Work table
The **work table** is the structured tabular dataset used to generate series and graphs.

It is built from the data source using SQL and:
- exposes selected and derived series,
- allows ordering, cumulation and transformations,
- can be exported and reused as a new data source.

---

## Series
A **series** is a parameterized representation of data feeding the graph workspace.

A series can be:
- raw (directly from the work table),
- derived (transformed),
- composite (combining multiple series),
- aggregate (cumulated, grouped, etc.).

Series are selected and combined by the user to define the graph of a Wysiquery.

---

## Graph workspace
The **graph workspace** is the central analytic surface in WysiQ.

It is:
- not a final illustration,
- not a static view,
- the space where analysis is performed.

Comparisons, measurements, selections and computations are applied directly within the graph workspace.

---

## Analysis zone
An **analysis zone** is a user-defined region on the graph workspace.

Zones allow the user to:
- compute analytic measures (sums, averages, indicators),
- count points,
- measure differences between series,
- focus analysis on specific portions of the data.

---

## Analytic functions
**Analytic functions** are built-in mathematical operations applied at the graph level.

They operate directly on the data represented in the graph workspace and are designed to provide
instant feedback during exploration.
These functions often replace sequences of SQL queries in traditional workflows.

---

## Overlay graph
An **overlay graph** is a saved state of a graph workspace used for visual comparison.

Overlay graphs allow the user to:
- compare hypotheses,
- confront simulations,
- visualize the evolution of an analysis.

---

## Snapshot
A **snapshot** captures the state of the graph workspace as it appears on screen.

Snapshots record:
- selections,
- zoom and pan operations,
- intermediate analysis steps.

They are used to build the **query story**.

---

## Query story
A **query story** is the preserved history of a Wysiquery’s exploration.

It documents:
- how an analysis evolved,
- which steps were taken,
- how conclusions were reached.

A query story makes the reasoning explicit and shareable.

---

## Result graph
A **result graph** is a high-density output graph generated at the end of a Wysiquery.

Result graphs are designed to:
- contain the full dataset involved in the analysis,
- avoid enforced aggregation,
- support macro and micro reading in a single object.

They can reach extremely high resolutions (hundreds of millions, or up to a billion pixels)
and are exported in standard formats for external use.

---

## High-density graph
A **high-density graph** is a graph capable of representing very large volumes of data
without simplification or loss of information.

In WysiQ, high-density graphs are a core design goal rather than a limitation workaround.

---

## Query story replay
The ability to revisit and follow the steps of a Wysiquery using its query story,
in order to understand, explain or validate an analysis.
