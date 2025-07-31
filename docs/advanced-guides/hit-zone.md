---
sidebar_position: 8
description: Detect hits on specified parts of your mesh.
---

# Hit Zone Component

import Component from './img/hit-zone-component.png';

import ExampleHierarchy from './img/hit-zone-ex-hierarchy.png';
import ExampleGroupsHierarchy from './img/hit-zone-ex-groups-hierarchy.png';
import ExampleGroupsBoxSett from './img/hit-zone-ex-groups-box.png';
import ExampleGroupsCompSett from './img/hit-zone-ex-groups-comp.png';

<img src={Component} />

A **Hit Zone** can be used to detect hits on predefined areas of your mesh. This could be used for example to detect hits on the front of your vehicle and damage the motor accordingly.

:::warning Version 2.1.5
This is a new feature coming in version 2.1.5
:::

## Setup

### Direct Children

The first way of implementing hit zones is by placing them right below your *Deformable Mesh Component*, as you can see in the following image:<br/><img src={ExampleHierarchy} style={{maxWidth: "50%"}} />

### Groups

If you want to use **one** Hit Zone for **multiple** *Deformable Mesh Components* (*or vice versa*) then you can use the [**Hit Zone Groups**](../guides/mesh-component/settings.md#hit-zone-groups) setting. When using groups, the Hit Zone Components can be located *anywhere* in your component hierarchy, see this image for example:<br/><img src={ExampleGroupsHierarchy} style={{maxWidth: "50%"}} />

1. Go to the *Hit Zone Components(s)* and assign one or more **Groups**:<br/><img src={ExampleGroupsBoxSett} />
2. These groups then can be configured per *Deformable Mesh Component* as seen here:<br/><img src={ExampleGroupsCompSett} />

## Settings
- General
    - `Min Impact Strength`: Every impact that is below this threshold (%) is ignored and not added to the total amount of impact strength.
    - `Include Impact Sphere`: If this setting is activated, we'll additionally check whether the impact sphere is intersecting with this component. Otherwise we'll only check whether the hit location is intersecting with this component. The impact sphere can be visualized using the DeformableMeshComponent Setting "Debug Impact".
    - `Debug Print`: Print any detected hit.
- Alert
    - `Alert Once`: Only alert once. If this setting is deactivated, the alert is called every time we receive a hit and we are above the threshold.
    - `Alert Impact Strength`: The Alert event is called when this threshold is reached.

## Properties
- `Total Impact Strength`: 
    This is the total amount of impact strength that is accumulated across all relevant hits.
	A relevant hit is a hit that intersects with this component (its box).
	A value of 1.0 can mean several things, e.g.:
	- There were 2 hits, each hit having an impact strength of 0.5 (50%)
	- There were 3 hits, one 50% and two 25% hits... and so on.

	Each new hit can add a maximum value of 1.0 (= hit with max hit deform),
	because the ImpactStrength is capped by the DeformableMeshComponent Setting [Max Hit Deform Percentage](../guides/mesh-component/settings.md#max-hit-deform-percentage).

## Events

### On Hit Detected
This event is triggered whenever a hit is detected inside the hit zone.

### On Hit Alert
This event is triggered when a given threshold (`Alert Impact Strength`). When configured, it'll only trigger once after the threshold is reached (`Alert once`).

## Functions

### Find And Update Relevant Components
After changing your DeformableMeshComponent setup, e.g. removing / adding one, you should call the function **Find And Update Relevant Components** to add new relevant or remove any missing or not relevant component from being "watched" by the hit zone.

### Reset
This will reset the accumulated impact strength (`Total Impact Strength`) and the optional alert.