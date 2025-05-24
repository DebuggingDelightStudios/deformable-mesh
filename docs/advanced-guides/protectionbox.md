---
sidebar_position: 15
---

# Protection Box

import Component from './img/protection-component.png';
import ExamplePos from './img/protection-ex-pos.png';
import ExampleHierarchy from './img/protection-ex-hierarchy.png';
import ExampleDeformed from './img/protection-ex-deformed.webp';

import ExampleGroupsHierarchy from './img/protection-ex-groups-hierarchy.png';
import ExampleGroupsBoxSett from './img/protection-ex-groups-box.png';
import ExampleGroupsCompSett from './img/protection-ex-groups-comp.png';

<img src={Component} />

A **Protection Box** can be used to protect predefined areas from deformation, for example the driver's seat of a car. This not only prevents the vertices in the protection box from moving, but also prevents vertices from outside the protection box from moving into it.

:::warning Version 2.1
You can only have **one** protection box and **only as a children** as of version 2.0. Everything else is coming with version 2.1
:::

<details>
    <summary>Example usage</summary>
    <img src={ExamplePos} />
    <img src={ExampleDeformed} />
    Note: Deformation only occurred from the top and not from the side! That's why the lower (yellow) part of the door has no deformation at all.
</details>

## Setup 1: Direct Children

The first way of implementing protection boxes is by placing them right below your *Deformable Mesh Component*, as you can see in the following image:<br/><img src={ExampleHierarchy} style={{maxWidth: "50%"}} />

:::info
After changing your protection boxes at runtime, e.g. removing / adding / moving it, then you have to call the function **Update Protection Boxes**. Otherwise the changes will not be taken into account and the "old" protection boxes will still be used.
:::

## Setup 2: Groups (V 2.1)

If you want to use **one** Protection Box for **multiple** *Deformable Mesh Components* then you can use the [**Protection Box Groups**](../guides/mesh-component/settings.md#protection-groups) setting. When using groups, the Protection Box Components can be located *anywhere* in your component hierarchy, see this image for example:<br/><img src={ExampleGroupsHierarchy} style={{maxWidth: "50%"}} />

1. Go to the *Protection Box Component(s)* and assign one or more **Groups**:<br/><img src={ExampleGroupsBoxSett} />
2. These groups then can be configured per *Deformable Mesh Component* as seen here:<br/><img src={ExampleGroupsCompSett} />