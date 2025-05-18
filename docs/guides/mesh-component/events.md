---
sidebar_position: 14
---

# Events

import EventAfterImpact from './img/event-AfterImpact.png';
import EventImpactData from './img/events-ImpactData.png';
import EventMeshInitialized from './img/event-MeshInitialized.png';
import EventMeshLoaded from './img/event-MeshLoaded.png';
import EventMeshUpdated from './img/event-MeshUpdated.png';

## Mesh Loaded

<img src={EventMeshLoaded} style={{float: "right", maxWidth: "50%"}} />

Called when the Deformable Mesh (Asset) is fully prepared and loaded.

**NOTE**: You should check ``bIsMeshLoaded`` before binding/waiting for this event to trigger, because the mesh may already be loaded!

## Mesh Initialized

<img src={EventMeshInitialized} style={{float: "right", maxWidth: "50%"}} />

Called when the the actual mesh component (RMC/PMC) is initialized and visible.

**NOTE**: You should check ``bIsMeshInitialized`` before binding/waiting for this event to trigger, because the mesh may already be initialized!

## Mesh Updated

<img src={EventMeshUpdated} style={{float: "right", maxWidth: "50%"}} />

Called after a *LOD* (*RealtimeMesh*) or a *Section* (*ProceduralMesh*) is updated. Every hit triggers at least one update. Most of the time the [After Impact](#after-impact) makes more sense to use.

- *RealtimeMesh*: ``SectionIndex`` is always -1
- *ProceduralMesh*: ``LodIndex`` is always -1


## After Impact

<img src={EventAfterImpact} style={{float: "right", maxWidth: "50%"}} />

Event for impact handling. Called after an impact happened. Can be used e.g. for damage display.

**Is Real Impact**: This is *true* for hits that were triggered by an actual hit. It is *false* when the hit was "*replayed*" from the hit history (see [Network Replication](./replication.md)). In most cases you want to ignore hits that are "*not real*"

<img src={EventImpactData} style={{float: "right", maxWidth: "50%"}} />

**Impact Data**: This contains information about the hit, e.g. the location, strength and even the original hit result, but the *hit result* is only available for *real hits*.

<br/><br/>
