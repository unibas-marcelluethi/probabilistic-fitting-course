# Gaussian process regression as Bayesian inference

*In previous weeks of this course we have studied Gaussian process regression. 
In this article we interpret it in the setting of Bayesian inference and show how 
it can be viewed*

## Gaussian process regression 

In week 5 we have already performed Bayesian inference, albeit without being explicit about it. For a given Gaussian process, we derived the joint distribution
$$
TODO add joint distribution
$$
which we then conditioned on the observed points. 

As a model, we assumed that we have independen noise on the observations. 

In the language of Bayesian inference, we had chosen the likelihood as:
$$
p(\tilde{u}(x_1), ldots, \tilde{u}(x_n) | u, x_1, \ldots, x_n) \sim N(\left( \begin{array}{c}\tilde{u(x_1) \\ \ldots \\ \tilde{u_x_n} \end{array} \right), I_{n \times n})
$$
and the prior as
$$
u \sim GP(\mu, k)
$$
From these two models, the above joint distribution follows immediately. 

More often than not, we will not specify the joint distribution explicitly, as we have done in GP regression, but simply work with the factorization in 
prior and likelihood, as these are much easier to specify. This is in particular true, when part of the models are just parameters


## Gaussian process regression in low-rank form

Consider now our low-rank form of the Gaussian process. The deformation field is parametrized as folows
$$
u(x) \sim \mu(x) + \sum_{i=1}^r \alpha_i \sqrt{\lambda_i}\phi_i(x)
$$
The probabilistic model assumes that 
$$
\alpha \sim N(\vec{0}, I_{n \times n})
$$
In GP regression, we now look for an updated form of the posterior as 
$$ 
p(\alpha | x_1, \ldots, x_n, \tilde{u}(x_1), \ldots, \tilde{u}(x_n)) = p(\alpha) p(\tilde{u}(x_1), \ldots, \tilde{u}(x_n)) / p(\tilde{u}(x_1), \ldots, \tilde{u}(x_n))
$$
Each of the probabilitiy distributions are simple to specify


## Adding pose parameters

In this form it is now easy to add additional parameters, such as pose. We simply need to specify a new prior
Note, however, that while we can easily sample from this distribution, by first sampling the prior parameters and then 
the liekliehood it is not easy to derive an explicit form as it was from standad Gaussian process regression. 
However, as we will discuss in the next week, it is still possible to obtain samples from it. 
