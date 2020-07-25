---
layout: post
title: Solving Math Problems by Relay
---


[*Posted on LessWrong*](https://www.lesswrong.com/posts/DWgWbXRfXLGHPgZJM/solving-math-problems-by-relay)

From September to November 2018 we ran an experiment where people did programming in relay. Each player spent ten minutes on a programming problem before passing on their code to a new player who had not seen any of the previous work. We found that people were able to solve some problems using the relay approach, but that the approach was less efficient than having a single person work on their own. This project explored hypotheses around [Factored Cognition,](https://ought.org/research/factored-cognition/) testing whether people can solve problems by decomposing them into self-contained sub-problems.

Since this was an "explorative" experiment it wasn't a priority to write up, though we are excited to have gotten around to it now and hope this both informs and inspires other experiments.

# Introduction

Factored cognition research investigates ways of accomplishing complex tasks by decomposing them into smaller sub-tasks. Task decomposition is not a new idea: it’s widely recognized as fundamental to modern economies. People have worked out ways to decompose complex tasks (e.g. create an electric car) into smaller sub-tasks (create an engine and battery, design steering controls, test the car for safety) which in turn are broken down into yet smaller tasks, and so on. The smallest sub-tasks are carried out by individual humans, who may have a limited understanding of how their work relates to the original task.

The focus is on the decomposition of cognitive tasks, where the goal is to provide information or to answer a question. Cognitive tasks include solving a mathematics problem, analyzing a dataset, or summarizing a story.

*Factored Cognition research explores whether complex cognitive tasks can be solved through recursive decomposition into self-contained, interpretable sub-tasks that can be solved more easily than the originally task.[[1\]](https://deploy-preview-11--ought.netlify.com/blog/2019-03-05-relay-game-update#fn1)*

Sub-tasks are "self-contained" if they are solvable without knowledge about the broader context of the task. If the task is a hard physics problem, then self-contained sub-tasks would be solvable for someone who hasn’t seen the physics problem (and need not know the task is about physics). This differs from most real-world examples of[ collaborative problem solving](https://en.wikipedia.org/wiki/Polymath_Project), where everyone in the team knows what task is being solved.

Testing the Factored Cognition Hypothesis involves the following steps:

- Finding cognitive tasks that seem costly or difficult to solve directly (e.g. because normally one person would spend days or weeks on the same problem rather than 10 minutes).
- Generating a high-level strategy that would plausibly decompose the task.
- Testing whether the strategy from (2) works by having a group of people solve (1) under controlled conditions.

For some ideas on high-level strategies for a range of problems, see Ought's Factored Cognition[ slides](https://ought.org/presentations/factored-cognition-2018-05) and the paper[ Supervising strong learners by amplifying weak experts](https://arxiv.org/abs/1810.08575v1)(Appendix B).

In the Relay Game participants worked on a task sequentially, with each person having ten minutes to help solve the problem before handing off to the next person (see Figure 1). This is similar to real-world situations where one person quits a project and someone else takes over. However, the big difference comes from the ten-minute time limit. If the task is complex, it might take ten minutes just to read and understand the task description. This means that most players in the relay won't have time to both understand the task and make a useful contribution. Instead players must solve sub-tasks that previous people have constructed.





![img](https://lh4.googleusercontent.com/V3LmjPsYdz7E07Pz7dzjsxeQGS0u8xAKKRH6J0E8KgYEhkXhH-tD8A0GFJdVD4s2XKzay9hKpsa1o47Ug-u-yhzLVj3eLZLGhhbn8otYvqZONwTyOyFXmrAHaUeJ1lU097tDAkZ2)



*Figure 1: In the Relay Approach (left), each person works on a programming problem for a fixed number of minutes before passing over their notes and code to the next person. Eventually someone in the chain completes the problem.* *This contrasts with the usual approach (right), where a single person works for an extended period.* *Note: Our experiments had a time limit of 10 minutes per person (vs. 1 minute in the illustration)*

We tested the Relay Game on programming problems from[ Project Euler](http://projecteuler.net/). Here is a simple example problem:

*How many different ways can one hundred be written as a sum of at least two positive integers?*

Solving these problems requires both mathematical insight and a working implementation in code. The problems would take 20-90 minutes for one of our players working alone and we expected the relay approach to be substantially slower.



## Experiment Design

Players worked on a shared Google doc (for notes) and code editor (see Figure 2). The first player receives only the Project Euler problem and begins making notes in the doc and writing code. After ten minutes, the second player takes over the doc and code editor. The Relay ends when a player computes the correct answer to the problem, which can be automatically verified at Project Euler.



![img](https://lh4.googleusercontent.com/xJryGuaOVcuvRFGZIHiMIpWDVz41lCTVUJcfRl1zL3mNrFSHopO6dxl2QJ0LKmomd-trSLqExBpKT8QXgXqKs83UGpeDTfOCSwbLVT1-jBFzaTmgEOoXXCGPdqVT7VkGin12hb98)



*Figure 2*

We had 103 programmers volunteer to play Relay. They started 40 questions in total but only 25 had relay chains of more than 5 people. The total amount of work was 48 hours and only four questions were successfully solved. See Table 1 for a breakdown of a subset of the 40 questions. (Note: Most of the 103 players only worked on a few problems. Since much of the work was done by a smaller number of players, they were spread thinly over the 40 problems -- as each player spends just 10 minutes on a problem.)

*Table of Relay Game Problems (10 of 40)*



*![img](https://lh6.googleusercontent.com/B3N5aGjs80F9jHWuLpT2E3MHc_is8AOLFjSRdmdrPTeTfJWSPyXgkyzMER5FrueWtHPExh64rxABhXSlhOgPXPsM61XAnAmMSAB2d_pzGhZLEcwLRCQQKSzsvF5eLZ6RAwii5ume)*



*Table 1: The total time spent on each problem for Relay. Note that most problems were not solved by Relay and so would take longer to actually solve. (So solo vs. Relay cannot be directly compared).*

Can we conclude from Table 1 that Relay is much less efficient than the usual way of working on problems? Not really. It could be that Relay players would get better with experience by developing strategies for decomposing problems and coordinating work. So the main lesson from this experiment is that Relay with inexperienced players is probably less efficient at Project Euler problems. (We say “probably” because we did not conduct a rigorous comparison of Relay vs the usual way of solving problems).



### Clickthrough Examples

We are interested in general failure modes for Factored Cognition with humans and in strategies for avoiding them. Our Relay experiment is a first step in this direction. We exhibit concrete examples from our Relay experiment that are suggestive of pitfalls and good practices for Factored Cognition.

Here are three “click-throughs”, which show how ideas and code evolved for particular Project Euler problems.

#### **Prize Strings**

In these three attempts on [Prize Strings](https://projecteuler.net/problem=191) the players quickly build on players previous work and get the correct answer. *[Clickthrough](https://docs.google.com/presentation/d/e/2PACX-1vRJNsTxNIb2QR7MCOvwSEL5TREEUtfdA6mHYFpcqaNk9-zJaOITT9xocHBvdY39svC02bIMr4Fgo1Ir/pub?start=false&loop=false&delayms=60000)*



![img](https://lh3.googleusercontent.com/YcrZKla8OI4jOjfYtYK6KonWN3amA3qD1LFu4TyLI_tk5af5PYkGQ8Ulw--JOHwDrBSbkLjSbqHTvHIH_X_S7pVhdXBOj4y4P2NKg5RTQ2peO5ZimhSoEya2y5AG4vuWz4txu3Vu)



#### **Empty Chairs**

[Empty Chairs](https://projecteuler.net/problem=469) was not solved but significant progress was made (with seven people contributing). [The clickthrough demonstrates](https://docs.google.com/presentation/d/e/2PACX-1vRJQ9Wc7jwVJ9fcP9zNskRxmntFoClMgNVFZuF7tiTev1ndW8HlkmsgtUmsYmvUrlhZLnKNvNlKyipS/pub?start=false&loop=false&delayms=30000) iterative improvements to a math heavy solution. *[Clickthrough](https://docs.google.com/presentation/d/e/2PACX-1vRJQ9Wc7jwVJ9fcP9zNskRxmntFoClMgNVFZuF7tiTev1ndW8HlkmsgtUmsYmvUrlhZLnKNvNlKyipS/pub?start=false&loop=false&delayms=60000)*



![img](https://lh6.googleusercontent.com/XKBUlm6Z6ay5USRqUJzV99fGBImfMjVQgA9jBZovBXD_TQ7t5Qs7Rj96y1CizXN4CRFPGxwsrPxufrcN2HxMYEMuMbMBt7DJz8a50tErptjtfzRejnWbTXaJ4O1eXbI_yepP7wla)



#### **A Scoop of Blancmange**

There were 13 unique attempts on [A Scoop of Blancmange](https://projecteuler.net/problem=226). While technically unsolved, the answer was off by only 1e-8. *Only attempts that changed the state of the problem are shown. [Clickthrough](https://docs.google.com/presentation/d/e/2PACX-1vSC8rWVVSYeRUGOfCrC2vLccaXMCJb4CfOrMtWRO104vnhD3qMkBN5xNPm6w1oCNuLPUisIqtISYnjO/pub?start=false&loop=false&delayms=60000)*



![img](https://lh6.googleusercontent.com/LF5oK2gifKHgu1mGLh5nrHnJiJCX0GJvGWv3vQVxb8Cn7Wn4CjYHnNe_ckJOc1ANIi_meGt7tEvi6v6eVPAeOg3dHa80VLe3SuspM7tBbAN3SqsTZXFqm6ejqhhxY7ddp9h4TqHB)





### Adding Meta-data to Notes

Relay players worked on the mathematical part of the Project Euler problems by writing notes in a Google Doc. A tactic that emerged organically in early rounds was to label contributions with meta-data with specific formatting (ex.using square brackets, strikethroughs). The meta-data was intended to provide a quick way for future players to decide which parts of the Google doc to read and which to ignore.



![img](https://lh4.googleusercontent.com/cUGDAzRthoP7s6v_SLfvz8l4eL0QfgsOAOpSnqk9UXMApkVmQ1tjZTJXGEuGtIuG_64Bp9UcRsSne2RnqT6Tl74sBw7wfSSZax3gJN__kBXpl0RxOl7oNY0vvD4ewVz0r5O8qjx1)



### Summarizing Next Actions

For several problems the Google doc became messy and probably made it difficult for new players to orient themselves. An example is the problem[ Prime Triples Geometric Sequence](https://projecteuler.net/problem=518), shown here mid-round, where some of the subsequent rounds were spent cleaning up these notes and formulating clear next steps.



![img](https://lh6.googleusercontent.com/F4WdT2PO5QvAZleuJ2UG35BttoBA-F5ukqPeeN9yln6b5VB9CV-G1GweDKeS0lGPPoFWlEZHoZAKk6MXM1cOlErG_v3ejAiAkmMO3-versTvzIpHDlNnWXZeLmNZfJpxR5dbW-qs)



### Costly Bugs

The problem with the longest Relay chain was[ Pandigital Step Numbers](https://projecteuler.net/problem=178) with a chain of 41 players. While substantial progress was made on the problem, there was a one-line bug in the code implementation that persisted to the last player in the chain. Given the size and complexity of the problem, it was difficult for players to locate the bug in only ten minutes.



![img](https://lh4.googleusercontent.com/saRGW-RmSkd0GtepGXkexzzvkfnReBUBOywJMxUELTzSd7-7LZEchiqlj9N613Y8TQqXJ1YrqHnZZtzIUsvkF_MwVWriFUYy076CU0EXXuUZFSX4adL9EVF3-zsQBIJS2olaA1OV)



*Figure 3. Code window for Pandigital Step Numbers problem. The highlighted line contains the bug that probably contributed to the failure of a 41-person Relay to solve the problem. The code incorrectly sets the first digit of the number in the bitmask as “False”.*

## Discussion

How does Relay relate to other research on Factored Cognition with humans? The Relay experiment had two key features:

- We used existing collaboration tools (Google docs and web-based interpreter) rather than specialized tools for Factored Cognition.
- Participants worked in *sequence*, building on the work of all previous participants.

In 2019 Ought ran experiments with[ specialized software called Mosaic](https://ought.org/blog#mosaic-a-feature-rich-app-for-tree-structured-experiments). Mosaic facilitates tree-structured decompositions of tasks. The overall task is divided into sub-tasks which can be solved independently of each other, and users only see a sub-task (i.e. node) and not the rest of the tree. If this kind of decomposition turns out to be important in Factored Cognition, then the Relay setup will be less relevant.

The Relay experiment was exploratory and we decided not to continue working on it for now. Nevertheless we would be interested to hear about related work or to collaborate on research related to Relay.

## Acknowledgements

Ben Goldhaber led this project with input from Owain Evans and the Ought team. BG created the software for Relay and oversaw experiments. BG and OE wrote the blogpost. We thank everyone who participated in Relay games, especially the teams at OpenAI and Ought. The original idea for Relay came from Buck Shlegeris.

## Appendix: Related work

[[1\]](https://deploy-preview-11--ought.netlify.com/blog/2019-03-05-relay-game-update#r1): This is a loose formulation of the hypothesis intended to get the basic idea across. For a discussion of how to make this kind of hypothesis precise, see [Paul Christiano's Universality post](https://ai-alignment.com/towards-formalizing-universality-409ab893a456)

### Crowdsourcing:

The idea of Factored Cognition is superficially similar to *crowdsourcing*. Two important differences are:

1. In crowdsourcing on Mechanical Turk, the task decomposition is usually fixed ahead of time and does not have to be done by the crowd.
2. In crowdsourcing for Wikipedia (and other collaborative projects), contributors can spend much more than ten minutes building expertise in a particular task (Wikipedians who edit a page might spend years building expertise on the topic).

For more discussion of differences between Factored Cognition and crowdsourcing and how they relate to AI alignment, see [Ought's Factored Cognition slides](https://ought.org/presentations/factored-cognition-2018-05) and [William Saunders' blogpost on the subject](https://www.lesswrong.com/posts/4JuKoFguzuMrNn6Qr/hch-is-not-just-mechanical-turk). Despite these differences, crowdsourcing is useful source of evidence and insights for Relay and Factored Cognition. See [Reinventing Discovery](https://en.wikipedia.org/wiki/Reinventing_Discovery) (Michael Nielsen) for an overview for crowdsourcing for science. Three crowdsourced projects especially relevant to Relay are:

- [The Polymath Project](https://en.wikipedia.org/wiki/Polymath_Project) was an example of leveraging internet scale collaboration to solve research problems in mathematics. Starting in 2009, Timothy Gowers posted a challenging problem to his blog and asked other mathematicians and collaborators to help push it forward to a solution. This was similar to the type of distributed problem solving we aimed for with the Relay Game, with the major difference being in the Relay game there is a ten minute time limit, so a player can’t keep working on a problem.
- [The MathWorks Competition](https://www.mathworks.com/academia/student-competitions/mathworks-math-modeling-challenge.html) is a mathematics modeling competition for high school students. When a student submits an answer to a problem, the code for that solution is immediately made publicly available. The fastest solutions are then often improved upon by other students, and resubmitted.
- [Microtask Programming](https://cs.gmu.edu/~tlatoza/papers/tse18-microtaskprog.pdf) is a project aiming to apply crowdsourcing techniques to software development. The project provides a development environment where software engineers can collaborate to complete small self-contained microtasks that are automatically generated by the system.

### Transmission of information under constraints:

There is also academic research on problem solving under constraints somewhat similar to Relay.

- [Causal understanding is not necessary for the improvement of culturally evolving technology](https://psyarxiv.com/nm5sh/) demonstrates how improvements to tool using strategies can evolve incrementally across "generations" of people, without any one individual understanding the full underlying causal model.
- [Cumulative Improvements in Iterated Problem Solving](https://psyarxiv.com/nm5sh/). Similar to the relay chain model, with solutions to puzzles passed on to later generations to see how they can build on those solutions.