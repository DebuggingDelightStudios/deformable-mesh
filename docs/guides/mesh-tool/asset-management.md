---
sidebar_position: 5
---

# Asset Management

import EmptySmall from './img/tool-empty-small.png';
import Create from './img/tool-create.png';
import SaveDialog from './img/tool-save-dialog.png';
import CreatedAsset from './img/tool-created-asset.png';
import Edit from './img/tool-edit.png';
import AssetRefresh from './img/tool-asset-refresh.webp';

## Create a new Deformable Mesh

:::info
You can only create a Deformable Mesh from a static mesh! If you have a skeletal mesh you can always [convert it to a static mesh](https://dev.epicgames.com/documentation/en-us/unreal-engine/skeletal-mesh-to-static-mesh-conversion-in-unreal-engine).
:::

Before creating a new Deformable Mesh you should make sure that you have a [suitable static mesh](../mesh-asset/staticmesh.md). But even if you don't have one *yet*, you can always come back later and just re-save the Deformable Mesh after you made changes to the static mesh itself!

1. When entering the Deformation Data Tool, you'll be greeted with this (or a similar looking) widget: <img src={EmptySmall} style={{width: 400}} />
2. To create a new Deformable Mesh, click the "**+**" Button right next to the Deformable Mesh selection.
3. The tool will reveal a new options panel including a "*Create*" button. The only thing you **have to select** is a static mesh (*SM_Boxtruck_01a* in this example). See [**Asset Options**](./asset-options.md) for more information.<br/><img src={Create} style={{width: 400}} />
4. After all options are configured you can finally click on the "**Create**" button to create the Deformable Mesh asset. This will open a **save dialog**:<br/><img src={SaveDialog} style={{width: 400}} />
5. You have to choose where to save the Deformable Mesh (Asset). This can be anywhere, by default it'll preselect the ``/DeformableStaticMesh/Data`` folder. This can be changed in the [plugin configuration](../../installation/configuration.md#tool-settings), as well as the suggested asset name.

<img src={CreatedAsset} />
Now you'll have a new Deformable Mesh, congratulation!

## Edit an existing Deformable Mesh

Editing an existing Deformable Mesh is also very easy. You simply have to select the desired Deformable Mesh asset.
<img src={Edit} style={{width: 400}} />

After selecting an existing Deformable Mesh the options will reveal and you can change everything to your desires. Don't forget to hit **Save** after you've made your changes.

## Refreshing an existing Deformable Mesh

Have you only made small changes to the static mesh and only want to reload it without actually changing any options? Then you may use the "**Refresh Data**" asset action - then you save yourself opening the tool!
<img src={AssetRefresh} style={{width: 400}} />

This behaves in exactly the same way as if you were to select the asset in the tool and then simply save it.
