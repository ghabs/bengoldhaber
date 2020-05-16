---
layout: post
title: Why aren't there more hacks?
status: draft
tags: open-questions
---


Web security is terrible. It's extremely hard to secure computers from  motivated and competent adversaries. 

So why aren't there more hacks? I look out in the world and there's tons of people and websites that seem trivial to hack, and in an efficient market of hackers you'd expect the hackers to be exploiting these insecurities.

This is both on the organizational level -  many companies are incompetent at security - and the individual level - the most [commonly used password is still 123456](https://www.cnn.com/2019/04/22/uk/most-common-passwords-scli-gbr-intl/index.html). 

This has bothered me for some time. I briefly worked at a high-risk-for-hacking org which had relatively bad info-sec practices, yet went unhacked. It's confusing in the way seeing $100 bills on the ground of grand central would be confusing.

Some plausible explanations:


## Supply side

- Hacking is actually much harder than I think it is,and there are not many people who are good at it.
    - My model of this is that a phishing attack is simple, and that getting someone to click on a link/open a file with a malicious executable is simple, but maybe malicious executables are actually quite hard to build/buy.
    - The scalable nature of hacking, where a person in Lithuania could plausibly hack into any internet connected computer in the world, implies that the "labor supply" of hacking is global.
- There is not a large supply of blackhat hackers doing crimes because of normative/moral reasons.
    - Given the scalable nature of hacking I think this is unlikely, as you'd expect the market to quickly select for the least ethical.
- The opportunity cost for competent hackers is extremely high. You could get a sweet six figure job doing legal security work.
    - Anecdotally I tried sourcing and hiring top security professionals for a CISO  position, and it was *extremely hard*. Top talent was going for $300-500k.

## Security Stance

- It's gotten much easier to catch hackers, such that even if security as a whole is weak, prosecution and punishment is trivial.
    - If this were true I'd expect to see a large increase in the number of prosecutions. Ironically the BJS.gov website was unavailable because of an invalid SSL certificate on their cybercrime stats page, so I wasn't able to check, but my guess is that this hasn't gone up proportionately. [info-request]
- Security is actually strong and/or strong in the areas where it matters (e.g. banks), and so for anything you'd want to hack it's actually quite hard to do so.
- Security through obscurity actually does work - there are so many more internet connected devices, people, and orgs, that it's hard to detect the vulnerable and valuable ones.

## Demand side

- There's little to no demand to hack most individuals/organizations, because it's too hard to turn specific hacks into money. Banks and credit card companies have too many ways to reverse transactions.
    - Seems plausible, though maybe that speaks to the lack of creativity in turning digital goods into cash among the criminal element?
- Other motivations for hacking (personal,non-monetary) aren't compelling for competent hackers - at least at scale.

## Other

- There actually are a huge number of hacks happening/ongoing, but I'm not aware of it because they're never reported. (e.g. graveyard evidence problem)
    - A secondary indicator of hacks would be cyber-insurance prices, whether or not they've gone up over time [info-request]

