# ICP as an analysis-by-synthesis method    

A very simple example of analysis by synthesis is given by the non-rigid ICP algorithm that we introduced previously. 

Recall that in this algorithm, we alternate two steps

1. We find the closest points from a given surface generated by our model, to the target surface 
2. We fit the model by performing a Gaussian process regression, where we use the posterior mean (the most likely solution ) as the new reconstruction

We will now break this down into the steps of the analysis-by-synthesis setting. 

### Model of the world
We assume that we have a Statistical shape model, with shape parameters $$\theta \in \mathbb{R}^n$$. The parameter vector $$\theta$$ thus represents our state of the world. 
(TODO write more)

### Synthesis function
The synthesis function $$\phi$$
$$ 
\phi[\theta] = \mu(x) + \sum_{i=1}^n \theta_i \sqrt{\lambda_i} \varphi(x)
$$
generates for any given parameter vector $\theta$ a deformation field $$\mathbb{R}^d \to \mathbb{R}^d$$. Applying this to the reference mesh $$\Gamma_R$$, we can obtain a new 
surface $$\Gamma_\theta$$ generated by the model:
$$
\Gamma_\theta = \{ x + \phi[\theta](x) | x \in \Gamma_R}
$$

### Prior and Likelihood function
The likelihood function is the likelihood function that we discussed in the previous article about Gaussian process regression. We assume that we observe the 
target points (or true deformation TODO elaborate!) only up to Gaussian noise. The comparison is done using the closest points. 
Assuming further, that the shape parameters $$\theta_i$$ follow a standard normal distribution $$\theta_i \sim N(0, 1)$$
(which is the usual assumption in KL expansion) we are in the Gaussian process regression setting.iteration).

### Updating the model parameters
The model parameters are then update using Gaussian process regression. The new parameter vector $\theta_i$ is simply the vector of shape coefficients, belonging to the best explanation from the 
GP regression (TODO reformulate).
Note that this update step is informed by the difference between the target and our current synthesized surface, as for the correspondence we take the closest point. If incorrect closest points are
found, the difference between the reconstruction and the data is likely to be large. If our synthesis was accurate, the closest points will be very close to those that were synthesized, and we will 
no longer see any changes in the next iteration. 

