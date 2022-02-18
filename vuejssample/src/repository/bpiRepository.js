import Repository from './repository'

const resource = 'bpi'

export default {
    currentprice() {
        return Repository.get(`/${resource}/currentprice.json`)
    }
}
