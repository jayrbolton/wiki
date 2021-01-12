## Time clocks and the ordering of events in a distributed system

**[Link to paper](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/12/Time-Clocks-and-the-Ordering-of-Events-in-a-Distributed-System.pdf)**

_Takeaways_

* Logical clock
 * Every process ticks on every new event
 * Every process receives events from other process: sets current time to the received process time if it is greater and then ticks
 * You can achieve a total ordering for a system with the above two mechanisms
 * You can achieve a totally distributed request queue by having every process keep its own queue of requests from every other process in the system
 * The request queue system above doesn't work well with failure. There is a citation to account for failure **[here](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.299.8315&rep=rep1&type=pdf)**
 * There is a certain simplistic elegance to a logical clock only distributed system, that needs no awareness of physical clocks.

* Towards the end of the paper, he gives a physical clock solution that accounts for drift among processes and has the added benefit of being able to order processes that occur before each other in time, but are not aware of each other when they start.
 * I did not read this section very actively; it would be worth returning to if I want to dig deeper into these types of systems
