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