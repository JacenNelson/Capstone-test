import Objects from '../pageobjects/MapLinksPageObjects.js'
import Verify from '../pageobjects/Expects.js'

describe('Map Links test', () => {
    it('should use functions successfully', async () => {
        await Objects.open()
        await Objects.openMenu()
        await Verify.verifyMenu()
        await Objects.currentLocationClick()
        await Verify.verifyError()
        await Objects.clickSearch()
        await Objects.typeSearch(84096)
        await Verify.verifySearch1()
        await Objects.typeSearch("Lehi")
        await Verify.verifySearch2()
        await Objects.typeSearch("Florida")
        await Verify.verifySearch3()
        await Objects.typeSearch(1111)
        await Verify.verifyBadSearch()
        await Objects.typeSearch(4410)
        await Verify.verifySearch4()
        await Objects.shopButton()
        await Verify.verifyStore()
        await Objects.openMenu()
        await Verify.verifyMenu()
        await Objects.locateStore()
        await Verify.verifyLocator()
    })
})