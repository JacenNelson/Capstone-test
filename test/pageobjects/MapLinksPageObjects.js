import { $ } from '@wdio/globals'
import Page from './Site.js'

class Objects extends Page {
    get menuOpen() {
        return $('//div[@class="sui-absolute sui-left-0 sui-right-0 sui-bottom-0 lg:sui-static lg:sui-w-auto print:sui-contents sui-hidden lg:sui-inline"]/div/button')
    }
    get useCurrentLocation() {
        return $('//p[text()="Use Current Location"]')
    }
    async openMenu() {
        this.menuOpen.click()
    }
    async currentLocationClick() {
        this.useCurrentLocation.click()
    }
    open () {
        return super.open('login');
    }
}

export default new Objects();