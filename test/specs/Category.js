import CategoryLinks from '../pageobjects/CategoryPageObjects.js'

describe('Category test', () => {
    it('should navigate to each category', async () => {
        await CategoryLinks.test()
    })
})