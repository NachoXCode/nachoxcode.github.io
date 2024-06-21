# My Projects

> This is a page dedicated to showcase my projects, come take a look at them

These are (obviously) my projects that are made for fun or another purposes, also here are the games i've made with my team, [NATUNATIC](https://www.youtube.com/@NATUNATIC_official).

i also made this with the purpose of making YOU rate the projects and comment about issues or things i could upgrade about them, be sure to make that on my [GitHub page](https://github.com/nachocsp), because i have track of my apps there and GitHub notifies me about the Issues, Pull Requests and other things for my repos, so make sure to do that in the corresponding [github repo](https://github.com/nachocsp?tab=repositories)

### How can i contribute to this?
you may ask, if there's a way to contribute to my page adding things about my repos that i could've forgot, you can add them via [this page's github repo](https://github.com/nachocsp/nachocsp.github.io), doing a pull request to the gh-pages branch

#### IMPORTANT THINGS WHEN DOING A PULL REQUEST
- only add or modify information about the things i've done

- add it correctly (check the [how to contribute](additional-things/#how-to-contribute) file for how to if you don't know)

- have common sense

### Thanks for reading this heading and now you can check the things i've done right below this



## n4c's multitool

a multitool app written in python with tkinter made for multiple purposes and other things

---

### what does this do?
---
it haves multiple purposes such as:

- a downloader for pretty much all my projects and some projects i participated in
- a calculator (yes i dont know why i did this but i did it)
- a discord rpc custommizer (coming soon)
- much more (check it in the .exe release file)

::: tip To get it: 
check my GitHub page, there's the project, go to releases and there you can get the app as a .exe, you can also get it as a list of .py files if you want to modify them
:::

---

### why does this exist?
---
this exist mainly to test my coding abilities and learn more about python and other languages i want to learn and can implement in the app

also bc i wanted to make a downloader and updater for my team's project

wanna check the code? [it's right here!](https://github.com/nachocsp/n4c-s-multitool)

also the code MIGHT be here (not updated code, but the code i first used for this app)

---

### Code for file 1 in app
```py
# imports
import os
import tkinter as tk

# something i use to indicate the window changed
print("")
print("")
print("Window start succesful")

# functions
def change_win_downloader():
    print("")
    print("")
    print("Changing Window, please wait...")
    win.destroy()
    os.system('python downloader.py')
    
# window config
win = tk.Tk()
win.geometry("800x600+100+50")
win.title("n4c's Multitool app")

# vars
label_downloader1 = tk.Label(win, text="n4c's downloader", font=("Arial", 20))
label_downloader2 = tk.Label(win, text="Used to download other projects by me", font=("Arial", 20))
label_downloader3 = tk.Label(win, text="Work in progress, coming soon!", font=("Arial", 20))
button_downloader = tk.Button(win, text="n4c's downloader",command=change_win_downloader, state="disabled", font=("Arial", 20))

label_blank1 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank2 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank3 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank4 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank5 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank6 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank7 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank8 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank9 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank10 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank11 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank12 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank13 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank14 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank15 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank16 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank17 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank18 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank19 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank20 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank21 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank22 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank23 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank24 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank25 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank26 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank27 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank28 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank29 = tk.Label(win, text="  ", font=("Arial", 20))
label_blank30 = tk.Label(win, text="  ", font=("Arial", 20))
# hello in spanish haha funi guy (i actually talk spanish)
label_app2_1 = tk.Label(win, text="hola", font=("Arial", 20))

# window content
label_downloader1.pack()
label_downloader2.pack()
button_downloader.pack()
label_downloader3.pack()
label_blank1.pack()
label_blank2.pack()
label_app2_1.pack()

# making the window not close unless tkinter.tk.destroy() OR win.destroy() is used or the window is closed by user
win.mainloop()
```

---

### Code for file 2 in app
```py
# imports
import os
import tkinter as tk

# something i use to indicate the window changed
print("")
print("")
print("Window start succesful")

# functions
def cambiar_app1():
    print("")
    print("")
    print("Changing Window, please wait...")
    win.destroy()
    os.system('python app.py')
    

# window config
win = tk.Tk()
win.geometry("800x600+100+50")
win.title("n4c's Multitool app")

# vars
button_app1 = tk.Button(win, text="Return to Main",command=cambiar_app1)

# window content
button_app1.pack()

# making the window not close unless win.destroy is used or the window is closed by user
win.mainloop()
```