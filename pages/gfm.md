---
title: "GitHub Markdown Syntax"
author: "ChatGPT"
date: "2025-01-18"
description: "Testing Syntax through pandoc"
---

## 1. Headers
Use `#` for headers. The number of `#` symbols indicates the level of the header.

```
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
```

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

## 2. Emphasis
- **Bold**: Use `**text**` or `__text__`
- *Italic*: Use `*text*` or `_text_`
- ~~Strikethrough~~: Use `~~text~~`
- ***Italic Bold*** Use `***text***` 

```
**Bold Text**
*Italic Text*
~~Strikethrough~~
```

**Bold Text**  
*Italic Text*  
~~Strikethrough~~  

## 3. Lists
- **Unordered Lists**: Use `*`, `+`, or `-` followed by a space.

```
* Item 1
* Item 2
  * Subitem 1
  * Subitem 2
```

* Item 1  
* Item 2  
  * Subitem 1  
  * Subitem 2  

- **Ordered Lists**: Use numbers followed by a period.

```
1. First item
2. Second item
   1. Subitem 1
   2. Subitem 2
```

## 4. Links
Create links using `[link text](URL)`.

```
[GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#line-breaks)
```

[GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#line-breaks)

## 5. Images
Insert images using `![alt text](image URL)`.

```
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
```

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

## 6. Blockquotes
Use `>` to create blockquotes.

```
> This is a blockquote.
> This is a blockquote.
```

> This is a blockquote.  
> This is a blockquote.  

## 7. Code
- **Inline Code**: Use backticks `` `code` ``.
- **Code Blocks**: Use triple backticks or indent with four spaces.

```
Inline code: `print("Hello, World!")`

```

Inline code: `print("Hello, World!")`

Code Blocks:
```
def hello():
    print("Hello, World!")
```

## 8. Horizontal Rules
Create a horizontal rule with three or more dashes, asterisks, or underscores.

```
---
```

---

## 9. Tables
Create tables using pipes `|` and hyphens `-`.

```
| Header 1 | Header 2 |
|----------|----------|
| Row 1    | Row 2    |
| Row 3    | Row 4    |
```

| Header 1 | Header 2 |
|----------|----------|
| Row 1    | Row 2    |
| Row 3    | Row 4    |

## 10. Task Lists
Create task lists using `- [ ]` for unchecked and `- [x]` for checked items.

```
- [x] Task 1
- [ ] Task 2
```

- [x] Task 1
- [ ] Task 2

## 11. Footnotes
Create footnotes using `[^1]` and define them at the bottom.

```
Here is a footnote reference[^1].

[^1]: Here is the footnote.
```

Here is a footnote reference[^1].

[^1]: Here is the footnote.

## 12. Syntax Highlighting
You can specify the language for syntax highlighting in code blocks.

```
```python
def hello():
    print("Hello, World!")
```
```


