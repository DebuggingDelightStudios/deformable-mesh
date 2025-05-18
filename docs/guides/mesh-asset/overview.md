---
sidebar_position: 0
---

# Deformable Mesh (Asset)

The *Deformable Mesh* is created and maintained with the [Deformation Data Tool](../mesh-tool/overview.md) and used by the [Deformable Mesh Component](../mesh-component/overview.md). It is a normal *uasset* (Unreal Data Asset), i.e. references are handled by unreal and you can access the Deformable Meshes via the content browser.

A Deformable Mesh consists of:
- the actual vertices, triangles, normals, UVs (up to 4) and tangents (*for each LODs*) of the actual static mesh asset
- the actual vertices that are summarized in groups (*for performance when calculating the deformation*)

*We previously (version < 2.0) used DataTables. That implementation had some flaws that are fixed by using unreal data assets*.