---
sidebar_position: 2
description: Learn how to enhance your visual deformation using materials
---

# Deformation Material

import Comparison from './img/mat-comparison.webp';
import ContentBrowser from './img/mat-content-browser.png';
import InstanceTextures from './img/mat-instance-textures.png';
import Result from './img/mat-result.webp';
import Override from './img/mat-override.png';

import AdvancedVertexColor from './img/mat-advanced-VertexColor.webp';

A custom *Deformation Material* can be used to enhance the visual deformation.
<img src={Comparison} />    
<div style={{display: "flex", maxWidth: "100%"}}>
    <div style={{width: "50%"}}>Deformation **without** a Deformation Material</div>
    <div style={{width: "50%", textAlign: "right"}}>Deformation **with** a Deformation Material</div>
</div>
<br/>

:::info Version 2.1
The template was optimized / refactored in version 2.1 and may vary a bit in previous versions. 
:::

We include a **template** material that you can use as a base or as inspiration. It's located here: `/DeformableStaticMesh/Materials/Template`: 
<img src={ContentBrowser} style={{maxWidth: "75%"}} />

:::info
You can also take a look at our [*example vehicle*](../installation/example.md), which also has a custom deformation material. It's located here: `/DeformableStaticMesh/Materials/Example/M_Deformable_TestVehicle`
:::

If you like video tutorials you may have a look at this tutorial. It was created using version 1.x but should still be relatively accurate:<iframe width="560" height="315" src="https://www.youtube.com/embed/GbmlwlhHJG8?si=l7Rb9yhkAlqPUM6B" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

## Setup using the Template

1. You can either create a **material instance** of the template material or **copy and customize the template** and create a *material instance* of the copied material or add the "deformation logic" to your own materials (see [Advanced / Custom Setup](#advanced--custom-setup)).
2. The material instance provides 5 configurable textures:<br/><img src={InstanceTextures}/>
    - **Base Textures** (**MANDATORY**)
        - **Base Color**: This should be the base color texture that you already use in your standard material.
        - **Metallic Roughness AO**: This should be your metallic / roughness / ambient occlusion (MRA) texture.
        - **Normal**: This should be the normal texture that you already use in your standard material.
    - **Deformation Textures**
        - **Damage Normal**: Here you *can* insert custom deformation normals.
        - **Scratch Base**: Here you *can* insert a custom scratch mask. The scratch mask is the base color with scratches. You can create it e.g. with substance painter.
3. *You can skip the next step if the static mesh has already been assigned the deformation materials.*
    - Go to your *Deformable Mesh Component* and use your created *Deformation Material(s)* as [**Material Overrides**](../guides/mesh-component/settings.md#material-overrides):<br/><img src={Override}/>

:::warning
Make sure to supply **as many materials as your static mesh needs**! If the static mesh has 8 materials slots, then you should override all 8 materials! But you don't have to override all 8 materials with deformation materials - you can also just choose the original material here.
:::

## Advanced / Custom Setup

You can of course create a custom deformation material from scratch or extend an existing material instead of using the above template. You will have to evaluate the **VertexColor's <i style={{color: "red"}}>red</i> channel** which represents the current deformation of a given vertex. Here's a simple example of how to create scratches where deformation has taken place:

<img src={AdvancedVertexColor}/>

The sample principle can be applied to normals and everything else.