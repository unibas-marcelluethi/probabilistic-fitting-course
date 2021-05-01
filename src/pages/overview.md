---
id: overview
title: Shape model fitting as Bayesian inference
---

# Probabilistic fitting

Welcome to this course on probabilistic shape model fitting. This course
is designed to be a continuation of the course [Statistical Shape Modelling - Computing the human anatomy](https://futurelearn.com/courses/statistical-shape-modelling). If you have not 
followed this course, you might want to do this now. You can access the teaching material even outside the official course runs from [this page](https://gravis.dmi.unibas.ch/PMM/lectures/ssm_courseRun19/).

The focus of the online course on FutureLearn was on building shape models. In this part of the course we will shift our attention to model fitting, with the goal of
analyzing and explaining given data in terms of our model. We treat the model fitting problem as a problem of Bayesian inference and as a computational tool we are using Markov Chain Monte Carlo methods, in particular the Metropolis-Hastings algorithm. 

The course is structured as follows

* [Week 1: Analysis by Synthesis and Bayesian inference](week1/week1)
* [Week 2: Markov Chain Monte Carlo Methods - Basic ideas and methods](week2/week2)
* [Week 3: Markov Chain Monte Carlo Methods for shape model fitting](week3/week3)
* [Week 4: Designing effective proposals for shape model fitting](week4/week4)

#### Software

As the previous course, also this course is based on the Scalismo open source software. 
However, our code examples do not use ScalismoLab, but the most recent version of Scalismo. You 
can find information on how to use Scalismo as a library from within an IDE on the [Scalismo website](https://scalismo.org).

#### Related Literature

The probabilistic approach to shape model fitting that we discuss here has been developed as part of the PhD Thesis of Sandro Schönborn, at the University of Basel:

* [Markov Chain Monte Carlo for Integrated Face Image Analysis](https://edoc.unibas.ch/34084/1/Schoenborn-PhD.pdf)

The general approach that we advocate can be seen as a special implementation of the ideas put forward in Ulf Grenander's *Pattern Theory*. 
* [Pattern Theory: From representation to inference](https://oxford.universitypressscholarship.com/view/10.1093/oso/9780198505709.001.0001/isbn-9780198505709)

Another good introduction on pattern Theory is given in the book by D. Mumford and A. Desolneux:
* [Pattern theory: The stochastic analysis of real world signal](https://www.goodreads.com/book/show/9046935-pattern-theory)
