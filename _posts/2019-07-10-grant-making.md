*Problem*: How do you scale grantmaking and investing? The process of evaluating applications is very difficult and often relies upon a single individual with good judgement investing lots of time. This sets a floor on the amount of $$ it’s worth investing in a proposal, and it sets a peak number of proposals that most grant makers are willing to consider (num of proposals : num of staff). This is a general problem with an internet scale microgrant / patronage system.

*Meta Problem*: I’m working on the problem, as part of Parallel, of trying to understand how to use forecasting techniques to provide decision relevant signals. Augmenting grantmaking with these signals seem viable and is on my mind because:
This could be immediately helpful to a number of orgs and is a relevant issue in EA right now. 
I expect that if this proves useful then we would immediately get a surge of interest in forecasting.
It’s just a super interesting application.

## Market Augmented Grant Making

Create markets around specific proposals and their likelihood of being reviewed positively if the proposal is implemented. The general framework is such that an individual trading in those markets is providing a decision relevant signal for the funding org.

## Setup

Each proposal contains the project to be funded, and a prediction market is associated with it. The associated prediction market has a binary contract that will payout based on a resolution index. The resolution index is one part rubric and one part human, with it ultimately being “will human decide, based on the rubric, that this proposal was valuable” .

Start with a N$($10,000) fund. Define it as investing in projects in the X(‘forecasting’, ‘animal welfare’) space. Look through N(10-100) existing proposals, rate them based on whether the principals would have funded them (this gives a signal of funding desires, similar to how labeling provides a signal to Machine Learning models). Extrapolate from this a set of parameters that are useful for the market funders, and which can be turned into a legible rubric post policy implementation for review.

## Traders
Offer N(‘100’) spots to traders to forecast on the questions over a defined period of time. The traders will use play money in a market setting. Prizes will be handed out to top N(‘10 of 100’) traders, prize pool would be set initially as X(‘10%’) market size. Traders will be KYCed to avoid having traders with a clear monetary stake in selecting a certain policy. In a more liquid market this cross-test can be removed.

If a proposal market crosses a clear threshold(‘.9’,’highest trading price relative to other proposals’) over a sustained N (‘7’) days, then 1.) in all the other markets trades are reversed, 2) the proposal is selected for that market, and a grant is provided to that proposal. 

## Evaluation
 Payout to traders happens N(‘six months’) later, based on the results of a separate evaluation from the fund principal on a scale of 1-10 whether they thought it was successful/would reinvest. If the market passes the rez. threshold, then everyone who bought the contract receives 1 point, if they don’t they receive 0.

## Extensions 
Compare and contrast with prediction aggregation techniques for augmenting decision making. The same basic mechanism as trading in markets but with forecast aggregation providing the signal instead.

## Issues 

*Does the fund give away a certain amount of its money each cycle?*
This seems like a Kelly Criterion question of how to manage bankroll.

*Is this frequent enough that feedback can be given to traders about whether the options are good?*
Evaluators could answer questions/give feedback to traders, though it’s unclear how that would affect market operation.
The money is almost certainly not good enough for sustained intellectual work at the moment, but the potential for money + fun + impact might be, and offers a promise that if this worked and more people started donating money to the fund, that there’d be more opportunity for cash. Goal could be to build a hobbyist trading community that excels at grant evaluation.
