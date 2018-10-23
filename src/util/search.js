import fuzzy from 'fuzzy'

/**
 * search returns items out of the Tutorials and Update lists of a newsletter
 * that match the search string.  This checks the search string in a fuzzy
 * manner against the Tutorial name and description and the update string.
 * The result returns the complete Tutorial object and update string as
 * described below.
 *
 * @param {string} searchString - the thing you want to find
 * @param {object} data - the newsletter yaml; no concrete format right now
 * @param {string} tutVersion - this is matched vs the `version` attribute of
 *   a tutorial to limit results to a specific version
 * @returns { [issueNumber: number]: { tutorials: object, updates: string} }
 *   A mapping of the issue number to an object containing the tutorials and
 *   update summaries that matched.
 */

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
          [t.name, t.desc, ...(t.tags || [])],
        ).map(e => e.string).length !== 0
      )

      const updateMatches = updates.filter(u =>
        fuzzy.filter(searchString, [u]).map(e => e.string).length !== 0
      )

      return {
        [cur.Issue]: { ref: cur, tutorials: tutorialMatches, updates: updateMatches },
        ...acc,
      }
    },
    {},
  )

export const simpleSearch = (searchString, data, tutVersion) => {
  const ss = searchString.toLowerCase()

  return data.reduce(
    (acc, cur) => {
      const limitVersion = !!tutVersion
      const tutorials = cur.Tutorials || []
      const updates = cur.Updates || []

      const tutorialMatches = tutorials.filter(t => {
        const versionMatch = (!limitVersion || tutVersion === t.version)
        const nameMatch = t.name.toLowerCase().indexOf(ss) !== -1
        const descMatch = t.desc.toLowerCase().indexOf(ss) !== -1
        const tagMatch = (t.tags || []).filter(t => t.toLowerCase().indexOf(ss) !== -1).length !== 0
        return versionMatch && (nameMatch || descMatch || tagMatch)
      })

      const updateMatches = updates.filter(u => u.toLowerCase().indexOf(ss) !== -1)

      return {
        [cur.Issue]: { ref: cur, tutorials: tutorialMatches, updates: updateMatches },
        ...acc,
      }
    },
    {},
  )
}

export default search