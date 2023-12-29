import { Dropdown, Menu, Space } from 'antd';

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