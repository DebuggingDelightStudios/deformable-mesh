---
sidebar_position: 8
description: Define a custom origin for the deformation, e.g. for attachments
---

# Deformation Origin Component

import Component from './img/origin-component.png';
import DeformationCenterGif from './img/deformation-center.gif';
import DeformationOffCenterGif from './img/deformation-off-center.gif';

<img src={Component} />

The **Deformation Origin Component** can be used to manipulate the deformation. It influences *where the deformation goes*.

:::warning Version 2.1
This is a new feature coming in version 2.1
:::

## Deformation Origin

By default the *deformation origin* is the *pivot* of the created mesh component (*which is the pivot of the static mesh after all*). **All deformation goes *towards* the deformation origin.** If you override the deformation origin using this component, you'll get a different deformation as you can see in the *right* image below:

<div style={{width: "100%", display: "flex", justifyContent: "space-between", "flexWrap": "wrap" }}>
    <img src={DeformationCenterGif} style={{ maxWidth: "50%" }} />
    <img src={DeformationOffCenterGif} style={{ maxWidth: "50%" }} />

    <div style={{maxWidth: "50%", textAlign: "left"}}>Deformation with a centered origin (default)</div>
    <div style={{maxWidth: "50%", textAlign: "right"}}>Deformation with a custom origin using a *Deformation Origin Component*</div>
</div>

:::tip Static Mesh Pivot
You can also mimic this behavior by simply moving the pivot of the static mesh, but that's not always a solution and it's also annoying! Let's take a door as an example, which needs a fixed origin to rotate (open and close) properly. In this example you *can not* change the pivot of the door, but you still want your deformation to "look realistic" and not go towards one of the corners of the mesh. That's where the *Deformation Origin Component* comes into play.
:::

## Deformation Calculation

We calculate the deformation in **percentage**, that means if a vertex which position is $(-200, 200)$ is deformed by 25% for example, it's new position will be $(-150, 150)$. This allows us to define a [Max Deform Percentage](../guides/mesh-component/settings.md#max-deform-percentage) and more useful settings that work with percentages. We're aware that this approach may not be optimal for all use case, but in most cases this is sufficient.

If we calculate the above example using a *custom deformation origin* of let's say $(-100, 0)$ (*based on the image above*) then the new vertex position would be more like $(-170, 140)$ (estimation).

## Component Types

### ``Component``
A Deformation Origin Component of this type only changes the deformation origin for its direct parent Deformable Mesh Component.

### ``Actor``
A Deformation Origin Component of this type changes the deformation origin for ***all*** Deformable Mesh Components of the current actor. There are two exceptions:
- A Deformable Mesh Component has a ``Component``-Deformation Origin Component as children, in this case the ``Component`` wins.
- A Deformable Mesh Component uses the [Ignore Actor Component Origins](../guides/mesh-component/settings.md#ignore-actor-component-origins) setting.

## Usage Examples

### Attachments (e.g. Bumpers) {#attachments}

See [Attachments](vehicles/attachments.md#deformation-origin-component)