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
}
export default new Verify();