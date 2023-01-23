---
id: Week1
title: Analysis by synthesis and Bayesian inference
---

# Introduction - Analysis by Synthesis and Bayesian inference


From the [previous online course](https://gravis.dmi.unibas.ch/PMM/lectures/ssm_courseRun19/) we know that a shape model is essentially a probability distribution over shapes. Sampling from this distribution generates representative shapes from the modelled shape family. The possibility to generate (or synthesize) shapes from the model plays an important role in our fitting approach.  We follow a paradigm that is called *analysis by synthesis*.  The main idea behind analysis by synthesis can be paraphrased as follows:

> If we manage to synthesize given data using our model, we are likely to have a good understanding of the data in terms of our model. 

In a nutshell, analysis by synthesis works by generating samples from the model, which are then compared to the data that we want to explain. Samples that explain the data well are possible explanations of the data in terms of our model. As we know the model-parameters for those samples, we have an explanation  
of the data in terms of our model. 

In this week we will discuss the architecture of an analysis-by-synthesis application, and formalize the 
approach using Bayesian inference.

#### Steps
1. Analysis-by-synthesis ([Video](https://unibas.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=2c1b7080-3ab1-40d3-94c3-af9300b37b6d), [Slides](/slides/week1/analysis-by-synthesis.pdf))
2. Bayesian probabiliy ([Video](https://unibas.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=0739aa82-efda-4e47-a09d-af9300b36d9c), [Slides](/slides/week1/bayesian-probability.pdf))
3. Shape model fitting as Bayesian linear regression ([Article](/week1/linearregression))

#### Questions and remarks


Please use our [Gitter Chat](https://gitter.im/unibas-gravis/pmm-2021?utm_source=share-link&utm_medium=link&utm_campaign=share-link) to ask questions, discuss with your peers or to give us feedback. 

[![Gitter](https://badges.gitter.im/unibas-gravis/pmm-2021.svg)](https://gitter.im/unibas-gravis/pmm-2021?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)



