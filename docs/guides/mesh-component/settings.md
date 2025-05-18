---
sidebar_position: 5
---

# Settings

## General

### Deformable Mesh

This is the [Deformable Mesh (Asset)](../mesh-asset/overview.md) that you created using the [Deformation Data Tool](../mesh-tool/asset-management.md#create-a-new-deformable-mesh).

## Collision

- **Collision Type Restriction** (optional): Only deform when hitting components that have this collision type. By default there is no restriction.
- **Actor Type Restriction** (optional): Only deform when hitting an actor of this type. By default there is no restriction.
- **Disable Hit**: Disable new hits completely. (temporary?)

## Deformation

### Max Deform Percentage
Maximum deformation in percent. The exact value depends on the distance of the vertex to the mesh origin, e.g. a vertex that is far out can achieve a much higher deformation than a vertex that is located near the origin.

### Max Hit Deform Percentage
Maximum deformation in a *single impact*, e.g. 10%, means that at least 10 hits (10 x 10% = 100%) are required to achieve the "*Max Deform Percentage*".

### Max Hit Acceleration
Acceleration ($m/s²$) required to achieve "*Max Hit Deform Percentage*". Can be measured with the debug setting "[*Debug Vehicle Velocity*](#debug)".

### Impact Registration Interval
Delay (*in seconds*) between the next hit that can processed. With this setting, hits that follow each other too quickly are ignored (*for performance reasons*).

### Min Relevant Impact Strength
Minimum Impact Strength (in percentage) required to trigger a deformation.

### Deformation Falloff Curve
Defines how damage (*per vertex*) is distributed based on distance to the center (*hit location*). Adjust this curve to control how the deformation effect decreases over distance. For example, a higher Y-value at the start results in more severe damage close to the impact point. 
- X-Axis: Normalized distance to the impact point, small values = close to center. Value range: $[0.0, 1.0]$
- Y-Axis: Amount of deformation. Value range: $[0.0, 1.0]$
     
### Radius
Minimum / Maximum Impact Radius (in cm). It affects how many vertices can move (deform) in a single impact. The minimum size corresponds to a very low force impact and the maximum size corresponds to a very high force impact. You can visualize this using the "[*Debug Impact*](#debug)" setting.

### None Physics - Mass Override
This value (in kg) overrides the *mass* of the parent component (*skeletal or static mesh*) that is used to calculate the deformation. This setting is **mandatory** if the parent component *does not* simulate physics.

:::info
This setting ONLY affects the deformation calculation! The actual mass is NOT changed.
:::

### NoiseEffects
- **NoiseFactor**: This controls the frequency scaling of the noise layers. It determines how "*dense*" or "*spread out*" the noise effect is on the deformation. Higher values result in more rapid fluctuations in the noise (creating a finer noise pattern), while lower values create smoother, less detailed noise effects. Recommended value range: $[0.0, 1.0]$
- **TotalAmplitude**: This controls the intensity of the *noise effect* on the deformation. It acts as a global multiplier that affects how strongly each noise layer (Noise1, Noise2, Noise3) contributes to the overall deformation. Higher values increase the deformation effect caused by noise, while lower values reduce it, giving you control over the strength of the noise-based deformation.

## Sound

### Impact Sound
- **Play Sound on Impact**: Should the *Impact Sound* play on impact?
- **Impact Sound**: Here you can insert a sound file that will be played on impact (when enabled)
- **Impact Sound Attenuation**: Insert a [sound attenuation config file](https://dev.epicgames.com/documentation/en-us/unreal-engine/sound-attenuation-in-unreal-engine) here that matches your impact sound.

## Networking

### Max Hit History
Maximum number of hits that are replicated. Additional hits overwrite the oldest hits. Limited by unreal networking. See [Replication](replication.md) for more information.

## Material

### Material Overrides
If specified, these Materials will be applied to the created Procedural-/Realtime Mesh instead of the materials of the original static mesh. This is useful if you e.g. want to use custom deformation materials but do not want to change the original static mesh. Make sure to supply as may materials as the original static mesh has.
*Previously known as "Vehicle Material(s)"*

### Use Random Car Color
This requires a *compatible material* that uses the vector param "**CarColor**" to colorize the mesh. The random color is also stored in the component's *CarColor* variable (which is replicated).

## Debug

- **Debug Impact**: Debug the impact from a hit. Draws a sphere and prints a string
- **Debug Impulse**: Debug the raw impulse from the hit (acceleration + force). Prints a string.
- **Debug Vehicle Velocity**: Prints the current velocity ($cm/s$) in short intervals.
- **Debug Networking**: Prints a string when an actor gets relevant and when a client is replicating hits.
- **Debug Tasks**: Debug background tasks in log (*LogCategory: LogDeformableTask*)

:::warning
The *debug* settings have a negative impact on the performance. Do not keep them activated unless you need them.
:::

## Performance

:::info
All "... *LOD* ..." settings only affect the [Realtime Mesh Component](../../installation/realtimemesh.md) and have no effect when using the default Procedural Mesh Component.
:::

### Initialization

**Show parent while initializing**: If this is activated the parent component (skeletal- or static mesh) will be visible while we load and prepare data (if needed!) and will be hidden when the deformable mesh is ready. This should *NOT* be activated when you are using a placeholder skeletal- or static mesh, because that placeholder may be visible for a small period of time when spawning the actor! This setting only makes sense when parent component looks exactly like the deformable mesh.

**LODs in background**: Initialize LODs in background thread? This results in *less* actual in game stutters when a Deformable Mesh Component initializes, but the actual deformable mesh *may not be visible instantly*. You can use the above setting "*Show parent while initializing*" to counteract this. First LOD always has high background priority.

**LOD 0 in foreground**: Force the LOD 0 initialization in *GameThread* (synchronous). This will probably generate a lag spike (depending on the mesh), but the mesh will be visible "earlier". This is unnecessary and can be deactivated if "*Show parent while initializing*" is activated and if you do not use a placeholder skeletal / static mesh. Otherwise this should be activated if "nothing is visible" at startup. Disable this when you have performance issues on startup (when the deformable mesh component initializes).

### Hit-Processing

**LODs in background**: Process the hits (*for each LOD*) in a background thread. This relieves the game thread, because heavy calculation is performed in background threads. First LOD always has high background priority.

**LOD 0 in foreground**: This forces the hit on LOD 0 to be processed on the *GameThread* (synchronous). This will probably generate a lag spike (depending on the mesh), but the deformation may be visible "earlier". Disable this when you have performance issues. You probably don't want to have this active in most cases.

### Profiling

- **Profile Initialization**: Profile the initialization (*LogCategory: LogStats*)
- **Profile Data Preparation**: Profile the preparation of data (*LogCategory: LogStats*)
- **Profile Hit Process**: Profile the hit processing (*LogCategory: LogStats*)
- Also see: [Performance-Profiling](../../advanced-guides/performance-profiling.md)

### Advanced

**Mesh draw type (RMC)**: (ONLY RMC) The rendering path to use. **Static** has lower overhead but requires a proxy recreation on change for all components. **Dynamic** has slightly higher overhead but allows for more efficient updates. See [official documentation](https://rmc.triaxis.games/component-core/structure/#frealtimemeshsection).

**Use Parent Bounds**: Should the created Mesh Component use the [bounds](https://www.youtube.com/watch?v=4rrgldPmtE8) of its parent component? This potentially saves a lot of performance (at least for RMC)! If you have problems with *culling / flickering / shadows*: Try turning this off.

:::info
Bounds are NOT collision!
:::

## Experimental

### Collision Damping
Dampens the force that throws the vehicle back like a rubber ball after an impact. Alternatively you can also use "*Physical Material Restitution*" of your [Physical Materials](https://dev.epicgames.com/documentation/en-us/unreal-engine/physical-materials-reference-for-unreal-engine). Our implementation can be customized using the *Restitution Coefficient*.

### Impact Particles
When "*Impact Particle On Impact*" is activated the specified "*Impact Niagara Particle*" system is spawned on every impact (hit) at the hit location. See our example niagara particle system for reference.

### Hazard Lights
When "*Hazard Lights On Impact*" is activated, the hazard lights are activated for the deformable mesh on impact. This requires a *compatible material*, that make use of the ``IndicatorStatus`` and ``HazardStatus`` material parameters to display the status. Take our [example deformation material](../../installation/example.md) `M_Deformable_TestVehicle` for reference. You can read more about materials [here](../../advanced-guides/deformation-material.md).
- ``IndicatorStatus``: 1 = Hazard (*0 and 2 could be left/right indicators, but they are not relevant for this use case*)
- ``HazardStatus``: 0 = Hazard lights OFF, 1 = Hazard lights ON