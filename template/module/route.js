const route = [
  {
    path: '/TemplateName',
    moduleCode: 'TemplateModuleCode',

    icon: 'TemplateModuleIcon',
    component: () => import('./view/index.vue'),
  },
];

export { route };
