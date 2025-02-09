# Headings

#H1
##H2
###H3
####H4
#####H5
######H6

---

# Emphasis

-   `Italic` _asterisks_ or _underscores_
-   `Bold` **asterisks** or **underscores**
-   `Italic Bold` **asterisks and _underscores_**
-   `Strikethrough` ~~two tildes~~

---
# Toggle
<details>
<summary>Click to toggle contents of `code`</summary>

```
CODE!
```

</details>


---
# lists

1. num list-1
2. num list-2
    1. num list-2.1
    2. num list 2.2
        - bullet list (bl)

-   bullet list (b2)
-   bullet list (b3)

---

# Links

[inline-style link](https://www.google.com)
[inline-style link with title](https://www.google.com "Google's Homepage")
[reference-style link][Arbitrary case-insensitive reference text]
[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org

## [link text itself]: http://www.reddit.com

# Code

Inline `code` has `back-ticks around` it.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]:
    Every new line should be prefixed with 2 spaces.  
    This allows you to have a footnote with multiple lines.

[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.

---

Colons can be used to align columns.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---
