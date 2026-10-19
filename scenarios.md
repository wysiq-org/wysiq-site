# Scenarios

In WysiQ, scenarios are handled as a subtype of metrics.

A scenario is a metric whose values are defined by human-drawn or AI-proposed X/Y points.

WysiQ transforms those points into a graph-ready analytical series.

## Sources

A scenario may come from manual drawing on the graph, imported JSON, AI-generated hypotheses, copied metric catalogs or another WysiQuery.

## Example JSON

```json
{
  "id": "scenario_high_ev_2035",
  "name": "High EV Adoption 2035",
  "kind": "metric",
  "metric_type": "scenario",
  "origin": "ai",
  "provider": "Claude",
  "x_column": "year",
  "y_unit": "TWh",
  "interpolation": "linear",
  "points": [
    { "x": 2028, "y": 102 },
    { "x": 2030, "y": 108 },
    { "x": 2035, "y": 125 }
  ]
}
```
