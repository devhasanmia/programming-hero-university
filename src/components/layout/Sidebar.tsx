import { Layout, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/sidebarItemGenerator';
import { adminPaths } from '../../routes/admin.routes';
const { Sider } = Layout;

const Sidebar = () => {
    return <Sider breakpoint="lg" collapsedWidth="0">
        <div style={{ textAlign: 'center', color: 'white', padding: "15px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1>PH University</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItemsGenerator(adminPaths, 'admin')} />
    </Sider>
}

export default Sidebar;