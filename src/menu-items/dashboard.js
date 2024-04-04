// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'create-medical-record',
      title: 'Create Medical Record',
      type: 'item',
      url: '/dashboard/create',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'view-medical-record',
      title: 'View Medical Records',
      type: 'item',
      url: '/dashboard/view',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'pending-transactions',
      title: 'Pending Transactions',
      type: 'item',
      url: '/dashboard/pending',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
