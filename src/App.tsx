import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Transition from './components/Transition/transition'
import Icon from './components/Icon/icon'
library.add(fas)

const App:React.FC = () => {
  const [ show, setShow ] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        {/*<Icon icon="arrow-down" theme="primary" size="10x" />*/}
        {/*<Menu defaultIndex='0' onSelect={(index) => {alert(index)}} mode="vertical"  defaultOpenSubMenus={['2']}>*/}
        {/*<Menu defaultIndex='0' onSelect={(index) => {alert(index)}} mode="vertical">*/}
        <Menu defaultIndex='0' onSelect={(index) => {alert(index)}}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>
        <Button className="custom"> Hello </Button>
        <Button disabled> Disabled Button </Button>
        {/*<Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large Primary </Button>*/}
        {/*<Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger </Button>*/}
        {/*<Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank"> Baidu Link </Button>*/}
        {/*<Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled> Disabled Link </Button>*/}
        <Button size="lg" onClick={() => { setShow(!show)}} > Toggle </Button>
        <Transition
            in={show}
            timeout={300}
            animation="zoom-in-left"
        >
          <div>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </div>
        </Transition>
        <Transition
            in={show}
            timeout={300}
            animation="zoom-in-top"
            wrapper
        >
          <Button btnType="primary" size="lg">A Large Button </Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
