# Day 6 CLI App & Unit Test

## CLI APP
create `todo` apps for CLI

### Show all todo list

Add `list` command to show all todo items. The number will be ID of todo item.

Example

```
todo list
4. Jogging jam 5:00 WIB (DONE)
5. Makan di Warteg Bu Ita
15. Nge-gym di Celfit (DONE)
19. Pergi ambil kue di Cizz Cake
```

### Add new todo item

The `add` command should add new todo item.

Example

```
todo add "Survey co-working space di Jogja"
```

### Update a todo item

The `update` command should update a todo item.

Example

```
todo list
82. Makan nasi

todo update 82 "Makan nasi goreng dan sop buntut"

todo list
82. Makan nasi goreng dan sop buntut
```

### Delete a todo item

The `del` command should delete a todo item.

Example

```
todo list
81. Tidur siang
82. Makan nasi

todo del 82

todo list
81. Tidur siang
```

### Clear all todo list

The `clear` command should prompt yes/no input.
If user choose yes, then todo list will be cleared.

Example

```
todo list
81. Tidur siang
82. Makan nasi

todo clear
Are you sure want to delete? [y/N]

todo list
```

### Set a todo item to completed

The `done` command should set a todo item to completed.

Example

```
todo list
81. Tidur siang
82. Makan nasi

todo done 81

todo list
81. Tidur siang (DONE)
82. Makan nasi
```

### Set a todo item to uncompleted

The `undone` command should set a todo item to uncompleted.

Example

```
todo list
81. Tidur siang (DONE)
82. Makan nasi

todo undone 81

todo list
81. Tidur siang
82. Makan nasi
```

## Unit Test

