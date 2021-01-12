# Understanding Types

[Paper link](http://lucacardelli.name/Papers/OnUnderstanding.A4.pdf)

One of the best papers on types systems due to it thoroughness. There are many subtle points in this paper that I didn't entirely get, and it will be worth re-reading in the future.

Universal quantification over a type `for_all a. fun (x: a) x` means that x can bind to any/all types. The function has two parameters at two levels: the type and value levels. You call it explicitly with something like `fun [Int] (10)`.

There is a difference between type parameterization (`A [T] = T -> T`) vs universal quantification (`A = for_all T. T -> T`)

It's very hard to pin down the exact meaning of existential type quantifiers. They allow you to further abstract a type. For example, you may have `ArrayQueue[Int]` and `ListQueue[Int]` where you've universally quantified the type of the queue elements. You can further abstract the implementation of the queue (Array or List), by using an existential quantifier

There is a nice treatment of record types and subtyping without using explicit inheritance, which I think is something that plagues most all OO languages. You can extend an existing record type and expand its properties. You can have an explicit type check for `a <= b`, which means a must have all the keys from `b`, but may have extras. You can bind a record type to a name with univ. quant. like `for_all a <= {one: Int}. a -> Int`.

Importantly, bounded univ. quantification on record types allows you to express more information about a function's type.

Say you have a type point: `{x: Real, y: Real}`, and you have a type Circle `{x: Real, y: Real, radius: Real}`.

Now say you have a funciton type to move a point: `Point -> Real -> Point`. You can pass either a Point or a Circle as they both have `x` and `y` keys. However, if you pass a Circle, you may not get a Circle back; you may just get a Point back with no `radius` key.

Instead you can bind the type like: `movePoint = for_all P <= Point; P -> Real -> P`. Now you can have `movePoint[Circle]`, and your return type also must be a Circle, enforced by the type system.
