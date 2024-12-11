import { $ } from '@wdio/globals'
import Page from './Site.js'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'

class Verify extends Page {
    get LocationMenu() {
        return $('div[class="sui-bg-primary sui-transition-opacity sui-ease-in-out sui-duration-300 sui-outline-none sui-fixed sui-w-full sui-rounded-t-lg sui-shadow-none sui-overflow-y-scroll lg:sui-relative lg:sui-h-full lg:sui-row-span-full lg:sui-col-span-5 lg:sui-rounded-base lg:sui-shadow-lg xl:sui-row-start-1 xl:sui-row-span-full xl:sui-col-span-4 xl:sui-rounded-base xl:sui-shadow-xl lg:sui-col-start-1 xl:sui-col-start-1"]')
    }
    get errorMessage() {
        return $('div[class="sui-flex sui-w-full sui-bg-subtle sui-p-4 sui-px-4 sui-py-3 sui-border-l-4 sui-border-solid sui-border-l-danger"]')
    }
    get searchResult1() {
        return $('//span[text()="Copper Hills"]')
    }
    get searchResult2() {
        return $('//span[text()="American Fork"]')
    }
    get searchResult3() {
        return $('//span[text()="Spring Hill"]')
    }
    get searchResult4() {
        return $('//span[text()="West Jordan"]')
    }
    get badSearch() {
        return $('div[class="sui-flex sui-w-full sui-bg-subtle sui-p-4 sui-px-4 sui-py-3 sui-border-l-4 sui-border-solid sui-border-l-danger"]')
    }
    get storeName() {
        return $('//div[@class="sui-absolute sui-left-0 sui-right-0 sui-bottom-0 lg:sui-static lg:sui-w-auto print:sui-contents sui-hidden lg:sui-inline"]/div/button/div/p')
    }
    get mapInitialPosition() {
        return $('//div[@style="z-index: 1002; position: absolute; left: 20280.9px; top: 6337.94px; display: none;"]')
    }
    get mapSecondPosition() {
        return $('//div[@style="z-index: 1002; position: absolute; left: 20749.8px; top: 6291.06px; display: none;"]')
    }
    get mapThirdPosition() {
        return $('//div[@style="z-index: 1002; position: absolute; left: 10765.6px; top: 3149.58px; display: none;"]')
    }
    async verifyMenu() {
        await expect(this.LocationMenu).toBeExisting()
    }
    async verifyError() {
        await expect(this.errorMessage).toBeExisting()
    }
    async verifySearch1() {
        await expect(this.searchResult1).toBeExisting()
    }
    async verifySearch2() {
        if ($('//p[text()="Lehi, UT"]').isExisting()) {
            await $('//p[text()="Lehi, UT"]').click()
        }
        await expect(this.searchResult2).toBeExisting()
    }
    async verifySearch3() {
        if ($('//p[text()="Florida"]').isExisting()) {
            await $('//p[text()="Florida"]').click()
        }
        await expect(this.searchResult3).toBeExisting()
    }
    async verifySearch4() {
        await expect(this.searchResult4).toBeExisting()
    }
    async verifyBadSearch() {
        await expect(this.badSearch).toBeExisting()
    }
    async verifyStore() {
        await expect(this.storeName).toHaveText('West Jordan')
    }
    async verifyLocator() {
        await expect(browser).toHaveUrl('https://www.homedepot.com/l/store-locator')
    }
    async verifyCurbside() {
        await expect(browser).toHaveUrl('https://www.homedepot.com/c/curbside_pickup')
    }
    async verifyLocalAd() {
        await expect(browser).toHaveUrl('https://www.homedepot.com/c/localad')
    }
    async verifyWorkshop() {
        await expect(browser).toHaveUrl('https://www.homedepot.com/workshops/')
    }
    async verifyStorePage() {
        await expect(browser).toHaveUrl('https://www.homedepot.com/l/West-Jordan/UT/West-Jordan/84088/4410')
    }
    async verifyCloseMenu() {
        await expect(this.LocationMenu).not.toBeExisting()
    }
    async verifyHome() {
        await expect(browser).toHaveUrl('https://www.homedepot.com/')
    }
    async verifyCart() {
        await expect(browser).toHaveUrl('https://www.homedepot.com/cart')
    }
    async verifyProduct() {
        await expect($('//button[text()="Add to Cart"]')).toBeExisting()
    }
    async verifyHardware() {
        await expect(browser).toHaveUrl('https://www.homedepot.com/b/Hardware/N-5yc1vZc21m')
    }
    async verifySideMenu() {
        await expect($('div[class="sui-bg-primary sui-transition-opacity sui-ease-in-out sui-duration-300 sui-outline-none sui-fixed sui-w-full sui-rounded-t-lg sui-shadow-none sui-overflow-y-scroll lg:sui-relative lg:sui-h-full lg:sui-row-span-full lg:sui-col-span-5 lg:sui-rounded-base lg:sui-shadow-lg xl:sui-row-start-1 xl:sui-row-span-full xl:sui-col-span-4 xl:sui-rounded-base xl:sui-shadow-xl lg:sui-col-start-8 xl:sui-col-start-9"]')).toBeExisting()
    }
    async verifyCreditCard() {
        await expect(browser).toHaveUrl('https://www.homedepot.com/c/credit-center')
    }
    async verifyShopRoom() {
        await expect($('//div[@class="sui-bg-primary sui-transition-opacity sui-ease-in-out sui-duration-300 sui-outline-none sui-fixed sui-w-full sui-rounded-t-lg sui-shadow-none sui-overflow-y-scroll lg:sui-relative lg:sui-h-full lg:sui-row-span-full lg:sui-col-span-5 lg:sui-rounded-base lg:sui-shadow-lg xl:sui-row-start-1 xl:sui-row-span-full xl:sui-col-span-4 xl:sui-rounded-base xl:sui-shadow-xl lg:sui-col-start-8 xl:sui-col-start-9"]/div[1]/div/div[2]/div/p')).toHaveText('Shop By Room')
    }
    async verifyBathroom() {
        await expect(browser).toHaveUrl('https://www.homedepot.com/room/bathroom')
    }
    async verifyCategory1() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Holiday-Decorations/N-5yc1vZbd6e')
    }
    async verifyCategory2() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/c/Savings_Center')
    }
    async verifyCategory3() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Appliances/N-5yc1vZbv1w')
    }
    async verifyCategory4() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Bath/N-5yc1vZbzb3')
    }
    async verifyCategory5() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Window-Treatments/N-5yc1vZar4w')
    }
    async verifyCategory6() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Building-Materials/N-5yc1vZaqns')
    }
    async verifyCategory7() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Cleaning/N-5yc1vZbqsi')
    }
    async verifyCategory8() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Home-Decor/N-5yc1vZas6p?cm_sp=d-flyout-Decor_and_Furniture')
    }
    async verifyCategory9() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Electrical/N-5yc1vZarcd')
    }
    async verifyCategory10() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Flooring/N-5yc1vZaq7r')
    }
    async verifyCategory11() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Hardware/N-5yc1vZc21m')
    }
    async verifyCategory12() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Heating-Venting-Cooling/N-5yc1vZc4k8')
    }
    async verifyCategory13() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Kitchen/N-5yc1vZar4i')
    }
    async verifyCategory14() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Outdoors-Garden-Center/N-5yc1vZbx6k')
    }
    async verifyCategory15() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Lighting/N-5yc1vZbvn5')
    }
    async verifyCategory16() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Outdoors/N-5yc1vZbx82')
    }
    async verifyCategory17() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Paint/N-5yc1vZar2d')
    }
    async verifyCategory18() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Plumbing/N-5yc1vZbqew')
    }
    async verifyCategory19() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Storage-Organization/N-5yc1vZas7e')
    }
    async verifyCategory20() {
        await expect (browser).toHaveUrl('https://www.homedepot.com/b/Tools/N-5yc1vZc1xy')
    }
    async verifyMapMove() {
        await expect(this.mapInitialPosition).not.toBeExisting()
    }
    async verifyZoomout() {
        await expect(this.mapSecondPosition).not.toBeExisting()
    }
    async verifyZoomin() {
        await expect(this.mapThirdPosition).not.toBeExisting()
    }
    async verifyBing() {
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await expect (browser).toHaveUrl(expect.stringContaining('bing.com/maps'))
    }
}
export default new Verify();