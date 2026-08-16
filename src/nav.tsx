import { Anchor } from 'antd';

function Nav() {
  return (
    <div style={{padding:'10px'}}>
    <Anchor direction="horizontal" items={[
        {
            key: 'Home',
            href: '#home',
            title: 'Home',
        },
        {
            key: 'About',
            href: '#about',
            title: 'About',
        },
        {
            key: 'Ticket',
            href: '#ticket',
            title: 'Ticket',
        }
    ]}/>

    </div>
  )
}
export default Nav
