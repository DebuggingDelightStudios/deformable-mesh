---
sidebar_position: 1
---

# Static Mesh

import NoDeformationWireframe from './img/sedan-no-deformation-wireframe.webp';
import NoDeformation from './img/sedan-no-deformation.webp';
import OverlappingFaces from './img/overlapping-faces.jpg';
import NotConnected from './img/boxtruck-not-connected.webp';
import NotConnectedBlender from './img/boxtruck-not-connected-blender.gif';
import OneSidedMesh from './img/OneSided-mesh.webp';

When it comes to the static mesh that's used for the Deformable Mesh, the following aspects should be taken into account:

- Your static mesh **SHOULD NOT** have overlapping vertices / faces / edges!
<details>
    <summary>Examples of overlapping vertices/faces/edges</summary>
    <img src={OverlappingFaces} class="no-shadow" />
    <a href="https://www.youtube.com/watch?v=Aclg2unKbyY"><img src="https://i.ytimg.com/vi/Aclg2unKbyY/maxresdefault.jpg" class="no-shadow" /></a>
</details>

- Your static mesh **SHOULD NOT** consist of many separate objects! The static mesh **SHOULD** be joint together for good deformation!
<details>
    <summary>Example: Not connected parts</summary>
    <img src={NotConnected} class="no-shadow" />
    The numberplate is being "pushed into" the back of this vehicle. Why? Because it's not connected to the back of the vehicle:
    <img src={NotConnectedBlender} style={{width: 400}} class="no-shadow" />
</details>

- Your static mesh **NEEDS** vertices wherever deformation should take place! *No / too less vertices = No / bad deformation.*
<details>
    <summary>Example: Not enough vertices</summary>
    <img src={NoDeformation} class="no-shadow" />
    That part of the mesh only has 4 vertices and that is not enough for any deformation!
    <img src={NoDeformationWireframe} class="no-shadow" />
</details>

- When using [**attachments**](../../advanced-guides/vehicles/attachments.md) make sure your static meshes are **NOT ONE SIDED** (*= only visible from one side and invisible / transparent from the other side*), in the event that the static mesh falls off you can see both sides.
<details>
    <summary>Example: One sided mesh</summary>
    <img src={OneSidedMesh} class="no-shadow" />
</details>