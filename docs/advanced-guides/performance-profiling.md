---
sidebar_position: 20
description: Learn how to find performance bottlenecks
---

# Performance Profiling

import Parameters from './img/profiling-parameters.png';
import LogStats from './img/profiling-log-stats.png';
import Insights from './img/profiling-insights.png';

## Using Logs

We provide some [settings](../guides/mesh-component/settings.md#profiling) that you can activate to measure some parts of the component.:

- **Profile Initialization**: Profile the initialization of the component
- **Profile Data Preparation**: Profile the preparation of data
- **Profile Hit Process**: Profile the hit processing

They create logs with the log category _LogStats_. In the following picture (_Output Log_ of Unreal) you can see the profiling settings **Profile Initialization** and **Profile Data Preparation** in action (for 2 actors):
<img src={LogStats} />

<details>
    <summary>How to read the log stats</summary>
    <p>LogStats &lt;StepName&gt; &lt;Phase&gt; - &lt;LastTime&gt; ms - Total &lt;TotalTime&gt; s / &lt;Count&gt; / &lt;AverageTime&gt; ms</p>
</details>


## Using Unreal Insights

If you don't have any experience with Unreal Insights then you should get familiar with that tool first. There are several useful resources out there, [this](https://www.youtube.com/watch?v=5rjm1s-pAMk) youtube video for example.

You can either start your Unreal Engine using (at least) the following start parameters or alternatively activate them at runtime (see picture):
> -statnamedevents -trace=default,cpu,task"
<img src={Parameters} />

After creating a trace and opening it using Unreal Insights, you'll be presented a similar picture:
<img src={Insights} />

To find out how our functions perform in terms of performance, simply search for **DMC** (*short for: Deformable Mesh Component*) in the *Timers* tab on the right (as shown in the picture above). To find them inside the timeline (left side), you can rightclick on one of the timers and choose "Highlight Event". They'll be highlighted but it may be somewhat difficult to find them, because they are partially being executed in background thread for better performance, as you can see in the picture.