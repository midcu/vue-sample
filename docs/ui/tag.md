---
title: 标签Tag
---
# 标签
> 标签，如何实现一个Tag标签，重点在于CSS的编写。
### 基础用法
> <tag > 标签1 </tag> <tag :closable="true"> 标签2 </tag> <tag > 标签3 </tag> <tag :closable="true"> 标签4 </tag> <tag > 标签5 </tag>

#### 使用代码
``` vue
<tag > 标签1 </tag>
<tag :closable="true"> 标签2 </tag>
<tag > 标签3 </tag>
<tag :closable="true"> 标签4 </tag>
<tag > 标签5 </tag>
```

#### Vue实现代码

<<< @/docs/.vuepress/components/tag.vue{2-9,26,45-47}