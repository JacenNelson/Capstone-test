import { $ } from '@wdio/globals'
import Site from './Site.js'
import Verify from '../pageobjects/Expects.js'

class CategoryLinks extends Site {
    testStart() {
        return super.start('open')
    }
    get homeBtn() {
        return $('//a[@data-testid="header-thd-logo"]')
    }
    async test() {
        await this.testStart()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[1]').click()
        await Verify.verifyCategory('Holiday')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[2]').click()
        await Verify.verifyCategory('Savings')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[3]').click()
        await Verify.verifyCategory('Appliances')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[4]').click()
        await Verify.verifyCategory('Bath')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[5]').click()
        await Verify.verifyCategory('Window')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[6]').click()
        await Verify.verifyCategory('Building')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[7]').click()
        await Verify.verifyCategory('Cleaning')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[8]').click()
        await Verify.verifyCategory('Home-Decor')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[9]').click()
        await Verify.verifyCategory('Electrical')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[10]').click()
        await Verify.verifyCategory('Flooring')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[11]').click()
        await Verify.verifyCategory('Hardware')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[12]').click()
        await Verify.verifyCategory('Heating')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[13]').click()
        await Verify.verifyCategory('Kitchen')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[14]').click()
        await Verify.verifyCategory('Garden')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[15]').click()
        await Verify.verifyCategory('Lighting')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[16]').click()
        await Verify.verifyCategory('Outdoors')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[17]').click()
        await Verify.verifyCategory('Paint')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[18]').click()
        await Verify.verifyCategory('Plumbing')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[19]').click()
        await Verify.verifyCategory('Storage')
        await this.homeBtn.click()
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[20]').click()
        await Verify.verifyCategory('Tools')
    }
}

export default new CategoryLinks();