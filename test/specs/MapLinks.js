import Objects from '../pageobjects/MapLinksPageObjects.js'
import Verify from '../pageobjects/Expects.js'
import { browser } from '@wdio/globals'

describe('Map Links test', () => {
    it('should use functions successfully', async () => {
        await Objects.open()
        await Objects.openMenu()
        await Verify.verifyMenu()
        await Objects.currentLocationClick()
        await browser.pause(10000)
    })
})