import { $ } from '@wdio/globals'
import Page from './Site.js'
import Verify from './Expects.js'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'

class Links extends Page {
    get menuOpen() {
        return $('//div[@class="sui-absolute sui-left-0 sui-right-0 sui-bottom-0 lg:sui-static lg:sui-w-auto print:sui-contents sui-hidden lg:sui-inline"]/div/button')
    }
    get useCurrentLocation() {
        return $('//p[text()="Use Current Location"]')
    }
    get searchBar() {
        return $('input[placeholder="ZIP Code, City, State, or Store #"]')
    }
    get magnifyingGlass() {
        return $('button[class="sui-inline-flex sui-items-center sui-justify-center sui-border-none sui-border-0 focus-visible:sui-bg-button-focus focus-visible:sui-outline-none focus-visible:sui-fill-primary sui-h-6 sui-w-6 hover:sui-fill-brand sui-fill-primary"]')
    }
    get shopThisStore() {
        return $('//div[@id="js-results"]/div[1]/div[2]/div/div/div/div[5]/div/button')
    }
    get storeLocator() {
        return $('//div[@class="sui-bg-primary sui-transition-opacity sui-ease-in-out sui-duration-300 sui-outline-none sui-fixed sui-w-full sui-rounded-t-lg sui-shadow-none sui-overflow-y-scroll lg:sui-relative lg:sui-h-full lg:sui-row-span-full lg:sui-col-span-5 lg:sui-rounded-base lg:sui-shadow-lg xl:sui-row-start-1 xl:sui-row-span-full xl:sui-col-span-4 xl:sui-rounded-base xl:sui-shadow-xl lg:sui-col-start-1 xl:sui-col-start-1"]/div[2]/div/div[2]/div[3]/div/div[3]/div/a')
    }
    get curbsideBTN() {
        return $('//p[text()="Curbside"]')
    }
    get localAdBTN() {
        return $('//p[text()="Local Ad"]')
    }
    get workshopBTN() {
        return $('//p[text()="Workshops"]')
    }
    get nameOfStore() {
        return $('a[href="/l/West-Jordan/UT/West-Jordan/84088/4410"]')
    }
    get closeBTN() {
        return $('button[aria-label="drawer-close"]')
    }
    async openMenu() {
        await $('html').waitForStable()
        await this.menuOpen.click()
    }
    async repeatedClick() {
        let isVerified = await Verify.LocationMenu.isExisting();
        while (!isVerified) {
            await this.openMenu();
            isVerified = await Verify.LocationMenu.isExisting();
        }
    }
    async typeSearch(search) {
        await this.searchBar.clearValue()
        await this.searchBar.addValue(search)
        await this.magnifyingGlass.click()
    }
    testStart () {
        return super.start('login')
    }
    async searchMenu() {
        await this.testStart()
        await this.menuOpen.click()
        await expect(Verify.LocationMenu).toBeExisting()
        await this.useCurrentLocation.click()
        await expect(Verify.errorMessage).toBeExisting()
        await this.searchBar.click()
        await this.typeSearch(84096)
        await expect(Verify.searchResult1).toBeExisting()
        await this.typeSearch('Lehi')
        if ($('//p[text()="Lehi, UT"]').isExisting()) {
            await $('//p[text()="Lehi, UT"]').click()
        }
        await expect(Verify.searchResult2).toBeExisting()
        await this.typeSearch('Florida')
        if ($('//p[text()="Florida"]').isExisting()) {
            await $('//p[text()="Florida"]').click()
        }
        await expect(Verify.searchResult3).toBeExisting()
        await this.typeSearch(1111)
        await expect(Verify.badSearch).toBeExisting()
        await this.typeSearch(4410)
        await expect(Verify.searchResult4).toBeExisting()
        await this.shopThisStore.click()
        await expect(Verify.storeName).toHaveText('West Jordan')
    }
    async menuLinks() {
        await this.repeatedClick()
        await this.storeLocator.click()
        await expect(browser).toHaveUrl('https://www.homedepot.com/l/store-locator')
        await this.repeatedClick()
        await this.curbsideBTN.click()
        await expect(browser).toHaveUrl('https://www.homedepot.com/c/curbside_pickup')
        await this.repeatedClick()
        await this.localAdBTN.click()
        await expect(browser).toHaveUrl('https://www.homedepot.com/c/localad')
        await this.repeatedClick()
        await this.workshopBTN.click()
        await expect(browser).toHaveUrl('https://www.homedepot.com/workshops/')
        await this.repeatedClick()
        await this.nameOfStore.click()
        await expect(browser).toHaveUrl('https://www.homedepot.com/l/West-Jordan/UT/West-Jordan/84088/4410')
        await this.repeatedClick()
        await this.closeBTN.click()
        await expect(Verify.LocationMenu).not.toBeExisting()
    }
    async fullMenuTest() {
        await this.searchMenu()
        await this.menuLinks()
    }
}

export default new Links();