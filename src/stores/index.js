import AppStore from './app';
import MemberStore from './member';
import UserStore from './user';

const appStore = new AppStore()
const memberStore = new MemberStore()
const userStore = new UserStore()

export { appStore, memberStore, userStore }