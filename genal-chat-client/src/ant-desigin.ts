import Vue from 'vue';
import 'ant-design-vue/dist/antd.less';
//@ts-ignore
import Notify from '@wcjiang/notify';
import {
  message,
  Button,
  Input,
  Modal,
  Form,
  Checkbox,
  Icon,
  Tabs,
  Popover,
  Dropdown,
  Menu,
  Avatar,
  Card,
  Select,
  Upload,
  Tooltip,
  Drawer,
  Popconfirm,
  Badge,
} from 'ant-design-vue';

Vue.use(Avatar);
Vue.use(Button);
Vue.use(Input);
Vue.use(Modal);
Vue.use(Form);
Vue.use(Checkbox);
Vue.use(Icon);
Vue.use(Tabs);
Vue.use(Popover);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Card);
Vue.use(Select);
Vue.use(Upload);
Vue.use(Tooltip);
Vue.use(Drawer);
Vue.use(Popconfirm);
Vue.use(Badge);
Vue.prototype.$message = message;
Vue.prototype.$notice = throttle((info: string) => {
  function sendNotification() {
    const no = new Notification('', {
      body: info,
      icon: 'https://pic1.zhuanstatic.com/zhuanzh/50b6ffe4-c7e3-4317-bc59-b2ec4931f325.png',
    });
    // 还是想想service worker吧
    no.addEventListener('click', (e) => {
      open(location.href);
    });
  }
  if (window.Notification.permission == 'granted') {
    // 判断是否有权限
    sendNotification();
  } else if (window.Notification.permission != 'denied') {
    window.Notification.requestPermission(function(permission) {
      // 没有权限发起请求
      sendNotification();
    });
  }
}, 1000);

function throttle<T extends any[]>(func: (...arg: T) => void, delay: number) {
  let prev = Date.now();
  return (...arg: T) => {
    const now = Date.now();
    if (now - prev >= delay) {
      func(...arg);
      prev = Date.now();
    }
  };
}
