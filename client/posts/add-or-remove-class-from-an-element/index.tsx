import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## 向一个元素添加 class 属性值

\`add()\` 方法的多个参数在 IE 11 中[不被支持](https://caniuse.com/#feat=mdn-api_element_classlist_add_and_remove_multiple_arguments "add() 方法的多个参数在 IE 11 中不被支持")。

~~~ javascript
ele.classList.add('class-name');

// 添加多个类 (在 IE 11 中不被支持)
ele.classList.add('another', 'class', 'name');
~~~

## 删除元素多个 class 属性值

\`remove()\` 方法的多个参数在 IE 11 中[不被支持](https://caniuse.com/#feat=mdn-api_element_classlist_add_and_remove_multiple_arguments "remove() 方法的多个参数在 IE 11 中不被支持")。

~~~ javascript
ele.classList.remove('class-name');

// 删除多个类 (在 IE 11 中不被支持)
ele.classList.remove('another', 'class', 'name');
~~~

## 切换一个 class 属性值

~~~ javascript
ele.classList.toggle('class-name');
~~~
`}
/>
<RelatedPosts
    slugs={[
        'check-if-an-element-has-given-class',
        'drag-and-drop-element-in-a-list',
        'highlight-an-element-when-dragging-a-file-over-it',
        'resize-columns-of-a-table',
    ]}
/>
</>
    );
};
