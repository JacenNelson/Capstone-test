import Links from '../pageobjects/MapLinksPageObjects.js'

describe('Map Links test', () => {
    it('should use functions successfully', async () => {
        await Links.fullMenuTest()
    })
})