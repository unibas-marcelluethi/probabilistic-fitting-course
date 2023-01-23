---
id: Week2
title: Basics of Markov Chain Monte Carlo
---

# Basics of Markov Chain Monte Carlo

In the first week of the course we discussed the analysis-by-synthesis paradigm and how we can formulate shape model fitting as a Bayesian inference problem. Conceptually, once the problem is formulated in this way, all the information we can extract from a shape or image using our model, is captured in the posterior distribution. In practice, however, extracting this information can be an extremely challenging computational problem. 

In this week we will discuss Markov Chain Monte Carlo methods, and in particular the Metropolis-Hastings algorithm. The Metropolis-Hastings algorithm is a method which makes it possible to draw samples from an arbitrary distribution. We will use it to draw samples from our posterior distribution and thus to approximate aspects of this poster distribution using the samples. 

#### Steps
1. The Metropolis-Hastings algorithm ([Video](https://unibas.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=91033b0a-c672-4bdf-bba2-af9300b36d8b), [Slides](/slides/week2/metropolis-hastings.pdf))
2. Implementing and experimenting with the Metropolis Hastings algorithm (Jupyter-Notebook: [View](https://nbviewer.jupyter.org/github/unibas-marcelluethi/probabilistic-shape-modelling-notebooks/blob/master/notebooks/Metropolis.ipynb),  [Run in browser](https://mybinder.org/v2/gh/unibas-marcelluethi/probabilistic-shape-modelling-notebooks/master?filepath=notebooks/Metropolis.ipynb))
3. Properties and limitations of the Metropolis-hastings algorithm  ([Video](https://unibas.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=c57db568-0d2e-4534-acd1-af9300b36d8e), [Slides](/slides/week2/properties-mh.pdf))
4. Using the Metropolis-Hastings in Scalismo ([Tutorial](https://scalismo.org/docs/tutorials/tutorial14))
<!-- 5. Posterior predictive checks ([Tutorial](tobedone))
-->

#### Questions and remarks


Please use our [Gitter Chat](https://gitter.im/unibas-gravis/pmm-2021?utm_source=share-link&utm_medium=link&utm_campaign=share-link) to ask questions, discuss with your peers or to give us feedback. 

[![Gitter](https://badges.gitter.im/unibas-gravis/pmm-2021.svg)](https://gitter.im/unibas-gravis/pmm-2021?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)


