---
sidebar_position: 10
---

# Asset Options

import AssetOptions from './img/tool-asset-options.png';
import CubeCuboid from './img/cube-cuboid.png';

<img src={AssetOptions} />

## Prepare Mesh Data

With this setting you can decide whether the mesh data should be retrieved at runtime or prepared in the editor and be saved in the data asset. This requires additional disk space, but will probably perform better at runtime. (*in previous versions < 2.0 the data was **always** prepared*)

| Advantages of prepared data | Disadvantages of prepared data |
| :--- | :--- |
| Data is prepared in editor and not retrieved at runtime, therefore minimal performance overhead in game | The prepared data needs disk space, in our tests at least *2x* the original static mesh'es disk size |
| The static mesh *does not* require the "*Allow CPU Access*" flag. This is only needed when retrieving mesh data at runtime | |

:::info
We need this data to create the RealtimeMeshComponent / ProceduralMeshComponent. The data consists of the actual vertices, triangles, normals, UVs (up to 4) and tangents of the actual static mesh asset.
:::

## Prepare Groups

We *recommend* to use this option. There are similar advantages and disadvantages here as with the *prepared mesh data*, but the needed performance to calculate / determine the groups is not "as bad" as the required disk size. In our tests the required disk size is about 5% of the total Deformable Mesh disk size when the mesh data is also prepared.  (*in previous versions < 2.0 the groups were **always** prepared*)

Example: The prepared groups for an 80.000 vertices mesh only need about 300kb of disk size. The entire Deformable Mesh asset was about 10mb in this test.

:::warning
After making changes to the static mesh itself, you **have to** open and re-save (or [refresh](./asset-management.md#refreshing-an-existing-deformable-mesh)) the Deformable Mesh when you prepare the mesh data or the groups! Otherwise your changes made to the static mesh will NOT be adopted to the Deformable Mesh.
:::

## Static Mesh

This is the static mesh that you want to deform. See [here](../mesh-asset/staticmesh.md) for more information. The original static mesh asset is not changed without your consent. 

## Number of Groups

With this option you can improve (or when set incorrectly decrease) the performance of the deformation. You can decide how many groups should be generated for each axis (x, y, z). **These values should represent the approximate dimension of your static mesh** and each group should *not* contain too many vertices! *\<\= 5000 vertices should be fine*.

<details>
    <summary>Example</summary>
    <img src={CubeCuboid} style={{width:200}} />
    - If you have a cube, you probably want a equal distribution of groups ($X = Y = Z$)
    - If you have a cuboid, you probably do not want an equal distribution (because one axis is "longer" and thus has more vertices than the other two)
</details>
:::tip
You can visualize the groups using the *vertexmode* in the [viewport](./explorer.md#viewport) and also see their vertex count in the groups list.
:::

## Use LODs

This option is **only** available when using [RealtimeMeshComponent](../../installation/realtimemesh.md). This will enable LODs for the Deformable Mesh. The LODs will also deform.

## Additional Information

- Asset Version: This indicates which version (RMC or PMC) was used when creating this asset. This currently only affects LODs (*PMC does not support them*).
- Asset Disk Size: This is the disk size of the current Deformable Mesh