import { Layout, } from "antd"
const { Footer } = Layout;
const Footers = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            Copyright &copy; 2024-{new Date().getFullYear()} PH University All rights reserved.
        </Footer>
    )
}

export default Footers