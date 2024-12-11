import { $ } from '@wdio/globals'
import Site from './Site.js'

class Objects extends Site {
    get menuOpen() {
        return $('//div[@class="sui-absolute sui-left-0 sui-right-0 sui-bottom-0 lg:sui-static lg:sui-w-auto print:sui-contents sui-hidden lg:sui-inline"]/div/button')
    }
    get storeMap() {
        return $('div[data-testid="store-map"]')
    }
    get zoomOut() {
        return $('//div[@id="MicrosoftNav"]/a[1]')
    }
    get zoomIn() {
        return $('//div[@id="MicrosoftNav"]/a[2]')
    }
    get bingLogo() {
        return $('div[class="bingLogoLight bm_bingLogo"]')
    }
    async openMenu() {
        await this.menuOpen.click({duration: 5000})
        if ($('div[class="sui-bg-primary sui-transition-opacity sui-ease-in-out sui-duration-300 sui-outline-none sui-fixed sui-w-full sui-rounded-t-lg sui-shadow-none sui-overflow-y-scroll lg:sui-relative lg:sui-h-full lg:sui-row-span-full lg:sui-col-span-5 lg:sui-rounded-base lg:sui-shadow-lg xl:sui-row-start-1 xl:sui-row-span-full xl:sui-col-span-4 xl:sui-rounded-base xl:sui-shadow-xl lg:sui-col-start-1 xl:sui-col-start-1"]').isExisting()) {
            await this.menuOpen.moveTo()
        }
        else {
            await this.menuOpen.click()
        }
    }
    async moveStoreMap(xValue, yValue) {
        await $('//div[@id="MicrosoftNav"]').waitForStable()
        await this.storeMap.dragAndDrop({ x: xValue, y: yValue,}, 1000)
    }
    async clickZoomOut() {
        await this.zoomOut.click()
    }
    async clickZoomIn() {
        await this.zoomIn.click()
    }
    async clickBingLogo() {
        await this.bingLogo.click()
    }
    open () {
        return super.open('login')
    }
}

export default new Objects();