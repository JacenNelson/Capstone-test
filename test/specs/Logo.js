import logoTest from '../pageobjects/LogoPageObjects.js'

describe('Logo test', () => {
    it('should return to the home page whenever the logo is clicked', async () => {
        await logoTest.fullTest()
    })
})