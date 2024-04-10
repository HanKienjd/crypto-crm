import { UserOutlined } from '@ant-design/icons';

type MenuProps = Array<{
  key: string;
  label: string;
  icon?: React.ReactElement;
  children?: Array<{
    key: string;
    label: string;
  }>;
}>;

export const menuList: MenuProps = [
  {
    key: 'project',
    label: 'Project',
    icon: <UserOutlined />,
  }
]
