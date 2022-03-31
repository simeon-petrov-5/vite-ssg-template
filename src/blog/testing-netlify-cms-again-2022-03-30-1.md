---
layout: blog
title: TEsting Netlify cms AGAIN
date: 2022-03-30T21:55:23.106Z
thumbnail: https://images.unsplash.com/photo-1640622304233-7335e936f11b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
---
# TEsting Netlify cms AGAIN

<p class="sub-title">*Testing your JS application - a (not so) simple and (not so) short guide and resource map*</p>


<ArticleImage :src="frontmatter.thumbnail" />


<p>
This guide will give you a lot of references and links to material, which you should go and analyze, learn and consume on your own. This guide will not give you direct answers about what and why to do, on syntax or on how to configure testing in your project.

These materials are targeted to be universal - even if you see "React", "Vue", "Angular" or whatever framework in the title, this doesn't mean that it's something you should pass - the underlying idea of testing is the same, as are generally the assertions (rules) that we use and the overall methodology, architecture and syntax.

In short - I went through 20 or so articles on the topic of testing from [kentcdodds' blog](https://kentcdodds.com/blog?q=testing) . I will link most of these with some excerpts to outline and share important concepts. I would advise you to go through all of these too.

If you're a complete beginner - probably going through the docs of Jest like  <https://jestjs.io/docs/setup-teardown> will help or any other course from the more resources underneath. Also for code coverage: [What is a branch in code coverage for JavaScript unit testing](https://stackoverflow.com/questions/35034977/what-is-a-branch-in-code-coverage-for-javascript-unit-testing) &  [Code coverage](https://en.wikipedia.org/wiki/Code_coverage)

The overall notion is that when we're testing components or views, we should test them like the end-user that will be using them. This really looks like e2e testing, but there are differences - working with mocked data, executing the tests in virtual dom (jsdom) instead of real browser, not calling our BE services, etc. We will be calling this "integration" testing. (integration is in quotes as the descriptions are quite fuzzy here).

So what we want is to create "integration" tests - clicking all over our app, but in a virtual environment, that's faster and more concise than a browser (e2e). We can still keep writing "unit" tests, but those are directed to things like utility functions, pure functions, http call wrappers, simple dummy components, etc., not bigger components, views, pages, etc.

The more your tests resemble the way your software is used, the more confidence they can give you.

- 1
- 2
- 3


> Text that is a quote

</p>

> Text that is a quote


<route>
{
  meta: {
    layout: 'blogpost'
  }
}
</route>