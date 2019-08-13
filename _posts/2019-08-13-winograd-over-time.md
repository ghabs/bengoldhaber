---
layout: post
title: Winograd Schema Challenge
---

The Winograd Schema challenge has been one of the staple NLP tests and one of the hardest for language models. It's an unusual structure that tests "common sense" reasoning.

Example ([from Wikipedia](https://en.wikipedia.org/wiki/Winograd_Schema_Challenge)):

> The city councilmen refused the demonstrators a permit because they [feared/advocated] violence.

The choices of "feared" and "advocated" turn the schema into its two instances:

>The city councilmen refused the demonstrators a permit because they feared violence.

>The city councilmen refused the demonstrators a permit because they advocated violence.

Recently (over the past two months) there's been a sudden and dramatic jump in performance. 
<iframe width="778" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQkcaWEUk0Q4C7lBla_MoumuKQUJyhWxgPQG1MKqoAUuscyC_H78CXm2TXT__qv89kh4D-J3g_LeNY8/pubchart?oid=367865531&amp;format=interactive"></iframe>

Looking at the GLUE benchmark, all of the submitted models received an accuracy score of 65.1%, until Jun 6th when Microsoft Research jumped to a stunning 89% accuracy.

It's unclear to me what's caused the sudden advance - the Multi-Task Deep Neural Network was previously stuck at 65.1 until their recent submission. Similarly the current leader in the GLUE competition, [Facebook's RoBERTa](https://github.com/pytorch/fairseq/blob/master/examples/roberta/README.wsc.md), doesn't seem significantly different from previous BERT architectures. Their entry on the WSC notes pretraining the model on example sentences, but no secret sauce.

I'm torn between updating that the WSC was actually easier than expected because of statistical artifacts in the WSC sentences, and wondering how much of commonsense reasoning is that same type of statistical reasoning.
