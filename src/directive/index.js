import Vue from "vue";
import { focus } from "./focus";
import { drag, drop, moveEl } from "./drag";

Vue.directive("focus", focus);
Vue.directive("drag", drag);

