---
title: 图钉Affix
---
# 图钉
> 图钉，如何实现一个图钉，固定在某个位置。
#### 样例

<affix style="margin-top: 20px;" :offset-top="60">
    <tag > 标签1 </tag>
    <tag :closable="true"> 标签2 </tag>
    <tag > 标签3 </tag>
    <tag :closable="true"> 标签4 </tag>
    <tag > 标签5 </tag>
</affix>

#### 如何使用
``` vue 
<affix :offset-top="60">
    <tag > 标签1 </tag>
    <tag :closable="true"> 标签2 </tag>
    <tag > 标签3 </tag>
    <tag :closable="true"> 标签4 </tag>
    <tag > 标签5 </tag>
</affix>
```
#### 实现代码

<<< @/docs/.vuepress/js/affix.js
#### 固定在底部
<affix style="margin-top: 20px;" :offset-bottom="10">
    <tag > 标签1 </tag>
    <tag :closable="true"> 标签2 </tag>
    <tag > 标签3 </tag>
    <tag :closable="true"> 标签4 </tag>
    <tag > 标签5 </tag>
</affix>