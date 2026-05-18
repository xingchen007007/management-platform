import { Button, Form, Input } from "antd";
import './login.css';


const Login = ()=>{
    const hanldeSubmit = (formData)=>{

    }
    return(
        <Form 
            className="login-container"
            onFinish={hanldeSubmit}
        >
            <div className="login_title">系统登录</div>
            <Form.Item
                name="username"
                label="账号"
            >
                <Input placeholder="请输入账号" className="el-input"/>
            </Form.Item>
            <Form.Item
                name="password"
                label="密码"
            >
                <Input.Password className="el-input" placeholder="请输入密码"/>
            </Form.Item>
            <Form.Item className="login-button">
                <Button  type="primary" htmlType="submit">登录</Button>
            </Form.Item>
        </Form>
    )
}
export default Login;