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

<img src={EventAfterImpact} style={{float: "right", maxWidth: "50%", marginLeft: 8}} />

Event for impact handling. Called after an impact happened. Can be used e.g. for damage display.

**Hit Type**: What kind of hit happened? There are three type of hits:
- ``Normal``: A normal hit that *just* happened and was triggered by ``OnComponentHit``. *This is independent of replication.*
- ``History``: A hit that happened **in the past** and was triggered by [replication](./replication.md) of the ``HitHistory``.
- ``ForwardedNormal``: A hit that *just* happened and was triggered by ``OnComponentHit`` of **another** *Deformable Mesh Component* and was [forwarded](./settings.md#hit-settings) to this component. For more information see [Attachments](../../advanced-guides/vehicles/attachments.md).

:::info Version 2.1
Previously there was a *Is Real Impact* parameter but it has been replaced with the *Hit Type*. A ``Normal`` hit equals a **Real Impact**.
:::

:::tip Example
Most of the time you want to ignore ``History`` hits, because they are hits that happened in the past. Let's take the *Impact Effects* (SFX/VFX) for example, they should play/spawn when the component hits something. This obviously should only happen when a hit *just* happened and that's why we ignore ``History`` hits in this case.
:::

<img src={EventImpactData} style={{float: "right", maxWidth: "40%"}} />

**Impact Data**: This contains information about the hit, e.g. the location, strength and even the original hit result, but the *hit result* is only available for *normal* and *forwarded normal* hits. *Impact Strength* is between [Min Relevant Impact Strength](./settings#min-relevant-impact-strength) and [Max Hit Deform Percentage](./settings#max-hit-deform-percentage).

<br/><br/>

## Before Impact

This event is similar to [After Impact](#after-impact) but it triggers *before* the hit is processed.