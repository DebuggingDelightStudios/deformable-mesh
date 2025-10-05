---
sidebar_position: 10
---

# Replication

Starting with *Version 1.1* the component can be used in multiplayer. All you need to do is switch on the "**Component Replicates**" setting of the deformation component, which is the case by default. 

:::tip Singleplayer
If the component is used in single player, the "*Component Replicates*" setting can and *should* be deactivated in order to save some performance.
:::

:::warning Dedicated Servers
The component is not yet tested in combination with dedicated servers.
:::

:::warning Output Log Warnings
There will be warnings inside your output logs whenever you use the deformable mesh component in an replicated actor. The warning says the following:
> Warning      LogNetPackageMap          FNetGUIDCache::SupportsObject: ProceduralMeshComponent ...Actor.... NOT Supported.

This warning tells you, that a procedural mesh component can not be replicated. However, since the deformable mesh component is taking care of the replication, **it is not a problem and can be ignored**. Unfortunately, we cannot disable this warning.
:::
## How it works

When network replication is active, all hits are recognized by the server and forwarded to all [relevant](https://dev.epicgames.com/community/learning/tutorials/8x3/multiplayer-networking-part-3-network-relevancy) clients. Each client calculates the deformation independently (locally) based on the data received from the server. In general, the hits are always recognized by the server, with the exception of when the actor is a pawn and this pawn is controlled by a player (e.g. a possessed chaos vehicle). In this case, the hits are recognized by the controlling client and then sent to the server.

Each hit is also stored in the **hit history**. This hit history is used to be able to *restore* the current deformation at any time. This is particularly important as for example a player who joins later should see the same deformation as all other players. The same concept applies to actors that only become relevant for a client later and/or under special conditions. In both cases, the hit history is "**replayed**" client side so that all players subsequently see the same deformation.

:::danger Limitations
We are currently aware of two limitations in the way our network replication works:
1. Firstly, there is always a certain **delay** in deformation, as all data must first be sent to the server and then back to the client. This can be optimized in future using client-side prediction.
2. Secondly, the hit history only supports a **maximum of ~300 entries (hits)**. The reason for this is that Unreal Networking has a fixed maximum packet size (*also called "maximum bunch size"*) and this is currently reached after ~300 hits. Once the maximum number of hits has been reached, the oldest hits are always deleted from the hit history for every subsequent hit and are therefore lost.
:::