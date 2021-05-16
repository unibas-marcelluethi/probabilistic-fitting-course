---
id: icp-proposal
title: ICP Proposal
---
# ICP Proposal

In a previous lecture we have discussed the ICP algorithm. 
Compared to a sampling based approach using random walk proposals, the ICP algorithm is much more efficient. It does not blindly try out a random direction, but finds the closest points and updated
the parameters such that these points are optimally matched for the given model. In this article we 
describe, how we can design a proposal using the ICP algorithm, which we can then use as part of 
a sampling chain. 

### The main idea

In principle, the idea is simple: For a given parameter $\theta$, our *ICP proposal* $Q_{ICP}(\theta' | \theta)$ synthesizes the corresponding shape $\Gamma[\theta]$, performs one or more ICP steps and uses the parameters obtained from the solution of this procedure as the proposed new state $\theta'$. This proposed sample is then accepted using 
the usual acceptance step of the MH algorithm, I.e. 
$$
\min\{1, \frac{P(\theta)Q(\theta' | \theta)}{Q(\theta | \theta')}\}.
$$

Unfortunately, this step is deterministic and the reverse probability $Q(\theta | \theta')$ is 0 unless $\theta = \theta'$. This means we cannot compute the Metropolis acceptance step. 
Fortunately, there is an easy solution: Recall that our implementation of the ICP algorithm internally uses Gaussian process regression, which gives us not only access to the surface matching the observations best, but the full posterior distribution. To obtain a proposal that can be normalized, we make 
use of this distribution: We use a random sample from the distribution as a new proposal $\theta'$. This 
makes the procedure probabilistic, and we can easily compute the transition probabilities $Q(\theta | \theta')$ for any two states $\theta, \theta'$ using the analytical formula of the posterior Gaussian process. The mathematical details of this procedure are detailed in Madsen et al.<sup><a href="#madsen-eccv">1</a></sup>.

### Advantages of using ICP as a proposal 
Having the ICP algorithm wrapped up as a proposal greatly enhances our fitting toolbox. One way to use the proposal is to use it together with a proposal that penalizes the distance to the closest point on a target surface. This results in a probabilistic version of the ICP algorithm. Unfortunately, this method inherits the main downsides of the standard ICP algorithm, namely that it can quickly get stuck in a local mode. To overcome this problem, we can use a mixture proposal to combine the ICP proposal and Random Walk proposals. The random walk proposals are used to explore the space more broadly, while the ICP proposal can make large, informed steps towards in the right direction. As shown by Madsen et al.<sup><a href="#madsen-eccv">1</a></sup>, this strategy greatly improves performance compared to the standard ICP algorithm. 


### Active shape model proposal
 
When we want to fit an image instead of a surface, we can use a similar trick using Active Shape Models. Recall that Active Shape Models replace the step of fining the closest points by an explicit search procedure, which find the best matching profile points. Once these points are identified we can use the same trick as discussed above and thus we obtain an
efficient proposal for Active Shape Model fitting.  

### References

* <a name="madsen-eccv">1 </a> Madsen, Dennis, et al. "A closest point proposal for MCMC-based probabilistic surface registration." European Conference on Computer Vision. Springer, Cham, 2020.

* Implementation of the ICP Proposal, using Scalismo: [https://github.com/unibas-gravis/icp-proposal](https://github.com/unibas-gravis/icp-proposal)
