function (doc) {
    var chunk, ngram, process, size, tokenize, _i, _len, _ref, _results;

    size = 1;
    chunk = function(arr, len) {
      var chunks, i, x;

      chunks = [];
      i = 0;
      while (i < arr.length) {
        chunks.push(arr.slice(i, i += len));
      }
      return (function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = chunks.length; _i < _len; _i++) {
          x = chunks[_i];
          if (x.length === len) {
            _results.push(x);
          }
        }
        return _results;
      })();
    };
    tokenize = function(value) {
      var toSplit;

      toSplit = new RegExp('\\s+', 'g');
      return value.split(toSplit);
    };
    process = function(value) {
      var chunks, i, tokens, _i;

      tokens = tokenize(value);
      chunks = [];
      if (tokens) {
        for (i = _i = 0; 0 <= size ? _i < size : _i > size; i = 0 <= size ? ++_i : --_i) {
          chunks = chunks.concat(chunk(tokens.slice(i), size));
        }
      } else {

      }
      return chunks;
    };
    if (doc.text) {
      _ref = process(doc.text);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        ngram = _ref[_i];
        _results.push(emit(ngram.join(' '), doc));
      }
      return _results;
    }
  }