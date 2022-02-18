import BpiRepository from './bpiRepository'

const repositories = {
  bpi: BpiRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
