import { $ } from '@wdio/globals'
import Page from './Site.js'
import { expect } from '@wdio/globals'

class Verify extends Page {
    get LocationMenu() {
        return $('div[class="sui-bg-primary sui-transition-opacity sui-ease-in-out sui-duration-300 sui-outline-none sui-fixed sui-w-full sui-rounded-t-lg sui-shadow-none sui-overflow-y-scroll lg:sui-relative lg:sui-h-full lg:sui-row-span-full lg:sui-col-span-5 lg:sui-rounded-base lg:sui-shadow-lg xl:sui-row-start-1 xl:sui-row-span-full xl:sui-col-span-4 xl:sui-rounded-base xl:sui-shadow-xl lg:sui-col-start-1 xl:sui-col-start-1"]')
    }
    verifyMenu() {
        expect(this.LocationMenu).toBeExisting
    }
}
export default new Verify();