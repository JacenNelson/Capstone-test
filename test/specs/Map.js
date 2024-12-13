import Objects from '../pageobjects/MapPageObjects'

describe ('map test', () => {
    it ('should use the map correctly', async () => {
        await Objects.fullMapTest()
    })
})