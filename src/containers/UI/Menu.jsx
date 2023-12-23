import { Dropdown, Menu, Space } from 'antd';
import Link from 'antd/es/typography/Link';
import styleMenu from './Menu.module.css'

const menuItems = [
  {
    key: '1',
    label: (
      <a href='/'>
        Выйти
      </a>
      
    ),
  },
];


const menu = (
  <Menu items={menuItems} />
);

const DropdownMenu = () => (
  <Dropdown overlay={menu} >
    <a onClick={(e) => e.preventDefault()}>
      <Space >
        Личный кабинет
      </Space>
    </a>
  </Dropdown>
);

export default DropdownMenu;