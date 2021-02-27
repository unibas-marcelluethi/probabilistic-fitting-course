---
id: Week2
title: MCMC - Basic ideas and methods
---

# Markov Chain Monte Carlo Methods - Basic ideas and methods

The content for week 2 will be available shortly!

<!--
# Markov Chain Monte Carlo Methods - Basic ideas and methods

In the last week, we have discussed how we can formulate shape model fitting 
as a Bayesian inference problem. The modelling was done by specifying the parameters of our model $$\theta$$, the prior distribution  over the parameters $$p(\theta)$$ as well as the likelihood function 
$$p(D | \theta)$$. Using Bayes rule, we could then derive the posterior distribution
$$
p(\theta | D) = \frac{p(\theta) p(D | \theta)}{\int_\theta p(D | \theta) p(\theta) \, d\theta}
$$

Note that this formulation is purely conceptual and does not tell us how to compute the posterior distribution. Indeed this is a very difficult problem. The likelihood function might be a highly nonlinear 
function of the data, which requires the synthesis of the data using our model to evaluate it. Recalling that this synthesis step can include in the extreme case an entire computer graphics pipeline, we see that finding an analytic solution to the problem is hopeless. 

However, it turns out that it is possible to obtain samples from the posterior, which we can use as an  
 approximation of the posterior distribution. The class of methods to produce such samples are called
 Markov Chain Monte Carlo (MCMC) methods. In this week we will introduce an elegant and simple MCMC method called the *Metropolis-Hastings* algorithm. 

#### Steps
1. The Metropolis-Hastings algorithm ([Video](tobedone), [Slides](tobedone))
2. Implementing and experimenting with the Metropolis Hastings algorithm (Jupyter-Notebook: [View](https://nbviewer.jupyter.org/github/unibas-marcelluethi/probabilistic-shape-modelling-notebooks/blob/master/notebooks/Metropolis.ipynb),  [Run in browser](https://mybinder.org/v2/gh/unibas-marcelluethi/probabilistic-shape-modelling-notebooks/master?filepath=notebooks/Metropolis.ipynb))
3. Properties and limitations of the Metropolis-hastings algorithm  ([Video](tobedone), [Slides](tobedone))
4. Using the Metropolis-Hastings in Scalismo ([Tutorial](tobedone))
5. Posterior predictive checks ([Tutorial](tobedone))
-->