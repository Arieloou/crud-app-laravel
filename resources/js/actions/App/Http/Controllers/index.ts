import Auth from './Auth'
import Settings from './Settings'
import DeviceController from './DeviceController'
import UserController from './UserController'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
Settings: Object.assign(Settings, Settings),
DeviceController: Object.assign(DeviceController, DeviceController),
UserController: Object.assign(UserController, UserController),
}

export default Controllers