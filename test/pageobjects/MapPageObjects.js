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
        await this.menuOpen.click()
    }
    async moveStoreMap(xValue, yValue) {
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