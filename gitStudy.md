> *  **1:建立好存储git版本控制的文件夹，然后把git命令移到该目录并执行**<br>
**$ git init** --不用文件名也不用注释<br>
说明：初始化版本控制的目录，把该目录从普通的目录初始成可以版本控制的目录<br><br>

> * **2:用命令git add告诉Git，把文件添加到仓库**<br>
**$ git add gitStudy.txt**   --需要文件名可是不需要注释<br>
说明：执行上面的命令，没有任何显示，这就对了，Unix的哲学是“没有消息就是好消息”，说明添加成功。<br><br>

> * **3:用命令git commit告诉git,把文件提交到仓库**<br>
**$ git commit -m "New a document 'gitStudy.txt'"** --不需要文件名；注释不要有中文！会乱码！当然改底层设置中文不乱码也可以，可是自己趁这个机会好好学习英文也好呀！<br>
说明：-m后面输入的是本次提交的说明，可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录。<br><br>
**为什么Git添加文件需要add，commit一共两步呢？因为commit可以一次提交很多文件，所以你可以多次add不同的文件，比如：**<br>
**$ git add file1.txt**<br>
**$ git add file2.txt file3.txt** <br>
**$ git commit -m "add 3 files." **<br><br>

> * **4:有用的指令**<br>
**ls -ah**<br>
备注：查看该目录下面的所有子文件<br>
**vi test.txt**<br>
备注：打开test.txt文件<br>
**'shift' + ':' + 'q' **<br>
备注：退出vi编辑器<br>
**'shift' + ':' + 'wq' **<br>
备注：保存并退出vi编辑器<br><br>

> * **5:查询我的版本控制目录下的文件与最新的版本是否相同，查看修改的状态**<br>
**$ git status**<br>
说明：git status命令可以让我们时刻掌握仓库当前的状态，会告诉我们哪个文件已经被更改了！可是具体更改了什么并没有说。如果想知道更改了什么需要下一步的指令；<br><br>

> * **6:用git diff这个命令查看当前版本库到底更改了什么东西！**<br>
**$ git diff**<br>
说明：这个在中文环境下会出现乱码！就是说没什么用处<br><br>


> * **7:版本回退,版本控制系统肯定有某个命令可以告诉我们历史记录**<br>
查看版本信息：注意，只是版本信息，非提交信息<br>
**git log**<br>
说明：该命令告诉我们提交的历史纪录，会输出详细的信息<br>
**git log --pretty=oneline**<br>
说明：该命令只输出版本号和提交的备注信息<br><br>
回退版本：<br>
**git reset --hard HEAD^**			--回退到上一个版本<br>
**git reset --hard HEAD^^**		--回退到上上个版本<br>
**git reset --hard 3628164^**	--回退到指定版本（写版本号的前几位就可以了,不必写全），与git log --pretty=oneline配合使用<br><br>
查看自己的提交版本，这里才是查看所有的提交信息<br>
**git reflog**<br>
该命令可以在回退版本后再恢复到新版本使用<br><br>

> **8:工作区与暂缓区**<br>
**工作区**<br>
就是在电脑里能看到的目录，比如我的gitFile文件夹就是一个工作区;<br>
**版本库（Repository）**<br>
工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。<br>
**核心东西：**<br>
Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支master，以及指向master的一个指针叫HEAD。<br><br>
前面讲了我们把文件往Git版本库里添加的时候，是分两步执行的：<br>
第一步是用git add把文件添加进去，实际上就是把文件修改添加到暂存区；<br>
第二步是用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支。<br><br>

> **9:管理修改**<br>
由于上述讲到有暂缓区和工作区，所以每次修改，如果不add到暂存区，那就不会加入到commit中。<br>
只修改不add到暂缓区的话，commit命令是不会把修改的内容提交到版本库的，commit只会把暂缓区的东西提交到版本库。<br><br>

> **10:撤销修改**<br>
Git会告诉你，**git checkout -- file**可以丢弃工作区的修改<br>
**$ git checkout -- gitStudy.txt**    	//舍弃工作区的修改<br><br>
这样的修改有**两种**情况：<br>
一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；<br>
一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。<br><br>
**注意：git checkout -- file命令中的--很重要，没有--，就变成了“切换到另一个分支”的命令；**<br><br>
还有另一种命令：<br>
**git reset**命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用HEAD时，表示最新的版本。<br>
**$ git reset HEAD gitStudy.txt  +  $ git checkout -- gitStudy.txt**  //舍弃暂缓区的修改，再舍弃工作区的修改，回到最新的版本<br><br>
**总结：**<br>
**场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。**<br>
**场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD file，就回到了场景1，第二步按场景1操作。**<br>
**场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。**<br><br>

> **11:删除文件**<br>
**$ rm test.txt**<br>
**$ git rm test.txt**<br>
**$ git commit -m "remove test.txt"**<br><br>
**恢复删除的文件：**<br>
**$ git checkout -- test.txt**<br>
git checkout其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。<br><br>

> **12:远程仓库**<br>
**第一步：先让远程仓库识别你的版本库**<br>
创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key<br><br>
$ ssh-keygen -t rsa -C "youremail@example.com"<br>
剩下的一路回车就可以了<br><br>
**第2步：登陆GitHub，打开“Account settings”，“SSH Keys”页面：**<br>
然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容：<br><br>

> **13:添加远程库**<br>
首先，登陆**GitHub**，然后，在右上角找到**“Create a new repo”**按钮，创建一个新的仓库：例如仓库名为“learngit”<br><br>
然后，我们根据GitHub的提示，在本地的**learngit**仓库下运行命令：<br><br>
**$ git remote add origin_github git@github.com:michaelliao/learngit.git**<br><br>
添加后，远程库的名字就是origin_github 这是Git默认的叫法，也可以改成别的，但是origin_github 这个名字一看就知道是github的远程库，因为我们还可以创建别的远程库。<br><br>
下一步，就可以把本地库的所有内容推送到远程库上<br><br>
**$ git push -u origin_github master**<br><br>
由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送到远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。<br><br>
从现在起，只要本地作了提交，就可以通过命令：<br><br>
**$ git push origin_github master**<br><br>
把本地master分支的最新修改推送至GitHub，现在，你就拥有了真正的分布式版本库！<br><br>
**小结：**<br>
要关联一个远程库，使用命令**git remote add origin git@server-name:path/repo-name.git**<br>
关联后，使用命令**git push -u origin master**第一次推送master分支的所有内容；<br>
此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改；<br>

> **14：从远程库克隆**<br>
用命令**git clone**克隆一个本地库：<br>
**$ git clone git@github.com:OuFeng/PersonalCollection.git**<br><br>
你也许还注意到，GitHub给出的地址不止一个，还可以用**https://github.com/OuFeng/PersonalCollection.git**这样的地址。实际上，Git支持多种协议，默认的git://使用ssh，但也可以使用https等其他协议。<br>
使用https除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令，但是在某些只开放http端口的公司内部就无法使用ssh协议而只能用https。