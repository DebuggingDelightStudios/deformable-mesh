---
sidebar_position: 30
---

# Upgrading

## Version 1.X to 2.X

import MigrateDataTable from './img/migrate-DataTable.png';

### DataTable Migration

You can either migrate your existing *DeformationData-DataTables* using our *Scripted Asset Action* or alternatively (maybe even better) create the Deformable Mesh assets from scratch. The old *DataTables* are not used anymore and can be deleted.

<img src={MigrateDataTable} style={{width: 400}} />

### Breaking changes

- Property ``Mesh Data Table`` => ``Deformable Mesh``
- Property ``Vehicle Materials`` => ``Material Overrides``
- Function ``AddHitAtLocation``: Renamed and new parameters
- Function ``ResetDeformation``: Renamed and replicated
- Hazard lights material parameter: ``Hazzard`` => ``HazardStatus``
- Properties for experimental functions _Hazard Lights_ and _Impact Sound_ were renamed

## Version 2.2 to 2.3

### Breaking changes

- The [custom material functions](guides/mesh-component/materials.md#custom) are deprecated. They are not required anymore, because you can simply use the [generic material functions](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/UMeshComponent) provided by the mesh component itself. See the linked topic for more information.
- [Hazard lights](guides/mesh-component/settings.md#hazard-lights) are not included in the component itself anymore. The logic is very specific and that's why we moved it to the example car blueprint.