import Links from '../pageobjects/MapLinksPageObjects.js'
import Verify from '../pageobjects/Expects.js'

describe('Map Links test', () => {
    it('should use functions successfully', async () => {
        await Links.fullMenuTest()
    })
})