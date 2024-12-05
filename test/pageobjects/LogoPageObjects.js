import { $ } from '@wdio/globals'
import Page from './Site.js'

class Objects extends Page {
    async logo() {
        await $('//a[@data-testid="header-thd-logo"]').click()
    }
    async cartIcon() {
        await $('//div[@class="sui-hidden lg:sui-contents"]/div[@data-testid="header-adaptive-ui-primary"]/div/div/a').click()
    }
    async item() {
        await $('//div[@id="swiper-wrapper-d25f929d265c216a"]/div[1]').click()
    }
    async services() {
        await $('//div[@class="print:sui-contents sui-fixed sui-w-full sui-left-0 sui-bottom-0 sui-transition-[bottom] sui-duration-500 sui-border-solid sui-border-t-1 sui-border-primary lg:sui-static lg:sui-w-auto lg:sui-border-t-0 lg:sui-left-auto lg:sui-bottom-auto lg:sui-bg-inherit sui-bg-primary sui-text-primary [.header-out-of-view_&]:-sui-bottom-20"]/div/button[2]').click()
    }
    async cards() {
        await $('//span[text()="Home Depot Credit Cards"]').click()
    }
    async hardware() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[11]').click()
    }
    async shopAll() {
        await $('//div[@class="print:sui-contents sui-fixed sui-w-full sui-left-0 sui-bottom-0 sui-transition-[bottom] sui-duration-500 sui-border-solid sui-border-t-1 sui-border-primary lg:sui-static lg:sui-w-auto lg:sui-border-t-0 lg:sui-left-auto lg:sui-bottom-auto lg:sui-bg-inherit sui-bg-primary sui-text-primary [.header-out-of-view_&]:-sui-bottom-20"]/div/button[1]').click()
    }
    async room() {
        await $('//span[text()="Shop By Room"]').click()
    }
    async bathroom() {
        await $('//span[text()="Bathroom"]').click()
    }
    open() {
        return super.open('open')
    }
}

export default new Objects();