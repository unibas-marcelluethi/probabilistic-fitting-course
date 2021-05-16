---
id: Week4
title: Designing effective samplers
---
# Designing effective samplers

In this week we will look at how we can design effective samplers for fitting algorithms. 
We start by discussing typical problems that occur when fitting models, how to detect them, as well as simple mitigation strategies based on parameter tuning, block-wise proposals and mixture proposals. 
We then discuss the Metropolis-Filter proposal, which provides an effective way to filter complex proposal 
based on simpler parts. Finally we discuss how we formulate the Iterative Closest Point and Active Shape Modelling algorithm as a proposal. This allows us to use these classical, deterministic algorithms as a part in our more complex, fully probabilistic setting. 

#### Steps
1. Detecting problems in the sampler ([Article](detecting-problems))
2. Simple sampling strategies for shape model fitting ([Article](simple-strategies))
3. Designing effective chains using the Metropolis-Filter proposal ([Article](metropolis-filter))
4. Directed proposals using ICP and ASM steps ([Article](icp-proposal))
    1. A closest point proposal for MCMC-based Probabilistic Surface Registration <a href="https://www.youtube.com/watch?v=ge4LYNAVB2c">Video (ECCV 2020)</a>       

<!-- 4. Debugging Metropolis-Hastings based fitting algorithms ([Article](mh-debugging)) -->
<!-- 5. Posterior predictive checks ([Tutorial](tobedone))
-->

#### Questions and remarks


Please use our [Gitter Chat](https://gitter.im/unibas-gravis/pmm-2021?utm_source=share-link&utm_medium=link&utm_campaign=share-link) to ask questions, discuss with your peers or to give us feedback. 

[![Gitter](https://badges.gitter.im/unibas-gravis/pmm-2021.svg)](https://gitter.im/unibas-gravis/pmm-2021?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
