---
title: "What is Quality Code"
description: 'Personal and direct Notes from Frontend Masters Course “Software Developer Success: Soft Skills & Testing”'
date: "Mar 19 2025"
heroImage: ""
imageAlt: ""
language: "en-US"
color: "#30284f"
---

Good code is maintainable, stable, and easy to change.

It’s simple and straightforward.

It’s not perfect, but delivers the company’s needs.

## Clean Code Basics

- Use descriptive naming.
- Write decoupled code.
- Follow the Single Responsibility Principle: each function has a single responsibility.
- Have a clear organizational of code, both in the folder hierarchy and in individual files. Lean into colocation for project structure: Tip: things that change together, should stay together.
- Use comments appropriately: comments should describe why, not what and how. Your code should be descriptive on its own.
- Avoid code duplication.
- Add test coverage and write good tests.

Personally, I don’t think Clean Code is a rule for everything. A lot of what’s in the book reflects the author’s own biases. There are definitely useful ideas in it, but not everything applies to every project.

### Your new Superpower: Test Driven Development

## TDD: Step by Step

### Steps

- Identify the feature or condition needed in your code.
- Write a failing test case for the desired behavior.
- Write code to pass the test in the simplest and brute-force way possible.
- Run the test to ensure it passes and produces the expected output.
- Repeat the process for each new feature or condition needed. Ensure previous cases don’t fail with new changes.
- Look for opportunities to refactor or improve the code.

### Why TDD?

- Changing code is safer: With tests, you can easily refactor or change the code without worrying you are breaking existing functionality or making unintended impacts.
- Simpler solutions: Leads to simpler and less complex code solutions because you aren’t over-thinking the solution.
- Easier to solve: Allows you to focus on solving one small chunk at a time, making the problem easier to solve.
- Less bugs: Writing and testing code one piece at a time is less error-prone.

## Tips for learning the Test-Driven-Development Cycle

- Harder than it seems: The process may sound easy, but requires a behavior and process change that you may initially resist, especially the urge to pre-plan your code.
- Practice: Like any skill, TDD takes time and practice to master. Keep working at it and you’ll start to see improvements in your coding skills and the quality of your code.
- Start small: Start with small, simple programs and functions. Don’t try to tackle a large project right away. Start with something that you can easily break down into smaller pieces and write assertions for.

## “Why is this bug happening?”

- Work through the code step by step, checking assumptions and outputs.
- Use `console.log` statements.
- Utilize the debugger to understand the code state and execution flow.
- Try isolating the issue by commenting out code until the problem is identified. Once isolated, use a combination of console.logs and debugger to understand and fix the issue.
- Consider talking through the problem with a person, pet, or toy to help you understand what is happening. Determine relevant state and explain to yourself what each piece of state is tracking. Bugs are either logic errors or errors in state.
- Ask for help.
- If no one is available to help, take a break and give your brain a rest before trying again.

## Reference

[Software Developer Success: Soft Skills & Testing](https://frontendmasters.com/courses/dev-soft-skills/)