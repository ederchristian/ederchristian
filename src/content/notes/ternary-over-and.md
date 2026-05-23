---
title: "Prefer ternary over && for conditional rendering"
description: "A small lint that pays off the first time a zero sneaks through."
theme: engineering
state: evergreen
date: 2026-04-15
tags: [react, jsx]
---

`condition && <Thing />` looks fine until `condition` is `0` and React renders the literal zero on screen. Or until it's an empty string. Or `NaN`. Or until a teammate forgets that the falsy branch returns the value itself.

`condition ? <Thing /> : null` is two extra characters and removes the entire category of bug.

I lint for it now. It also reads better: ternary states intent ("show or don't show"), `&&` states a side effect that happens to be JSX.
