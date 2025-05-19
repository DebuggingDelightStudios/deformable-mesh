---
sidebar_position: 2
description: RealtimeMeshComponent vs. ProceduralMeshComponent
---

# Realtime Mesh Component

> The RealtimeMeshComponent or more commonly RMC, is a functional replacement to the ProceduralMeshComponent and DynamicMeshComponent. The RMC is more efficient at rendering than either component while also being far more flexible than both components. You can still use all the DynamicMesh Geometry Scripting tools while enjoying the benefits of a faster renderer, or you can take a more direct approach and feed raw mesh data into the component.
[RMC Documentation](https://rmc.triaxis.games/)

We support both **RealtimeMeshComponent** and **ProceduralMeshComponent** (PMC) but **only one can be active at a time**. This is controlled by simply _enabling_ or _disabling_ the *RealtimeMesh* plugin in the project settings (see [Installation](#installation)).

:::info Realtime Mesh - Pro
There's also a *paid* version of this plugin available on the [marketplace](https://fab.com/s/7fca9ae43580), but we have not yet had the chance to test this version for compatibility with our component. We currently do not use any advanced features of the pro version like collision, nanite or lumen but this can change in the future.
:::

## Benefits / Features

... that we actually use:

- **LOD Support**, allowing engine maximum of 8 LOD levels and full dithering support
- 50-90% Lower memory usage than PMC
- 30-90% lower render thread CPU time
- Static draw path for maximum rendering performance (via optional setting)
- Dynamic Draw path for efficient frequent updates (via optional setting)

## Installation

:::warning Unreal Engine 5.5
At the moment there is *no* unreal engine 5.5 version of the Realtime Mesh (Core) component available in the marketplace, but you can use the [GitHub Version](https://github.com/TriAxis-Games/RealtimeMeshComponent) instead.
:::

1. Get the *free* "[Realtime Mesh - Core](https://fab.com/s/41804ec36805)" plugin from the FAB Marketplace.
2. Download and install the plugin to your engine using the epic games launcher.
3. (Optional) Move the downloaded plugin to your project's plugin folder.
    - Default Installation Location: ``C:\Program Files\Epic Games\UE_[version]\Engine\Plugins``
4. Enable the plugin in your project: **Edit > Plugins**. Restart the Engine afterwards.
5. Et voila, Deformable Meshes should use *RealtimeMeshComponent* now. You can double check it by visiting the [project settings](./configuration.md#component-settings) and check the value of ``ActiveMeshType``.
    - Alternatively there is also an ``MeshType`` property inside every *DeformableMeshComponent*.
6. In case this *does not* work, try to clean your solution (delete _intermediate_ + _binaries_ folder of your project and plugin) and rebuild your solution. 
    - When switching from PMC to RMC (or vice versa) we actually un-/define a C++ preprocessor ``USE_RMC`` and this switches everything inside our component and the tool to the respective mesh component type. This logic is triggered inside the plugin's _build.cs_ file.