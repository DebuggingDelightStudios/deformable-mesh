---
sidebar_position: 25
---

# Changelog

## Version 1.0 (07/2024)
- Initial Release, basic functionalities

### Version 1.1 (08/2024)
- Network Replication
- Support for non-physics-simulating Actors and Non-Vehicle Actors
- Support for impulses through new **AddHitToLocation** function
- Various refactorings of the component
- Removed: "Vehicle Material" setting

### Version 1.2 (09/2024)
- 12 new functions have been added to influence the _materials_ from the Procedural Mesh, for example to control the vehicle lighting.
- New getter function has been added to expose the Procedural Mesh. 
- A bug that only one material slot is taken into account (the last index) is also   fixed.

### Version 1.3 (10/2024)
- Demo map:
    - A bug has been fixed in the demo map where the tires constantly slipped into the ground
    - Collisions in the demonstration vehicle have been reworked
- C++ optimizations have been made. Among other things, all for loops processing large data sets have been parallelized and are now executed using a multithreading process, which applies dynamic chunking depending on system performance and the size of the data set.
- **Multiple UVs** are now supported, up to 4 per section of the static mesh.
- The damage model has been completely revised. Among other improvements, you can now define the damage falloff via a curve. In the curve, you can determine precisely where the center of the damage is and how it should be distributed. You can also apply noise to make the damage appear more dynamic.
- An "On Impact" event has been added to allow binding, for example, to damage display widgets or anything that needs to be updated after an impact.
- Collision damping has been improved and now functions more effectively.
- And much more. 

### Version 1.3.2 (01/2025)
- Fixed an error in the tool that caused the tool to lag when selecting assets.
- C++ accessibility of all important functions, events and variables.
- A new experimental feature: [**ProtectionBox**](./advanced-guides/protectionbox.md) Component, which can protect areas from deformation (for example driver's seat with driver).
- Minor bugfixes.

## Version 2.0 (05/2025)
- [*Upgrade-Guide*](./upgrading.md#version-1x-to-2x)
- New documentation ([old documentation](https://docs.google.com/document/d/15rQ43N4Q9SQlBJg12ZPjgmUrXZX8UX5u07IsrkZnFo8/edit?usp=sharing))
- Complete overhaul of the [Deformable Mesh Tool](./guides/mesh-tool/overview.md)
- **Switch from *DataTable* to *DataAsset*** (DeformableMesh)
    - One mesh per data asset instead of potentially multiple meshes in one data table. See [*Upgrade-Guide*](./upgrading.md#version-1x-to-2x)
- Support for external marketplace plugin "[**RealtimeMeshComponent**](./installation/realtimemesh.md)"
- Support for **LODs** (_only in combination with RealtimeMeshComponent_)
- Example C++ actor (``ExampleDeformableActor``)
- Refactorings
    - Most of the important functions were moved to C++ for better **performance**
    - All settings are now available in C++
    - Some deprecated functions were removed
    - We now make use of the **``OnRegister``** function instead of ``BeginPlay`` for earlier loading of the mesh
    - Several functions and properties were re-organized for better readability and usability
- New Events
    - ``DeformableMeshLoaded``
    - ``DeformableMeshInitialized``
    - ``DeformableMeshUpdated``
    - ``AfterImpact`` _(this one was broken in previous version)_
- New Settings
    - Performance-Settings
    - Profiling-Settings
- Networking
    - ``ResetDeformation`` is now replicated by default
    - ``RandomCarColor`` is also replicated by default
- ... many small things - too many to list them here :)