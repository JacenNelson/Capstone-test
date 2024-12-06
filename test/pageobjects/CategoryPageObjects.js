import { $ } from '@wdio/globals'
import Site from './Site.js'

class Objects extends Site {
    open() {
        return super.open('open')
    }
    async firstItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[1]').click()
    }
    async secondItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[2]').click()
    }
    async thirdItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[3]').click()
    }
    async fourthItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[4]').click()
    }
    async fifthItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[5]').click()
    }
    async sixthItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[6]').click()
    }
    async seventhItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[7]').click()
    }
    async eighthItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[8]').click()
    }
    async ninthItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[9]').click()
    }
    async tenthItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[10]').click()
    }
    async eleventhItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[11]').click()
    }
    async twelfthItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[12]').click()
    }
    async thirteenthItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[13]').click()
    }
    async fourteenthItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[14]').click()
    }
    async fifteenthItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[15]').click()
    }
    async sixteenthItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[16]').click()
    }
    async seventeenthItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[17]').click()
    }
    async eighteenthItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[18]').click()
    }
    async nineteenthItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[19]').click()
    }
    async twentiethItem() {
        await $('//div[@class="sui-grid sui-grid-cols-1 sm:sui-grid-cols-3 lg:sui-grid-cols-5 sui-gap-4 sui-mt-5"]/div[20]').click()
    }
    async homeBtn() {
        await $('//a[@data-testid="header-thd-logo"]').click()
    }
}

export default new Objects();