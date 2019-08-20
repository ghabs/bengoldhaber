---
layout: post
title: Winograd Schema Challenge
---

The Winograd Schema Challenge (WSC) is one of the hardest benchmarks for language models to beat. It's an unusual structure that tests "common sense" reasoning.

Example ([from Wikipedia](https://en.wikipedia.org/wiki/Winograd_Schema_Challenge)):

> The city councilmen refused the demonstrators a permit because they [feared/advocated] violence.

The choices of "feared" and "advocated" turn the schema into its two instances:

>The city councilmen refused the demonstrators a permit because they feared violence.

>The city councilmen refused the demonstrators a permit because they advocated violence.

The model is scord based on it's selection of the correct choice.

Over the past two months there's been a sudden and dramatic jump in performance on the [GLUE Benchmark WSC challenge](https://gluebenchmark.com/leaderboard). 

<iframe width="778" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQkcaWEUk0Q4C7lBla_MoumuKQUJyhWxgPQG1MKqoAUuscyC_H78CXm2TXT__qv89kh4D-J3g_LeNY8/pubchart?oid=367865531&amp;format=interactive"></iframe>

Looking at the GLUE benchmark, all of the submitted models received an accuracy score of 65.1%, until Jun 6th when Microsoft Research's entry jumped to a stunning 89% accuracy.

It's unclear to me what's caused the sudden advance - an earlier submission of their Multi-Task Deep Neural Network was also stuck at 65.1%, but some finetuning or change to the dataset Microsoft trained it on caused a massive 24% improvement.

Similarly the current leader in the GLUE competition, [Facebook's RoBERTa](https://github.com/pytorch/fairseq/blob/master/examples/roberta/README.wsc.md), doesn't seem significantly different from previous BERT architectures. Their entry on the WSC notes pretraining the model on example sentences, but no secret sauce.

I'm torn between updating that the WSC was actually easier than expected because of statistical artifacts in the WSC sentences, and wondering how much of the commonsense reasoning humans do is the same thing.
