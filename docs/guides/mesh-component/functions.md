---
sidebar_position: 15
---

# Functions

import FunctionAddHitAtLocation from './img/function-AddHitAtLocation.png';
import FunctionResetDeformation from './img/function-ResetDeformation.png';
import FunctionUpdateMesh from './img/function-UpdateMesh.png';
import FunctionUpdateWheelPositions from './img/function-UpdateWheelPositions.png';
import ExampleUpdateWheelPositions from './img/example-UpdateWheelPositions.png';
import FunctionChangeDeformableMesh from './img/function-ChangeDeformableMesh.png';
import Example1ChangeDeformableMesh from './img/example-1-ChangeDeformableMesh.png';
import Example2ChangeDeformableMesh from './img/example-2-ChangeDeformableMesh.png';
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

## Change Deformable Mesh {#change-deformable-mesh}

:::note Version 2.2
This function is included in Version 2.2.
:::

<img src={FunctionChangeDeformableMesh} style={{float: "right", maxWidth: "50%"}} />

Using this function you can change the deformable mesh at **runtime** while you play. It resets the deformation and calling this is probably expansive (performance-wise), depending on your mesh. Don't call it too frequently. 

This can be called in begin play, but try not to call this when a hit is currently being processed. We have already taken some internal precautions to prevent it from crashing when the mesh is changed while a hit is being processed, but this should be prevented in general if possible.

**Note**: This only changes the deformable mesh but it does **not** change the *static mesh* of the parent component or the [*Material Overrides*](settings#material-overrides). This must be done manually! See example below.
 
<details>
    <summary>Example usage (*BP_DeformationExampleStaticMesh*)</summary>
    <p>The following functions switches between two deformable meshes.</p>
    <img src={Example1ChangeDeformableMesh} className="no-shadow" />
    <p>Whenever a deformable mesh is [loaded](events#mesh-loaded) (*this is also the case after calling `ChangeDeformableMesh`*) we change the parent components static mesh to the static mesh of the loaded deformable mesh so it uses a suitable collision (*optionally if both deformable meshes are very similar*). Additionally we may have to assign different [*Material Overrides*](settings#material-overrides).</p>
    <img src={Example2ChangeDeformableMesh} className="no-shadow" />
</details>

✅ Network replicated (*make sure to change the static mesh and material overrides manually if necessary*)

## Update Wheel Positions {#update-wheel-positions}

:::note Version 2.2
This function is included in Version 2.2.
:::

<img src={FunctionUpdateWheelPositions} style={{float: "right", maxWidth: "50%"}} />

*This is a R-Tune exclusive function at the moment. That means this function officially is only compatible with R-Tune. There will be an example using our police car.*

This function will move and tilt your wheels on impact depending on where the hit happened. This function should be called after impact. See *Example Usage* below.

- **Wheel Component**: Your suspension components (*not the actual wheels*).
- **Impact Data**: This comes from the [AfterImpact](guides/mesh-component/events.md) and should be passed through.
- **Options**: 
    - *Max Displacement*: Maximum displacement relative to default position.
    - *Displacement Multiplier*: Influences how far the component is moved / displaced.
    - *Max Tilt*: Maximum tilt of the component (in degrees).
    - *Tilt Multiplier*: Influences how steeply the component tilts.
- **Only Calculate**: If this is true, the components will *not* be changed. You can use the output transforms to manually change the components.

✅ Network replicated (*call on server and make sure the suspension components are replicated*)

<details>
    <summary>Example usage</summary>
    <p>`Suspension` contains all suspension components that will be moved. You should not change the order the elements or dynamically add/remove elements.</p>
    <p>`Update Wheel Options` is a variable inside that car actor, that contains appropriate values for that actor.</p>
    <img src={ExampleUpdateWheelPositions} className="no-shadow" />
</details>

## Material functions

:::note Materials
We may improve this part of the component in the future.
:::

These functions can be used to edit the materials of the visible mesh. You have to use these functions to modify your materials (e.g. lights), because only the procedural mesh is visible and you can not access it directly (yet).

<img src={FunctionMaterial}/>