import Objects from '../pageobjects/MapPageObjects'
import Verify from '../pageobjects/Expects'

describe ('map test', () => {
    it ('should use the map correctly', async () => {
        await Objects.open()
        await Objects.openMenu()
        await Verify.verifyMenu()
        await Objects.moveStoreMap(50, -5)
        await Verify.verifyMapMove()
        await Objects.clickZoomOut()
        await Verify.verifyZoomout()
        await Objects.clickZoomIn()
        await Verify.verifyZoomin()
        await Objects.clickBingLogo()
        await Verify.verifyBing()
    })
})