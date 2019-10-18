# JavaScript-Code-Testing

Learning JavaScript Tests

**Why Test?**

```

(a)Helps you by giving you an alert incase you make an error while writing code...

(b)Saves time in that tests are made in that you do not have to test manually over and over again.

(c)Helps you think about possible issues and bugs.

(d)Helps you Itegrate into a build workflow..automatic deployment or continuous integration when a test passes.
This ensures no invalid code is deployed.

(e)Breaks up complex dependencies ..This because good tests test Modularly ans bit by bit.

(f)Improves our code.You only write minimum code required to make your tesst to pass


```

**Different kinds of tests**

```


(a)Unit Test..Testing a single fully isolated unit of our application.Testing one function.

They are easier to write.


(b)Integration Tests...they entail more than a unit With dependencies..(example testing a function that calls another function (integration of one feature to another feature)

As dependencies increase the test becomes more complex.


(c)End to End Tests(E2E) -Entail testing the full flow of an application example validating the DOM After a click.


```

**Testing SetUP**

```

(a)Test Runner-execute your tests and summarize your results.

example:Mocha


(b)Assertion Library..Defines testing logic conditions..

eg Chai and Much more recently and as well popular Jest..


(c)Headless Browser..

Simulates browser interaction..

Moslty for E2E testing a good example is Puppeteer..


```

**JEST**

```
Automatically detects files with .test...

Destructuring is pulling out items from an object..

You write  a test and expect something and thats where assertion Comes In.

You may add as many as possible edge cases to the test so as to make it pass.
```
