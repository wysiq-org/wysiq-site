# WysiQ — Architecture

## Purpose

WysiQ is a visual analytics software where the **graph is the primary workspace** for data analysis.
A *Wysiquery* is the unit of work: it defines the data series, the graphical workspace, and the analytic interactions applied during an exploration.

WysiQ is designed to:
- explore and compare hypotheses visually,
- apply analytic computations directly in the graphical workspace,
- keep analysis **traceable and shareable** through a query history (*query story*),
- produce very high-density result graphics (up to extreme resolutions when required).

---

## Core concepts

### Wysiquery (document of work)
A **Wysiquery** is an exploration document.
It includes:
- selected and derived **series**,
- the **graph workspace** configuration,
- analytic parameters (zones, measures, overlays),
- an optional query history (*query story*).

A Wysiquery is meant to be:
- created and iterated,
- compared to previous states,
- replayed and shared.

### Series
A **series** is a parameterized data representation feeding the graph.
Series can be:
- raw (directly from the source),
- derived (transformed),
- composite (combined from multiple series),
- aggregate (cumulated, grouped, etc.).

### Work table
The **work table** is the structured tabular dataset used to generate and display the series.
It is built from the source data and can be exported and reused as a new data source
(CSV or spreadsheet-like workflow).

### Graph workspace
The **graph workspace** is the primary analytic surface:
- it is not a final image,
- it is where comparisons, measures, and computations are performed,
- it can be saved as overlays and snapshots.

### Query story
A **query story** is the preserved history of a Wysiquery’s exploration:
- selections,
- zooms and pans,
- intermediate comparisons,
- successive analysis states.

It documents *how* a result was obtained, not only the final output.

---

## Layered architecture

WysiQ can be described as layered components:

### 1) Data source layer
Input data may come from:
- spreadsheet/table-like sources,
- data files (CSV, etc.),
- database extracts.

In typical usage, the **database is kept in memory** to ensure interactive responsiveness.

### 2) SQL / structuring layer
SQL is used to:
- structure the **work table**,
- filter and shape datasets,
- prepare derived or combined series.

SQL is an infrastructure layer:
- available for advanced users,
- not required for the primary interaction model.

### 3) Work table layer
The work table:
- exposes selected and derived series in tabular form,
- supports ordering, cumulation, basic transformations,
- is exportable as a new input source.

### 4) Series layer
Series are built from the work table using explicit parameters:
- selection of columns or measures,
- scaling factors / coefficients,
- combinations and aggregations.

Series are the direct “inputs” of the graph workspace.

### 5) Graph workspace layer
The graph is built from the series and acts as the analytic workspace.
Users interact by:
- selecting and comparing series,
- defining analysis zones,
- applying measures and computations visually.

### 6) Analytic functions layer
WysiQ provides integrated analytic functions operating **at graph level**:
- ensemble computations over a selected zone,
- per-series measures and comparisons,
- rapid feedback for iterative exploration.

These functions are designed to provide computations that would otherwise require
multiple SQL queries and validation steps.

### 7) Output layer
WysiQ generates three distinct graphic outputs:

#### A) Overlay graphs
Saved states of the graph workspace used for visual comparison of analysis states
(simulations, hypotheses, evolutions).
Typical resolutions are controlled for comparison efficiency (e.g. 4000×2000 px).

#### B) Snapshot graphs (Query Story)
Snapshots capture the exploration as seen on screen:
- selections,
- zoom/pan,
- intermediate steps.

They compose the query story.

#### C) Result graphs
High-density output graphs designed to contain the full dataset involved in a Wysiquery,
without enforced aggregation.
These outputs can reach extremely high resolutions (up to hundreds of millions, and in some cases up to a billion pixels),
so the same object supports macro and micro reading.

Exports use standard formats so results can be exploited in office tools and documents.

---

## Interaction model

WysiQ aims to make analysis possible with:
- mouse / trackpad interaction,
- explicit parameters (series configuration, coefficients),
- visual selection on the graph workspace.

The user does not need scripting, macros, or programming to run an exploration.

---

## Summary

- **Data source** → feeds the in-memory database / dataset
- **SQL** → structures the **work table**
- **Series** → are parameterized and composed from the work table
- **Graph workspace** → is the central analytic surface
- **Analytic functions** → apply computations at graph level
- **Outputs** → overlays, snapshots (query story), and high-density result graphs
- **Wysiquery** → is the traceable document of work capturing the exploration
