---
id: Week3
title: Shape model fitting using MCMC
---
# Shape model fitting using MCMC

In this week we will learn how to formulate Shape model fitting problems as a Bayesian model 
and will see how we can implement this in Scalismo. 

We start with the simplest case, where the pose is fixed and corresponding landmarks are used. 
By including additional parameters, such as translation and rotation parameters and at the
same time relaxing assumptions regarding correspondence, we make the model useful for a 
wide variety of shape analysis tasks. Finally, we also show how we can formulate a likelihood
function based on ideas from Active Shape Model fitting. We thus arrive at a practical method
to fit a model to an image. 



#### Steps
1. Case study: Shape model fitting ([Video](https://tube.switch.ch/videos/lSbzhsly0W), [Slides](/slides/week3/shape-model-fitting.pdf))
2. Implementing shape model fitting in Scalismo using the Metropolis-Hastings algorithm ([Tutorial](https://scalismo.org/docs/tutorials/tutorial15))
3. A likelihood based on Active Shape Models ([Article](/week3/asm))
<!-- 4. Debugging Metropolis-Hastings based fitting algorithms ([Article](mh-debugging)) -->
<!-- 5. Posterior predictive checks ([Tutorial](tobedone))
-->

#### Questions and remarks


Please use our [Gitter Chat](https://gitter.im/unibas-gravis/pmm-2021?utm_source=share-link&utm_medium=link&utm_campaign=share-link) to ask questions, discuss with your peers or to give us feedback. 

[![Gitter](https://badges.gitter.im/unibas-gravis/pmm-2021.svg)](https://gitter.im/unibas-gravis/pmm-2021?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
