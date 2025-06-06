---
sidebar_position: 0
---

# Setup

import CompTree from './img/comp-tree.png';
import CompAdd from './img/comp-add.png';
import CompDetails from './img/comp-details.png';

In this topic we will use an existing **static mesh** actor and **add deformation** to it.

:::tip
This only describes the most basic setup. [Chaos Vehicles](../../advanced-guides/vehicles/chaos-vehicle.md) and [AVS Vehicles](../../advanced-guides/vehicles/advanced-vehicle-system.md) have a separate topic.
:::

1. Decide what static mesh you want to deform and create a [Deformable Mesh](../mesh-asset/overview.md) of the static mesh using the [Deformation Data Tool](../mesh-tool/asset-management.md#create-a-new-deformable-mesh).
2. Add a **Deformable Mesh Component** to your actor **below** the static mesh that you want to deform:<br/><img src={CompAdd} style={{maxWidth: "45%", verticalAlign: "top"}}/><img src={CompTree} style={{maxWidth: "50%" }}/>
3. Make sure the "*StaticMesh*" (*parent of BP_DeformableMeshComp*)...
    - ... is visible and *not* hidden.
    - ... displays the correct static mesh (*same as the deformable mesh*).
    - ... has collision enabled (**IMPORTANT**).
    - ... has ``Simulation Generates Hit Events`` enabled (**IMPORTANT**).
4. Select the previously created *Deformable Mesh Component* (**BP_DeformableMeshComp**) and configure it (see [Settings](settings.md)). The most important settings are:<br/><img src={CompDetails} />
    - *[**MANDATORY**] Settings - [Deformable Mesh](./settings.md#general)*: Here you have to select your Deformable Mesh (see Step 1).
    - *Settings - Deformation - None Physics - [Mass Override](./settings.md#none-physics---mass-override)*: This is **MANDATORY** when your static mesh does NOT simulate physics.
5. You're done!

:::info
The **Deformable Mesh** property replaces our previous "*Mesh Data Table*" and "*Row Name*" properties.
:::
