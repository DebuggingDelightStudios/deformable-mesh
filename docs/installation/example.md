---
sidebar_position: 4
description: All included examples
---

# Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ExampleCarBrowser from './img/example-car-browser.png';
import ExampleCar from './img/example-car.webp';
import ExampleCarStaticMesh from './img/example-car-static.webp';
import ExampleMapBrowser from './img/example-map-browser.png';
import ExampleMapOverview from './img/example-map-overview.webp';

import CaptionWrapper from "@site/src/components/CaptionWrapper";

We include one drivable car, a static mesh example and an example map on which the deformation can be tested.

<Tabs className="unique-tabs">
  <TabItem value="car-skeletal" label="Vehicle (Chaos)" default>
    <!-- <div style={{display: "flex", maxWidth: "100%"}}>
      <img src={ExampleCarBrowser} style={{width: "50%"}} />
      <img src={ExampleCar} style={{width: "50%"}} />
    </div> -->
    <img src={ExampleCar} />
    <div style={{display: "flex", maxWidth: "100%"}}>
      <div style={{width: "50%"}}>**Left**: Vehicle while in editor (only skeletal mesh is visible)</div>
      <div style={{width: "50%"}}>**Right**: Vehicle while playing (Deformable Mesh is visible)</div>
    </div>
    **Location**: `/Plugins/DeformableStaticMesh/Content/Example/ChaosVehicleExample/`

    The example car is a ChaosVehicle (``AWheeledVehiclePawn``) that uses a _placeholder skeletal mesh_. This is NOT necessary, but because the skeletal mesh is only used for collision it (*most of the time*) does not matter how it looks. For more information see: [**Chaos Vehicle**](../advanced-guides/vehicles/chaos-vehicle.md).

    There is a special material override that overrides the default material of the mesh with a [_deformation_ material](../advanced-guides/deformation-material.md) (`/DeformableStaticMesh/Content/Materials/Example/M_Deformable_TestVehicle`). This makes dents even more visible and enables hazard lights. In addition to that there's also a [protection box](../advanced-guides/protectionbox.md) that prevents the driver side (left) from deforming too much.

    Other than that it's really just a simple _ChaosVehicle_ with basic movement and three special shortcuts:
    - **R**: Reset Vehicle (position)
    - **E**: Reset Deformation
    - **Z**: Toggle Scratchmask (= deformation material)

    Here are some useful links for ChaosVehicles in general:
    - [How to Set up Vehicles (UE Documentation)](https://dev.epicgames.com/documentation/en-us/unreal-engine/how-to-set-up-vehicles-in-unreal-engine)
    - [Setting up the Chaos Vehicles Plugin in Unreal Engine 5.4](https://dev.epicgames.com/community/learning/tutorials/ZeKz/unreal-engine-setting-up-the-chaos-vehicles-plugin)
  </TabItem>
  <TabItem value="car-static" label="Static Mesh (Vehicle)">
    <!-- <div style={{display: "flex", maxWidth: "100%"}}>
      <img src={ExampleMapBrowser} style={{width: "50%"}} />
      <img src={ExampleMapOverview} style={{width: "50%"}} />
    </div> -->
    <img src={ExampleCarStaticMesh} />
    **Location**: `/Plugins/DeformableStaticMesh/Content/Example/StaticMeshExample/BP_DeformationExampleStaticMesh`

    This actor is an example of how to use our component with pure static meshes. We're not limited to vehicles, but we already include the vehicle asset so we're just gonna reuse it for this purpose. One of the actors' static mesh is simulating physics and the other is not. We support both cases.

    **Version 2.2**: The StaticMeshExample-Actor is now replicated and can switch between the vehicle deformable mesh and a sphere deformable mesh using [`ChangeDeformableMesh`](guides/mesh-component/functions.md#change-deformable-mesh). The key binding for this is "F".
  </TabItem>
  <TabItem value="map" label="Map">
    <img src={ExampleMapOverview}/>
    **Location**: `/Plugins/DeformableStaticMesh/Content/Map/`

    - Swings (*left*)
    - Balls falling from the sky (*between the two big ramp*s)
    - Two vehicle spawner, that launch a accelerating vehicle towards the player (*in the back*)
    - Ramps, Obstacles, ...
  </TabItem>
  <TabItem value="cpp" label="C++">
    `AExampleDeformableActor` demonstrates how the deformable mesh component can be used with C++. It shows you how to properly add the component to your actor.
  </TabItem>
</Tabs>