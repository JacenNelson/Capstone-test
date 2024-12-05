import { $ } from '@wdio/globals'
import Page from './Site.js'

class Objects extends Page {
    get logo() {
        return $('//a[@data-testid="header-thd-logo"]')
    }
}

export default new Objects();