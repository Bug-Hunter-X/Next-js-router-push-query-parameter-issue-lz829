# Next.js router.push Query Parameter Issue

This repository demonstrates a problem with the `router.push` method in Next.js when using query parameters. The query parameters are not correctly appended to the URL during redirection.

## Problem Description

The `About` page includes a button that redirects to the home page (`/`) with a query parameter (`name=John Doe`). However, the redirection does not work as expected; the query parameters are not appended correctly to the URL.

## Solution

The solution involves using the correct way to add query parameters to the router.push function.