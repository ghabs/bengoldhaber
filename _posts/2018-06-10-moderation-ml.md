---
layout: post
title: Moderation ML
status: "draft feedback"
---

## Executive Summary

Active Learning ML moderation system for online forums. The moderation system flags content for human review when below a threshold of confidence, the moderator classifies it, and over time less data is needed and the classifier acts autonomously. This fills a pain point for online communities. The key hypothesis for why this would work while current systems don’t are that combo-supervised/unsupervised ml techniques have improved to the point where they can be used at a small scale in specific communities, which will be significantly more effective at promoting good content/policing bad.
*This idea was initially proposed by Paul Christiano*


## Overview

Moderation for online communities is terrible. It’s a hard job, it doesn’t scale with community growth, and it requires imparting a “culture” on people, which is still an art and not a science. This is an important problem to solve, as good communities can create outputs greater than the sum of their individual members. Fostering the right types of online communities can engender valuable intellectual output.

The task of moderation is ultimately one of rules and predictions. The rules are the culture of the community. All communities have a combination of explicit and implicit rules. It’s the difference between “No doxxing” and “that comment was in poor taste, you’re shadow banned for a month”. It would be near impossible for a moderator to sit down and write the true rules of a forum out - it would probably require trained anthropologists months of observation to even get close.

![Many hidden norms, patterns, behaviors, and values that require being embedded in the community to understand.](https://d2mxuefqeaa7sj.cloudfront.net/s_735B03689DE7FD2BB4DC7A1E0795A871EA50675AD6A29D838082C7943D9F4A5B_1527725491984_Screen+Shot+2018-05-30+at+5.11.11+PM.png)


Instead of trying to write out explicit rules, an exercise that is doomed to fail, we can select individual representatives. On the internet, moderators are selected who have broad powers to enforce norms. Real world analogue: Judges/juries can determine whether something is in violation of explicit law - “no murdering and you murdered that guy” - or implicit law - “your statements, while not technically lies, are deceptive enough to count as fraud”. This is the distinction between statutory law and common law.

This culture is embedded in the head of an individual(s), who can determine if something matches that culture. In essence the person is the avatar of the culture. That person(s) can be a good moderator of an online forum - caveat other personality traits and interests - as they can appropriately judge what matches the culture.

Every time a new comment is created and flagged a moderator is measuring whether it fits certain criteria. These might be hard rules - “no swearing on Club Penguin” - or they might be soft rules - “this is a type of comment that would derail the discussion”.  The act of prediction is being able to take a new input and label it with some degree of certainty as fitting the rules above. This can be a multi-dimensional judgement, or a single dimension (good or bad). When human moderators are doing this, they are ‘tasting’ the comment and accepting or rejecting it based on their internal models.

## Goal

We want moderation systems for online forums that match the culture, accurately classify content, and can scale with network growth.

There are two tasks, selection of the ‘cultural avatars’ to serve as the mod, and the model and training of the classifiers. Training of the classifier is more straightforward than the selection process, which is speculative.

## Moderator selection

The selection task is a problem akin to the problem of governance, democracy, etc. By what method do we select our rulers? There’s something poetic about selecting a ruler because they most embody the culture. I'm not sure if there's an existing term for it, but I like *cultural avatars*.
<aside> *It reminds me of Warhammer 40k.* </aside>

I don’t think there’s a one size fits all solution. Some communities are built around specific individuals, and it’s a natural choice. Others, especially ones that originated online and feature pseudo-anonymity, likely don’t have a single cultural avatar. Also, because culture is not “one size fits all”, there might be different people who represent different parts of the culture well - “Alice really parses the text memes while Bob can moderate heated discussions well”.

I posit that EigenTrust, a system to decompose the relationship of “links” between people and see clusters of who trusts who, could result in metrics of who should/could be a mod. The premise is that things like upvotes, or frequent positive interactions, signal allegiance to the cultural norms exhibited by that user, and that this should show clusters within the community of who represents the community. The person with the most links is a clear candidate for nomination as a moderator, and/or the clusters of community can be used to weight the classification algorithm. For instance the feedback from the moderator from the 70% cluster would be weighted 70%.

![Eigentrust as PageRank of People](https://www.shoutmeloud.com/wp-content/uploads/2012/12/pagerank-visualization.jpg)


## Classifier

Following Paul’s idea, create an Active Learning Model that will start out fully supervised. All of the content will labeled by the moderator on one dimension. Once a threshold, customizable at the forum level, is reached for predictive ability, the moderator bot will sit as middleware between the moderator and the forum, classifying new data and raising alerts about uncertain content. Given the amount of content, unlabeled content would also be used in an unsupervised setting to firm up the potential clusters of classifications.

### Requirements

- Handle large amounts of text data. As a simple estimate there could be 500 pieces of content a day, with 60 words each, but should potentially be able to scale much higher.
- Labeling content is an expensive activity for a moderator, so the aim is to label a few and prompt the moderator when the content is in an unknown region. Setting the threshold for unknown can be forum dependent, per “risk tolerance” of false negatives.
- Multi-label classification - Yes, No, Uncertain.
- Labeled content by a moderator is the strongest signal, while there are many weak signals - length of text, poster history, upvotes - that can be included in the classification. 
- When its in the uncertain state, ask for guidance from the moderator. The guidance should be a label, with potentially more information provided as to why it’s that way.
- TODO: What type of structured information can be provided by a person to explain why a decision was reached in that way.

### Proposed Algorithms

There are a huge number of potential classification algorithms that could be applied to this problem. My interpretation is this is similar to a spam classification problem. Naive Bayes is an effective algorithm for spam, and adding a threshold for labeling Uncertain to ask for manual classification by the user is straightforward. 

Example: Each moderator (weighted by their trust from the community) classifies a piece of content as productive/non-productive. The model is trained by then decomposing the signals - words, user rep, upvotes, etc - and labeled. This provides priors for every new piece of content to come in. 

After getting the data, try it on many different ones, but with an emphasis on simplicity of updates. There’s no point in using a highly tuned, Kaggle esque ML technique that can’t be updated by a moderator as more data comes in. I’m bullish on bayesian techniques for discriminating various types of content.


### Signals

Strong:

- Moderator scored content
- Trusted user scored content

Weak:

- New User flagging/scoring
- Sentiment analysis
- Length of content

### Policies

The classifier will pick up on unintentional features - for instance if it’s trying to classify abusive content, I’d wager the shorter the text the more likely to be abusive. Bucketing content together based on known heuristics -  “eval based on similar length text” - will be useful, modulo overfitting concerns.

Auditing: Use some type of weighted random feature to bring up content. For instance 70% of uncertain content should be reviewed, while 10% of high likelihood content reviewed and 20% of medium.

### User Interface

Arguably the UI could be the main “innovation”. Making it simple and straightforward to provide good labeled data to the ML pipeline.

- Random audits should still be conducted to prevent value drift and ensure alignment with the moderator values.
Challenges
- How do you deal with nested comments? It seems to me often discussion threads go wrong slowly, and so you can’t simply take the input as an individual comment, but rather as many dependent on each other. I know there’s work in deep learning around this, but I’m unaware of specifics and also I imagine this would be O(n!) training time. So figuring out some way to chain items together would be good.
- How accurate do you need to be to the point you can really trust this system?
- How adversarial of an environment are we talking about?
- Length of text will be an issue with the classifier.
    - Potentially breaking the comments down into sub-sections and then analyzing separate parts of the content.
- Sarcasm, when a word can mean multiple things and can’t simply be labeled good/bad in a bag of words model.

https://arxiv.org/pdf/1602.02373.pdf
https://medium.com/syncedreview/adversarial-training-methods-for-semi-supervised-text-classification-fa9173425a63

### AI Alignment

This is linked with Paul Christiano’s idea of corrigibility. (No surprise since he originated this idea as well).

### Startup 

There’s a viable business here, offering ML powered tools to forums. Moderation is time consuming and costly for any community based platform at scale. Existing services are top-down; they train off of broad data sets and aren’t “localized” to particular moderators and communities. This is a huge pain point for large forums - Reddit, Discourse’s - and to local small ones - EA forums, LessWrong.

Use a Slack model, where we give away the tool for free until you hit a certain size, at which point we charge. Each forum has a separate instance running the model. 

The main challenge here is distribution; it’s a three sided market where Admin’s make the decisions about purchasing but don’t feel the pain of moderation, while Moderators are a type of middle management that are mostly paid through “status” on the forum, and Users can influence Admins/Mods through complaints and exit. The key challenge is getting moderator buy-in around a good service, and converting that into purchasing from admins.

I think an end-run around the the forum admins is key. You want people to be able to use the service without needing a full integration. We can think of it as tiers:


- Full integration
- Chrome Extension
- Separate Webpage

[Insert Sketch]

The only core requirement is that there is some type of structured data feed to get the relevant content.

Prior Art
- Paul Christiano wrote a blog post a few years ago about a proposal to do just this. In short, a semi-supervised ML model and the tools to allow for a variety of moderator actions.
- In person discussion with Jordan Allen about an idea he had and is pursuing to do this for the Circling community.
- A bunch of posts and comments on LessWrong about moderation
- Scott Aaronson essay on EigenMorality.
- League of Legends uses a combination tribunal system and automated moderation system.
- Google’s Perspective API does a generalized version of this for identifying toxic online comments.
- Kaggle competitions on identifying bad comments.
- https://distill.pub/2017/aia/
- http://www.paulgraham.com/spam.html
![From Google Paper](https://distill.pub/2017/aia/images/cycle.svg)



Extensions
- Sharing models between different communities. Would the knitting forum classifier be portable to 4chan? Can you plug and play moderation culture?
- Detect and codify implicit rules and make them explicit.

### Risks

#### Norm Violations 

Norm violations are a way that culture evolves. If there was 100% enforcement of every norm in a community, people wouldn’t be able to move the overton window. Automated systems of enforcement increase the centralization of community power, and this might be unhealthy for community evolution. Put another way, this seems like a way to help prevent value drift, by providing more tools for keeping a community closely tied to the value of the avatars. But there are times where value drift is actually value progress.

#### Adversarial Interactions

It would be the height of naïveté to think that all forum users are going to statically engage with the moderator, and won’t try to evolve new signals, new codes, new behavior to circumvent the improved moderator. This is model-able as a GAN, with the adversarial network being some segment of users who are trolls. 


#### Tyranny

Empowering individuals also empowers tyrants. In the Voice/Exit model, people will leave in a tyranny model, but extended further to communities where people can’t exit easily you can get a great firewall of China situation.




