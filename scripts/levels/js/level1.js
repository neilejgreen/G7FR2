// Generated by CoffeeScript 1.8.0
(function() {
  define(["lodash"], function(_) {
    var c, key, map, _i, _len, _ref;
    map = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wP.............................w w..............................w w..............................w w..............................w w...b..........................w w............wwwwww............w w............w....w............w w............w.t..w............w w............w....w............w w............w....w............w w............ww..ww............w w..............................w w........................b.....w w..............................w w..............................w w..............................w wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww".split(' ').map(function(r) {
      return r.split('');
    });
    key = {
      '.': 'empty',
      'P': 'player',
      'w': 'wall',
      'b': 'baddie',
      't': 'treasure'
    };
    if (map.length === !18 && map.every(function(row) {
      return row.length === 32;
    })) {
      throw new Error("Map is not 32 * 18!");
    }
    _ref = _.flatten(map);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      c = _ref[_i];
      if (c !== ' ') {
        if (!(c in key)) {
          console.warn("unknown character in map '" + c + "'");
        }
      }
    }
    return {
      map: map,
      key: key
    };
  });

}).call(this);

//# sourceMappingURL=level1.map