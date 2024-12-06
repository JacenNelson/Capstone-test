import Objects from '../pageobjects/CategoryPageObjects.js'
import Verify from '../pageobjects/Expects.js'

describe('Category test', () => {
    it('should navigate to each category', async () => {
        await Objects.open()
        await Objects.firstItem()
        await Verify.verifyCategory1()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.secondItem()
        await Verify.verifyCategory2()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.thirdItem()
        await Verify.verifyCategory3()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.fourthItem()
        await Verify.verifyCategory4()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.fifthItem()
        await Verify.verifyCategory5()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.sixthItem()
        await Verify.verifyCategory6()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.seventhItem()
        await Verify.verifyCategory7()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.eighthItem()
        await Verify.verifyCategory8()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.ninthItem()
        await Verify.verifyCategory9()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.tenthItem()
        await Verify.verifyCategory10()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.eleventhItem()
        await Verify.verifyCategory11()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.twelfthItem()
        await Verify.verifyCategory12()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.thirteenthItem()
        await Verify.verifyCategory13()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.fourteenthItem()
        await Verify.verifyCategory14()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.fifteenthItem()
        await Verify.verifyCategory15()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.sixteenthItem()
        await Verify.verifyCategory16()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.seventeenthItem()
        await Verify.verifyCategory17()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.eighteenthItem()
        await Verify.verifyCategory18()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.nineteenthItem()
        await Verify.verifyCategory19()
        await Objects.homeBtn()
        await Verify.verifyHome()
        await Objects.twentiethItem()
        await Verify.verifyCategory20()
    })
})