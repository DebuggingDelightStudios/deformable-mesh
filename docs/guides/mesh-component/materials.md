---
sidebar_position: 20
---

import FunctionMaterial from './img/function-Material.png';
import FunctionMeshComponentMaterials from './img/function-meshcomponent-materials.webp';
import FunctionMeshComponent from './img/function-meshcomponent.webp';

import Comparison from '../../advanced-guides/img/mat-comparison.webp';

# Materials

⚠ Instead of applying material changes to the original mesh component (*eg. the VehicleMesh for ChaosVehicle or the static mesh*), you have to apply these changes to our mesh component instead! Otherwise the changes will have no effect on the visible (deformable) mesh. See this example:

<img src={FunctionMeshComponent} style={{ maxWidth: "50%"}} />

## Deformation in materials

You can access information about the deformation in your materials and enhance the visual deformation even more. See [Deformation Material](../../advanced-guides/deformation-material.md) for more information

<img src={Comparison} />    
<div style={{display: "flex", maxWidth: "100%"}}>
    <div style={{width: "50%"}}>Deformation **without** a Deformation Material</div>
    <div style={{width: "50%", textAlign: "right"}}>Deformation **with** a Deformation Material</div>
</div>
<br/>


## Custom material functions {#custom}

:::warning Deprecation note
The custom material functions are deprecated and should not be used anymore. You can use the [generic material functions](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/UMeshComponent) provided by the mesh component. See above for an example.
:::

These functions can be used to edit the materials of the visible mesh. You have to use these functions to modify your materials (e.g. lights), because only the procedural mesh is visible and you can not access it directly (yet).

<img src={FunctionMaterial} />