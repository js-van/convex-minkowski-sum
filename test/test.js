'use strict'

var tape = require('tape')
var msum = require('../cms')

tape('convex-minkowski-sum', function(t) {

  var line0 = [ [0,0], [1,0] ]
  var line1 = [ [0,0], [1,0] ]

  console.log(msum(line0, line1))

  t.end()
})