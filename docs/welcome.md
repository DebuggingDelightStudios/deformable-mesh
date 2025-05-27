---
sidebar_position: 0
slug: /
---

import MyImage from '../static/img/dds_128.png';

# Welcome

<img src={MyImage} style={{float: "right", width: 96, maxWidth: "25%" }} class="no-shadow" />

Welcome to the documentation of the **Easy Static Mesh Deformation Component** - a powerful and flexible solution for deforming static meshes in Unreal Engine. This component was developed from the ground up to close a gap that no standard solution within Unreal Engine or common third-party tools reliably covers so far: the easy, dynamic, runtime-capable deformation of static meshes - regardless of their physics behavior.

In contrast to other approaches, which usually rely on *skeletal meshes*, this component works with static meshes. This allows for *simple* integration and offers a high-performance way of displaying visible deformations in the game - for example in the event of vehicle collisions.

It is important to note that the component is not a substitute for complex systems such as Chaos Destruction or high-end soft body simulations. Hyper realistic deformation and physics-driven destruction are not the focus. Rather, it offers a practical solution for visual feedback and controlled mesh modifications in scenarios where full destruction or complex simulations are not necessary or desired.

In this documentation you will learn how to integrate, customize and efficiently use the component in your project - from simple application examples to advanced possibilities.


## Technical details

### Features
- One [drivable car](./installation/example.md) included.
- Highly performant at runtime.
- Ultra Fast [Setup](./guides/mesh-component/setup.md).
- **Our Component** supports [skeletal](./advanced-guides/vehicles/chaos-vehicle.md) and [static mesh](./advanced-guides/vehicles/advanced-vehicle-system.md) based vehicle systems.
- Supports high and low poly meshes.
- The meshes can have any shape. (*see [best practices](./guides/mesh-asset/staticmesh.md)*)

### Deformable Mesh Tool
- **Simplified Mesh Preparation**: Easily prepare your static meshes for deformation without time-consuming setup.
- **Vertex Grouping**: Automatically sorts vertices into groups to enhance performance and reduce CPU load.
- **Data Management**: Create and manage deformation data assets effortlessly, enabling seamless integration with your vehicle systems.

### Code Modules
- [DeformableMeshComponent](./guides/mesh-component/overview.md) "Runtime"
- [DeformableMeshTool](./guides/mesh-tool/overview.md) "Editor"