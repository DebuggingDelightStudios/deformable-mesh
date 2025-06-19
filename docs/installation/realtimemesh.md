---
sidebar_position: 2
description: RealtimeMeshComponent vs. ProceduralMeshComponent
---

import RmcUproject from './img/rmc-uproject.png';

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

:::warning Unreal Engine 5.5 / 5.6
At the moment there is *no* Unreal Engine 5.5 version of the *Realtime Mesh (Core)* component available in the marketplace, but you can use the [GitHub Version](https://github.com/TriAxis-Games/RealtimeMeshComponent) instead. **The Github Version does not work with Unreal Engine 5.6 yet (as of June 2025).**
:::

1. Get the *free* "[Realtime Mesh - Core](https://fab.com/s/41804ec36805)" plugin from the FAB Marketplace.
2. Download and install the plugin to your engine using the epic games launcher.
3. (Optional) Move the downloaded plugin to your project's plugin folder.
    - Default Installation Location: ``C:\Program Files\Epic Games\UE_[version]\Engine\Plugins\Marketplace\``
4. Enable the RMC plugin in your project: **Edit > Plugins**. Save and close the editor.
5. Make sure your `uproject` file contains at least two plugin entries, one for "*RealtimeMeshComponent*" and one for "*DeformableStaticMesh*" that are both enabled as you can see in the image below: <br/><img src={RmcUproject} />
5. Open your project e.g. with Visual Studio and build it. That's it.
    - There should be a message like "*DeformableMeshComponent: Using RealtimeMeshComponent!*" in the *build* output (when building the project).
6. Et voila, Deformable Meshes should use *RealtimeMeshComponent* now. You can double check it by visiting the [project settings](./configuration.md#component-settings) and check the value of ``ActiveMeshType``.
    - Alternatively there is also an ``MeshType`` property inside every *DeformableMeshComponent*.
7. In case this *does not* work, try to clean your solution (delete _intermediate_ + _binaries_ folder of your project and plugin) and rebuild your solution. 
    - When switching from PMC to RMC (or vice versa) we actually un-/define a C++ preprocessor ``USE_RMC`` and this switches everything inside our component and the tool to the respective mesh component type. This logic is triggered inside the plugin's _build.cs_ file.