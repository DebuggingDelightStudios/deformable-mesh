---
sidebar_position: 15
---

# Functions

import FunctionAddHitAtLocation from './img/function-AddHitAtLocation.png';
import FunctionResetDeformation from './img/function-ResetDeformation.png';
import FunctionUpdateMesh from './img/function-UpdateMesh.png';
import FunctionMaterial from './img/function-Material.png';

## Add Hit at Location

<img src={FunctionAddHitAtLocation} style={{float: "right", maxWidth: "50%"}} />

Perform a manual hit and (optionally) apply an impulse to the actor.

**Hit Location** & **Hit Location Type**: Where should the hit go? (relative or world location)

**Impact Strength**: Strength of the impact ($m/s²$). This affects the *hit radius* and the strength should be between *0* and *MaxHitAcceleration*!

**Add Impulse**: Whether to apply an impulse or not (*instantaneous force, see unreal's original [AddImpulseAtLocation](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/UPrimitiveComponent/AddImpulseAtLocation) for reference*)

**Impulse**: Magnitude and direction of impulse to apply. (Unit: $kg*cm/s$) <br/>$Impulse = Mass * Velocity$

**Impulse in World Space**: Impulse in relative or world space?

✅ Network replicated

## Reset Deformation

<img src={FunctionResetDeformation} style={{float: "right", maxWidth: "50%"}} />

Reset the deformation and optionally refresh the mesh itself.

**Should Update Mesh**: Without this the reset deformation will not be visible (until the next hit happened).

✅ Network replicated

## Update mesh

<img src={FunctionUpdateMesh} style={{float: "right", maxWidth: "50%"}} />

This will refresh the visible mesh (e.g. after [Reset Deformation](#reset-deformation)). *Normally you don't have to call this manually*.

❌ Only local

## Material functions

These functions can be used to edit the materials of the visible mesh. You have to use these functions to modify your materials (e.g. lights), because only the procedural mesh is visible and you can not access it directly (yet).

<img src={FunctionMaterial}/>

:::note Materials
We may improve this part of the component in the future.
:::