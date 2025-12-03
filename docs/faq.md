---
sidebar_position: 35
---

# FAQ

#### No changes to materials have any effect

In most cases the problem is that you don't use our mesh component when applying any changes to materials. See [materials](guides/mesh-component/materials.md) for more information.

#### After deactivating Realtime Mesh Component plugin, several blueprints do not compile anymore

Sometimes, for whatever reason, the Easy Static Mesh Deformation Component plugin also deactivates itself when the Realtime Mesh Component plugin is deactivated. Make sure that the Deformation Component plugin is enabled and rebuild the project.