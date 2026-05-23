---
title: "Composition over inheritance"
description: "Why I reach for composition first when building React components."
theme: engineering
date: 2026-04-12
tags: [react, patterns]
---

Inheritance feels clever the first three times you use it. By the fourth, the base class is doing too many things and every subclass overrides something different.

Composition keeps each piece small. A button is a button. A loading button wraps a button and adds one behavior. Each piece can be reasoned about in isolation.

In React this means: prefer children and props over `extends`. Prefer hooks over class hierarchies. Prefer one component that does one thing over a base that does seven.

See also: [[ternary-over-and]].
