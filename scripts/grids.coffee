levelList = ["level1"]

externals = ["lodash"].concat("levels/#{a}" for a in levelList)

define externals, (lodash, levels...) ->
    levelHash = lodash.zipObject levelList, levels
    getLevel : (levelName) -> return levelHash[levelName]