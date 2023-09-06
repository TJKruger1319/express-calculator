const express = require('express');
const ExpressError = require('./expressError');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/mean/:nums', function(req, res) {
    response = req.params.nums
    numsArr = [];
    numbers = '1234567890'
    for(let i = 0; i < (response).length; i++) {
        if (numbers.includes(response[i])) {
            numsArr.push(parseInt(response[i]));
        }
    }
    if (numsArr.length === 0) throw new ExpressError("Add numbers!", 404);
    const average = array => array.reduce((a, b) => a + b) / array.length;
    mean = average(numsArr);
  return res.send({
    operation: "mean",
    value: mean
  });
});

function getMedian(values) {
    values = [...values].sort((a, b) => a - b);
  
    const half = Math.floor(values.length / 2);
  
    return (values.length % 2
      ? values[half]
      : (values[half - 1] + values[half]) / 2
    );
  
  }

app.get('/median/:nums', function(req, res) {
    response = req.params.nums
    numsArr = [];
    numbers = '1234567890'
    for(let i = 0; i < (response).length; i++) {
        if (numbers.includes(response[i])) {
            numsArr.push(parseInt(response[i]));
        }
    }
    if (numsArr.length === 0) throw new ExpressError("Add numbers!", 404);
    const median = getMedian(numsArr);
  return res.send({
    operation: "median",
    value: median
  });
});

function getMode(arr) {
    const numMapping = {};
    let greatestFreq = 0;
    let mode;
    arr.forEach(function findMode(number) {
        numMapping[number] = (numMapping[number] || 0) + 1;

        if (greatestFreq < numMapping[number]) {
            greatestFreq = numMapping[number];
            mode = number;
        }
    });
    return +mode;
}

app.get('/mode/:nums', function(req, res) {
    response = req.params.nums
    numsArr = [];
    numbers = '1234567890'
    for(let i = 0; i < (response).length; i++) {
        if (numbers.includes(response[i])) {
            numsArr.push(parseInt(response[i]));
        }
    }
    if (numsArr.length === 0) throw new ExpressError("Add numbers!", 404);
    const mode = getMode(numsArr);
  return res.send({
    operation: "mode",
    value: mode
  });
});

app.listen(3000, function() {
  console.log('Server started on port 3000.');
});