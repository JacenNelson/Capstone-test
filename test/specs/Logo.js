import Objects from '../pageobjects/LogoPageObjects.js'
import Verify from '../pageobjects/Expects.js'

describe('Logo test', () => {
    it('should return to the home page whenever the logo is clicked', async () => {
        await Objects.open()
        await Objects.cartIcon()
        await Verify.verifyCart()
        await Objects.logo()
        await Verify.verifyHome()
        await Objects.services()
        await Verify.verifySideMenu()
        await Objects.cards()
        await Verify.verifyCreditCard()
        await Objects.logo()
        await Verify.verifyHome()
        await Objects.hardware()
        await Verify.verifyHardware()
        await Objects.logo()
        await Verify.verifyHome
        await Objects.shopAll()
        await Verify.verifySideMenu()
        await Objects.room()
        await Verify.verifyShopRoom()
        await Objects.bathroom()
        await Verify.verifyBathroom()
        await Objects.logo()
        await Verify.verifyHome()
    })
})