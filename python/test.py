from typing import Dict  # this adds type hinting for Dict


def count_characters(word: str) -> Dict[str, int]:
    dic = {}
    for c in word:
        if c in dic:
            continue
        else:
            dic[c] = word.count(c)

    return dic


# don't modify below this line
print(count_characters("hello"))
print(count_characters("world"))
print(count_characters("hello world"))
print(count_characters("this is a longer sentence"))
