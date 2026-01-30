export interface MenuNavItem {
  link: string;
  name: string;
}

export const MENU_NAV_DATA: MenuNavItem[] = [
  { link: '/', name: 'Главная' },
  { link: '/catalog', name: 'Продукция' },
  { link: '/objects', name: 'Объекты' },
  { link: '/news', name: 'Новости и статьи' },
  { link: '/contacts', name: 'Контакты' },
];
