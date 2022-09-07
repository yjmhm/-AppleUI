import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import NoMatch from '../components/NoMatch.vue';
import SwitchDoc from '../components/DocUi/SwitchDoc.vue';
import ButtonDoc from '../components/DocUi/ButtonDoc.vue';
import DialogDoc from '../components/DocUi/DialogDoc.vue';
import TabsDoc from '../components/DocUi/TabsDoc.vue';
import InputDoc from '../components/DocUi/InputDoc.vue';
import RadioDoc from '../components/DocUi/RadioDoc.vue';

import Markdown from '../components/Markdown.vue';
import intro from '../markdown/intro.md';

import {h} from 'vue';

const md = string => {
  return h(Markdown, {content: string, key: string});
};
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/doc',
      name: 'Doc',
      component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(intro)},
        {path: 'switch', component: SwitchDoc},
        {path: 'button', component: ButtonDoc},
        {path: 'dialog', component: DialogDoc},
        {path: 'tabs', component: TabsDoc},
        {path: 'input', component: InputDoc},
        {path: 'radio', component: RadioDoc},

      ]
    },
    {
      path: '/:w+',
      component: NoMatch
    }
  ]
});


export {router};
