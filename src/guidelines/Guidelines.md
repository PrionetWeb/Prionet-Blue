# Project Guidelines

## Overview
This document outlines the guidelines and context for our project development.

## Development Guidelines
- Ensure every branch can roll back in case of errors or bugs

### Code Standards
- Follow consistent naming conventions
- Ensure all html is properly named, wcag complaint and no generic div names or ids
- Write clear, self-documenting code
- Include appropriate comments for complex logic
- Maintain proper file organization

### Git Workflow
- Use descriptive commit messages
- Create feature branches for new development
- Review code before merging to main branch

### Documentation
- Keep this guidelines file updated as the project evolves
- Document major architectural decisions
- Maintain clear README files for setup instructions

## Visuals
- Use high quality AI images from Nano Banana or GPT
- Use modern iconography
- Use Satoshi Variable font for all heading and body text

## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized

## Technical Stack
- Typescript
- React
- Tailwind
- Supabase when appropriate

## Architecture Notes
- Use modern design patterns that current in 2025
- Must have a light mode and dark mode toggle in the header navigation
- 3d and 2nd animations used when appropriate
- All code must be wcag compliant using Aria tags when appropriate
- Use modern database structures when appropriate


---
*This document should be updated regularly as the project develops.*
<!--

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Use AI cinematic professional images from Google Nano Banana.

Use professional, friendly and scannable copy.

Ensure all code is accessible.

--------------

# Design system guidelines
Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

* Use a base font-size of 14px
* Date formats should always be in the format “Jun 10”
* The bottom toolbar should only ever have a maximum of 4 items
* Never use the floating action button with the bottom toolbar
* Chips should always come in sets of 3 or more
* Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:


## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.
Include hover and tab target states.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized
