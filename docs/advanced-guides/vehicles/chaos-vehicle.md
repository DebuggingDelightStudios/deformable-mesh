---
sidebar_position: 1
description: Learn how to make your Chaos Vehicles deformable
---

import CompAdd from '../../guides/mesh-component/img/comp-add.png';
import ExampleCarVanilla from './img/exampleCar-hierarchy-vanilla.png';
import ExampleCarDeformable from './img/exampleCar-hierarchy-deformable.png';

import NoWheels from './img/no-wheels.webp';

import CompDetails from '../../guides/mesh-component/img/comp-details.png';

# Chaos Vehicle

:::tip Remember: Static Mesh Deformation
The Deformable Mesh Component only deforms static meshes and it does *not* provide a collision or change any collisions. It uses the collision of its parent (doesn't matter if its a static mesh or skeletal mesh) while hiding and "replacing" it visually.
:::

This guide will teach you how to make a **simple** chaos vehicle deformable. This guide does not include [Attachments](./attachments.md).

## Requirements

- You need a **working** chaos vehicle (*we're not teaching you this*).
    - [How to Set up Vehicles (Unreal Learning)](https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-set-up-vehicles-in-unreal-engine)
- You need a **static mesh** version of your *vehicle skeletal mesh* that's used by the chaos vehicle and that you want to deform.
    - [Skeletal Mesh to Static Mesh Conversion (Unreal Learning)](https://dev.epicgames.com/documentation/en-us/unreal-engine/skeletal-mesh-to-static-mesh-conversion-in-unreal-engine)
    - Also take a look at [what's important for your static mesh](../../guides/mesh-asset/staticmesh.md).

:::warning Vehicle Wheels
<img src={NoWheels} style={{ maxWidth: "130px", float: "right" }}/>
Your static mesh should **NOT include wheels**! Make sure to **remove** them manually from the static mesh if necessary (*e.g. using the unreal engine [modeling tools](https://dev.epicgames.com/documentation/en-us/unreal-engine/modeling-mode-in-unreal-engine) or blender*). We do not recommend to deform the wheels (*that's theoretically possible when having them separate like attachments, but even then they'd have to be removed from the vehicle static mesh*) because - collision problems aside - not only does our deformation not fit well here but we also *do not* modify the collision => no wobbling wheels or anything like that.
:::

<!-- :::danger
TODO: Collisions? PhysicalAsset?
::: -->

## Setup

1. Create a [Deformable Mesh](../../guides/mesh-asset/overview.md) of your vehicle's static mesh (see [Requirements](#requirements)) using the [Deformation Data Tool](../../guides/mesh-tool/asset-management.md#create-a-new-deformable-mesh).
2. Add a **Deformable Mesh Component** to your actor **directly below** the *VehicleMesh*:<br/><img src={CompAdd} style={{maxWidth: "45%", verticalAlign: "top"}} /><img src={ExampleCarDeformable} style={{maxWidth: "50%" }} />
3. Make sure the "*VehicleMesh*"...
    - ... is visible and *not* hidden.
    - ... has collision enabled (**IMPORTANT**).
    - ... has ``Simulation Generates Hit Events`` enabled (**IMPORTANT**).
4. Select the previously created *Deformable Mesh Component* (**DMC_Vehicle**) and configure it (see [Settings](../../guides/mesh-component/settings.md)). The most important settings are:<br/><img src={CompDetails}/>
    - *[**MANDATORY**] Settings - [Deformable Mesh](../../guides/mesh-component/settings.md#general)*: Here you have to select your Deformable Mesh (see Step 1).
5. You're done!

:::info
We're still working on this guide :)
:::