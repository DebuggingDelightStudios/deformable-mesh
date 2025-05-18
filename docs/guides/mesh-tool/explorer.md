---
sidebar_position: 3
---

# Explorer

import Groups from './img/tool-groups.png';
import Viewport from './img/tool-viewport.png';
import ViewportVertex from './img/tool-viewport-vertex.png';

The *Explorer* has two parts, the Viewport and the Groups overview.

## Viewport

<div style={{display: "flex", maxWidth: "100%"}}>
    <img src={Viewport} style={{width: "50%"}} />
    <img src={ViewportVertex} style={{width: "50%"}} />
</div>
<div style={{display: "flex", maxWidth: "100%"}}>
    <div style={{width: "50%"}}>Normal mode</div>
    <div style={{width: "50%"}}>*Vertexmode* activated</div>
</div>
<br/>

The viewport is simple: It displays the current Deformable Mesh. At the moment we use a procedural mesh to display the Deformable Mesh regardless of whether the actual deformation component uses a realtime mesh or not. The following options can be changed (they are located on the right):
- The viewport can be turned on and off using the **Viewport** button 
- You can also choose what **LOD** to show in the viewport (only available when using RMC).
- You can preview the group distribution using the **Vertexmode**. This will apply a custom material to the viewport mesh that'll display the different groups using different colors. In this mode you can de-/select single or multiple groups in the groups list and only the selected groups will be colorized.

**Navigation** takes place with the right mouse button pressed and W/A/S/D. The speed can be set faster or slower using the mouse wheel.

## Groups and options

<img src={Groups} style={{width:  "50%"}} />

In the upper part of this section you have the viewport options. Below that you have detailed information about the groups of the current Deformable Mesh, how many groups were created, how many vertices the mesh has and a list of all groups.