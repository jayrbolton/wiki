I did not actively take notes while reading this book, so don't have detailed thoughts on each section. I may re-read the book in the future and take detailed notes.

This book is largely about self-representation and self-description (forming "strange loops"), their widespread presence and impact in our existence, and the limitations and paradoxes that lie within them.

In any formal description, when you try to self-describe the system using the system itself, you hit up on certain fundamental limitations. There are four key theorems or problems that set limits on this type of self-description:

* Godel's Incompleteness Theorem -- the self-description will be incomplete
* Church's Indecidability Theorem -- the self-description cannot be charted (?)
* Turing's Halting Problem -- the self-description may not halt (?)
* Tarski's Truth Theorem -- the self-description cannot be described (?)

TODO flesh out the implications of each problem/theory on strange loops

### Misc

One of my favorite lines was GH Hardy's quote about what made Ramanujan such a good mathemetician:

> A power of generalization, a feeling for form, and a capacity for rapid modificiation of hypotheses

## Strange loops

The idea of a feedback loop is pervasive. The most complete feedback loop is a description of our cognition:

- you have a complex system that can take input from the outside world
- the system can express output back into the outside world
- the output the system expresses can change the outside world, which affects the input the system receives
- the input the system receives can change the system itself, which changes its output

You can give the above as a looped graph:

```
|--system<--|
|           |
output      input
|           |
|->outside--|
```

This is an easy description for how our minds work, but you could also codify it into software:

> The input to the program changes the code of the program

There is however a paradox in the above scheme: you always have an "infallible" topmost layer of program rules that are unchangeable. These are the rules you write that say how the program gets changed based on its input. These topmost rules are untouchable. 

Perhaps that paradox maps just fine to how our brains work: the way DNA, cells, and neurons all work is fixed among all humans. However, even the way DNA and neurons work in humans can change over time with the feedback loop of evolution:

- The environment determines its survival requirements
- The organism mutates randomly and changes based on the environment's survival requirements
- The organism changes the environment based on its changes

But here again we've simply added more "metarules" that themselves cannot change: the rules of evolution. Can these rules change? I would say yes: humans have changed them. Our own relationship with evolution is made more complicated with the introduction of highly complicated and impactful cultural evolution.

In programming, we can expand some of these "strange loops" further:

* Level 1: The program has some model that can change based on the input it receives (eg. machine learning, genetic algorithms)
* Level 2: The entire source code of the program is the same as the output, and the output is the same as the source code (Vehicles-like neural nets, or ceullular automatas)
* Level 3: The configuration of the hardware of the computer is the same as the program, and is also the output (RALA from MIT -- hardware-based cellular automata)
* Level 4: Our universe and its physics: particles have inbuilt forces that are self-apparent when they interact with other forces.

Level 3 is perhaps the "ultimate" version of strange-loop programming that could possibly be engineered by us. The input to the computer is the same as programming it. The output of the program is the same as simply examining the hardware itself.

## Consciousness

### Limitations of understanding

Does Godel's Incompleteness Theorem apply to understanding our own minds? Key quote:

"Just as we cannot see our faces with our own eyes, is it not reasonable to expect that we cannot mirror our complete mental structures in the symbols which carry them out?"
Rephrased:
"In the same way that we cannot see our own face with our eyes, we cannot describe our complete mental structure using the symbols which comprise that structure"

To run a simulation of the brain you either need to:
- not fully understand the brain, but just be able to simulate all the particles. Here you run into the problem of what data to truncate and the hardware impossiblities ([see this article](http://www.jayrbolton.com/brain-simulation/))
- be able to completely model and understand brain functions at some high level, and then run that model on a computer. Here you run into the incompleteness problem, and perhaps other problems (indecidability, halting, truth -- see first section)

Both paths have fundamental problems.

### Zen - one and many

A primary theme in zen is to "unify everything" -- all is one -- abandon categorization.

To arrive into a real mental state of "all is one", you're not actually thinking "all is one". To think "all is one" is actually to think in categories: you are saying "all is one, and it is not many". You are still thinking "one vs. many".

To actually arrive to the mental state of "all is one", you turn off this categorizing part of your brain. You simply do not think of one and many -- it does not arise. You only classify that mental state as "all is one" in retrospect, when you are later back to thinking in categories.

# Mistakes & Errors Related to AI

What does it mean when a person makes a mistake?

What would it mean for a computer to make a mistake in the same way that a human does?
