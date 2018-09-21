import fuzzy from 'fuzzy'

import { issues } from './stub'

const search = (searchString, data, tutVersion) =>
  data.reduce(
    (acc, cur) => {
      const limitVersion = !!tutVersion
      const tutorials = cur.Tutorials || []
      const updates = cur.Updates || []

      const tutorialMatches = tutorials.filter(t =>
        (!limitVersion || tutVersion === t.version) &&
        fuzzy.filter(
          searchString,
          [t.name, t.desc],
        ).map(e => e.string).length !== 0
      )

      const updateMatches = updates.filter(u =>
        fuzzy.filter(searchString, [u]).map(e => e.string).length !== 0
      )

      return {
        [cur.Issue]: { tutorials: tutorialMatches, updates: updateMatches },
        ...acc,
      }
    },
    {}
  )


export default search