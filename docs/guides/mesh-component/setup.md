---
sidebar_position: 0
---

# Setup

import CompTree from './img/comp-tree.png';
import CompAdd from './img/comp-add.png';
import CompDetails from './img/comp-details.png';

In this topic we will use a static mesh actor and add deformation to it.

:::tip
This only describes the most basic setup. [Chaos Vehicles](../../advanced-guides/chaos-vehicle.md) and [AVS Vehicles](../../advanced-guides/advanced-vehicle-system.md) have a own topic.
:::

1. Decide what static mesh you want to deform and create a [Deformable Mesh](../mesh-asset/overview.md) using the [Deformation Data Tool](../mesh-tool/asset-management.md#create-a-new-deformable-mesh).
2. Add a **Deformable Mesh Component** to your actor **below** the static mesh that you want to deform:<br/><img src={CompAdd} class="border"/><br/>
    It should look like this (we want to deform the "*StaticMesh*"):<br/><img src={CompTree} class="border"/>
3. Make sure the "*StaticMesh*" (the parent of Deformable Mesh Component)...
    - ... is visible and not hidden
    - ... displays the correct static mesh (*same as the deformable mesh*)
    - ... has collision enabled
    - ... has ``Simulation Generates Hit Events`` enabled
4. Select the recently created *Deformable Mesh Component* (**BP_DeformableMeshComp**) and configure it (see [Settings](settings.md)). The most important settings are:<br/><img src={CompDetails} class="border"/>
    - *[**MANDATORY**] Settings - [Deformable Mesh](./settings.md#general)*: Here you have to select your Deformable Mesh (see Step 1)
    - *Settings - Deformation - None Physics - [Mass Override](./settings.md#none-physics---mass-override)*: This is **MANDATORY** when your static mesh does NOT simulate physics.
5. Place your actor in the world and hit play

:::info
The **Deformable Mesh** property replaces our previous "*Mesh Data Table*" and "*Row Name*" properties.
:::
