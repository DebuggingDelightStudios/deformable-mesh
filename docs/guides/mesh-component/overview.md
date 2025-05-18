---
sidebar_position: 0
---

# Deformable Mesh Component

![BP Component](./img/bp-comp.webp)

The Deformable Mesh Comp is the counterpart to the [Deformation Data Tool](../mesh-tool/overview.md). This is where the magic happens. Here the collected data from the [Deformable Mesh (Asset)](../mesh-asset/overview.md) that we previously created is processed. The component simply works according to the **plug & play** system: You simply place it below the *vehicle mesh / mesh to deform*, give the component some information and the component regulates the rest independently.

:::info
The *Deformable Mesh Component* itself has **NO COLLISION**! It uses the collision of the parent component (the static mesh or skeletal mesh).
:::

<details>
    <summary>Rough summary of deformation logic</summary>
    <p>
    During an impact, an area is formed at the location of the impact. Its size depends on the *Impact Radius*.
    In this area we look at which vertices are affected by the impact. This would not be easily possible by going through each individual vertical in a for each loop, looking at its position and checking whether this is in the formed area. 
    This for each loop would be so extremely complex for the CPU while the game is running (i.e. the more detailed the mesh, the longer the loop) that it could lead to FPS drops or even application crashes.
    </p>
    <p>
    That's why we decided to pre-sort and group all vertices with the tool before runtime so that in the event of an impact we only have to check whether a group of vertices is affected and then only check this small, relevant group of vertices in the loop whether it is affected. If relevant, these vertices are shifted in position from the opposite direction of impact and updated in the procedural mesh.
    </p>
    <p>
    In order to make the whole thing even more realistic visually, we use this affected group in another procedure in which we change the vertex color to which a material instance can then react and then color scratches (via a mask) and dents (via the normal input) in this area.
    </p>
</details>
