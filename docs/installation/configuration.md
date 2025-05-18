---
sidebar_position: 3
description: Quick overview of the project settings
---

# Plugin Configuration

import SettingsComponent from './img/settings-component.png';
import SettingsTool from './img/settings-tool.png';

Under **Edit > Project Settings** you can find all central settings of the tool and the component (not many yet).

## Component Settings
<img src={SettingsComponent} />

- Material
    - **Translucent Material**: This material is used to hide *skeletal mesh* parent components (mainly used for *chaos vehicles*).
- Information
    - **Active Mesh Type**: This is the currently active mesh component, either ``REALTIME_MESH`` or ``PROCEDURAL_MESH``.

## Tool Settings
<img src={SettingsTool} />

- Deformable Mesh Asset
    - **Default Directory**: This is the preselected (default) directory for the save dialog when [creating deformable meshes](../guides/mesh-tool/asset-management.md).
    - **Default Asset Name**: This is the suggested asset name when [saving a new deformable mesh](../guides/mesh-tool/asset-management.md). The placeholder ``{<SM_Name>}`` will be replaced with name of static mesh.
    - **Default Number Of Groups**
- Tool
    - **Viewport Visible**: Whether the [Viewport](../guides/mesh-tool/explorer.md) is visible in the Deformation Data Tool or not. This is automatically changed when you change the setting in the Tool.
    - **Vertex Mode Active**: Whether the Vertex Mode is activated in the [Viewport](../guides/mesh-tool/explorer.md) in the Deformation Data Tool or not. This is automatically changed when you change the setting in the Tool.