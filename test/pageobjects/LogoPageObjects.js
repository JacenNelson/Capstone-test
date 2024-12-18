import { $ } from '@wdio/globals'
import Page from './Site.js'
import Verify from '../pageobjects/Expects.js'

class logoTest extends Page {
    async homeClick() {
        await $('//a[@data-testid="header-thd-logo"]').click()
        await Verify.verifyHome()
    }
    async fullTest(){
        await this.testStart()
        await $('//div[@class="sui-hidden lg:sui-contents"]/div[@data-testid="header-adaptive-ui-primary"]/div/div/a').click()
        await this.homeClick()
        await $('//div[@class="endcap-section sui-w-full sui-flex sui-gap-4 sui-pt-5"]/div/div/div/div[1]/div[1]/div/div/div/a').click()
        await this.homeClick()
        await $('//div[@class="print:sui-contents sui-fixed sui-w-full sui-left-0 sui-bottom-0 sui-transition-[bottom] sui-duration-500 sui-border-solid sui-border-t-1 sui-border-primary lg:sui-static lg:sui-w-auto lg:sui-border-t-0 lg:sui-left-auto lg:sui-bottom-auto lg:sui-bg-inherit sui-bg-primary sui-text-primary [.header-out-of-view_&]:-sui-bottom-20"]/div/button[2]').moveTo()
        await $('//div[@class="print:sui-contents sui-fixed sui-w-full sui-left-0 sui-bottom-0 sui-transition-[bottom] sui-duration-500 sui-border-solid sui-border-t-1 sui-border-primary lg:sui-static lg:sui-w-auto lg:sui-border-t-0 lg:sui-left-auto lg:sui-bottom-auto lg:sui-bg-inherit sui-bg-primary sui-text-primary [.header-out-of-view_&]:-sui-bottom-20"]/div/button[2]').click({ duration:5000 })
        if ($('div[class="sui-bg-primary sui-transition-opacity sui-ease-in-out sui-duration-300 sui-outline-none sui-fixed sui-w-full sui-rounded-t-lg sui-shadow-none sui-overflow-y-scroll lg:sui-relative lg:sui-h-full lg:sui-row-span-full lg:sui-col-span-5 lg:sui-rounded-base lg:sui-shadow-lg xl:sui-row-start-1 xl:sui-row-span-full xl:sui-col-span-4 xl:sui-rounded-base xl:sui-shadow-xl lg:sui-col-start-8 xl:sui-col-start-9"]').isExisting()) {
            await $('//div[@class="print:sui-contents sui-fixed sui-w-full sui-left-0 sui-bottom-0 sui-transition-[bottom] sui-duration-500 sui-border-solid sui-border-t-1 sui-border-primary lg:sui-static lg:sui-w-auto lg:sui-border-t-0 lg:sui-left-auto lg:sui-bottom-auto lg:sui-bg-inherit sui-bg-primary sui-text-primary [.header-out-of-view_&]:-sui-bottom-20"]/div/button[2]').moveTo()
        }
        else {
        await $('//div[@class="print:sui-contents sui-fixed sui-w-full sui-left-0 sui-bottom-0 sui-transition-[bottom] sui-duration-500 sui-border-solid sui-border-t-1 sui-border-primary lg:sui-static lg:sui-w-auto lg:sui-border-t-0 lg:sui-left-auto lg:sui-bottom-auto lg:sui-bg-inherit sui-bg-primary sui-text-primary [.header-out-of-view_&]:-sui-bottom-20"]/div/button[2]').click()
    }
        await $('//span[text()="Home Depot Credit Cards"]').click()
        await this.homeClick()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[11]').click()
        await this.homeClick()
        await $('//div[@class="print:sui-contents sui-fixed sui-w-full sui-left-0 sui-bottom-0 sui-transition-[bottom] sui-duration-500 sui-border-solid sui-border-t-1 sui-border-primary lg:sui-static lg:sui-w-auto lg:sui-border-t-0 lg:sui-left-auto lg:sui-bottom-auto lg:sui-bg-inherit sui-bg-primary sui-text-primary [.header-out-of-view_&]:-sui-bottom-20"]/div/button[1]').click({ duration:5000 })
        if ($('div[class="sui-bg-primary sui-transition-opacity sui-ease-in-out sui-duration-300 sui-outline-none sui-fixed sui-w-full sui-rounded-t-lg sui-shadow-none sui-overflow-y-scroll lg:sui-relative lg:sui-h-full lg:sui-row-span-full lg:sui-col-span-5 lg:sui-rounded-base lg:sui-shadow-lg xl:sui-row-start-1 xl:sui-row-span-full xl:sui-col-span-4 xl:sui-rounded-base xl:sui-shadow-xl lg:sui-col-start-8 xl:sui-col-start-9"]').isExisting()) {
            await $('//div[@class="print:sui-contents sui-fixed sui-w-full sui-left-0 sui-bottom-0 sui-transition-[bottom] sui-duration-500 sui-border-solid sui-border-t-1 sui-border-primary lg:sui-static lg:sui-w-auto lg:sui-border-t-0 lg:sui-left-auto lg:sui-bottom-auto lg:sui-bg-inherit sui-bg-primary sui-text-primary [.header-out-of-view_&]:-sui-bottom-20"]/div/button[1]').moveTo()
        }
        else {
        await $('//div[@class="print:sui-contents sui-fixed sui-w-full sui-left-0 sui-bottom-0 sui-transition-[bottom] sui-duration-500 sui-border-solid sui-border-t-1 sui-border-primary lg:sui-static lg:sui-w-auto lg:sui-border-t-0 lg:sui-left-auto lg:sui-bottom-auto lg:sui-bg-inherit sui-bg-primary sui-text-primary [.header-out-of-view_&]:-sui-bottom-20"]/div/button[1]').click()
        }
        await $('//span[text()="Shop By Room"]').click()
        await $('//span[text()="Bathroom"]').click()
        await this.homeClick()
    }
    testStart() {
        return super.start('open')
    }
}

export default new logoTest();