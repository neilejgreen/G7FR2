// Generated by CoffeeScript 1.8.0
(function() {
  define(["actors", "grid", "../../lib/lodash"], function(actors, grid, _) {
    var actorCode, actorType, ci, gridCols, gridRows, height, ri, row, stage, width, x, y, _i, _j, _len, _len1, _ref, _ref1, _ref2;
    _ref = [960, 540], width = _ref[0], height = _ref[1];
    stage = [];
    _ref1 = [grid.map.length, grid.map[0].length], gridRows = _ref1[0], gridCols = _ref1[1];
    _ref2 = grid.map;
    for (ri = _i = 0, _len = _ref2.length; _i < _len; ri = ++_i) {
      row = _ref2[ri];
      for (ci = _j = 0, _len1 = row.length; _j < _len1; ci = ++_j) {
        actorCode = row[ci];
        actorType = grid.key[actorCode];
        x = ci / gridCols * width;
        y = ri / gridRows * height;
        stage.push(actors[actorType]({
          x: x,
          y: y
        }));
      }
    }
    stage = _.compact(stage);
    return {
      width: width,
      height: height,
      update: function(state) {
        var actor, _k, _len2, _results;
        _results = [];
        for (_k = 0, _len2 = stage.length; _k < _len2; _k++) {
          actor = stage[_k];
          _results.push(actor.update(state));
        }
        return _results;
      },
      render: function(state, display) {
        var actor, targets;
        targets = _.flatten((function() {
          var _k, _len2, _results;
          _results = [];
          for (_k = 0, _len2 = stage.length; _k < _len2; _k++) {
            actor = stage[_k];
            _results.push(actor.getRenderTargets());
          }
          return _results;
        })());
        return display.renderWorld(state, targets);
      }
    };
  });

}).call(this);

//# sourceMappingURL=world.map
