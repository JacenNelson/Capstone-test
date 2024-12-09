import Objects from '../pageobjects/MapPageObjects'
import Verify from '../pageobjects/Expects'
describe ('map test', () => {
    it ('should use the map correctly', async () => {
        await Objects.open()
        await Objects.openMenu()
        await Verify.verifyMenu()
        await Objects.moveStoreMap(100,-500)
        await Objects.clickZoomOut()
        await Objects.clickZoomIn()
        await Objects.clickBingLogo()
    })
})