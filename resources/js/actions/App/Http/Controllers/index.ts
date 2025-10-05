import Auth from './Auth'
import Settings from './Settings'
import DeviceController from './DeviceController'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
Settings: Object.assign(Settings, Settings),
DeviceController: Object.assign(DeviceController, DeviceController),
}

export default Controllers