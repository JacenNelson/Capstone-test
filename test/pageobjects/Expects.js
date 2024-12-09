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
    get searchresult3() {
        return $('//span[text()="Spring Hill"]')
    }
    get searchResult4() {
        return $('//span[text()="West Jordan"]')
    }
    get badSearch() {
        return $('div[class="sui-flex sui-w-full sui-bg-subtle sui-p-4 sui-px-4 sui-py-3 sui-border-l-4 sui-border-solid sui-border-l-danger"]')
    }
    get storeName() {
        return $('//div[@class="sui-absolute sui-left-0 sui-right-0 sui-bottom-0 lg:sui-static lg:sui-w-auto print:sui-contents sui-hidden lg:sui-inline"]/div/button/p')
    }
    async verifyMenu() {
        expect(this.LocationMenu).toBeExisting()
    }
    async verifyError() {
        expect(this.errorMessage).toBeExisting()
    }
    async verifySearch1() {
        expect(this.searchResult1).toBeExisting()
    }
    async verifySearch2() {
        if ($('//p[text()="Lehi, UT"]').isExisting()) {
            await $('//p[text()="Lehi, UT"]').click()
        }
        expect(this.searchResult2).toBeExisting()
    }
    async verifySearch3() {
        if ($('//p[text()="Florida"]').isExisting()) {
            await $('//p[text()="Florida"]').click()
        }
        expect(this.searchResult3).toBeExisting()
    }
    async verifySearch4() {
        expect(this.searchResult4).toBeExisting()
    }
    async verifyBadSearch() {
        expect(this.badSearch).toBeExisting()
    }
    async verifyStore() {
        expect(this.storeName).toHaveText('West Jordan')
    }
    async verifyLocator() {
        expect(browser).toHaveUrl('https://www.homedepot.com/l/store-locator')
    }
    async verifyCurbside() {
        expect(browser).toHaveUrl('https://www.homedepot.com/c/curbside_pickup')
    }
    async verifyLocalAd() {
        expect(browser).toHaveUrl('https://www.homedepot.com/c/localad')
    }
    async verifyWorkshop() {
        expect(browser).toHaveUrl('https://www.homedepot.com/workshops/')
    }
    async verifyStorePage() {
        expect(browser).toHaveUrl('https://www.homedepot.com/l/West-Jordan/UT/West-Jordan/84088/4410')
    }
    async verifyCloseMenu() {
        expect(this.LocationMenu).not.toBeExisting()
    }
    async verifyHome() {
        expect(browser).toHaveUrl('https://www.homedepot.com')
    }
    async verifyCart() {
        expect(browser).toHaveUrl('https://www.homedepot.com/cart')
    }
    async verifyProduct() {
        expect($('//button[text()="Add to Cart"]')).toBeExisting()
    }
    async verifyHardware() {
        expect(browser).toHaveUrl('https://www.homedepot.com/b/Hardware/N-5yc1vZc21m')
    }
    async verifySideMenu() {
        expect($('div[class="sui-bg-primary sui-transition-opacity sui-ease-in-out sui-duration-300 sui-outline-none sui-fixed sui-w-full sui-rounded-t-lg sui-shadow-none sui-overflow-y-scroll lg:sui-relative lg:sui-h-full lg:sui-row-span-full lg:sui-col-span-5 lg:sui-rounded-base lg:sui-shadow-lg xl:sui-row-start-1 xl:sui-row-span-full xl:sui-col-span-4 xl:sui-rounded-base xl:sui-shadow-xl lg:sui-col-start-8 xl:sui-col-start-9"]')).toBeExisting()
    }
    async verifyCreditCard() {
        expect(browser).toHaveUrl('https://www.homedepot.com/c/credit-center')
    }
    async verifyShopRoom() {
        expect($('//div[@class="sui-bg-primary sui-transition-opacity sui-ease-in-out sui-duration-300 sui-outline-none sui-fixed sui-w-full sui-rounded-t-lg sui-shadow-none sui-overflow-y-scroll lg:sui-relative lg:sui-h-full lg:sui-row-span-full lg:sui-col-span-5 lg:sui-rounded-base lg:sui-shadow-lg xl:sui-row-start-1 xl:sui-row-span-full xl:sui-col-span-4 xl:sui-rounded-base xl:sui-shadow-xl lg:sui-col-start-8 xl:sui-col-start-9"]/div[1]/div/div[2]/div/p')).toHaveText('Shop By Room')
    }
    async verifyBathroom() {
        expect(browser).toHaveUrl('https://www.homedepot.com/room/bathroom')
    }
    async verifyCategory1() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Holiday-Decorations/N-5yc1vZbd6e')
    }
    async verifyCategory2() {
        expect (browser).toHaveUrl('https://www.homedepot.com/c/Savings_Center')
    }
    async verifyCategory3() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Appliances/N-5yc1vZbv1w')
    }
    async verifyCategory4() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Bath/N-5yc1vZbzb3')
    }
    async verifyCategory5() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Window-Treatments/N-5yc1vZar4w')
    }
    async verifyCategory6() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Building-Materials/N-5yc1vZaqns')
    }
    async verifyCategory7() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Cleaning/N-5yc1vZbqsi')
    }
    async verifyCategory8() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Home-Decor/N-5yc1vZas6p?cm_sp=d-flyout-Decor_and_Furniture')
    }
    async verifyCategory9() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Electrical/N-5yc1vZarcd')
    }
    async verifyCategory10() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Flooring/N-5yc1vZaq7r')
    }
    async verifyCategory11() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Hardware/N-5yc1vZc21m')
    }
    async verifyCategory12() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Heating-Venting-Cooling/N-5yc1vZc4k8')
    }
    async verifyCategory13() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Kitchen/N-5yc1vZar4i')
    }
    async verifyCategory14() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Outdoors-Garden-Center/N-5yc1vZbx6k')
    }
    async verifyCategory15() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Lighting/N-5yc1vZbvn5')
    }
    async verifyCategory16() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Outdoors/N-5yc1vZbx82')
    }
    async verifyCategory17() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Paint/N-5yc1vZar2d')
    }
    async verifyCategory18() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Plumbing/N-5yc1vZbqew')
    }
    async verifyCategory19() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Storage-Organization/N-5yc1vZas7e')
    }
    async verifyCategory20() {
        expect (browser).toHaveUrl('https://www.homedepot.com/b/Tools/N-5yc1vZc1xy')
    }
    async verifyBing() {
        expect (browser).toHaveUrl('https://www.bing.com/maps?cp=40.618122%7E-112.284393&lvl=10.0&FORM=BMLOGO')
    }
}
export default new Verify();